"use client";

import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";
import IconButton from "@/common/IconButton";
import { CartShopPlus, Clock, Heart, Signal } from "@/common/Icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/state/features/cartSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Cards({
  title,
  classNameTitle,
  buttonTitle,
  icon,
  img,
  classNameImg,
  className,
  className2,
  classNameButton,
  classNameDivButton,
  classNameIconButton,
  classNameBorder,
  handleViewCoursesClick,
  handleCartClick,
  // newClass,
  // titleResume,
  // price,
  // resume,
  // level,
  // hours,
  // wishes,
  // id,
}) {
  // const dispatch = useDispatch();
  // const userId = localStorage.getItem("userId");

  // const handleAddToCart = async () => {
  //   try {
  //     await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/cart/add/${id}/${userId}`
  //     );

  //     dispatch(addToCart(id));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const router = useRouter();

  // const handleClick = async (courseId) => {
  //   axios
  //     .get(`http://localhost:8081/api/course/all-courses/${courseId}`)
  //     .then(() => router.push(`/courses/${courseId}`));
  // };

  return (
    <div className={`w-80 relative ${className || ""}`}>
      <h2
        className={`text-3xl text-white bg-[#181717] font-mystery-mixed p-1 flex items-center justify-center rounded-t-lg ${
          classNameTitle || ""
        }`}
      >
        {title}
      </h2>
      <div className={`${className2}`}>
        <Image
          src={img}
          width={500}
          height={500}
          alt="Picture"
          className={`${classNameImg}`}
        />
        <div className={`${classNameDivButton}`}>
          <Border
            className={`flex gap-0.5 w-auto h-10 absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${classNameBorder}`}
          >
            <Button
              onClick={handleViewCoursesClick}
              className={`font-mystery-mixed bg-[#181717] ${classNameButton}`}
            >
              {buttonTitle}
            </Button>
            <Button
              onClick={handleCartClick}
              className={`${classNameIconButton}`}
            >
              {icon}
            </Button>
          </Border>
        </div>
      </div>
    </div>
  );
}
