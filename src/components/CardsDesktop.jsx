import { Clock, Heart, Signal } from "@/common/Icons";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

export default function CardsDesktop({
  handleViewCoursesClick,
  courseTitleClasses,
  courseLongTitle,
  courseImg_url,
  cartShopPlusBgBlack,
  courseSubtitleClasses,
  courseSubtitle,
  coursePriceClasses,
  coursePrice,
  courseDescriptionClasses,
  courseDescription,
  courseLevel,
  courseDuration,
  signaltWidth,
  signalHeight,
  courseLevelClasses,
  clockWidth,
  clockHeight,
  courseDurationClasses,
  courseFavoriteClasses,
  heartWidth,
  heartHeight,
}) {
  const isWideScreen = useMediaQuery("(min-width: 1300px)");

  return (
    <section className="flex flex-col justify-center items-center py-4">
      <div className="grid grid-cols-4 w-[90%] py-6 drop-shadow-lg rounded-xl max-w-6xl">
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
          {/* Aca si estoy en la vista donde estan todos los detalles, se muestra esto */}
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
                {courseDescription}
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
                  <Heart width={`${heartWidth}`} height={`${heartHeight}`} />
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
    </section>
  );
}
