"use client";

import Button from "@/common/Button";
import CardsDesktop from "@/components/CardsDesktop";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PurchasedCourseResume({ params }) {
  const [courseResume, setCourseResume] = useState([]);

  useEffect(() => {
    const purchase = JSON.parse(localStorage.getItem("purchase"));
    const newArr = purchase?.map((courseUser) => {
      const newCourseUser = { ...courseUser };
      courseUser.modules.forEach((module, i) => {
        if (i === 0) {
          module.topics.forEach((topic, z) => {
            if (z === 0) {
              newCourseUser.firstClass = topic.classes[0]._id;
            }
          });
        }
      });
      return newCourseUser;
    });

    setCourseResume(newArr);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center mb-[2rem] mt-[3rem] md:mt-[3.4rem] md:mb-[9rem]">
      <h3 className="font-mystery-mixed text-[1.3rem] sm-300:text-[1.7rem] tracking-wider -rotate-2 md:text-4xl lg:text-5xl md:rotate-0 animate__animated animate__fadeInLeft">
        ¡Gracias por tu compra!
      </h3>
      {courseResume?.map((course) => {
        return (
          <div
            key={course._id}
            className="w-full  flex justify-center items-center mb-5 max-w-[320px] md:max-w-[820px] lg:max-w-[980px] 
          "
          >
            <div className="flex w-full  flex-col justify-center items-center md:hidden">
              <div className=" flex w-[80%] justify-center items-center gap-x-2 my-4">
                <div className="w-full flex flex-col justify-center items-start relative">
                  <h3 className="font-mystery-mixed  text-[1.3rem] sm-300:text-[1.8rem] absolute -top-2  tracking-wider  -rotate-2">
                    {course.courseShortTitle}
                  </h3>
                </div>
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
              <div className="w-[80%] flex flex-col justify-center items-center gap-y-2 mt-3">
                <h2 className="font-ms-gothic text-[14px] leading-5 text-center">
                  {course.courseSubtitle}
                </h2>
                <p className="font-ms-gothic text-center text-[13px] text-darkGray leading-5">
                  {course.courseDescription}
                </p>
              </div>
              <div className="flex justify-center items-center my-4">
                <Link href={`/my-account/${course._id}/${course.firstClass}`}>
                  <Button
                    type="rounder"
                    className="font-ms-gothic w-[180px] py-2 text-[1.2rem] leading-5 animate__animated animate__fadeInLeft"
                  >
                    Iniciar curso
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="hidden md:block select-none w-full 
              h-auto"
            >
              <div className="flex flex-col justify-center items-center mt-8">
                <div className="flex flex-col items-center justify-center w-[90%] gap-y-12">
                  <CardsDesktop
                    courseDescription={course.courseDescription}
                    courseImg_url={course.courseImg_url}
                    courseLongTitle={course.courseLongTitle}
                    courseLevel={course.courseLevel}
                    courseSubtitle={course.courseSubtitle}
                    courseDuration={course.courseDuration}
                    coursePrice={course.coursePrice}
                    key={course._id}
                    cardWithoutItems={true}
                    fullDescription={true}
                  />
                  <div className="flex justify-center items-center my-4">
                    <Link
                      href={`/my-account/${course._id}/${course.firstClass}`}
                    >
                      <Button
                        type="rounder"
                        className="font-ms-gothic w-[240px] py-4 text-[1.7rem] leading-5 animate__animated animate__fadeInLeft"
                      >
                        Iniciar curso
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
