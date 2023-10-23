"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../state/features/authSlice";
import useInput from "@/hooks/useInput";
import Link from "next/link";
import Image from "next/image";
import CheckList from "@/common/CheckList";
import { Check } from "@/common/Icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "@/components/Cards";

export default function Intro_test() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="w-full my-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-mystery-mixed text-[1.8rem] text-center w-[70%] leading-8 -rotate-2 py-4">
            ¿Qué vas a aprender hoy?
          </h2>
          <div className="  w-full mt-10">
            {/* max-w-[330px] */}
            <div className="max-w-xl mx-auto w-full">
              {/* luego en responsive aca iria la nube bg-gray-200  bg-white */}
              <Carousel
                showArrows={false}
                dynamicHeight={false}
                emulateTouch={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                centerMode={true}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-black w-[90%] h-[40px] flex justify-center items-center text-white font-mystery-mixed text-2xl rounded-t-lg">
                    Ux Research
                  </div>
                  <div className="bg-[url('/img/ux-indonesia-unsplash.png')] w-[90%] h-[13rem] bg-no-repeat bg-cover bg-center rounded-b-lg flex flex-col justify-end items-center">
                    <div className="font-mystery-mixed text-white w-[70%] h-[2.7rem] bg-buttonBlack mb-4 flex flex-row justify-center items-center">
                      <h1 className="text-[1.3rem]">Ver curso</h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-black w-[90%] h-[40px] flex justify-center items-center text-white font-mystery-mixed text-2xl rounded-t-lg">
                    Ux Writing
                  </div>
                  <div className="bg-[url('/img/studio.png')] w-[90%] h-[13rem] bg-no-repeat bg-cover bg-center rounded-b-lg" />
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <div className="bg-black w-[90%] h-[40px] flex justify-center items-center text-white font-mystery-mixed text-2xl rounded-t-lg">
                    Ui Design
                  </div>
                  <div className="bg-[url('/img/tirza.png')] w-[90%] h-[13rem] bg-no-repeat bg-cover bg-center rounded-b-lg" />
                </div>

                {/* <div className="">
              <Image
                src="/img/ux-indonesia-unsplash.png"
                alt="Slide 1"
                width={800}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/img/studio.png"
                alt="Slide 2"
                width={800}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/img/tirza.png"
                alt="Slide 3"
                width={800}
                height={400}
              />
            </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-6 mt-2">
        <h2 className="font-mystery-mixed text-start text-[25px] w-[70%] leading-7 mb-4 -rotate-2 ml-[.4rem] pb-10 pt-5">
          ¿Qué esperar de un curso en by m studio?
        </h2>
        <div className="flex flex-col gap-y-4 my-4 text-[15px]">
          <CheckList
            text="Aprende a tu ritmo y de manera asincrónica"
            className="p-0.5 border-pink mr-5"
            classNameDiv={"w-[100%]"}
            icon={<Check />}
          />
          <CheckList
            text="Accede a contenido actualizado"
            className="p-0.5 border-green mr-5"
            classNameDiv={"w-[100%]"}
            icon={<Check />}
          />
          <CheckList
            text="Accede y conecta con una comunidad de trainees"
            className="p-0.5 border-blue mr-5"
            classNameDiv={"w-[100%]"}
            icon={<Check />}
          />
          <CheckList
            text="Obtén tu certificado al finalizar"
            className="p-0.5 border-pink mr-5"
            classNameDiv={"w-[100%]"}
            icon={<Check />}
          />
        </div>
      </div>
      <div className="relative w-full h-auto">
        <Image
          src={"/img/paper.png"}
          width={200}
          height={200}
          className="w-full h-full"
        />
        <div className="absolute inset-0 text-black flex flex-col items-center justify-center">
          <h2 className="font-mystery-mixed text-[2.4rem] -translate-y-[19px]">
            Studio By M
          </h2>
          <h2 className="font-mystery-mixed text-[1.2rem] pb-[2px]">
            Cuenta con el apoyo de
          </h2>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-[4rem]">
        <Image
          src={"/img/image1.png"}
          width={200}
          height={200}
          className="w-[8rem] h-full"
        />
        <Image
          src={"/img/image2.png"}
          width={200}
          height={200}
          className="w-[5rem] h-full"
        />
      </div>

      {/*  <div className="translate-y-[6rem]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[url('/img/paper.png')] bg-contain bg-center bg-no-repeat w-full h-[10rem] flex flex-col justify-start items-center">
            <h2 className="font-mystery-mixed text-[2.4rem] pt-[3rem] leading-3">
              Studio By M
            </h2>
            <h2 className="font-mystery-mixed text-[1.2rem] pt-[2.3rem] leading-3">
              Cuenta con el apoyo de
            </h2>
          </div>
        </div>
      </div> */}
      {/* <div className="flex flex-col justify-center items-center">
        <div className="bg-[url('/img/image1.png')] bg-contain bg-center bg-no-repeat w-[8.5rem] h-[10rem]" />
      </div>
      <div className="flex flex-col justify-center items-center -translate-y-[4.5rem]">
        <div className="bg-[url('/img/image2.png')] bg-contain bg-center bg-no-repeat w-[5.8rem] h-[10rem]" />
      </div> */}
    </div>
  );
}
