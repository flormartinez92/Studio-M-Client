"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
/* import { useState } from "react"; */
import React, { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../state/features/authSlice";
import useInput from "@/hooks/useInput";
import Link from "next/link";
import Image from "next/image";
import CheckList from "@/common/CheckList";
import { CartShopSimple, Check } from "@/common/Icons";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "@/components/Cards";
import Border from "@/common/Border";
import inputScroll from "@/hooks/useScroll";

export default function Intro_test() {
  const {
    containerRef: ContainerScroll_1,
    handleMouseDown: DownScroll_1,
    handleMouseLeave: LeaveScroll_1,
    handleMouseMove: MoveScroll_1,
    handleMouseUp: MouseUpScroll_1,
  } = inputScroll();
  const {
    containerRef: ContainerScroll_2,
    handleMouseDown: DownScroll_2,
    handleMouseLeave: LeaveScroll_2,
    handleMouseMove: MoveScroll_2,
    handleMouseUp: MouseUpScroll_2,
  } = inputScroll();

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="w-full my-10">
        <div className="flex flex-col justify-center items-center">
          <h2
            className="font-mystery-mixed text-[1.8rem] min-[400px]:text-[1.9rem] 
          min-[500px]:text-[2.1rem] md:text-[2.3rem] lg:text-[3rem] text-center md:text-start w-[70%] 
          leading-8 -rotate-2 py-4 md:mr-[8rem] mt-3  md:mt-16 min-[1500px]:text-[60px]"
          >
            ¿Qué vas a aprender hoy?
          </h2>
          <div className="w-full flex justify-center items-start">
            <div className="w-full hidden md:block">
              <div className="relative flex justify-center items-center">
                <Image
                  src={"/img/paper.png"}
                  width={400}
                  height={800}
                  className="w-full max-w-[90%] h-full"
                  alt="paper_fondo"
                />
                <div className="absolute w-full inset-0 flex justify-center items-center">
                  <div
                    className="select-none flex w-[24rem] md:h-[13.5rem] min-[990px]:h-[14rem] 
                    min-[1000px]:h-[15.5rem] 
                    min-[1300px]:h-[22.5rem]


                    lg:w-[63%]  lg:max-w-[770px] 
                    min-[1500px]:w-[83%]  min-[1500px]:max-w-[1050px]
                    min-[1500px]:ml-[3rem]
                    lg:justify-start lg:items-center  
                    overflow-x-scroll 
                    scrollbar-none   
                    scrollbar-thumb-page 
                    scrollbar-track-buttonBlack/50
                    mb-5 lg:mb-8
                    min-[1300px]:gap-x-[5rem]"
                    ref={ContainerScroll_1}
                    onMouseDown={DownScroll_1}
                    onMouseMove={MoveScroll_1}
                    onMouseUp={MouseUpScroll_1}
                    onMouseLeave={LeaveScroll_1}
                  >
                    <div className="w-[17rem] min-w-[16rem] min-[1300px]:min-w-[17.4rem] h-auto  flex flex-col justify-center items-center">
                      <div
                        className="bg-black w-[78%] min-[1000px]:w-[80%] min-[1300px]:w-full text-white h-10 min-[1300px]:h-14 
                      flex justify-center items-center font-mystery-mixed text-[1.7rem] min-[1300px]:text-[2.2rem] rounded-t-[.6rem]"
                      >
                        <h1>UX Research</h1>
                      </div>
                      <div className="relative w-full flex justify-center items-center">
                        <Image
                          src={"/img/ux-indonesia-unsplash.png"}
                          width={400}
                          height={800}
                          className="w-[78%] h-[10rem] 
                          min-[1000px]:h-[12rem] 
                          min-[1000px]:w-[80%]
                          min-[1300px]:h-[16rem]
                          min-[1300px]:w-full 
                          rounded-b-[.6rem]"
                          alt="indonesia"
                        />
                        <div className="absolute inset-0 flex justify-center items-end mb-2">
                          <div className="w-full group flex justify-center items-end h-auto">
                            <div className="transition-transform duration-700 transform-gpu scale-[1] group-hover:scale-[1.15]">
                              <Border
                                className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1`}
                              >
                                <Button
                                  className={`font-mystery-mixed py-2 min-[1300px]:py-4
                                  min-[1300px]:px-6 px-3 whitespace-nowrap
                                  flex items-center min-[1300px]:text-[1.7rem] text-[1.19rem] leading-3`}
                                >
                                  {"Ver curso"}
                                </Button>
                                <Button
                                  className={`py-2 px-2 flex items-center`}
                                >
                                  {<CartShopSimple />}
                                </Button>
                              </Border>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[17rem] min-w-[16rem] min-[1300px]:min-w-[17.4rem] h-auto  flex flex-col justify-center items-center">
                      <div
                        className="bg-black w-[78%] min-[1000px]:w-[80%] min-[1300px]:w-full text-white h-10 min-[1300px]:h-14 
                      flex justify-center items-center font-mystery-mixed text-[1.7rem] min-[1300px]:text-[2.2rem] rounded-t-[.6rem]"
                      >
                        <h1>UX Research</h1>
                      </div>
                      <div className="relative w-full flex justify-center items-center">
                        <Image
                          src={"/img/ux-indonesia-unsplash.png"}
                          width={400}
                          height={800}
                          className="w-[78%] h-[10rem] 
                          min-[1000px]:h-[12rem] 
                          min-[1000px]:w-[80%]
                          min-[1300px]:h-[16rem]
                          min-[1300px]:w-full 
                          rounded-b-[.6rem]"
                          alt="indonesia"
                        />
                        <div className="absolute inset-0 flex justify-center items-end mb-2">
                          <div className="w-full group flex justify-center items-end h-auto">
                            <div className="transition-transform duration-700 transform-gpu scale-[1] group-hover:scale-[1.15]">
                              <Border
                                className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1`}
                              >
                                <Button
                                  className={`font-mystery-mixed py-2 min-[1300px]:py-4
                                  min-[1300px]:px-6 px-3 whitespace-nowrap
                                  flex items-center min-[1300px]:text-[1.7rem] text-[1.19rem] leading-3`}
                                >
                                  {"Ver curso"}
                                </Button>
                                <Button
                                  className={`py-2 px-2 flex items-center`}
                                >
                                  {<CartShopSimple />}
                                </Button>
                              </Border>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[17rem] min-w-[16rem] min-[1300px]:min-w-[17.4rem] h-auto  flex flex-col justify-center items-center">
                      <div
                        className="bg-black w-[78%] min-[1000px]:w-[80%] min-[1300px]:w-full text-white h-10 min-[1300px]:h-14 
                      flex justify-center items-center font-mystery-mixed text-[1.7rem] min-[1300px]:text-[2.2rem] rounded-t-[.6rem]"
                      >
                        <h1>UX Writing</h1>
                      </div>
                      <div className="relative w-full flex justify-center items-center">
                        <Image
                          src={"/img/studio.png"}
                          width={400}
                          height={800}
                          className="w-[78%] h-[10rem] 
                          min-[1000px]:h-[12rem] 
                          min-[1000px]:w-[80%]
                          min-[1300px]:h-[16rem]
                          min-[1300px]:w-full 
                          rounded-b-[.6rem]"
                          alt="indonesia"
                        />
                        <div className="absolute inset-0 flex justify-center items-end mb-2">
                          <div className="w-full group flex justify-center items-end h-auto">
                            <div className="transition-transform duration-700 transform-gpu scale-[1] group-hover:scale-[1.15]">
                              <Border
                                className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1`}
                              >
                                <Button
                                  className={`font-mystery-mixed py-2 min-[1300px]:py-4
                                  min-[1300px]:px-6 px-3 whitespace-nowrap
                                  flex items-center min-[1300px]:text-[1.7rem] text-[1.19rem] leading-3`}
                                >
                                  {"Ver curso"}
                                </Button>
                                <Button
                                  className={`py-2 px-2 flex items-center`}
                                >
                                  {<CartShopSimple />}
                                </Button>
                              </Border>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[17rem] min-w-[16rem] min-[1300px]:min-w-[17.4rem] h-auto  flex flex-col justify-center items-center">
                      <div
                        className="bg-black w-[78%] min-[1000px]:w-[80%] min-[1300px]:w-full text-white h-10 min-[1300px]:h-14 
                      flex justify-center items-center font-mystery-mixed text-[1.7rem] min-[1300px]:text-[2.2rem] rounded-t-[.6rem]"
                      >
                        <h1>Ui Design</h1>
                      </div>
                      <div className="relative w-full flex justify-center items-center">
                        <Image
                          src={"/img/tirza.png"}
                          width={400}
                          height={800}
                          className="w-[78%] h-[10rem] 
                          min-[1000px]:h-[12rem] 
                          min-[1000px]:w-[80%]
                          min-[1300px]:h-[16rem]
                          min-[1300px]:w-full 
                          rounded-b-[.6rem]"
                          alt="indonesia"
                        />
                        <div className="absolute inset-0 flex justify-center items-end mb-2">
                          <div className="w-full group flex justify-center items-end h-auto">
                            <div className="transition-transform duration-700 transform-gpu scale-[1] group-hover:scale-[1.15]">
                              <Border
                                className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1`}
                              >
                                <Button
                                  className={`font-mystery-mixed py-2 min-[1300px]:py-4
                                  min-[1300px]:px-6 px-3 whitespace-nowrap
                                  flex items-center min-[1300px]:text-[1.7rem] text-[1.19rem] leading-3`}
                                >
                                  {"Ver curso"}
                                </Button>
                                <Button
                                  className={`py-2 px-2 flex items-center`}
                                >
                                  {<CartShopSimple />}
                                </Button>
                              </Border>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ACA VA EL CAROUSEL */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="select-none flex w-full
            h-full
            pr-10 
            pl-10
            mt-10
            gap-x-4
            md:hidden        
            overflow-x-scroll 
            scrollbar-none   
          scrollbar-thumb-page 
          scrollbar-track-buttonBlack/50
                    mb-5 lg:mb-8"
            ref={ContainerScroll_2}
            onMouseDown={DownScroll_2}
            onMouseMove={MoveScroll_2}
            onMouseUp={MouseUpScroll_2}
            onMouseLeave={LeaveScroll_2}
          >
            <div className=" w-[13rem] h-[15rem] min-w-[13rem]">
              <div className="bg-black text-white w-full h-10 flex justify-center items-center font-mystery-mixed text-[1.7rem] rounded-t-[.6rem]">
                <h1>UX Research</h1>
              </div>
              <div className="relative">
                <Image
                  src={"/img/ux-indonesia-unsplash.png"}
                  width={400}
                  height={800}
                  className="w-full  h-[12rem] rounded-b-[.6rem]"
                  alt="indonesia"
                />
                <div className="absolute inset-0 flex justify-center items-center mb-2">
                  <Border
                    className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${""}`}
                  >
                    <Button
                      className={`font-mystery-mixed py-2 px-3 whitespace-nowrap flex items-center text-[1.19rem] leading-3`}
                    >
                      {"Ver curso"}
                    </Button>
                    <Button className={`py-2 px-2 flex items-center`}>
                      {<CartShopSimple />}
                    </Button>
                  </Border>
                </div>
              </div>
            </div>

            <div className=" w-[13rem] h-[15rem] min-w-[13rem]">
              <div className="bg-black text-white w-full h-10 flex justify-center items-center font-mystery-mixed text-[1.7rem] rounded-t-[.6rem]">
                <h1>UX Writing</h1>
              </div>
              <div className="relative">
                <Image
                  src={"/img/studio.png"}
                  width={400}
                  height={800}
                  className="w-full  h-[12rem] rounded-b-[.6rem]"
                  alt="indonesia"
                />
                <div className="absolute inset-0 flex justify-center items-center mb-2">
                  <Border
                    className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${""}`}
                  >
                    <Button
                      className={`font-mystery-mixed py-2 px-3 whitespace-nowrap flex items-center text-[1.19rem] leading-3`}
                    >
                      {"Ver curso"}
                    </Button>
                    <Button className={`py-2 px-2 flex items-center`}>
                      {<CartShopSimple />}
                    </Button>
                  </Border>
                </div>
              </div>
            </div>
            <div className=" w-[13rem] h-[15rem] min-w-[13rem]">
              <div className="bg-black text-white w-full h-10 flex justify-center items-center font-mystery-mixed text-[1.7rem] rounded-t-[.6rem]">
                <h1>Ui Design</h1>
              </div>
              <div className="relative">
                <Image
                  src={"/img/tirza.png"}
                  width={400}
                  height={800}
                  className="w-full  h-[12rem] rounded-b-[.6rem]"
                  alt="indonesia"
                />
                <div className="absolute inset-0 flex justify-center items-center mb-2">
                  <Border
                    className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${""}`}
                  >
                    <Button
                      className={`font-mystery-mixed py-2 px-3 whitespace-nowrap flex items-center text-[1.19rem] leading-3`}
                    >
                      {"Ver curso"}
                    </Button>
                    <Button className={`py-2 px-2 flex items-center`}>
                      {<CartShopSimple />}
                    </Button>
                  </Border>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-6 mt-2 flex flex-col justify-center items-center max-w-[1100px] min-[1500px]:max-w-[1400px] ">
        <div className="w-full flex justify-start sm:justify-center">
          <h2
            className="font-mystery-mixed text-start sm:text-start
            min-[500px]:pl-[2rem] sm:mr-[5rem] md:mr-0
          text-[1.5rem] min-[580px]:text-[1.9rem] w-[70%] leading-7 mb-4 -rotate-2 ml-[.4rem] 
          pb-10 pt-5  lg:pr-[8rem]   
          sm:w-[100%]  md:text-[1.79rem] min-[840px]:text-[2rem] 
          min-[917px]:text-[2.2rem] min-[1000px]:text-[2.7rem] min-[1500px]:text-[60px] lg:w-[100%]"
          >
            ¿Qué esperar de un curso en by m studio?
          </h2>
        </div>
        <div className="flex flex-col gap-y-4 mb-14 mt-10 min-[1500px]:mt-[5rem] text-[15px] items-start">
          <div>
            <CheckList
              text="Aprende a tu ritmo y de manera asincrónica"
              className="p-0.5 border-pink mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem] items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
          <div>
            <CheckList
              text="Accede a contenido actualizado"
              className="p-0.5 border-green mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem]  items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
          <div>
            <CheckList
              text="Accede y conecta con una comunidad de trainees"
              className="p-0.5 border-blue mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem] items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
          <div>
            <CheckList
              text="Obtén tu certificado al finalizar"
              className="p-0.5 border-pink mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem] items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-auto flex flex-col justify-center items-center md:mb-[7rem] lg:mb-[8rem] ">
        <Image
          src={"/img/paper.png"}
          width={200}
          height={200}
          className="w-full max-w-[90%] h-full"
          alt="paper_fondo"
        />
        <div className="absolute h-auto inset-0 text-black flex flex-col items-center justify-center">
          <h2 className="font-mystery-mixed text-[2.4rem] min-[400px]:text-[3.2rem] min-[500px]:text-[3.9rem] -translate-y-[19px] leading-10 lg:text-[5.2rem] xl:text-[6rem] lg:leading-[5.7rem] min-[1500px]:leading-[7rem]">
            Studio By M
          </h2>
          <h2 className="font-mystery-mixed text-[1.2rem] min-[400px]:text-[1.65rem] min-[500px]:text-[2rem] md:text-[1.9rem] lg:text-[3.2rem] xl:text-[3.5rem] pb-[2px] leading-5 lg:leading-3">
            Cuenta con el apoyo de
          </h2>
          <div className="relative mb-[4rem] hidden md:block translate-y-[2.6rem]">
            <div className="flex w-full items-end gap-x-7 min-[1500px]:mt-4">
              <Image
                src={"/img/image1.png"}
                width={200}
                height={200}
                className="w-[10rem] lg:w-[14rem] h-full"
                alt="image1"
              />
              <Image
                src={"/img/image2.png"}
                width={200}
                height={200}
                className="w-[5rem]  lg:w-[6.4rem] h-full"
                alt="image2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-[4rem] md:hidden">
        <Image
          src={"/img/image1.png"}
          width={200}
          height={200}
          className="w-[8rem] min-[450px]:w-[12rem] min-[550px]:w-[13rem] h-full"
          alt="image1"
        />
        <Image
          src={"/img/image2.png"}
          width={200}
          height={200}
          className="w-[5rem] min-[450px]:w-[6rem] min-[550px]:w-[7rem] h-full"
          alt="image2"
        />
      </div>
    </div>
  );
}
