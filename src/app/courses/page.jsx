"use client";

import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { CartShopPlusBgBlack, CartShopSimple, Vector } from "@/common/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardsDesktop from "@/components/CardsDesktop";
import { useMediaQuery } from "@react-hook/media-query";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const router = useRouter();
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses`
        );
        const courses = response.data;
        setCourses(courses);
      } catch (error) {
        console.error("Error while fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleViewCourseClick = async (courseId) => {
    const { data } = await axios.get(
      `http://localhost:8081/api/course/all-courses/${courseId}`
    );
    router.push(`/courses/${data._id}`);
  };

  return (
    <section className="h-full pb-14 min-[768px]:pb-24 min-[1024px]:pb-36">
      <h2 className="md:hidden flex items-center justify-center rotate-[-2.08deg] text-[2rem] min-[370px]:text-[2.375rem] min-[500px]:text-[2.7rem] font-normal  font-mystery-mixed pt-10 pb-8">
        Nuestros cursos
      </h2>

      {/* Aca arranca la CardMobile */}
      <div className="md:hidden flex flex-col justify-center p-3 items-center">
        {courses?.map((course) => (
          <Cards
            title={course.courseShortTitle}
            className="pb-10 w-[66%] min-h-[15rem] min-w-[14rem] max-w-[14rem]"
            img={course.courseImg_url}
            classNameImg=" h-[12.625rem] rounded-bl-[10px] rounded-br-[10px]"
            classNameBorder="h-[52px] flex-row justify-between items-center w-[170px] top-[182px]"
            classNameButton="text-xl tracking-wider w-[120px] pl-[14px] pr-[14px] h-[90%] items-center"
            buttonTitle="Ver curso"
            handleViewCoursesClick={() => handleViewCourseClick(course._id)}
            classNameIconButton="h-[90%] pl-[15px] pr-[15px] pb-3 pt-3 bg-[#181717]"
            icon={<CartShopSimple width={"16px"} height={"16px"} />}
          />
        ))}
      </div>

      {/* Aca arranca la CardDesktop */}
      <div className="hidden md:block flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center pt-14 pb-6">
          <div className="flex flex-row items-center justify-start w-[90%] max-w-7xl">
            <label className=" text-black font-mystery-mixed pr-5 text-xl min-[1024px]:text-2xl">
              A-Z
            </label>
            <div className="cursor-pointer">
              <Vector
                width={isLgBreakpoint ? "25px" : "20px"}
                height={isLgBreakpoint ? "15px" : "12px"}
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
              />
            </div>
          </div>
        </div>
        {courses
          ?.slice()
          .sort((a, b) =>
            sortOrder === "asc"
              ? a.courseLongTitle.localeCompare(b.courseLongTitle)
              : b.courseLongTitle.localeCompare(a.courseLongTitle)
          )
          .map((course) => (
            <>
              <CardsDesktop
                // handleViewCoursesClick={() => alert("click en carDesktop")}
                // handleCartClick={() => alert("click en CART")}
                courseTitleClasses="text-2xl leading-loose min-[1024px]:text-3xl min-[1024px]:py-2"
                courseLongTitle={course.courseLongTitle}
                courseImg_url={course.courseImg_url}
                cartShopPlusBgBlack={
                  <CartShopPlusBgBlack
                    width={isLgBreakpoint ? "57px" : "45px"}
                    height={isLgBreakpoint ? "57px" : "45px"}
                    onClick={() => alert("click en CART")}
                  />
                }
                courseSubtitle={course.courseSubtitle}
                courseSubtitleClasses="text-[1rem] min-[1024px]:text-[1.275rem]"
                coursePrice={course.coursePrice}
                coursePriceClasses="text-[1rem] min-[1024px]:text-[1.275rem]"
                courseDescription={course.courseDescription}
                courseDescriptionClasses="text-[0.8rem] min-[1024px]:text-[1.02rem]"
                courseLevel={course.courseLevel}
                courseLevelClasses="text-[0.8rem] min-[1024px]:text-[1.02rem]"
                courseDuration={course.courseDuration}
                courseDurationClasses="text-[0.8rem] min-[1024px]:text-[1.02rem]"
                clockWidth={isLgBreakpoint ? "25px" : "16px"}
                clockHeight={isLgBreakpoint ? "25px" : "16px"}
                courseFavoriteClasses="text-[0.8rem] tracking-tight min-[1024px]:text-[1.02rem]"
                heartWidth={isLgBreakpoint ? "25px" : "16px"}
                heartHeight={isLgBreakpoint ? "25px" : "16px"}
                signaltWidth={isLgBreakpoint ? "50px" : "25px"}
                signalHeight={isLgBreakpoint ? "50px" : "25px"}
              />
            </>
          ))}
      </div>
    </section>
  );
}
