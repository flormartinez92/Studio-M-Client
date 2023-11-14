import { Clock, Heart, Signal } from "@/common/Icons";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

export default function CardsDesktop(props) {
  const isWideScreen = useMediaQuery("(min-width: 1300px)");

  return (
    <section className="flex flex-col justify-center items-center py-4">
      <div className="grid grid-cols-4 w-[90%] py-6 drop-shadow-lg rounded-xl max-w-6xl">
        <div
          className="col-span-4 grid justify-center items-center bg-buttonBlack font-mystery-mixed text-white rounded-t-xl cursor-pointer"
          onClick={props.handleViewCoursesClick}
        >
          <h3 className={`tracking-widest ${props.courseTitleClasses}`}>
            {isWideScreen
              ? props.courseLongTitle
              : props.courseLongTitle.length > 47
              ? `${props.courseLongTitle.slice(0, 47)}...`
              : props.courseLongTitle}
          </h3>
        </div>

        <div className="col-span-1">
          <div className="w-full h-full">
            <Image
              width={280}
              height={255}
              src={props.courseImg_url}
              alt="Imagen Curso"
              className="rounded-bl-lg drop-shadow-lg w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>

        <div className="col-span-3">
          {/* Aca si estoy en la vista donde estan todos los detalles, se muestra esto */}
          {props.cartShopPlusBgBlack ? (
            <div className="bg-lightGrey rounded-br-lg p-6">
              <div className="flex flex-row justify-between  gap-x-4 tracking-tight items-center text-h3Black">
                <h4 className={`font-ms-gothic ${props.courseSubtitleClasses}`}>
                  {props.courseSubtitle}
                </h4>

                <p className={`font-mystery-mixed ${props.coursePriceClasses}`}>
                  $
                  {Number(props.coursePrice).toLocaleString().replace(",", ".")}
                  ARS
                </p>
              </div>

              <p
                className={`font-ms-gothic tracking-tight text-darkGray leading-tight mt-4 ${props.courseDescriptionClasses}`}
              >
                {props.courseDescription}
              </p>

              <div className="flex  justify-between items-center pt-8 font-ms-gothic text-h3Black leading-tight">
                {props.courseLevel ? (
                  <div className="flex items-center space-x-2">
                    <Signal
                      width={`${props.signaltWidth}`}
                      height={`${props.signalHeight}`}
                    />
                    <p className={`${props.courseLevelClasses}`}>
                      {props.courseLevel}
                    </p>
                  </div>
                ) : null}
                {props.courseDuration ? (
                  <div className="flex items-center space-x-4">
                    <Clock
                      width={`${props.clockWidth}`}
                      height={`${props.clockHeight}`}
                    />
                    <p className={`${props.courseDurationClasses}`}>
                      {props.courseDuration}
                    </p>
                  </div>
                ) : null}
                <div className="flex items-center space-x-3">
                  <p className={`${props.courseFavoriteClasses}`}>
                    Agregar a la lista de deseos
                  </p>
                  <Heart
                    width={`${props.heartWidth}`}
                    height={`${props.heartHeight}`}
                  />
                </div>
                {props.cartShopPlusBgBlack ? (
                  <div className="flex space-x-3 cursor-pointer">
                    <div>{props.cartShopPlusBgBlack}</div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="bg-lightGrey rounded-br-lg p-10 ">
              <h4 className={`font-ms-gothic ${props.courseSubtitleClasses}`}>
                {props.courseSubtitle}
              </h4>
              <p
                className={`font-ms-gothic tracking-tight text-darkGray leading-tight mt-4 ${props.courseDescriptionClasses}`}
              >
                {props.courseDescription}
              </p>
              {!props.courseLevel && !props.courseDuration ? (
                <div className="flex justify-end items-end pt-14 font-ms-gothic text-h3Black text-[1.625rem] leading-tight">
                  {props.coursePrice ? (
                    <div className="flex space-x-3">
                      <p
                        className={`font-mystery-mixed ${props.coursePriceClasses}`}
                      >
                        $
                        {Number(props.coursePrice)
                          .toLocaleString()
                          .replace(",", ".")}
                        ARS
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="flex  justify-between items-center pt-14 font-ms-gothic text-h3Black text-[1.625rem] leading-tight">
                  {props.courseLevel ? (
                    <div className="flex items-center space-x-2">
                      <Signal
                        width={`${props.signaltWidth}`}
                        height={`${props.signalHeight}`}
                      />
                      <p className={`${props.courseLevelClasses}`}>
                        {props.courseLevel}
                      </p>
                    </div>
                  ) : null}
                  {props.courseDuration ? (
                    <div className="flex items-center space-x-4">
                      <Clock
                        width={`${props.clockWidth}`}
                        height={`${props.clockHeight}`}
                      />
                      <p className={`${props.courseDurationClasses}`}>
                        {props.courseDuration}
                      </p>
                    </div>
                  ) : null}
                  <div className="flex items-center space-x-3">
                    <p className={`${props.courseFavoriteClasses}`}>
                      Agregar a la lista de deseos
                    </p>
                    <Heart
                      width={`${props.heartWidth}`}
                      height={`${props.heartHeight}`}
                    />
                  </div>
                  {props.coursePrice ? (
                    <div className="flex  space-x-3">
                      <p className={`${props.coursePriceClasses}`}>
                        $
                        {Number(props.coursePrice)
                          .toLocaleString()
                          .replace(",", ".")}
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
