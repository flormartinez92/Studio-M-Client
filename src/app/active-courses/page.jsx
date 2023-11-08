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
        const courses = res.data.map((course) => {
          return { ...course, bloq: true };
        });
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
        const users = res.data.map((user) => {
          return { ...user };
        });
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error getting Users:", error);
      });
  }, []);

  return (
    <section className="my-20 mb-60">
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-mystery-mixed mt-10 mb-10 md:mb-15 xl:mb-20 text-center flex justify-center">
        Cursos activos
      </h2>
      <div className="flex justify-center px-4 font-ms-gothic text-xl md:ml-10 xl:ml-10 md:mr-10 xl:mr-10">
        <table className="w-full xl:table-fixed">
          <thead className="max-sm:hidden">
            <tr className="w-full md:w-[768px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey border-t-[0.5px] md:border-r-[0.5px] text-[#757575]">
              <td className="p-4">Curso</td>
              <td>Clases</td>
              <td>Alumnos</td>
              <td>Agregar</td>
              <td>Editar</td>
              <td>Bloquear/Habilitar</td>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course._id}
                className="w-full md:w-[768px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey border-t-[0.5px] md:border-r-[0.5px]"
              >
                <td className="p-4">{course.courseShortTitle}</td>
                <td className="max-sm:hidden">
                  {course.modules.reduce((totalClasses, module) => {
                    const moduleClasses = module.topics.reduce((acc, topic) => {
                      return acc + topic.classes.length;
                    }, 0);
                    return totalClasses + moduleClasses;
                  }, 0)}
                </td>
                <td className="max-sm:hidden">&nbsp;</td>
                <td>
                  <button>
                    <Plus color="#4FE21B" />
                  </button>
                </td>
                <td>
                  <button>
                    <Pencil color="#1BBEE2" />
                  </button>
                </td>
                <td>
                  {course.bloq && (
                    <button>
                      <Trash color="#A31616" />
                    </button>
                  )}
                  {!course.bloq && (
                    <button>
                      <ArrowReload color="#E21B7B" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="w-full md:w-[768px] xl:w-[1211px] h-[48px] max-sm:hidden border-t-[0.5px] border-lightGrey shadow-xl md:border-r-[0.5px] md:border-l-[0.5px]">
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td></td>
              <td>Filas por página</td>
              <td className="flex justify-between mt-3">
                1 de 3
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
