"use client";

import React from "react";
import Button from "@/common/Button";

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

export default function ActiveCourses() {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses`)
      .then((res) => {
        const courses = res.data;
        setCourses(courses);
      })
      .catch((error) => {
        console.error("Error getting courses:", error);
      });
  }, []);

  const handleStatusToggle = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course._id === courseId ? { ...course, status: !course.status } : course
      )
    );
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
              <td className="sm:pr-10 md:pr-10">Clases</td>
              <td className="sm:pr-10 md:pr-10">Alumnos</td>
              <td className="sm:pr-10 md:pr-10">Agregar</td>
              <td className="sm:pr-10 md:pr-10">Editar</td>
              <td>Bloquear/Habilitar</td>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course._id}
                className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey md:border-r-[0.5px] "
              >
                <td className="p-4">{course.courseShortTitle}</td>
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
                <td className="p-4">
                  <button>
                    <Plus color="#4FE21B" />
                  </button>
                </td>
                <td className="p-2">
                  <button>
                    <Pencil color="#1BBEE2" />
                  </button>
                </td>
                <td className="p-4">
                  <button onClick={() => handleStatusToggle(course._id)}>
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
              <td></td>
              <td>Filas por página</td>
              <td className="flex justify-between mt-3">
                &nbsp;
                {/* 1 de 3 */}
                <UilArrow1 color="lightGrey" />
                <UilArrow2 color="lightGrey" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center mt-10 md:justify-end md:mr-24">
        <Button className="w-[120px] h-[40px] bg-darkGreen flex items-center rounded-md p-1 md:p-2 md:w-[150px]">
          <Plus className="" width="25" />
          <span className="text-white items-center flex justify-between md:ml-2">
            Crear curso
          </span>
        </Button>
      </div>
    </section>
  );
}
