import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cards from "./Cards";
import axios from "axios";
import { useSelector } from "react-redux";

const MyCourses = () => {
  const [userCourses, setUserCourses] = useState([]);
  const { user } = useSelector((store) => store.auth);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (user?.id) {
      try {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/userCourses/${user?.id}`)
          .then((res) => setUserCourses(res.data));
          //setCurrentTitle(title);
      } catch (error) {
        console.error(error);
      }
    }
  }, [user?.id]);

  //CAMBIAR TITULO CUANDO SE CAMBIEN LOS MODELOS Y TENGA TITULO CORTO

  return (
    <div className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center">
      <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6 flex flex-row">
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