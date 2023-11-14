"use client"

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { CartShopSimple } from "@/common/Icons";
// import axios from "axios";

export default function Courses() {
  // const [courses, setCourses] = useState({});
  // const courseId = params["course-id"];
  // let num = 0;

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/allCourses`)
  //     .then((res) => {
  //       console.log("RESPONSE", res);
  //       const { course } = res.data;



  //       setCourses(course);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // console.log("CURSOS", courses);
  return (
    <div className="bg-white flex flex-col h-auto justify-around items-center font-mystery-mixed gap-16 mt-10 mb-16">
      <h2 className="text-4xl">Nuestros Cursos</h2>
      <Cards
        title={"UX Research"}
        buttonTitle={"Ver Curso"}
        icon={<CartShopSimple width={"16px"} height={"16px"} />}
        img={"/img/indonesiaGrande.png"}
        className={"w-[60%]"}
      />
      <Cards
        title={"UX writing"}
        buttonTitle={"Ver Curso"}
        icon={<CartShopSimple width={"16px"} height={"16px"} />}
        img={"/img/studio.png"}
        className={"w-[60%]"}
      />
      <Cards
        title={"Ui Design"}
        buttonTitle={"Ver Curso"}
        icon={<CartShopSimple width={"16px"} height={"16px"} />}
        img={"/img/tirza.png"}
        className={"w-[60%]"}
      />
    </div>
  );
}
