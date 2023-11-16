"use client";

import axios from "axios";
import Border from "./Border";
import IconButton from "./IconButton";
import { Clock, Signal, Heart, CartShopPlusBgBlack, FullHeart } from "./Icons";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";

export default function CourseSummary({
  level,
  hours,
  price,
  className,
  courseId,
}) {
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");
  const [favorite, setFavorite] = useState([]);

  // const dispatch = useDispatch();
  // const userId = localStorage.getItem("userId");

  // const handleAddToCart = async () => {
  //   try {
  //     await axios.post(
  //       `http://localhost:8081/api/cart/add/${courseId}/${userId}`
  //     );

  //     dispatch(addToCart(courseId));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(()=>{
  //   const fetchFavorites = async ()=>{
  //     try {
  //       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/favorites/all-courses`)
  //     } catch (error) {
  //       console.error("Error while fetching favorites:", error);
  //     }
  //   }
  // })

  const handleHeartClick = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
        { withCredentials: true }
      );

      const addFavorite = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/add/${courseId}/${data._id}`
      );
      console.log(addFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Border
      className={`p-4 border-[3px] border-pink flex flex-col justify-center items-center ${
        className || ""
      }`}
    >
      <div className=" md:flex md:gap-4 md:justify-around md:w-[560px] lg:w-[820px]">
        <div className="flex justify-center items-center gap-3 py-1 md:gap-1 ">
          <Signal
            width={isLgBreakpoint ? "45px" : "25px"}
            height={isLgBreakpoint ? "45px" : "25px"}
          />
          <h6 className="text-lg lg:text-2xl">{level}</h6>
        </div>
        <div className="flex justify-center items-center gap-5 py-1 md:gap-1 lg:gap-2">
          <Clock
            width={isLgBreakpoint ? "25px" : "16px"}
            height={isLgBreakpoint ? "25px" : "16px"}
          />
          <p className="text-lg lg:text-2xl">{hours}.</p>
        </div>
        <div className="flex justify-center items-center py-1 gap-5 md:gap-2">
          <p className="md:hidden text-lg">Mi lista</p>
          <p className="hidden md:flex md:text-lg lg:text-2xl">
            Agregar a lista de deseos
          </p>
          <IconButton
            className="cursor-pointer"
            onClick={() => handleHeartClick()}
          >
            {/* <FullHeart /> */}
            <Heart
              width={isLgBreakpoint ? "25px" : "16px"}
              height={isLgBreakpoint ? "25px" : "16px"}
            />
          </IconButton>
        </div>
        <div className="flex justify-center items-center gap-3 py-1 font-medium">
          <h5 className="md:hidden text-lg">
            ${Number(price).toLocaleString().replace(",", ".")} ARS
          </h5>
          <div>
            <CartShopPlusBgBlack
              width={isLgBreakpoint ? "57px" : "45px"}
              height={isLgBreakpoint ? "57px" : "45px"}
              onClick={() => alert("click en CART")}
            />
          </div>
        </div>
      </div>
    </Border>
  );
}
