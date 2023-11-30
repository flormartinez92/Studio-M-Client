"use client";

import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { CartShopSimple, Vector } from "@/common/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardsDesktop from "@/components/CardsDesktop";
import { useMediaQuery } from "@react-hook/media-query";
import {
  addFavorite,
  fetchFavorites,
  fetchUser,
  removeFavorite,
  handleCartClick,
} from "@/helpers/apiHelpers";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseCourses = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses`
        );
        const coursesData = responseCourses.data;

        const userData = await fetchUser();
        setUser(userData);

        let userFavorites = [];
        if (userData) {
          userFavorites = await fetchFavorites(userData._id);
        }

        const coursesWithFavorites = coursesData.map((course) => ({
          ...course,
          isFavorite: userFavorites.some(
            (favoriteCourse) => favoriteCourse._id === course._id
          ),
        }));

        setCourses(coursesWithFavorites);
      } catch (error) {
        console.error("Error while fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleViewCourseClick = async (courseId) => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses/${courseId}`
    );
    router.push(`/courses/${data._id}`);
  };

  const handleclickFavorite = async (courseId) => {
    if (!user) {
      router.push("/login");
      return;
    }
    try {
      setLoading(true);

      const userFavorites = await fetchFavorites(user._id);
      const isCourseFavorite = userFavorites.some(
        (favoriteCourse) => favoriteCourse._id === courseId
      );

      isCourseFavorite
        ? await removeFavorite(courseId, user._id)
        : await addFavorite(courseId, user._id);

      const updatedCourses = courses.map((course) => {
        if (course._id === courseId) {
          return {
            ...course,
            isFavorite: !course.isFavorite,
          };
        }
        return course;
      });

      setCourses(updatedCourses);
    } catch (error) {
      console.error("Error while updating favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`h-full pb-14 min-[768px]:pb-24 min-[1024px]:pb-36 ${
        loading ? "cursor-wait" : ""
      }`}
    >
      <h2 className="md:hidden flex items-center justify-center rotate-[-2.08deg] text-[2rem] min-[370px]:text-[2.375rem] min-[500px]:text-[2.7rem] font-normal  font-mystery-mixed pt-10 pb-8">
        Nuestros cursos
      </h2>

      {/* Aca arranca la CardMobile */}
      <div className="md:hidden flex flex-col justify-center p-3 items-center">
        {courses?.map((course) => (
          <Cards
            key={course._id}
            courseId={course._id}
            title={course.courseShortTitle}
            className="pb-10 w-[66%] min-h-[15rem] min-w-[14rem] max-w-[14rem]"
            img={course.courseImg_url}
            classNameImg=" h-[12.625rem] rounded-bl-[10px] rounded-br-[10px]"
            classNameBorder="h-[52px] flex-row justify-between items-center w-[170px] top-[182px]"
            classNameButton="text-xl tracking-wider w-[120px] pl-[14px] pr-[14px] h-[90%] items-center"
            buttonTitle="Ver curso"
            classNameIconButton="h-[90%] pl-[15px] pr-[15px] pb-3 pt-3 bg-[#181717]"
            icon={<CartShopSimple width={"16px"} height={"16px"} />}
          />
        ))}
      </div>

      {/* Aca arranca la CardDesktop */}
      <div className="hidden md:block flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center pt-14 pb-6">
          <div className="flex flex-col items-center justify-center w-[90%] gap-y-4 max-w-6xl mb-10">
            <div className="w-full flex items-center justify-start max-w-[950px]">
              <label className=" text-black font-mystery-mixed pr-5 text-xl min-[1024px]:text-2xl">
                A-Z
              </label>
              <div
                className="cursor-pointer"
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
              >
                <Vector
                  width={isLgBreakpoint ? "25px" : "20px"}
                  height={isLgBreakpoint ? "15px" : "12px"}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[90%] gap-y-12 max-w-6xl">
            {courses
              ?.slice()
              .sort((a, b) =>
                sortOrder === "asc"
                  ? a.courseLongTitle.localeCompare(b.courseLongTitle)
                  : b.courseLongTitle.localeCompare(a.courseLongTitle)
              )
              .map((course, index) => {
                return (
                  <CardsDesktop
                    courseDescription={course.courseDescription}
                    courseImg_url={course.courseImg_url}
                    courseLongTitle={course.courseLongTitle}
                    courseLevel={course.courseLevel}
                    courseSubtitle={course.courseSubtitle}
                    courseDuration={course.courseDuration}
                    coursePrice={course.coursePrice}
                    key={index}
                    notjustPrice={true}
                    cartShopPlusBgBlack={true}
                    isFavorite={course.isFavorite}
                    handleFavoriteClick={() => handleclickFavorite(course._id)}
                    handleViewCourseClick={() =>
                      handleViewCourseClick(course._id)
                    }
                    handleCartClick={() =>
                      handleCartClick(course._id, user._id)
                    }
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
