"use client";

import Border from "@/common/Border";
import Button from "@/common/Button";
import { BurgerDots } from "@/common/Icons";
import fakeDataCourseDetails from "./fakeDataCourseDetails";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PurchasedCourseDetails({ params }) {
  const courseId = params["purchased-course-details"];
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/allCourses/${courseId}`)
      .then((res) => setCourseDetails(res.data.course))
      .catch((error) => console.error(error));
  }, [courseId]);

  return (
    <section
      className="text-center font-ms-gothic h-auto py-[30px] 
    md:px-5"
    >
      <div
        className="flex flex-col w-6 h-6
      md:pl-10
      xl:w-10 xl:h-10"
      >
        <BurgerDots />
        <h2
          className="text-base absolute left-12
        md:text-xl md:left-[6.25rem] md:top-[8.875rem]
        xl:text-[1.688rem] xl:left-[6.875rem] xl:top-[9.375rem]"
        >
          Secciones del curso
        </h2>
      </div>
      {courseDetails.modules?.map((module, index) => (
        <div key={module.moduleName}>
          <h2
            className=" text-xl pt-8 px-12 pb-9
              md:pt-16 md:text-2xl md:font-mystery-mixed md:text-start  
              xl:text-4xl"
          >
            Módulo {index + 1}: {module.moduleName}
          </h2>
          {module.topics.map((topic, index) => (
            <div
              key={topic.topicName}
              className="text-start px-3.5 pb-9 
                md:pl-14"
            >
              <h3
                className="text-lg pl-3 pb-4 
                    md:text-2xl 
                    xl:text-3xl"
              >
                Tema {index + 1}: {topic.topicName}
              </h3>
              {topic.classes.map((classInfo, index) => (
                <ul
                  key={classInfo.classInfo}
                  className="pl-6 pr-4 leading-5 text-base 
                    md:text-xl md:pl-9
                    xl:text-3xl "
                >
                  <Link href={"#"}>
                    <li>{`${index + 1}. ${classInfo.classInfo}`}</li>
                  </Link>
                </ul>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className="flex items-center justify-center mb-16 mt-2.5 py-10">
        <Border className="flex w-auto h-auto border-[3px] border-pink shadow-xl">
          <Button className="p-5 font-mystery-mixed text-2xl m-2.5 md:text-3xl md:py-2.5 md:px-8">
            Entregar proyecto
          </Button>
        </Border>
      </div>
    </section>
  );
}
