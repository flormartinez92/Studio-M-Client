"use client";

import React from "react";

import { UilArrow1, UilArrow2 } from "@/common/Icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function ActiveUsers() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminCourse/all-courses`)
      .then((res) => {
        const courses = res.data;
        console.log(courses);
        setCourses(courses);
      })
      .catch((error) => {
        console.error("Error getting courses:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminUser/allUsers`)
      .then((res) => {
        const users = res.data;
        console.log(users);
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error getting users:", error);
      });
  }, []);

  // const calculateTotalUsersPerCourse = (userId) => {
  //   const user = users.find((user) => user._id === userId);
  //   if (!user) {
  //     return "";
  //   }

  const calculateTotalUsersPerCourse = (userId) => {
    const user = users.find((user) => user._id === userId);
    if (!user || user.course.length === 0) {
      return ""; // Puedes devolver un valor predeterminado si no hay cursos comprados
    }

    const courseNames = user.course.map((course) => {
      const matchingCourse = courses.find((c) => c._id === course.courseId);
      return matchingCourse
        ? matchingCourse.courseShortTitle
        : "Course not found";
    });
    return courseNames.join(", ");
  };

  const handleCourseSelection = (userId, selectedCourse) => {
    // Implementa la lógica para actualizar los cursos del usuario en el estado o realizar una solicitud al servidor
    console.log(`Usuario ${userId} seleccionó el curso ${selectedCourse}`);
  };

  return (
    <section className="my-20 mb-60">
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-mystery-mixed mt-10 mb-10 md:mb-15 xl:mb-20 text-center flex justify-center">
        Usuarios activos
      </h2>
      <div className="flex justify-center px-4 font-ms-gothic md:ml-10 xl:ml-10 md:mr-10 xl:mr-10 ">
        <table className="w-full xl:table-fixed">
          <thead className="max-sm:hidden">
            <tr className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey  md:border-r-[0.5px] rounded-t-lg text-[#757575] border-t-[0.05px]">
              <td className="p-4">Nombre completo</td>
              <td>&nbsp;</td>
              <td className="sm:pr-10 md:pr-10">Documento</td>
              <td>&nbsp;</td>
              <td className="sm:pr-10 md:pr-10">Cursos comprados</td>
            </tr>
          </thead>
          <tbody>
            {users?.slice(0, 10).map((user) => (
              <tr
                key={user._id}
                className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey md:border-r-[0.5px] "
              >
                <td className="p-4">{user.name + " " + user.lastname}</td>
                <td>&nbsp;</td>
                <td className="p-1">
                  {user.dni.toLocaleString().replace(/,/g, ".")}
                </td>
                <td>&nbsp;</td>
                <td className="p-2">
                  <select
                    value={calculateTotalUsersPerCourse(user._id)}
                    onChange={(e) =>
                      handleCourseSelection(user._id, e.target.value)
                    }
                  >
                    <option value="">Seleccionar curso</option>
                    {user.course.map((userCourse) => {
                      const matchingCourse = courses.find(
                        (course) => course._id === userCourse.courseId
                      );
                      return matchingCourse ? (
                        <option
                          key={matchingCourse._id}
                          value={matchingCourse.courseShortTitle}
                        >
                          {matchingCourse.courseShortTitle}
                        </option>
                      ) : null;
                    })}
                  </select>
                  {/* <ul>{calculateTotalUsersPerCourse(user._id)}</ul> */}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="w-full md:w-[740px] xl:w-[1211px] h-[48px] max-sm:hidden border-t-[0.5px] border-lightGrey shadow-xl md:border-r-[0.5px] md:border-l-[0.5px] rounded-b-lg">
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Filas por página</td>
              <td className="flex justify-between mt-3">
                &nbsp; 1 de 3
                <UilArrow1 color="lightGrey" />
                <UilArrow2 color="lightGrey" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
