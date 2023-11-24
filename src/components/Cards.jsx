"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import { addToCart } from "@/state/features/cartSlice";
import Button from "@/common/Button";
import Border from "../common/Border";
import IconButton from "@/common/IconButton";
// import { CartShopPlus, Clock, Heart, Signal } from "@/common/Icons";

export default function Cards({
  title,
  classNameTitle,
  buttonTitle,
  icon,
  img,
  iconFavorite,
  iconFavorite2,
  classNameImg,
  className,
  className2,
  classNameButton,
  // classNameDivButton,
  classNameIconButton,
  classNameBorder,
  courseId,
}) {
  const dispatch = useDispatch();
  //Token para la informacion de usuario.
  const userToken = sessionStorage.getItem("token");
  const decodedToken = jwtDecode(userToken);

  //Pedido al back para agregar al carrito
  const handleAddToCart = async (courseId) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`, {
        courseId,
        userId: decodedToken._id,
      });

      dispatch(addToCart(courseId));
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

  //Estados y pedidos para favoritos
  const [isFavorite, setIsFavorite] = useState(true);

  //Lo agrega
  const handleAddFavorites = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/add/${courseId}/${decodedToken._id}`
      );

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  //Lo elimina
  const handleDeleteFavorites = async () => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/remove/${courseId}/${decodedToken._id}`
      );

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

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
        <IconButton
          className="absolute right-3 top-14"
          onClick={isFavorite ? handleDeleteFavorites : handleAddFavorites}
        >
          {isFavorite ? iconFavorite : iconFavorite2}
        </IconButton>
        {/* <div className={`${classNameDivButton}`}> */}
        <Border
          className={`flex gap-0.5 w-auto h-10 absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${classNameBorder}`}
        >
          <Button
            // onClick={handleViewCoursesClick}
            onClick={() => handleClick(courseId)}
            className={`font-mystery-mixed bg-[#181717] ${classNameButton}`}
          >
            {buttonTitle}
          </Button>
          <Button
            onClick={() => handleAddToCart(courseId)}
            className={`${classNameIconButton}`}
          >
            {icon}
          </Button>
        </Border>
        {/* </div> */}
      </div>
    </div>
  );
}