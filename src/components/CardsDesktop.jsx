import {
  CartShopPlus,
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
  subtitleFull = false,
}) {
  const is900Screen = useMediaQuery("(min-width: 900px)");
  const isCart1024Screen = useMediaQuery("(min-width: 1024px)");
  const isCart820Screen = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 1024px)"
  );

  const is820Screen = useMediaQuery(
    "only screen and (min-width : 820px) and (max-width : 900px)"
  );

  const is768Screen = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 820px)"
  );

  return (
    <section className="flex flex-col justify-center items-center py-4 w-full drop-shadow-lg max-w-[950px] select-none">
      <div
        className="bg-buttonBlack font-mystery-mixed text-letterWhite w-full flex justify-center items-center rounded-t-[10px] py-[.35rem]"
        onClick={handleViewCourseClick}
      >
        <h2 className="text-[1.4rem] lg:text-[1.8rem]">{courseLongTitle}</h2>
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
          />
        </div>

        <div
          className={`basis-[100%] flex flex-col justify-around px-4 font-ms-gothic h-[12rem] min-h-[192px] max-h-[192px]`}
        >
          <div className=" flex justify-between">
            {subtitleFull ? (
              <>
                {is768Screen && (
                  <h2 className="text-[16px] text-h3Black">{courseSubtitle}</h2>
                )}
                {is820Screen && (
                  <h2 className="text-[16px] text-h3Black">{courseSubtitle}</h2>
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
                  <h2 className="text-[16px] text-h3Black">{`${courseSubtitle.substring(
                    0,
                    45
                  )}...`}</h2>
                )}
                {is820Screen && (
                  <h2 className="text-[16px] text-h3Black">{`${courseSubtitle.substring(
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
                  .replace(",", ".")} ARS`}
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
                {`${courseDescription.substring(0, 360)}... `}
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
                <p className="lg:text-[17px] text-buttonBlack">{courseLevel}</p>
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
                  <div onClick={handleCartClick}>
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
                      .replace(",", ".")} ARS`}
                  </h2>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 <div className="grid grid-cols-4 w-[90%] max-w-[967px] py-6 drop-shadow-lg rounded-xl">
        <div
          className="col-span-4 grid justify-center items-center bg-buttonBlack font-mystery-mixed text-white rounded-t-xl cursor-pointer"
          onClick={handleViewCoursesClick}
        >
          <h3 className={`tracking-widest ${courseTitleClasses}`}>
            {isWideScreen
              ? courseLongTitle
              : courseLongTitle?.length > 47
              ? `${courseLongTitle.slice(0, 47)}...`
              : courseLongTitle}
          </h3>
        </div>

        <div className="col-span-1">
          <div className="w-full h-full">
            {courseImg_url && (
              <Image
                width={280}
                height={255}
                src={courseImg_url}
                alt="Imagen Curso"
                className="rounded-bl-lg drop-shadow-lg w-[100%] h-[100%] object-cover"
              />
            )}
          </div>
        </div>

        <div className="col-span-3">
          // Aca si estoy en la vista donde estan todos los detalles, se muestra esto
          {cartShopPlusBgBlack ? (
            <div className="bg-lightGrey rounded-br-lg p-6">
              <div className="flex flex-row justify-between  gap-x-4 tracking-tight items-center text-h3Black">
                <h4 className={`font-ms-gothic ${courseSubtitleClasses}`}>
                  {courseSubtitle}
                </h4>

                <p className={`font-mystery-mixed ${coursePriceClasses}`}>
                  ${Number(coursePrice).toLocaleString().replace(",", ".")}
                  ARS
                </p>
              </div>

              <p
                className={`font-ms-gothic tracking-tight text-darkGray leading-tight mt-4 ${courseDescriptionClasses}`}
              >
                {courseDescription.substring(0, 300)}
              </p>

              <div className="flex  justify-between items-center pt-8 font-ms-gothic text-h3Black leading-tight">
                {courseLevel ? (
                  <div className="flex items-center space-x-2">
                    <Signal
                      width={`${signaltWidth}`}
                      height={`${signalHeight}`}
                    />
                    <p className={`${courseLevelClasses}`}>{courseLevel}</p>
                  </div>
                ) : null}
                {courseDuration ? (
                  <div className="flex items-center space-x-4">
                    <Clock width={`${clockWidth}`} height={`${clockHeight}`} />
                    <p className={`${courseDurationClasses}`}>
                      {courseDuration}
                    </p>
                  </div>
                ) : null}
                <div className="flex items-center space-x-3">
                  <p className={`${courseFavoriteClasses}`}>
                    Agregar a la lista de deseos
                  </p>
                  <Heart
                    width={`${heartWidth}`}
                    height={`${heartHeight}`}
                    color={"#A31616"}
                  />
                </div>
                {cartShopPlusBgBlack ? (
                  <div className="flex space-x-3 cursor-pointer">
                    <div>{cartShopPlusBgBlack}</div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="bg-lightGrey rounded-br-lg p-6 ">
              <h4 className={`font-ms-gothic ${courseSubtitleClasses}`}>
                {courseSubtitle}
              </h4>
              <p
                className={`font-ms-gothic tracking-tight text-darkGray leading-tight mt-4 ${courseDescriptionClasses}`}
              >
                {courseDescription}
              </p>
              {!courseLevel && !courseDuration ? (
                <div className="flex justify-end items-end pt-8 font-ms-gothic text-h3Black text-[1.625rem] leading-tight">
                  {coursePrice ? (
                    <div className="flex space-x-3">
                      <p className={`font-ms-gothic ${coursePriceClasses}`}>
                        $
                        {Number(coursePrice).toLocaleString().replace(",", ".")}{" "}
                        ARS
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="flex  justify-between items-center pt-14 font-ms-gothic text-h3Black text-[1.625rem] leading-tight">
                  {courseLevel ? (
                    <div className="flex items-center space-x-2">
                      <Signal
                        width={`${signaltWidth}`}
                        height={`${signalHeight}`}
                      />
                      <p className={`${courseLevelClasses}`}>{courseLevel}</p>
                    </div>
                  ) : null}
                  {courseDuration ? (
                    <div className="flex items-center space-x-4">
                      <Clock
                        width={`${clockWidth}`}
                        height={`${clockHeight}`}
                      />
                      <p className={`${courseDurationClasses}`}>
                        {courseDuration}
                      </p>
                    </div>
                  ) : null}
                  <div className="flex items-center space-x-3">
                    <p className={`${courseFavoriteClasses}`}>
                      Agregar a la lista de deseos
                    </p>
                    <Heart width={`${heartWidth}`} height={`${heartHeight}`} />
                  </div>
                  {coursePrice ? (
                    <div className="flex  space-x-3">
                      <p className={`${coursePriceClasses}`}>
                        $
                        {Number(coursePrice).toLocaleString().replace(",", ".")}
                        ARS
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

*/
