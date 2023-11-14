"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseSummary from "@/common/CourseSummary";
import axios from "axios";
import { useMediaQuery } from "@react-hook/media-query";
import CardsDesktop from "@/components/CardsDesktop";

export default function CourseInformation({ params }) {
  const [course, setCourse] = useState({});
  const courseId = params["course-id"];
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");
  let num = 0;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses/${courseId}`
        );
        const course = response.data;
        setCourse(course);
      } catch (error) {
        console.error("Error while fetching course:", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  // function isMd() {
  //   return window.innerWidth >= 768;
  // }

  // function newTitle(title) {
  //   if (title) {
  //     const titleArray = title.split(" ");
  //     const titleLength = titleArray.length;
  //     if (titleLength >= 2) {
  //       return titleArray[titleLength - 2] + " " + titleArray[titleLength - 1];
  //     } else {
  //       return title;
  //     }
  //   } else {
  //     return "";
  //   }
  // }

  return (
    <>
      {/* Aca vista mobile */}
      <div
        key={course._id}
        className="md:hidden flex flex-col justify-evenly h-auto items-center w-auto gap-8 mt-8 mb-16"
      >
        <div className="flex items-center min-[280px]:gap-2 min-[390px]:gap-6 sm:ml-2 ">
          <h2 className="font-mystery-mixed min-[280px]:text-3xl min-[390px]:text-4xl -rotate-3">
            {course.courseShortTitle}
          </h2>
          <div className="relative">
            <Image
              src={"/img/papersmall.png"}
              width={"100"}
              height={"100"}
              alt="FOTO"
            ></Image>
            <Image
              src={course.courseImg_url}
              width={"69"}
              height={"69"}
              alt="FOTO"
              className="h-full max-h-[69px] absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-[80%] gap-6 md:hidden">
          <h3 className="font-ms-gothic text-xl justify-center text-center leading-5">
            {course.courseSubtitle}
          </h3>
          <p className="font-ms-gothic text-base justify-center text-center text-darkGray leading-5">
            {course.courseDescription}
          </p>
        </div>
      </div>

      {/* // Aca arranca vista desktop */}
      <div className="hidden md:block flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center pt-14 pb-6">
          <CardsDesktop
            key={course._id}
            courseTitleClasses="text-2xl leading-loose min-[1024px]:text-3xl min-[1024px]:py-2"
            courseLongTitle={course.courseLongTitle}
            courseImg_url={course.courseImg_url}
            courseSubtitle={course.courseSubtitle}
            courseSubtitleClasses="text-[1rem] min-[1024px]:text-[1.275rem]"
            coursePrice={course.coursePrice}
            coursePriceClasses=" text-[1rem] min-[1024px]:text-[1.275rem]"
            courseDescription={course.courseDescription}
            courseDescriptionClasses="text-[0.8rem] min-[1024px]:text-[1.02rem]"
          />
        </div>
      </div>

      {/* <div className="hidden md:flex md:flex-col md:w-[80%] md:items-center rounded-lg">
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
                className={"h-full rounded-bl-lg"}
              ></Image>
            </div>
            <div className="flex flex-col justify-between text-sm w-[80%] mx-4 my-2 lg:text-base lg:mb-0 xl:text-lg">
              <h3>{course.courseSubtitle}</h3>
              <p className=" max-w-full text-xs text-[#5C5A5A] lg:text-sm xl:text-base">
                {course.courseDescription}
              </p>
              <p className="flex justify-end">${course.coursePrice} ARS</p>
            </div>
          </div>
        </div> */}
      <div className="md:hidden flex flex-col justify-center items-center">
        {course.modules?.map((module, index) => (
          <div key={module.moduleName} className="font-ms-gothic w-[85%] pb-2">
            <h3 className="text-lg leading-5">
              Modulo {index + 1}: {module.moduleName}
            </h3>
            {module.topics?.map((topic, index) => (
              <div key={topic.topicName}>
                <ul className="text-[#5C5A5A] text-base leading-5 flex  flex-col py-3 gap-4">
                  <li>
                    Tema {index + 1}: {topic.topicName}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden md:block flex-col justify-center items-center">
        {course.modules?.map((module, index) => (
          <div className="flex flex-col justify-center items-center pb-7">
            <div
              key={module.moduleName}
              className=" w-[90%] max-w-5xl font-ms-gothic"
            >
              <h3 className="text-xl font-mystery-mixed py-3 lg:text-3xl">
                Modulo {index + 1}: {module.moduleName}
              </h3>
              {module.topics?.map((topic, index) => (
                <div key={topic.topicName}>
                  <h4 className="mt-2 text-lg lg:text-xl">
                    Tema {index + 1}: {topic.topicName}
                  </h4>
                  <ul className="text-[#5C5A5A] text-base flex flex-col my-1.5 lg:text-xl">
                    {topic.classes?.map((clase, index) => (
                      <div className="ml-3">
                        <li>
                          {index + 1}. {clase.classInfo || ""}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-[80%] text-center justify-between flex flex-col gap-7 mb-10">
        <h3 className="font-mystery-mixed text-2xl lg:text-3xl">
          Proyecto Final: {course.projectsTitle}
        </h3>
        <p className="font-ms-gothic lg:text-xl">
          {course.projectsDescription}
        </p>
      </div>
      {/* <CourseSummary
          courseId={course._id}
          level={course.levelCourse}
          hours={course.hoursCourse}
          price={course.coursePrice}
          className={
            "w-[59%] h-[195px] md:flex md:flex-row md:w-[75%] md:gap-0 md:justify-around md:h-24 md:font-ms-gothic md:text-base"
          }
        /> */}
    </>
  );
}
