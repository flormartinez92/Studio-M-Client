"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";
import IconButton from "@/common/IconButton";
import { Arrow, ArrowBack, BurgerMenu2, Check } from "@/common/Icons";
import Button from "@/common/Button";
import Image from "next/image";
import { Message } from "@/common/Message";

export default function SelectCourse({ params }) {
  const { userId, courseId, classId } = params["select-course"];
  const [completed, setCompleted] = useState(false);
  const [courses, setCourses] = useState([]);
  const handleClick = () => !completed && setCompleted(true);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/courseClass/${userId}/${courseId}/${classId}`
      )
      .then((res) => {
        const courseClass = res.data;
        console.log(courseClass);
        setCourses(courseClass);
      })
      .catch((error) => {
        console.error("Error getting classes:", error);
      });
  }, []);

  return (
    <div className="bg-white bg-opacity-0 flex flex-col justify-between h-auto items-center gap-8">
      <div className="flex flex-row w-[90%] items-center justify-between mt-4">
        <div className="flex flex-row justify-between items-center gap-2 text-base">
          <IconButton className={""}>
            <BurgerMenu2 width="30" height="30" color={"black"} />
          </IconButton>
          <h2 className="font-ms-gothic text-base items-center">
            Secciones del curso
          </h2>
        </div>
        <IconButton>
          <ArrowBack color={"black"} />
          <span style={{ marginRight: "20px" }}></span>
          <Arrow color={"black"} />
        </IconButton>
      </div>
      <div className="w-full">
        {/* {courses.map((course) =>
          course.modules.map((module) =>
            module.topics.map((topic) =>
              topic.classes.map((clase, claseIndex) => ( */}
        <Message
          // key={clase._id}
          item_num="1"
          text="hola"
          className={
            "text-white text-2xl w-[90%] bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center py-14 sm:py-24 md:py-28 md:px-10 md:text-3xl lg:py-40 lg:px-28 lg:text-4xl xl:py-48 xl:text-5xl"
          }
        />
        {/* ))
            )
          )
        )} */}
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
            "flex flex-row justify-between items-center w-56 p-2 font-ms-gothic text-2xl mb-14 xl:p-2 xl:px-10 xl:w-60 xl:text-3xl"
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

// "use client";

// import React, { useEffect, useState } from "react";
// import Button from "@/common/Button";
// import { Message } from "@/common/Message";
// import Image from "next/image";
// import { Arrow, ArrowBack, BurgerMenu2, Check } from "@/common/Icons";
// import IconButton from "@/common/IconButton";
// import axios from "axios";

// export default function SelectCourse({ params }) {
//   const classId = params["select-course"];
//   const [completed, setCompleted] = useState(false);
//   const [courses, setCourses] = useState([]);
//   const [currentClassIndex, setCurrentClassIndex] = useState(0);
//   const handleClick = () => !completed && setCompleted(true);

//   useEffect(() => {
//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminCourse/all-courses`)
//       .then((res) => {
//         const courses = res.data;
//         console.log(courses);
//         setCourses(courses);
//       })
//       .catch((error) => {
//         console.error("Error getting courses:", error);
//       });
//   }, []);

//   const goToNextClass = () => {
//     if (currentClassIndex < getTotalClasses() - 1) {
//       setCurrentClassIndex(currentClassIndex + 1);
//     }
//   };

//   const goToPrevClass = () => {
//     if (currentClassIndex > 0) {
//       setCurrentClassIndex(currentClassIndex - 1);
//     }
//   };

//   const getTotalClasses = () => {
//     return courses.reduce(
//       (total, course) =>
//         total +
//         course.modules.reduce(
//           (moduleTotal, module) =>
//             moduleTotal +
//             module.topics.reduce(
//               (topicTotal, topic) => topicTotal + topic.classes.length,
//               0
//             ),
//           0
//         ),
//       0
//     );
//   };

//   const getCurrentClass = () => {
//     let currentIndex = currentClassIndex;
//     for (const course of courses) {
//       for (const module of course.modules) {
//         for (const topic of module.topics) {
//           const classCount = topic.classes.length;
//           if (currentIndex < classCount) {
//             return topic.classes[currentIndex];
//           } else {
//             currentIndex -= classCount;
//           }
//         }
//       }
//     }
//     return null;
//   };

//   const currentClass = getCurrentClass();

//   return (
//     <div className="bg-white bg-opacity-0 flex flex-col justify-between h-auto items-center gap-8">
//       <div className="flex flex-row w-[90%] items-center justify-between mt-4">
//         <div className="flex flex-row justify-between items-center gap-2 text-base">
//           <IconButton className={""}>
//             <BurgerMenu2 width="30" height="30" color={"black"} />
//           </IconButton>
//           <h2 className="font-ms-gothic text-base items-center">
//             Secciones del curso
//           </h2>
//         </div>
//         <div className="flex justify-between">
//           <IconButton onClick={goToPrevClass} className={"mr-4"}>
//             <ArrowBack color={"black"} />
//           </IconButton>
//           <IconButton
//             onClick={goToNextClass}
//             disabled={currentClassIndex === getTotalClasses() - 1}
//           >
//             <Arrow color={"black"} />
//           </IconButton>
//         </div>
//       </div>
//       <div className="w-full">
//         {currentClass && (
//           <Message
//             key={currentClass._id}
//             item_num={currentClassIndex + 1}
//             text={currentClass.classInfo}
//             className={
//               "text-white text-2xl w-[90%] bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center py-14 sm:py-24 md:py-28 md:px-10 md:text-3xl lg:py-40 lg:px-28 lg:text-4xl xl:py-48 xl:text-5xl"
//             }
//           />
//         )}
//       </div>
//       {completed ? (
//         <Button
//           type={"rounder"}
//           className={
//             "flex flex-row justify-center items-center w-40 p-2 mb-14 bg-green xl:p-2 xl:px-10 xl:w-80 xl:text-3xl"
//           }
//         >
//           <Check color={"black"} width={"50"} height={"50"} />
//         </Button>
//       ) : (
//         <Button
//           type={"rounder"}
//           className={
//             "flex flex-row justify-between items-center w-56 p-2 font-ms-gothic text-2xl mb-14 xl:p-2 xl:px-10 xl:w-60 xl:text-3xl"
//           }
//           onClick={handleClick}
//         >
//           Completar&nbsp;
//           <Image
//             src={"/img/Ellipse.png"}
//             width={"26"}
//             height={"26"}
//             alt="ellipse"
//           />
//         </Button>
//       )}
//     </div>
//   );
// }
