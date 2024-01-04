import {
  CartShopPlusBgBlack,
  Clock,
  Heart,
  LineHeart,
  Signal,
} from "@/common/Icons";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

export default function CardsDesktop({
  courseLongTitle,
  courseImg_url,
  cartShopPlusBgBlack = false,
  courseSubtitle,
  coursePrice,
  courseDescription,
  courseLevel,
  courseDuration,
  notjustPrice = false,
  cardWithoutItems = false,
  fullDescription = false,
  isFavorite = false,
  handleFavoriteClick,
  handleViewCourseClick,
  handleCartClick,
  handleDelteCourse,
  subtitleFull = false,
  iconDelete = false,
  isDeleting = false,
}) {
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

  return (
    <section
      className={`flex flex-col ${
        isDeleting && "animate__animated animate__bounceOutLeft"
      } justify-center items-center py-4 w-full drop-shadow-lg max-w-[950px] select-none`}
    >
      <div className="animate__animated animate__fadeInLeft ">
        <div
          className="bg-buttonBlack font-mystery-mixed relative text-letterWhite w-full flex justify-center items-center rounded-t-[10px] py-[.35rem] cursor-pointer"
          onClick={handleViewCourseClick}
        >
          <h2 className="text-[1.4rem] lg:text-[1.8rem]">{courseLongTitle}</h2>
          {iconDelete && (
            /* md:bottom-[.5rem] md:right-4 */
            <div
              className="absolute  right-4  font-mystery-mixed text-4xl"
              onClick={handleDelteCourse}
            >
              X
            </div>
          )}
        </div>
        <div className="flex w-full bg-page rounded-b-[10px] items-center">
          <div
            className={`basis-[25%] drop-shadow-lg h-[12rem] max-w-[200px] min-w-[200px]`}
          >
            <Image
              src={courseImg_url}
              layout="fill"
              objectFit="cover"
              className="rounded-bl-[10px]"
              alt="img_course"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 200px"
            />
          </div>

          <div
            className={`basis-[100%] flex flex-col justify-around px-4 font-ms-gothic h-[12rem] min-h-[192px] max-h-[192px]`}
          >
            <div className=" flex justify-between">
              {subtitleFull ? (
                <>
                  {is768Screen && (
                    <h2 className="text-[16px] text-h3Black">
                      {courseSubtitle}
                    </h2>
                  )}
                  {is820Screen && (
                    <h2 className="text-[16px] text-h3Black">
                      {courseSubtitle}
                    </h2>
                  )}
                  {is900Screen && (
                    <h2 className="text-[16px] text-h3Black lg:text-[19px]">
                      {courseSubtitle}
                    </h2>
                  )}
                </>
              ) : (
                <>
                  {is768Screen && (
                    <h2 className="text-[16px] text-h3Black">{`${courseSubtitle?.substring(
                      0,
                      45
                    )}...`}</h2>
                  )}
                  {is820Screen && (
                    <h2 className="text-[16px] text-h3Black">{`${courseSubtitle?.substring(
                      0,
                      53
                    )}...`}</h2>
                  )}
                  {is900Screen && (
                    <h2 className="text-[16px] text-h3Black lg:text-[19px]">{`${courseSubtitle}`}</h2>
                  )}
                </>
              )}

              {cartShopPlusBgBlack && (
                <h2 className="lg:text-[19px]">
                  {`$${Number(coursePrice)
                    .toLocaleString()
                    .replace(",", ".")} USD`}
                </h2>
              )}
            </div>
            <div className=" w-full leading-4">
              {fullDescription ? (
                <p className="text-[14px] text-darkGray lg:text-[17px]">
                  {courseDescription}
                </p>
              ) : (
                <p className="text-[14px] text-darkGray lg:text-[17px]">
                  {`${courseDescription?.substring(0, 360)}... `}
                  <span
                    className="text-[1rem] font-bold hover:underline cursor-pointer"
                    onClick={handleViewCourseClick}
                  >
                    ver más
                  </span>
                </p>
              )}
            </div>
            <div
              className={`w-full flex ${
                notjustPrice ? "justify-between" : "justify-end"
              } items-center text-[12px]`}
            >
              {notjustPrice && (
                <div className="flex justify-center items-center">
                  <Signal width={25} height={25} />
                  <p className="lg:text-[17px] text-buttonBlack">
                    {courseLevel}
                  </p>
                </div>
              )}
              {notjustPrice && (
                <div className="flex justify-center items-center gap-1">
                  <Clock width={19} height={19} />

                  <p className=" left-6 top-[1.1px] lg:text-[17px] text-buttonBlack">
                    {courseDuration}
                  </p>
                </div>
              )}
              {notjustPrice && (
                <div className="flex justify-center items-center gap-x-1">
                  <p className="text-[12px] lg:text-[17px] text-buttonBlack">
                    Agregar a la lista de deseos
                  </p>
                  <div onClick={handleFavoriteClick} className="cursor-pointer">
                    {isFavorite ? (
                      <Heart width={16} height={16} color={"#A21616"} />
                    ) : (
                      <LineHeart width={16} height={16} color={"#A21616"} />
                    )}
                  </div>
                </div>
              )}

              {cardWithoutItems ? (
                <></>
              ) : (
                <div className="flex justify-center items-center gap-x-1">
                  {cartShopPlusBgBlack ? (
                    <div onClick={handleCartClick} className="cursor-pointer">
                      {isCart820Screen && (
                        <CartShopPlusBgBlack width={40} height={40} />
                      )}
                      {isCart1024Screen && (
                        <CartShopPlusBgBlack width={50} height={50} />
                      )}
                    </div>
                  ) : (
                    <h2 className="lg:text-[19px]">
                      {`$${Number(coursePrice)
                        .toLocaleString()
                        .replace(",", ".")} USD`}
                    </h2>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
