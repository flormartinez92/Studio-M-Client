"use client";

import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { Arrow, CartShopSimple, Vector } from "@/common/Icons";
import Button from "@/common/Button";
import IconButton from "@/common/IconButton";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/user/allCourses")
      .then((res) => {
        const { courses } = res.data;
        console.log(courses);
        setCourses(courses);
      })
      .catch((error) => {
        console.error("Error al obtener los cursos:", error);
      });
  }, []);

  return (
    <div className="flex flex-col h-auto justify-around items-center font-mystery-mixed gap-16 mt-10 mb-16">
      <div className="hidden md:block md:space-x-2 md:w-[80%]">
        <Button
          className={
            "bg-white bg-opacity-0 text-black flex flex-row items-center gap-2"
          }
        >
          <label className="text-black" htmlFor="">
            A-Z
          </label>{" "}
          <Vector width={"19"} />
        </Button>
      </div>
      <h2 className="text-4xl md:hidden">Nuestros Cursos</h2>

      {courses.map((course) => (
        <Cards
          key={course._id}
          title={course.courseTitle}
          buttonTitle={"Ver Curso"}
          icon={<CartShopSimple width={"16px"} height={"16px"} />}
          img={course.courseImg_url}
          completedCourse={course.completedCourse}
          projects={course.projects}
          projectsDescription={course.projectsDescription}
          className={
            "w-[60%] md:w-[80%] md:h-auto md:bg-[#D9D9D9] md:shadow-lg md:transform rounded-lg"
          }
          className2={"md:flex md:flex-row font-ms-gothic"}
          classNameButton={
            "whitespace-nowrap w-auto px-4 py-0.5 sm:px-7 sm:py-1 md:hidden"
          }
          classNameIconButton={"px-[9.5px] sm:px-[12px] md:hidden"}
          classNameBorder={"sm:h-12 md:hidden"}
          classNameImg={
            "md:max-h-64 md:max-w-[176px] md:rounded-r-none lg:max-h-72 lg:max-w-[208px] xl:h-[15rem] xl:max-w-[15rem]"
          }
          newClass={
            "md:block md:flex md:flex-col md:justify-between md:items-center md:text-xs md:my-1.5 lg:my-2.5 xl:my-3.5"
          }
          titleResume={course.courseSubtitle}
          price={"10.000"}
          resume={course.courseDescription}
          level={"Intermedio"}
          hours={"30"}
          wishes={"Agregar a la lista de deseos"}
        />
      ))}

      <div className="hidden md:block md:space-x-2 md:w-[80%]">
        <div className="md:flex md:flex-row md:gap-2">
          <p>1-10</p>
          <IconButton>
            <Arrow width={"14"} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
