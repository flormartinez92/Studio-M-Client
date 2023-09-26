import React from "react";
import Image from "next/image";
import CourseSummary from "@/common/CourseSummary";

export default function CourseInfo({
  courseTitle,
  imgUrl,
  resumeTitle,
  resume,
  titleModule1,
  theme1,
  theme2,
  theme3,
  titleModule2,
  theme2_1,
  theme2_2,
  theme2_3,
  projectTitle,
  projectResume,
  levelCourse,
  hoursCourse,
  priceCourse
}) {
  return (
    <div className="bg-white flex flex-col justify-evenly h-auto items-center w-auto gap-8 mt-8 mb-20">
      <div className="flex items-center gap-6">
        <h2 className="font-mystery-mixed text-4xl -rotate-3">{courseTitle}</h2>
        <div className="relative">
          <Image
            src={"/svg/paper.svg"}
            width={"100"}
            height={"100"}
            alt="FOTO"
          ></Image>
          <Image
            src={imgUrl}
            width={"69"}
            height={"69"}
            alt="FOTO"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-[80%] gap-6">
        <h3 className="font-ms-gothic text-xl justify-center text-center">
          {resumeTitle}
        </h3>
        <p className="font-ms-gothic text-base justify-center text-center text-[#5C5A5A]">
          {resume}
        </p>
      </div>
      <div className="font-ms-gothic w-[80%]">
        <h3 className="text-lg">Modulo 1:</h3>
        <h4 className="text-lg">{titleModule1}</h4>
        <ul className="text-[#5C5A5A] text-base flex flex-col my-2 gap-4">
          <li>Tema 1: {theme1}</li>
          <li>Tema 2: {theme2}</li>
          <li>Tema 3: {theme3}</li>
        </ul>
      </div>
      <div className="font-ms-gothic w-[80%]">
        <h3 className="text-lg">Modulo 2:</h3>
        <h4 className="text-lg">{titleModule2}</h4>
        <ul className="text-[#5C5A5A] text-base flex flex-col my-2 gap-4">
          <li>Tema 1: {theme2_1}</li>
          <li>Tema 2: {theme2_2}</li>
          <li>Tema 3: {theme2_3}</li>
        </ul>
      </div>
      <div className="w-[80%] text-center justify-between flex flex-col gap-7 mb-10">
        <h3 className="font-mystery-mixed text-2xl">
          Proyecto Final: {projectTitle}
        </h3>
        <p>{projectResume}</p>
      </div>
      <CourseSummary level={levelCourse} hours={hoursCourse} price={priceCourse} className={"w-[59%] h-[195px]"} />
    </div>
  );
}
//A definir la letra
//Duda a la hora de poder agregar mas modulos con sus respectivos temas...