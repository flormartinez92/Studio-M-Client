import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cards from "./Cards";
import axios from "axios";
import { useSelector } from "react-redux";

const MyCourses = () => {
  const [userCourses, setUserCourses] = useState([]);
  const userId = localStorage.getItem("userId");
  const { user } = useSelector((store) => store.auth);
  //title

  useEffect(() => {
    if (user?.mail) {
      try {
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/userCourses`, {
            mail: user?.mail,
          })
          .then((res) => setUserCourses(res.data));
        //setCurrentTitle(title)
      } catch (error) {
        console.error(error);
      }
    }
  }, [userId]);

  //Titulo acortado
  const shortTitle = (title) => title.split(" ").slice(0, 2);

  return (
    <div className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center">
      <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6 flex flex-row">
        {userCourses?.map((userCourse) => (
          <div key={userCourse._id} className="mr-4">
            <Link href={`/my-account/${userCourse._id}`}>
              <Cards
                title={shortTitle(userCourse.courseTitle)}
                buttonTitle="20 %"
                img={userCourse.courseImg_url}
                className="max-w-[205px]"
                classNameButton="py-1 px-3"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;

// if (title === "Mis cursos") {
//   try {
//     await axios
//       .get(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}/purchasedCourse`
//       )
//       .then((res) => setUserCourses(res.data));
//     setCurrentTitle(title);
//   } catch (error) {
//     console.error(error);
//   }
// }
