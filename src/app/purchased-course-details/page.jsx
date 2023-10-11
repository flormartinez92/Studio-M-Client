"use client";

import Border from "@/common/Border";
import Button from "@/common/Button";
import { BurgerDots } from "@/common/Icons";
import fakeDataCourseDetails from "./fakeDataCourseDetails";
import Link from "next/link";
import { useState } from "react";

export default function PurchasedCourseDetails() {
  const [courseDetails, setCourseDetails] = useState();

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

      {fakeDataCourseDetails.map((courseDetails, index) => (
        <div key={index}>
          {courseDetails.modules.map((module) => (
            <div key={module.name}>
              <h2
                className=" text-xl pt-8 px-12 pb-9
                md:pt-16 md:text-2xl md:font-mystery-mixed md:text-start  
                xl:text-4xl"
              >
                {module.name}
              </h2>

              {module.topics.map((topic) => (
                <div
                  key={topic.name}
                  className="text-start px-3.5 pb-9 
                md:pl-14"
                >
                  <h3
                    className="text-lg pl-3 pb-4 
                    md:text-2xl 
                    xl:text-3xl"
                  >
                    {topic.name}
                  </h3>
                  {topic.subtopics.map((subtopic) => (
                    <ul
                      key={subtopic.text}
                      className="pl-6 pr-4 leading-5 text-base 
                    md:text-xl md:pl-9
                    xl:text-3xl "
                    >
                      <Link href={"#"}>
                        <li>{`${subtopic.number}. ${subtopic.text}`}</li>
                      </Link>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          ))}

          {courseDetails.finalProject.map((info) => (
            <div key={info.title}>
              <h2
                className="font-mystery-mixed text-xl mx-auto pt-4 px-9 pb-6
              md:text-2xl 
              xl:text-4xl"
              >
                {info.title}
              </h2>
              <p
                className="px-12 pb-8 text-base leading-tight 
              md:text-xl md:w-9/12 md:m-auto
              xl:text-3xl "
              >
                {info.description}
              </p>
              <p
                className="text-lg px-12 pb-8 mt-8 leading-tight 
              md:text-2xl md:w-9/12 md:m-auto md:leading-normal
              xl:text-[30px] "
              >
                {info.goals}
              </p>
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
