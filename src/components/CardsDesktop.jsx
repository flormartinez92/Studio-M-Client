import { Clock, Heart, Signal } from "@/common/Icons";
import Image from "next/image";
import React from "react";

export default function CardsDesktop(props) {
  return (
    <section className="flex flex-col justify-center items-center my-11">
      <div className="hidden lg:block w-[85%] my-11 drop-shadow-lg rounded-xl max-w-7xl ">
        <div className="bg-buttonBlack flex justify-center items-center font-mystery-mixed text-4xl text-white rounded-t-xl">
          <h3 className={`py-5 tracking-wider ${props.courseTitleClasses}`}>
            {props.courseLongTitle}
          </h3>
        </div>

        <div className="flex">
          <Image
            width={280}
            height={255}
            src={props.courseImg_url}
            alt="Imagen Curso"
            className="rounded-bl-lg drop-shadow-lg"
          />

          {/* Aca si estoy en la vista donde estan todos los detalles, se muestra esto */}
          {props.cartShopPlusBgBlack ? (
            <div className="bg-lightGrey rounded-br-lg p-10 ">
              <div className="flex flex-row justify-between items-center text-[1.813rem] text-h3Black">
                <h4 className="font-ms-gothic ">{props.courseSubtitle}</h4>

                <p className={`font-mystery-mixed ${props.coursePriceClasses}`}>
                  ${props.coursePrice} ARS
                </p>
              </div>

              <p className="font-ms-gothic text-xl text-darkGray leading-tight mt-4">
                {props.courseDescription}
              </p>

              <div className="flex  justify-between items-center pt-14 font-ms-gothic text-h3Black text-[1.625rem] leading-tight">
                {props.courseLevel ? (
                  <div className="flex items-center space-x-2">
                    <Signal width={50} height={50} />
                    <p className={`${props.courseLevelClasses}`}>
                      {props.courseLevel}
                    </p>
                  </div>
                ) : null}
                {props.courseDuration ? (
                  <div className="flex items-center space-x-4">
                    <Clock />
                    <p className={`${props.courseDurationClasses}`}>
                      {props.courseDuration}
                    </p>
                  </div>
                ) : null}
                <div className="flex items-center space-x-3">
                  <p className={`${props.courseFavoriteClasses}`}>
                    Agregar a la lista de deseos
                  </p>
                  <Heart />
                </div>
                {props.cartShopPlusBgBlack ? (
                  <div className="flex space-x-3">
                    <p className={`${props.cartShopPlusBgBlackClasses}`}>
                      {props.cartShopPlusBgBlack}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="bg-lightGrey rounded-br-lg p-10 ">
              <h4 className="font-ms-gothic text-3xl text-h3Black">
                {props.courseSubtitle}
              </h4>
              <p className="font-ms-gothic text-xl text-darkGray leading-tight mt-4">
                {props.courseDescription}
              </p>
              {!props.courseLevel && !props.courseDuration ? (
                <div className="flex justify-end items-end pt-14 font-ms-gothic text-h3Black text-[1.625rem] leading-tight">
                  {props.coursePrice ? (
                    <div className="flex space-x-3">
                      <p className={`${props.coursePriceClasses}`}>
                        ${props.coursePrice} ARS
                      </p>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="flex  justify-between items-center pt-14 font-ms-gothic text-h3Black text-[1.625rem] leading-tight">
                  {props.courseLevel ? (
                    <div className="flex items-center space-x-2">
                      <Signal width={50} height={50} />
                      <p className={`${props.courseLevelClasses}`}>
                        {props.courseLevel}
                      </p>
                    </div>
                  ) : null}
                  {props.courseDuration ? (
                    <div className="flex items-center space-x-4">
                      <Clock />
                      <p className={`${props.courseDurationClasses}`}>
                        {props.courseDuration}
                      </p>
                    </div>
                  ) : null}
                  <div className="flex items-center space-x-3">
                    <p className={`${props.courseFavoriteClasses}`}>
                      Agregar a la lista de deseos
                    </p>
                    <Heart />
                  </div>
                  {props.coursePrice ? (
                    <div className="flex  space-x-3">
                      <p className={`${props.coursePriceClasses}`}>
                        ${props.coursePrice} ARS
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
