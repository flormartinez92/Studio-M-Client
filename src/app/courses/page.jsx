"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/features/cartSlice";
import Cards from "../../components/Cards";
import { Arrow, ArrowBack, CartShopSimple, Vector } from "@/common/Icons";
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
  fetchCart,
} from "@/helpers/apiHelpers";
import Loading_common from "@/common/Loading_common";
import Alert_common from "@/common/Alert_common";
import IconButton from "@/common/IconButton";
import CartAlert_common from "@/common/CartAlert";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const coursesPerPage = 5;
  const router = useRouter();
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");
  const dispatch = useDispatch();
  const [out, setout] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [cartAlert, setCartAlert] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const responseCourses = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses`
        );
        const coursesData = responseCourses.data;

        const userData = await fetchUser();
        setUser(userData);

        let userCart = [];
        let userFavorites = [];
        if (userData) {
          userFavorites = await fetchFavorites(userData._id);
          userCart = await fetchCart(userData._id);
        }

        const coursesWithFavorites = coursesData.map((course) => ({
          ...course,
          isFavorite: userFavorites.some(
            (favoriteCourse) => favoriteCourse._id === course._id
          ),
          isInCart: userCart.some(
            (courseCart) => courseCart._id === course._id
          ),
        }));

        setCourses(coursesWithFavorites);

        const updatedTotalPages = Math.ceil(
          coursesWithFavorites.length / coursesPerPage
        );
        setTotalPages(updatedTotalPages);
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

  const handleAlert = () => {
    setout(true);
    setTimeout(() => {
      setShowAlert(false);
      setout(false);
    }, 700);
  };

  const renderCourseRangeIndicator = () => {
    const totalPages = Math.ceil(courses.length / coursesPerPage);
    let indicator = `${currentPage}-${totalPages}`;

    return indicator;
  };

  const handleArrowClick = (direction) => {
    if (direction === "forward" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "backward" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
    <section className={`h-full  ${loading ? "cursor-wait" : ""} relative`}>
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
      {courses.length === 0 ? (
        <div className="w-full h-[600px]  flex justify-center items-center">
          <Loading_common />
        </div>
      ) : (
        <>
          <h2 className="md:hidden flex items-center justify-center rotate-[-2.08deg] text-[2rem] min-[370px]:text-[2.375rem] min-[500px]:text-[2.7rem] font-normal  font-mystery-mixed pt-10 pb-8">
            Nuestros cursos
          </h2>
          <div className="md:hidden flex flex-col justify-center p-3 items-center pb-14 min-[768px]:pb-24 min-[1024px]:pb-36">
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
          <div className="hidden md:block flex-col items-center justify-center pb-14 min-[768px]:pb-24 min-[1024px]:pb-36">
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
                {currentCourses
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
                        handleFavoriteClick={() =>
                          handleclickFavorite(course._id)
                        }
                        handleViewCourseClick={() =>
                          handleViewCourseClick(course._id)
                        }
                        handleCartClick={async () => {
                          if (user) {
                            await handleCartClick(
                              course._id,
                              user._id,
                              setShowAlert,
                              setCartAlert,
                              setLoading,
                              setDeletingId
                            );
                            await handleItemsCart();
                          } else {
                            router.push("/login");
                          }
                        }}
                        IsAddCourse={deletingId === course._id}
                      />
                    );
                  })}
              </div>
              <div className="flex items-center justify-start w-[90%] max-w-[950px] mt-8 space-x-3">
                <div className="font-mystery-mixed text-2xl">
                  {renderCourseRangeIndicator()}
                </div>
                {currentPage > 1 && (
                  <IconButton onClick={() => handleArrowClick("backward")}>
                    <ArrowBack />
                  </IconButton>
                )}
                {currentPage < totalPages && (
                  <IconButton onClick={() => handleArrowClick("forward")}>
                    <Arrow />
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
