import React from "react";
import Image from "next/image";

export default function CourseInfo() {
  const course = {
    level: "Intermedio",
    duration: 30,
    price: 10000 + " ARS",
  };

  return (
    <div className="max-w-[210px] max-h-[197px] bg-white border-4 border-solid border-pink-600 p-5px flex flex-col justify-between">
      <div className="text-center mb-4">
        <div className="max-h-[24px] flex items-center justify-center mt-5 mb-2">
          <Image
            src={"/svg/gg_signal.svg"}
            width={100}
            height={100}
            className="w-[24px] h-[24px]"
            alt="scales icon"
          ></Image>
          <p className="text-lg text-[20px]">{course.level}</p>
        </div>
        <div className="h-[26px] flex items-center justify-center gap-[16px]">
          <Image
            src={"/svg/clock-outline.svg"}
            width={100}
            height={100}
            className="w-[24px] h-[24px]"
            alt="clock icon"
          ></Image>
          <p className="text-sm text-[20px]">{course.duration}hs.</p>
        </div>
      </div>

      <div className="max-h-[24px] flex items-center justify-center gap-[16px]">
        <p className="text-black text-[20px]">Mi lista</p>
        <div className="bg-black">ho</div>
      </div>

      <div className="h-[35px] flex items-center justify-around gap-[12px] mt-4 mb-5">
        <p className="text-lg text-[23px] font-normal">${course.price}</p>
        <div className="bg-black">ho</div>
      </div>
    </div>
  );
}
