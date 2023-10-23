import React from "react";
import Cards from "./Cards";
import { CartShopSimple, Check } from "@/common/Icons";
import CheckList from "../common/CheckList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Intro() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/user/allCourses")
      .then((res) => {
        const { courses } = res.data;
        setCourses(courses);
      })
      .catch((error) => {
        console.error("Error al obtener los cursos:", error);
      });
  }, []);

  function newTitle(title) {
    const titleArray = title.split(" ");
    const titleLength = titleArray.length;
    return titleArray[titleLength - 2] + " " + titleArray[titleLength - 1];
  }
  return (
    <div className="bg-#F5F0F0">
      <h2 className="text-5xl text-left font-mystery-mixed mb-20 ml-10 mt-20 md:ml-20 -rotate-3">
        Qué vas a aprender hoy?
      </h2>
      <div className="flex overflow-x-auto md:bg-[url('/img/paper-desktop-cover.png')] md:bg-[length:100%_500px] md:bg-center md:h-[500px] md:justify-center items-center mb:justify-start">
        {courses.slice(0, 3).map((course) => (
          <div
            key={course._id}
            className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6"
          >
            <Cards
              id={course._id}
              title={newTitle(course.courseTitle)}
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img={course.courseImg_url}
              className="max-w-[205px]"
              classNameButton="py-2 px-3 whitespace-nowrap flex items-center"
              classNameIconButton="py-2 px-2 flex items-center"
            />
          </div>
        ))}
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <h2 className="text-5xl text-left font-mystery-mixed mb-20 ml-10 mt-20 md:ml-20 -rotate-3">
          Qué esperar de un curso en by M studio?
        </h2>
        <div className="md:text-4xl mb:gap-3 flex flex-col items-center justify-center w-[90%] md:ml-40 md:mb-20">
          <CheckList
            text="Aprende a tu ritmo y de manera asincrónica"
            className="p-[20rem] border-pink mr-5"
            icon={<Check />}
          />
          <CheckList
            text="Accede a contenido actualizado"
            className="p-0.5 border-green mr-5"
            icon={<Check />}
          />
          <CheckList
            text="Accede y conecta con una comunidad de trainees"
            className="p-0.5 border-blue mr-5"
            icon={<Check />}
          />
          <CheckList
            text="Obtén tu certificado al finalizar"
            className="p-0.5 border-pink mr-5"
            icon={<Check />}
          />
        </div>
      </div>

      <div className="flex overflow-x-auto md:bg-[url('/img/paper-desktop-cover.png')] md:bg-[length:100%_500px] md:bg-center md:h-[500px] md:justify-center items-center mb:justify-start">
        <div className="flex flex-col items-center w-100% relative mt-10 mb-20">
          <div className="md:hidden block">
            <Image
              src="/img/paper.png"
              width={500}
              height={500}
              alt="Picture"
            />
          </div>
          <p className="text-5xl md:text-8xl whitespace-nowrap font-mystery-mixed absolute top-10 md:top-auto">
            By M Studio
          </p>
          <p className="text-3xl md:text-6xl whitespace-nowrap font-mystery-mixed absolute top-28 md:top-30">
            Cuenta con el apoyo de
          </p>

          <div className="md:flex md:justify-center md:top-auto ">
            <Image
              src="/img/image1.png"
              width={178}
              height={87}
              alt="Picture"
              className="md:w-80 md:mt-40"
            />
            <Image
              src="/img/image2.png"
              width={116}
              height={134}
              alt="Picture"
              className="md:w-32 md:mt-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
