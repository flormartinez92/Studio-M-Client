"use client";

import Button from "@/common/Button";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PurchasedCourseResume({ params }) {
  const courseId = params["purchased-course-resume"];
  const [courseResume, setCourseResume] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/allCourses/${courseId}`)
      .then((res) => setCourseResume(res.data.course))
      .catch((error) => console.error(error));
  }, [courseId]);

  function newTitle(title) {
    const titleArray = title.split(" ");
    const titleLength = titleArray.length;
    return titleArray[titleLength - 2] + " " + titleArray[titleLength - 1];
  }

  return (
    <section className="flex flex-col justify-center items-center my-11">
      <h3 className="font-mystery-mixed text-3xl tracking-wider -rotate-3 lg:text-5xl lg:rotate-0">
        ¡Gracias por tu compra!
      </h3>

      {/* Este div se va a mostrar en modo mobile */}
      <>
        <div className="lg:hidden my-10">
          <div className="flex flex-row items-center justify-center gap-4">
            <h3 className="font-mystery-mixed text-3xl tracking-wider -rotate-2">
              {newTitle(courseResume.courseTitle)}
            </h3>
            <div className="relative">
              <Image
                src={"/img/papersmall.png"}
                width={"100"}
                height={"100"}
                alt="FOTO"
              ></Image>
              <Image
                src={courseResume.courseImg_url}
                width={"69"}
                height={"69"}
                alt="FOTO"
                className="h-full max-h-[69px] absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ></Image>
            </div>
          </div>
          <div className="px-5 mt-3 flex flex-col justify-center items-center gap-5">
            <h4 className="font-ms-gothic text-xl leading-5 text-center">
              {courseResume.courseSubtitle}
            </h4>
            <p className="font-ms-gothic text-center text-lg text-darkGray leading-5">
              {courseResume.courseDescription}
            </p>
          </div>
        </div>

        {/* Este div se va a mostrar en modo desktop */}
        <div className="hidden lg:block w-[85%] my-11 drop-shadow-lg rounded-xl">
          <div className="bg-black flex justify-center items-center rounded-t-xl">
            <h3 className="font-mystery-mixed text-4xl py-3 tracking-wider text-white">
              {courseResume.courseTitle}
            </h3>
          </div>

          <div className="flex">
            <Image
              width={220}
              height={290}
              src={courseResume.courseImg_url}
              alt="Imagen Curso"
              className="rounded-bl-lg"
            />
            <div className="bg-lightGrey rounded-br-lg p-6">
              <h4 className="font-ms-gothic text-3xl">
                {courseResume.courseSubtitle}
              </h4>
              <p className="font-ms-gothic text-xl text-darkGray leading-6 mt-4">
                {courseResume.courseDescription}
              </p>
            </div>
          </div>
        </div>
      </>

      <Button
        type="rounder"
        className="font-ms-gothic px-14 py-2 text-xl lg:text-3xl lg:py-3"
      >
        Iniciar curso
      </Button>
    </section>
  );
}
