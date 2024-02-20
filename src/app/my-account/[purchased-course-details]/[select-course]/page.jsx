"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

import axios from "axios";
import { Arrow, ArrowBack, BurgerMenu2, Check } from "@/common/Icons";
import Button from "@/common/Button";
import Image from "next/image";
import Link from "next/link";
import { Message } from "@/common/Message";
import { fetchUser } from "@/helpers/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/state/features/authSlice";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/navigation";

export default function SelectCourse({ params }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [userr, setUserr] = useState(null);
  const courseId = params["purchased-course-details"];
  const classId = params["select-course"];
  const [courseClass, setCourseClass] = useState({});
  const [courseDetails, setCourseDetails] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextClassId, setNextClassId] = useState("");
  const [previousClassId, setPreviousClassId] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [previousArrowColor, setPreviousArrowColor] = useState("black");
  const [nextArrowColor, setNextArrowColor] = useState("black");
  const router = useRouter();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const userr = await fetchUser();
      dispatch(setCredentials(userr));
      setUserr(userr);
      if (!userr) {
        router.push("/login");
        return;
      }
    };
    checkUserAuthentication();
  }, []);

  useEffect(() => {
    const checkUserAuth = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuth();
  }, []);

  const handleArrowMouseDown = (direction) => {
    if (direction === "previous") {
      setPreviousArrowColor("#E21B7B");
      setNextArrowColor("black");
    } else if (direction === "next") {
      setNextArrowColor("#E21B7B");
      setPreviousArrowColor("black");
    }
  };
  const handleArrowMouseUp = () => {
    setPreviousArrowColor("black");
    setNextArrowColor("black");
  };

  const handleArrowTouchStart = (direction) => {
    if (direction === "previous") {
      setPreviousArrowColor("#E21B7B");
      setNextArrowColor("black");
    } else if (direction === "next") {
      setNextArrowColor("#E21B7B");
      setPreviousArrowColor("black");
    }
  };

  const handleArrowTouchEnd = () => {
    setPreviousArrowColor("black");
    setNextArrowColor("black");
  };
  const arrowHandlers = isMobile
    ? {
        onTouchStart: () => handleArrowTouchStart("previous"),
        onTouchEnd: handleArrowTouchEnd,
      }
    : {
        onMouseDown: () => handleArrowMouseDown("previous"),
        onMouseUp: handleArrowMouseUp,
      };

  const handleClick = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/courseAdvance`,
        {
          mail: user?.mail,
          courseId: courseId,
          classId: classId,
          status: !courseClass.status,
        }
      );
      if (response.status === 200) {
        setCourseClass((prevCourseClass) => ({
          ...prevCourseClass,
          status: !prevCourseClass.status,
        }));
      } else {
        console.error("La llamada a la API no fue exitosa:", response);
      }
    } catch (error) {
      console.error("Error while fetching update classes:", error);
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/courseClass/${user?._id}/${courseId}/${classId}`
      )
      .then((res) => {
        const courseClass = res.data;
        setCourseClass(courseClass);
      })
      .catch((error) => {
        console.error("Error getting courses:", error);
      });
  }, [user?._id, courseId, classId]);

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
            <div
              onMouseDown={() => handleArrowMouseDown("previous")}
              onMouseUp={handleArrowMouseUp}
              onTouchStart={() => handleArrowTouchStart("previous")}
              onTouchEnd={handleArrowTouchEnd}
            >
              <Link href={`/my-account/${courseId}/${previousClassId}`}>
                <ArrowBack color={previousArrowColor} />
              </Link>
            </div>
          )}
          {nextClassId && (
            <div
              onMouseDown={() => handleArrowMouseDown("next")}
              onMouseUp={handleArrowMouseUp}
              onTouchStart={() => handleArrowTouchStart("next")}
              onTouchEnd={handleArrowTouchEnd}
            >
              <Link href={`/my-account/${courseId}/${nextClassId}`}>
                <Arrow color={nextArrowColor} />
              </Link>
            </div>
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
            status={courseClass.status}
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
      <Button
        type={"rounder"}
        className={`flex justify-center w-56 p-2 font-ms-gothic text-2xl mb-14 xl:p-3  xl:w-60 xl:text-3xl md:text-3xl mt-6 
    ${courseClass.status ? "bg-green" : ""}`}
        onClick={() => handleClick()}
      >
        {courseClass.status ? (
          <Check color={"black"} width={"40"} height={"40"} />
        ) : (
          <>
            <div className="flex justify-center items-center">
              <span>Completar</span>&nbsp; &nbsp;
              <Image
                src={"/img/Ellipse.png"}
                width={"26"}
                height={"26"}
                alt="ellipse"
              />
            </div>
          </>
        )}
      </Button>
    </div>
  );
}
