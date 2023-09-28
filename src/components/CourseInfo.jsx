import React from "react";
import Image from "next/image";
import CourseSummary from "@/common/CourseSummary";

export default function CourseInfo({
  courseTitle,
  imgUrl,
  resumeTitle,
  resume,
  imgUrl2,
  titleCard,
  element1_1,
  element1_2,
  element1_3,
  element2_1,
  element2_2,
  element2_3,
  element3_1,
  element3_2,
  element3_3,
  element4_1,
  element4_2,
  element4_3,
  element5_1,
  element5_2,
  element5_3,
  element6_1,
  element6_2,
  element6_3,
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
  priceCourse,
}) {
  return (
    <div className="bg-white flex flex-col justify-evenly h-auto items-center w-auto gap-8 mt-8 mb-20">
     
     
      
        <div className="flex items-center gap-6 md:hidden">
          <h2 className="font-mystery-mixed text-4xl -rotate-3">
            {courseTitle}
          </h2>
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
        <div className="flex flex-col justify-between items-center w-[80%] gap-6 md:hidden">
          <h3 className="font-ms-gothic text-xl justify-center text-center">
            {resumeTitle}
          </h3>
          <p className="font-ms-gothic text-base justify-center text-center text-[#5C5A5A]">
            {resume}
          </p>
        </div>
      

          <div className="hidden md:flex md:flex-col md:w-[80%] md:items-center rounded-lg">
            <div className="flex justify-center rounded-t-lg text-2xl py-2 md:bg-[#1E1E1E] w-full md:font-medium">
              <h3 className="md:font-mystery-mixed md:text-[#fff] lg:text-3xl">{titleCard}</h3>
            </div>
            <div className="font-ms-gothic rounded-b-lg bg-lightGrey flex flex-row">
              <div className="md:max-h-64 md:max-w-[176px] md:rounded-r-none lg:max-h-72 lg:max-w-[208px] xl:h-[15rem] xl:max-w-[15rem]">
                <Image 
                  src={imgUrl2}
                  width={"500"}
                  height={"500"}
                  alt="FOTO"
                ></Image>
              </div>
              <div className="flex flex-col justify-between text-sm w-[80%] mx-4 my-2 lg:text-base lg:mb-0">
                <h3>{resumeTitle}</h3>
                <p className=" max-w-full text-xs text-[#5C5A5A] lg:text-sm">{resume}</p>
                <p className="flex justify-end">${priceCourse} ARS</p>
              </div>
            </div>
          </div>


      <div className="font-ms-gothic w-[80%] md:hidden">
        <h3 className="text-lg">Modulo 1:</h3>
        <h4 className="text-lg">{titleModule1}</h4>
        <ul className="text-[#5C5A5A] text-base flex flex-col my-2 gap-4">
          <li>Tema 1: {theme1}</li>
          <li>Tema 2: {theme2}</li>
          <li>Tema 3: {theme3}</li>
        </ul>
      </div>
      <div className="font-ms-gothic w-[80%] md:hidden">
        <h3 className="text-lg">Modulo 2:</h3>
        <h4 className="text-lg">{titleModule2}</h4>
        <ul className="text-[#5C5A5A] text-base flex flex-col my-2 gap-4">
          <li>Tema 1: {theme2_1}</li>
          <li>Tema 2: {theme2_2}</li>
          <li>Tema 3: {theme2_3}</li>
        </ul>
      </div>


      <div className="hidden md:flex md:flex-col md:font-ms-gothic md:w-[80%]">
        <h3 className="text-lg font-mystery-mixed my-2">Modulo 1: {titleModule1}</h3>
        <h4 className="mt-2">Tema 1: {theme1}</h4>
        <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5">
          <li>1. {element1_1 || ""}</li>
          <li>2. {element1_2 || ""}</li>
          <li>3. {element1_3 || ""}</li>
        </ul>
        <h4 className="mt-2">Tema 2: {theme2}</h4>
        <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5">
          <li>1. {element2_1 || ""}</li>
          <li>2. {element2_2 || ""}</li>
          <li>3. {element2_3 || ""}</li>
        </ul>
        <h4 className="mt-2">Tema 3: {theme3}</h4>
        <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5">
          <li>1. {element3_1 || ""}</li>
          <li>2. {element3_2 || ""}</li>
          <li>3. {element3_3 || ""}</li>
        </ul>
      </div>

      <div className="hidden md:flex md:flex-col md:font-ms-gothic md:w-[80%]">
      <h3 className="text-lg font-mystery-mixed my-2">Modulo 2: {titleModule2}</h3>
        <h4 className="mt-2">Tema 2: {theme2_1}</h4>
        <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5">
          <li>1. {element4_1 || ""}</li>
          <li>2. {element4_2 || ""}</li>
          <li>3. {element4_3 || ""}</li>
        </ul>
        <h4 className="mt-2">Tema 2: {theme2_2}</h4>
        <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5">
          <li>1. {element5_1 || ""}</li>
          <li>2. {element5_2 || ""}</li>
          <li>3. {element5_3 || ""}</li>
        </ul>
        <h4 className="mt-2">Tema 3: {theme2_3}</h4>
        <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5">
          <li>1. {element6_1 || ""}</li>
          <li>2. {element6_2 || ""}</li>
          <li>3. {element6_3 || ""}</li>
        </ul>
      </div>

      <div className="w-[80%] text-center justify-between flex flex-col gap-7 mb-10">
        <h3 className="font-mystery-mixed text-2xl">
          Proyecto Final: {projectTitle}
        </h3>
        <p className="font-ms-gothic lg:text-xl">{projectResume}</p>
      </div>
      <CourseSummary
        level={levelCourse}
        hours={hoursCourse}
        price={priceCourse}
        className={"w-[59%] h-[195px] md:flex md:flex-row md:w-[75%] md:gap-0 md:justify-around md:h-24 md:font-ms-gothic md:text-base"}
      />
    </div>
  );
}
