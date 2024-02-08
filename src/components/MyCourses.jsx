import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cards from "./Cards";
import axios from "axios";
// import inputScroll from "@/hooks/useScroll";
import IconButton from "@/common/IconButton";
import { ArrowBlack1, ArrowBlack2 } from "@/common/Icons";

const MyCourses = ({ decodedToken }) => {
  //Estado para los cursos
  const [userCourses, setUserCourses] = useState([]);
  const [startCourse, setStartCourse] = useState(0);
  const cardsPerPage = 3;

  //Pedido al back para traer los cursos de un usuario
  useEffect(() => {
    if (decodedToken._id) {
      try {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/userCourses/${decodedToken._id}`
          )
          .then((res) => setUserCourses(res.data));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const handlePrevPage = () => {
    if (startCourse > 0) {
      setStartCourse(startCourse - 1);
    }
  };

  const handleNextPage = () => {
    if (startCourse < userCourses.length - 1) {
      setStartCourse(startCourse + 1);
    }
  };

  return (
    <div
      className={`py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center md:mx-[1%] lg:mx-[8%] xl:mx-[11%]`}
    >
      <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6 flex flex-row">
        <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-11 xl:space-x-15 lg:ml-6 ">
          {userCourses
            ?.slice(startCourse, startCourse + cardsPerPage)
            .map((userCourse, index) => (
              <div
                key={userCourse.courseInfo._id}
                className="flex justify-center items-center"
              >
                <Link href={`/my-account/${userCourse.courseInfo._id}`}>
                  <Cards
                    title={userCourse.courseInfo.courseShortTitle}
                    buttonTitle={userCourse.progress + "%"}
                    progressBar={userCourse.progress.toString()}
                    img={userCourse.courseInfo.courseImg_url}
                    className="min-w-[12.5rem] max-w-[12.5rem] h-[15rem] max-h-[15rem]"
                    classNameButton="py-1 px-0.5 text-lg flex items-center flex-col"
                    classNameImg="h-[12rem] object-cover rounded-b-lg"
                    className2="h-full"
                    classNameBorder="h-14 mb-2"
                  />
                </Link>
              </div>
            ))}
          {userCourses.length > cardsPerPage && (
            <div className="hidden xl:flex">
              <IconButton
                className="absolute left-0 ml-[19%]"
                onClick={handlePrevPage}
              >
                <ArrowBlack1 />
              </IconButton>
              <IconButton
                className="absolute right-50"
                onClick={handleNextPage}
              >
                <ArrowBlack2 />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
