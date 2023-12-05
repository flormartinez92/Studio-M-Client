"use client";

import Button from "@/common/Button";
import CardsDesktop from "@/components/CardsDesktop";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PurchasedCourseResume({ params }) {
  const courseId = params["purchased-course-resume"];
  const [courseUser, setCourseUser] = useState({
    id_course: "",
    id_classe: "",
  });
  //console.log("courseId--->", courseId);
  const [courseResume, setCourseResume] = useState([]);

  /* useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/allCourses/${courseId}`)
      .then((res) => setCourseResume(res.data.course))
      .catch((error) => console.error(error));
  }, [courseId]); */

  /* const getCourse = async () => {
    try {
      const oneCourse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses/${courseId}`
      );
      setCourseUser(oneCourse.data);
    } catch (error) {
      console.error("Error while fetching courses:", error);
    }
  }; */

  useEffect(() => {
    const purchase = JSON.parse(localStorage.getItem("purchase"));
    const newArr = purchase.map((courseUser) => {
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

    console.log(newArr);
    setCourseResume(newArr);
  }, []);

  function newTitle(title) {
    if (title) {
      const titleArray = title.split(" ");
      const titleLength = titleArray.length;
      return titleArray[titleLength - 2] + " " + titleArray[titleLength - 1];
    }
    return;
  }
  const handleClickStart = async (course) => {
    console.log(course);
  };
  //console.log(courseUser);

  return (
    <section className="flex flex-col justify-center items-center mb-[2rem] mt-[3rem] md:mt-[3.4rem] md:mb-[9rem]">
      {/* {JSON.stringify(
        courseUser.modules && courseUser.modules[0].topics[0].classes[0]._id
      )} */}
      <h3 className="font-mystery-mixed text-[1.3rem] sm-300:text-[1.7rem] tracking-wider -rotate-2 md:text-4xl lg:text-5xl md:rotate-0 animate__animated animate__fadeInLeft">
        ¡Gracias por tu compra!
      </h3>
      {courseResume.map((course) => {
        return (
          <div
            key={course._id}
            className="w-full  flex justify-center items-center mb-5 max-w-[320px] md:max-w-[820px] lg:max-w-[980px] 
          "
          >
            <div className="flex w-full  flex-col justify-center items-center md:hidden">
              <div className=" flex w-[80%] justify-center items-center gap-x-2 my-4">
                {/* <h2 className="w-[95px] ">{course.courseShortTitle}</h2> */}
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
                    onClick={() => handleClickStart(course)}
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
                        onClick={() => handleClickStart(course)}
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
      {/* <h3 className="font-mystery-mixed text-3xl tracking-wider -rotate-3 lg:text-5xl lg:rotate-0">
        ¡Gracias por tu compra!
      </h3>
      //Este div se va a mostrar en modo mobile
      <>
        <div className="lg:hidden my-10">
          <div className="flex flex-row items-center justify-center gap-4">
            {courseResume?.map((course, i) => {
              return <div key={i}>1</div>;
            })}
            <h3 className="font-mystery-mixed text-3xl tracking-wider -rotate-2 lg:text-4xl">
              {newTitle(courseResume[0].courseLongTitle)}
            </h3>
            <div className="relative">
              <Image
                src={"/img/papersmall.png"}
                width={"100"}
                height={"100"}
                alt="FOTO"
              ></Image>
              <Image
                src={courseResume[0].courseImg_url}
                width={"69"}
                height={"69"}
                alt="FOTO"
                className="h-full max-h-[69px] absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ></Image>
            </div>
          </div>
          <div className="px-5 mt-3 flex flex-col justify-center items-center gap-5">
            <h4 className="font-ms-gothic text-xl leading-5 text-center">
              {courseResume[0].courseSubtitle}
            </h4>
            <p className="font-ms-gothic text-center text-lg text-darkGray leading-5">
              {courseResume[0].courseDescription}
            </p>
          </div>
        </div>
        //Este div se va a mostrar en modo desktop
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
      </Button> */}
    </section>
  );
}
