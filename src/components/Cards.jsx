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
  buttonTitle,
  icon,
  img,
  classNameImg,
  className,
  className2,
  classNameButton,
  classNameIconButton,
  classNameBorder,
  newClass,
  titleResume,
  price,
  resume,
  level,
  hours,
  wishes,
  id,
}) {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const handleAddToCart = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/add/${id}/${userId}`
      );

      dispatch(addToCart(id));
    } catch (error) {
      console.error(error);
    }
  };

  const router = useRouter();

  const handleClick = async (courseId) => {
    axios
      .get(`http://localhost:8081/api/course/all-courses/${courseId}`)
      .then(() => router.push(`/courses/${courseId}`));
  };

  return (
    <div className={`w-80 relative ${className || ""}`}>
      <h2 className="text-3xl text-white bg-[#181818] font-mystery-mixed p-1 flex items-center justify-center rounded-t-lg">
        {title}
      </h2>
      <div className={`${className2}`}>
        <Image
          src={img}
          width={500}
          height={500}
          alt="Picture"
          className={classNameImg}
        />
        <Border
          className={`flex gap-0.5 w-auto h-10 absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${classNameBorder}`}
        >
          <Button
            onClick={() => handleClick(id)}
            className={`font-mystery-mixed ${classNameButton}`}
          >
            {buttonTitle}
          </Button>
          <Button className={`${classNameIconButton}`}>{icon}</Button>
        </Border>
        <div className={`hidden ${newClass}`}>
          <div className="flex flex-row justify-between w-[90%] font-medium md:text-sm lg:text-base xl:text-lg">
            <h3>{titleResume}</h3>
            <p>${price} ARS</p>
          </div>
          <p className="w-[90%] text-[#5C5A5A] md:text-[10px] lg:text-[12px] xl:text-[14px]">
            {resume}
          </p>
          <div className="flex flex-row justify-between items-center w-[90%] lg:text-sm xl:text-base">
            <p className="flex flex-row justify-between items-center">
              <Signal /> {level}
            </p>
            <p className="flex flex-row justify-between items-center gap-1">
              <Clock /> {hours}hs.
            </p>
            <p className="flex flex-row justify-between items-center gap-2">
              {wishes}{" "}
              <IconButton>
                <Heart />
              </IconButton>{" "}
            </p>
            <IconButton
              onClick={handleAddToCart}
              children={<CartShopPlus />}
              className={"bg-[#181818] h-8 w-8 rounded-2xl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
