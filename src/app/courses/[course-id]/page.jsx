"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseSummary from "@/common/CourseSummary";
import axios from "axios";

export default function CourseInformation({ params }) {
  const [course, setCourse] = useState({});
  const courseId = params["course-id"];
  let num = 0;

  const reset = (number) => (number = 0);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/allCourses/${courseId}`)
      .then((res) => {
        const { course } = res.data;

        setCourse(course);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseId]);

  console.log(course.modules);

  function isMd() {
    return window.innerWidth >= 768;
  }

  function newTitle(title) {
    if (title) {
      const titleArray = title.split(" ");
      const titleLength = titleArray.length;
      if (titleLength >= 2) {
        return titleArray[titleLength - 2] + " " + titleArray[titleLength - 1];
      } else {
        return title;
      }
    } else {
      return "";
    }
  }

  return (
    <>
      <div
        key={course._id}
        className="bg-[#fff] flex flex-col justify-evenly h-auto items-center w-auto gap-8 mt-8 mb-40"
      >
        <div className="flex items-center gap-6 sm:ml-2 md:hidden">
          <h2 className="font-mystery-mixed text-4xl -rotate-3">
            {isMd() ? course.courseTitle : newTitle(course.courseTitle)}
          </h2>
          <div className="relative">
            <Image
              src={course.courseImg_url}
              width={"150"}
              height={"150"}
              alt="FOTO"
            ></Image>
            <Image
              src={course.courseImg_url}
              width={"200"}
              height={"200"}
              alt="FOTO"
              className="bg-contain bg-center bg-no-repeat absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-[80%] gap-6 md:hidden">
          <h3 className="font-ms-gothic text-xl justify-center text-center">
            {course.courseSubtitle}
          </h3>
          <p className="font-ms-gothic text-base justify-center text-center text-[#5C5A5A]">
            {course.courseDescription}
          </p>
        </div>

        <div className="hidden md:flex md:flex-col md:w-[80%] md:items-center rounded-lg">
          <div className="flex justify-center rounded-t-lg text-2xl py-2 md:bg-[#1E1E1E] w-full md:font-medium">
            <h3 className="md:font-mystery-mixed md:text-[#fff] lg:text-3xl">
              {course.courseTitle}
            </h3>
          </div>
          <div className="font-ms-gothic rounded-b-lg bg-lightGrey flex flex-row">
            <div className="md:max-h-64 md:max-w-[176px] md:rounded-r-none lg:max-h-72 lg:max-w-[208px] xl:h-[15rem] xl:max-w-[15rem]">
              <Image
                src={course.courseImg_url}
                width={"500"}
                height={"500"}
                alt="FOTO"
              ></Image>
            </div>
            <div className="flex flex-col justify-between text-sm w-[80%] mx-4 my-2 lg:text-base lg:mb-0 xl:text-lg">
              <h3>{course.courseSubtitle}</h3>
              <p className=" max-w-full text-xs text-[#5C5A5A] lg:text-sm xl:text-base">
                {course.courseDescription}
              </p>
              <p className="flex justify-end">${course.priceCourse} ARS</p>
            </div>
          </div>
        </div>

        {course.modules?.map((module) => (
          <div
            key={module.moduleName}
            className="font-ms-gothic w-[80%] md:hidden"
          >
            <h3 className="text-lg">Modulo 1: {module.moduleName}</h3>
            {module.topics?.map((topic) => (
              <div key={topic.topicName}>
                <ul className="text-[#5C5A5A] text-base flex flex-col my-2 gap-4">
                  <li>Tema 1: {topic.topicName}</li>
                </ul>
              </div>
            ))}
          </div>
        ))}

        {course.modules?.map((module) => (
          <div
            key={module.moduleName}
            className="hidden md:flex md:flex-col md:font-ms-gothic md:w-[80%]"
          >
            <h3 className="text-lg font-mystery-mixed my-2 lg:text-xl">
              Modulo 1: {module.moduleName}
            </h3>
            {module.topics?.map((topic) => (
              <div key={topic.topicName}>
                <h4 className="mt-2 lg:text-lg">Tema 1: {topic.topicName}</h4>
                <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5 lg:text-base">
                  {topic.classes?.map((clase) => (
                    <div>
                      <li>
                        {(num += 1)}. {clase.classInfo || ""}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* <h4 className="mt-2 lg:text-lg">Tema 2: {course.theme2}</h4>
          <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5 lg:text-base">
            <li>1. {course.element2_1 || ""}</li>
            <li>2. {course.element2_2 || ""}</li>
            <li>3. {course.element2_3 || ""}</li>
          </ul>
          <h4 className="mt-2 lg:text-lg">Tema 3: {course.theme3}</h4>
          <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5 lg:text-base">
            <li>1. {course.element3_1 || ""}</li>
            <li>2. {course.element3_2 || ""}</li>
            <li>3. {course.element3_3 || ""}</li>
          </ul> */}

        {/* <div className="hidden md:flex md:flex-col md:font-ms-gothic md:w-[80%]">
          <h3 className="text-lg font-mystery-mixed my-2 lg:text-xl">
            Modulo 2: {course.titleModule2}
          </h3>
          <h4 className="mt-2 lg:text-lg">Tema 2: {course.theme2_1}</h4>
          <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5 lg:text-base">
            <li>1. {course.element4_1 || ""}</li>
            <li>2. {course.element4_2 || ""}</li>
            <li>3. {course.element4_3 || ""}</li>
          </ul>
          <h4 className="mt-2 lg:text-lg">Tema 2: {course.theme2_2}</h4>
          <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5 lg:text-base">
            <li>1. {course.element5_1 || ""}</li>
            <li>2. {course.element5_2 || ""}</li>
            <li>3. {course.element5_3 || ""}</li>
          </ul>
          <h4 className="mt-2 lg:text-lg">Tema 3: {course.theme2_3}</h4>
          <ul className="text-[#5C5A5A] text-sm flex flex-col my-1.5 lg:text-base">
            <li>1. {course.element6_1 || ""}</li>
            <li>2. {course.element6_2 || ""}</li>
            <li>3. {course.element6_3 || ""}</li>
          </ul>
        </div> */}

        <div className="w-[80%] text-center justify-between flex flex-col gap-7 mb-10">
          <h3 className="font-mystery-mixed text-2xl lg:text-3xl">
            Proyecto Final: {course.projects}
          </h3>
          <p className="font-ms-gothic lg:text-xl">
            {course.projectsDescription}
          </p>
        </div>
        <CourseSummary
          courseId={course._id}
          level={course.levelCourse}
          hours={course.hoursCourse}
          price={course.priceCourse}
          className={
            "w-[59%] h-[195px] md:flex md:flex-row md:w-[75%] md:gap-0 md:justify-around md:h-24 md:font-ms-gothic md:text-base"
          }
        />
      </div>
    </>
  );
}
