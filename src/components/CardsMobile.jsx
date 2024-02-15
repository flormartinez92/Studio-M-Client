import {
  CartShopPlusBgBlack,
  CartShopSimple,
  Clock,
  Heart,
  LineHeart,
  Signal,
} from "@/common/Icons";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Border from "@/common/Border";
import Button from "@/common/Button";
import Link from "next/link";

export default function CardsMobile({ img, title, price, handleClickDelete }) {
  const is900Screen = useMediaQuery("(min-width: 900px)");
  const isCart1024Screen = useMediaQuery("(min-width: 1024px)");
  const isCart820Screen = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 1023px)"
  );

  const is820Screen = useMediaQuery(
    "only screen and (min-width : 820px) and (max-width : 900px)"
  );

  const is768Screen = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 820px)"
  );

  //console.log(statusAnimated);

  return (
    <section
      className={`animate__animated animate__fadeInLeft flex flex-col justify-start items-center  select-none  w-[15rem] h-[16.5rem] `}
    >
      {/* <Image src={img} layout="fill" objectFit="cover" /> */}
      <div className="w-full bg-buttonBlack h-14 text-[1.6rem] text-white font-mystery-mixed flex justify-center items-center rounded-t-[10px]">
        <div className="flex basis-[85%] text-[1.5rem] justify-center">
          {title}
        </div>
        <div
          className="flex basis-[15%] text-[2rem] cursor-pointer"
          onClick={handleClickDelete}
        >
          X
        </div>
      </div>
      <div className="h-full relative">
        <Image
          src={img}
          width={320}
          height={200}
          className="h-full rounded-b-[10px]"
          alt="Imagen"
        />
        <div className="absolute inset-0 flex justify-center items-end mb-2">
          <div className="w-full group flex justify-center items-end h-auto">
            <div className="transition-transform duration-700 transform-gpu scale-[1] group-hover:scale-[1.15]">
              <Border
                className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1`}
              >
                <Button
                  className={`font-mystery-mixed py-2 px-3 whitespace-nowrap flex items-center text-[1.5rem] leading-5`}
                >
                  {`${Number(price).toLocaleString().replace(",", ".")} US$`}
                </Button>
              </Border>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
