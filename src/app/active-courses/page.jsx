"use client";

import React from "react";
import Button from "@/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";

import {
  Trash,
  Pencil,
  Plus,
  ArrowReload,
  UilArrow1,
  UilArrow2,
} from "@/common/Icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { stringify } from "postcss";

export default function ActiveCourses() {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 10;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const userData = await fetchUser();
      dispatch(setCredentials(userData));
    };
    checkUserAuthentication();
  }, []);

  useEffect(() => {
    // Simulando un tiempo de espera con setTimeout
    const timer = setTimeout(() => {
      // Después de un tiempo determinado (por ejemplo, 2 segundos), se muestra el botón
      setMostrarBoton(true);
    }, 1000); // Cambia este valor al tiempo que desees

    // Limpieza del timer al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminCourse/all-courses`)
      .then((res) => {
        const courses = res.data;
        setCourses(courses);
      })
      .catch((error) => {
        console.error("Error getting courses:", error);
      });
  }, []);

  const toggleStatus = async (courseId, courseStatus) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCourse/enable-disable/${courseId}`,
        { status: courseStatus }
      );
      const courses = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCourse/all-courses`
      );
      setCourses(courses.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleStatusToggle = async (courseId) => {
    try {
      const oneCourse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses/${courseId}`
      );
      if (oneCourse.data.status) {
        toggleStatus(courseId, false);
      } else {
        toggleStatus(courseId, true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminUser/allUsers`)
      .then((res) => {
        const users = res.data;
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error getting Users:", error);
      });
  }, []);

  const calculateTotalUsersPerCourse = (courseId) => {
    return users.reduce((total, user) => {
      const matchingCourses = user.course.filter(
        (course) => course.courseId === courseId
      );
      return total + matchingCourses.length;
    }, 0);
  };
  const handleEditCourse = (course) => {
    console.log("EDITANDO", course);
    localStorage.setItem("courseEdit", JSON.stringify(course));
  };

  if (!user || !user.isAdmin) {
    router.push("/");
    return null;
  }

  return (
    <section className="my-20 mb-60">
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-mystery-mixed mt-10 mb-10 md:mb-15 xl:mb-20 text-center flex justify-center">
        Cursos activos
      </h2>
      <div className="flex justify-center px-4 font-ms-gothic md:ml-10 xl:ml-10 md:mr-10 xl:mr-10 ">
        <table className="w-full xl:table-fixed">
          <thead className="max-sm:hidden">
            <tr className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey  md:border-r-[0.5px] rounded-t-lg text-[#757575] border-t-[0.05px]">
              <td className="p-4">Curso</td>
              <td className="sm:pr-10 md:pr-10">&nbsp;</td>
              <td className="sm:pr-10 md:pr-10">Clases</td>
              <td className="sm:pr-10 md:pr-10">Alumnos</td>
              <td className="sm:pr-10 md:pr-10">Editar</td>
              <td>Bloquear/Habilitar</td>
            </tr>
          </thead>
          <tbody>
            {courses?.slice(startIndex, endIndex).map((course) => (
              <tr
                key={course._id}
                className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey md:border-r-[0.5px] "
              >
                <td className="p-4">{course.courseShortTitle}</td>
                <td className="p-4">&nbsp;</td>
                <td className="max-sm:hidden p-4">
                  {course.modules.reduce((totalClasses, module) => {
                    const moduleClasses = module.topics.reduce((acc, topic) => {
                      return acc + topic.classes.length;
                    }, 0);
                    return totalClasses + moduleClasses;
                  }, 0)}
                </td>
                <td className="max-sm:hidden p-5">
                  {calculateTotalUsersPerCourse(course._id)}
                </td>
                <td className="p-2">
                  <Link href="/edit-course">
                    <button onClick={() => handleEditCourse(course)}>
                      <Pencil color="#1BBEE2" />
                    </button>
                  </Link>
                </td>
                <td className="p-4">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleStatusToggle(course._id)}
                  >
                    {course.status ? (
                      <Trash color="#A31616" />
                    ) : (
                      <ArrowReload color="#E21B7B" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="w-full md:w-[740px] xl:w-[1211px] h-[48px] max-sm:hidden border-t-[0.5px] border-lightGrey shadow-xl md:border-r-[0.5px] md:border-l-[0.5px] rounded-b-lg">
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Filas por página</td>
              <td className="flex justify-between mt-3 mr-3">
                &nbsp; {currentPage} de {totalPages}
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <UilArrow1
                    color={currentPage === 1 ? "lightGrey" : "black"}
                  />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      Math.min(prevPage + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                >
                  <UilArrow2
                    color={currentPage === totalPages ? "lightGrey" : "black"}
                  />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center mt-10 md:justify-end md:mr-24">
        {mostrarBoton && (
          <Link href="/add-course">
            <Button className="w-[120px] h-[40px] bg-darkGreen flex items-center rounded-md p-1 md:p-2 md:w-[150px]">
              <Plus className="" width="25" />
              <span className="text-white items-center flex justify-between md:ml-2">
                Crear curso
              </span>
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}
