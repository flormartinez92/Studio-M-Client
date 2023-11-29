import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cards from "./Cards";
import axios from "axios";
import inputScroll from "@/hooks/useScroll";

const MyCourses = ({ decodedToken }) => {
  //Estado para los cursos
  const [userCourses, setUserCourses] = useState([]);

  //hook para scrollear
  const {
    containerRef: ContainerScroll_1,
    handleMouseDown: DownScroll_1,
    handleMouseLeave: LeaveScroll_1,
    handleMouseMove: MoveScroll_1,
    handleMouseUp: MouseUpScroll_1,
  } = inputScroll();

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

  return (
    <div className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center scrollbar-none">
      <div
        className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6 flex flex-row"
        ref={ContainerScroll_1}
        onMouseDown={DownScroll_1}
        onMouseMove={MoveScroll_1}
        onMouseUp={MouseUpScroll_1}
        onMouseLeave={LeaveScroll_1}
      >
        {userCourses?.map((userCourse) => (
          <div key={userCourse.courseInfo._id} className="mr-4">
            <Link href={`/my-account/${userCourse.courseInfo._id}`}>
              <Cards
                title={userCourse.courseInfo.courseShortTitle}
                buttonTitle={userCourse.progress + "%"}
                img={userCourse.courseInfo.courseImg_url}
                className="min-w-[12.5rem] max-w-[12.5rem] h-[15rem] max-h-[15rem]"
                classNameButton="py-1 px-3 text-lg flex items-center"
                classNameImg="h-[12rem] object-cover rounded-b-lg"
                className2="h-full"
                classNameBorder="mb-2"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
