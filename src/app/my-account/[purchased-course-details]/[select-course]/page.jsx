"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Arrow, ArrowBack, BurgerMenu2, Check } from "@/common/Icons";
import Button from "@/common/Button";
import Image from "next/image";
import Link from "next/link";
import { Message } from "@/common/Message";

export default function SelectCourse({ params }) {
  const courseId = params["purchased-course-details"];
  const classId = params["select-course"];
  const [completed, setCompleted] = useState(false);
  const [courseClass, setCourseClass] = useState({});
  const [courseDetails, setCourseDetails] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextClassId, setNextClassId] = useState("");
  const [previousClassId, setPreviousClassId] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const userToken = sessionStorage.getItem("token");
  const { _id, mail } = jwtDecode(userToken);

  const handleClick = async () => {
    if (!completed) {
      try {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/courseAdvance`,
          {
            mail: mail,
            courseId: courseId,
            classId: classId,
            status: true,
          }
        );
        if (response.status === 200) {
          setCompleted(true);
        }
      } catch (error) {
        console.error("Error while fetching update classes:", error);
      }
    }
  };

  useEffect(() => {
    if (courseClass && courseDetails) {
      courseDetails.modules?.map((module, indexModule) => {
        module.topics.map((topic, indexTopic) => {
          topic.classes.map((classInfo, indexClass) => {
            if (courseClass.classId == classInfo._id) {
              setCurrentIndex(indexClass);
              if (topic.classes.length > indexClass + 1) {
                setNextClassId(topic.classes[indexClass + 1]._id);
              }
              if (indexClass > 0) {
                setPreviousClassId(topic.classes[indexClass - 1]._id);
              }
            }
          });
        });
      });
    }
  }, [courseClass, courseDetails]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/courseClass/${_id}/${courseId}/${classId}`
      )
      .then((res) => {
        const courseClass = res.data;
        setCourseClass(courseClass);
      })
      .catch((error) => {
        console.error("Error getting courses:", error);
      });
  }, [_id, courseId, classId]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const oneCourse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses/${courseId}`
        );
        setCourseDetails(oneCourse.data);
      } catch (error) {
        console.error("Error while fetching courses:", error);
      }
    };
    fetchCourseDetails();
  }, [courseId]);

  return (
    <div className="bg-white bg-opacity-0 flex flex-col justify-center h-auto m-auto items-center gap-8 max-w-[1280px]">
      <div className="flex flex-row  items-center justify-between mt-4  min-w-[90%]">
        <div className="flex flex-row justify-between items-center gap-2 text-base md:text-xl">
          <Link href={`/my-account/${courseId}`}>
            <BurgerMenu2 width="30" height="30" color={"black"} />
          </Link>
          <Link href={`/my-account/${courseId}`}>
            <h2 className="font-ms-gothic text-base items-center md:text-xl">
              Secciones del curso
            </h2>
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          {previousClassId && (
            <Link href={`/my-account/${courseId}/${previousClassId}`}>
              <ArrowBack color={"black"} />
            </Link>
          )}
          {nextClassId && (
            <Link href={`/my-account/${courseId}/${nextClassId}`}>
              <Arrow color="#E21B7B" />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full m-auto">
        {!showVideo && (
          <Message
            key={courseClass.classId}
            item_num={currentIndex + 1}
            text={courseClass.classInfo}
            url={courseClass.video_url}
            className={
              "text-white text-2xl w-[90%] bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center py-14 sm:py-24 md:py-28 md:px-10 md:text-3xl lg:py-40 lg:px-28 lg:text-4xl xl:py-48 xl:text-5xl"
            }
            onClick={() => setShowVideo(true)}
          />
        )}
        {showVideo && (
          <div className="w-[90%] h-[200px] sm:w-[90%] sm:h-[300px] md:w-[90%] md:h-[400px] xl:w-[90%] xl:h-[600px] text-center mx-auto grid place-items-center">
            <ReactPlayer
              width="100%"
              height="100%"
              className="bg-black"
              url={courseClass.video_url}
              key={courseClass.classId}
              item_num={currentIndex + 1}
              text={courseClass.classInfo}
            />
          </div>
        )}
      </div>
      {completed ? (
        <Button
          type={"rounder"}
          className={
            "flex flex-row justify-center items-center w-40 p-2 mb-14 bg-green xl:p-2 xl:px-10 xl:w-80 xl:text-3xl"
          }
        >
          <Check color={"black"} width={"50"} height={"50"} />
        </Button>
      ) : (
        <Button
          type={"rounder"}
          className={
            "flex flex-row justify-between items-center w-56 p-2 font-ms-gothic text-2xl mb-14 xl:p-2 xl:px-10 xl:w-60 xl:text-3xl md:text-3xl mt-6"
          }
          onClick={handleClick}
        >
          Completar&nbsp;
          <Image
            src={"/img/Ellipse.png"}
            width={"26"}
            height={"26"}
            alt="ellipse"
          />
        </Button>
      )}
    </div>
  );
}
