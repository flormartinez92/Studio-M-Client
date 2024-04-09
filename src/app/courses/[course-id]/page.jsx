"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseSummary from "@/common/CourseSummary";
import axios from "axios";
import CardsDesktop from "@/components/CardsDesktop";
import {
  addFavorite,
  fetchFavorites,
  fetchUser,
  removeFavorite,
  handleCartClick,
  fetchUserCoursesBought,
} from "@/helpers/apiHelpers";
import Loading_common from "@/common/Loading_common";
import { useRouter } from "next/navigation";
import { addToCart } from "@/state/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert_common from "@/common/Alert_common";
import CartAlert_common from "@/common/CartAlert";
import { updateIsFavorite } from "@/state/features/setCoursesSlice";
import { listFavorites } from "@/state/features/myAccountSlice";

export default function CourseInformation({ params }) {
  const { allCourses } = useSelector((state) => state.fetchCourses);
  const [course, setCourse] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [out, setout] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [cartAlert, setCartAlert] = useState(false);
  const [isBoughtAlert, setIsBoughtAlert] = useState(false);
  const router = useRouter();
  const courseId = params["course-id"];
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const responseCourse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses/${courseId}`
        );
        const courseData = responseCourse.data;

        const userData = await fetchUser();
        setUser(userData);

        let userFavorite = [];
        let isFavorite = false;
        let userCourseIsBought = [];
        let courseIsBought = false;
        if (userData) {
          userFavorite = await fetchFavorites(userData._id);
          isFavorite = userFavorite.some(
            (favoriteCourse) => favoriteCourse._id === courseId
          );
          userCourseIsBought = await fetchUserCoursesBought(userData._id);
          courseIsBought = userCourseIsBought.some(
            (courseIsBought) => courseIsBought === courseId
          );
        }

        setCourse({
          ...courseData,
          isFavorite: isFavorite,
          isBought: courseIsBought,
        });
      } catch (error) {
        console.error("Error while fetching course:", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  const handleclickFavoriteSingleCourse = async (courseId) => {
    if (!user) {
      router.push("/login");
      return;
    }
    try {
      setLoading(true);

      const isCourseInFavorites = allCourses.some(
        (course) => course._id === courseId && course.isFavorite
      );

      if (isCourseInFavorites) {
        dispatch(updateIsFavorite(courseId));
        await removeFavorite(courseId, user._id);
      } else {
        dispatch(updateIsFavorite(courseId));
        await addFavorite(courseId, user._id);
      }

      setCourse({
        ...course,
        isFavorite: !isCourseInFavorites,
      });

      const userFav = await fetchFavorites(user._id);
      dispatch(listFavorites(userFav));
    } catch (error) {
      console.error("Error while updating favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAlert = () => {
    setout(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsBoughtAlert(false);
      setout(false);
    }, 700);
  };

  const handleItemsCart = async () => {
    try {
      const responseCart = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${user._id}`
      );
      dispatch(addToCart(responseCart.data.length));
    } catch (error) {
      console.error("Error fetching itemsCount cart:", error);
    }
  };

  return (
    <section className={`${loading ? "cursor-wait" : ""}`}>
      {isBoughtAlert && (
        <Alert_common
          handleAlert={handleAlert}
          out={out}
          titleAlert="¡Ya tienes este curso comprado!"
          classNameAlert="w-[300px] md:w-[400px] md:h-[100px] md:text-[1.1rem]"
        />
      )}
      {showAlert && (
        <Alert_common
          handleAlert={handleAlert}
          out={out}
          titleAlert="¡Este curso ya está en tu carrito!"
          classNameAlert="w-[300px] md:w-[400px] md:h-[100px] md:text-[1.1rem]"
        />
      )}
      {cartAlert && (
        <CartAlert_common
          out={out}
          titleAlert="¡Has agregado un curso al carrito!"
          classNameAlert="w-[300px]"
        />
      )}
      {Object.keys(course).length === 0 ? (
        <div className="w-full h-[600px]  flex justify-center items-center">
          <Loading_common />
        </div>
      ) : (
        <>
          {/* Vista mobile */}
          <div className="md:hidden flex flex-col justify-evenly h-auto items-center w-auto gap-8 mt-8 mb-16">
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
                  src={
                    course.courseImg_url
                      ? course.courseImg_url
                      : "https://res.cloudinary.com/dpgnbh7ok/image/upload/v1699647575/zkchfhesmwxg2zyts45u.jpg"
                  }
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

          {/* Vista Desktop */}
          <div className="max-w-[950px] m-auto">
            <div className="hidden md:block flex-col items-center justify-center select-none">
              <div className="flex flex-col items-center justify-center pt-14 pb-6 w-[90%] m-auto">
                <CardsDesktop
                  key={course._id}
                  courseLongTitle={course.courseLongTitle}
                  courseImg_url={course.courseImg_url}
                  courseSubtitle={course.courseSubtitle}
                  coursePrice={course.coursePrice}
                  fullDescription={true}
                  courseDescription={course.courseDescription}
                  isBought={course.isBought}
                />
              </div>
            </div>

            <div className="md:hidden flex flex-col justify-center items-center">
              {course.modules?.map((module, index) => (
                <div
                  key={module.moduleName}
                  className="font-ms-gothic w-[85%] pb-2"
                >
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
                <div
                  key={module.moduleName}
                  className="flex flex-col justify-center items-center pb-7"
                >
                  <div className=" w-[90%] max-w-5xl font-ms-gothic">
                    <h3 className="text-xl font-mystery-mixed py-3 md:text-2xl lg:text-3xl">
                      Modulo {index + 1}: {module.moduleName}
                    </h3>
                    {module.topics?.map((topic, index) => (
                      <div key={topic.topicName}>
                        <h4 className="mt-2 text-lg md:text-xl lg:text-2xl">
                          Tema {index + 1}: {topic.topicName}
                        </h4>
                        <ul className="text-[#5C5A5A] text-base flex flex-col my-1.5 md:text-lg lg:text-xl">
                          {topic.classes?.map((clase, index) => (
                            <div key={clase._id} className="ml-3">
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

            <div className=" flex flex-col justify-center items-center pt-4 pb-16 mb-10 lg:pb-36 ">
              <div className="flex flex-col pb-2 min-[280px]:max-w-[85%] min-[390px]:max-w-[80%] text-center justify-center items-center ">
                <div className="max-w-5xl pb-14">
                  <h3 className="font-mystery-mixed text-xl md:text-2xl pb-6  lg:text-5xl">
                    Proyecto Final: {course.projectsTitle}
                  </h3>
                  <p className="font-ms-gothic md:text-lg lg:text-4xl">
                    {course.projectAim}
                  </p>
                </div>
              </div>
              <div className="max-w-[270px] min-[768px]:max-w-[700px] lg:max-w-[1000px]">
                <CourseSummary
                  courseId={course._id}
                  level={course.courseLevel}
                  hours={course.courseDuration}
                  price={course.coursePrice}
                  className={
                    "md:flex md:flex-row md:h-24 md:font-ms-gothic md:text-base md:justify-around"
                  }
                  handleFavoriteClick={() =>
                    handleclickFavoriteSingleCourse(courseId)
                  }
                  isFavorite={course.isFavorite}
                  handleCartClick={async () => {
                    if (user) {
                      await handleCartClick(
                        course._id,
                        user._id,
                        setShowAlert,
                        setCartAlert,
                        setLoading,
                        setDeletingId,
                        course.isBought,
                        setIsBoughtAlert
                      );
                      await handleItemsCart();
                    } else {
                      router.push("/login");
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
