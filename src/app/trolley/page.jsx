"use client";

import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Button from "@/common/Button";
import Image from "next/image";
import IconButton from "@/common/IconButton";
import {
  CartShopPlus,
  CartShopSimple,
  Clock,
  Close,
  FullHeart,
  Heart,
  Signal,
} from "@/common/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardsDesktop from "@/components/CardsDesktop";
import { useMediaQuery } from "@react-hook/media-query";

export default function Trolley() {
  const [cartCourses, setCartCourses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");

  const getUser = async () => {
    try {
      const responseUser = await axios.get(
        "http://localhost:8081/api/user/me",
        {
          withCredentials: true,
        }
      );
      console.log(responseUser.data._id);
      //http://localhost:8081/api/cart/courses/65538c7afc108110ec0e0273
      const responseFavorites = await axios.get(
        `http://localhost:8081/api/favorites/${responseUser.data._id}`
      );
      console.log(responseFavorites.data.courseId);

      /* responseFavorites.data.courseId.map((e) => {
        console.log(responseCourses.data);
      }); */
      const responseCourses = await axios.get(
        `http://localhost:8081/api/cart/courses/${responseUser.data._id}`
      );
      console.log(responseCourses.data);

      responseFavorites.data.courseId.map((favorite) => {
        console.log(favorite);
        console.log(responseCourses.data.filter((e) => e._id == favorite));
      });

      /* console.log(
        responseCourses.data.filter((e) => e._id == "654932362b07f9d9287068dd")
      ); */

      setCartCourses(responseCourses.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  /* useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/cart/${userId}`)
      .then((res) => setCartCourses(res.data))
      .catch((error) => console.error(error));
  }, [userId]);

  const handleCheck = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/confirmBuy/${userId}`)
      .then(() => router.push("/"));
  };

  const handleRemove = (courseId) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove/${courseId}/${userId}`
      )
      .then(() => router.push("/trolley"))
      .catch((error) => console.error(error));
  }; */
  return (
    <div className="flex flex-col items-center mb-20 w-full">
      {JSON.stringify(cartCourses)}
      {cartCourses.map((idem, i) => {
        return (
          <div
            key={i}
            className="mt-16 mb-16 flex items-center justify-center "
          >
            <Cards
              key={idem._id}
              title={idem.courseShortTitle}
              className="pb-10 w-[66%] min-h-[15rem] min-w-[14rem] max-w-[14rem] min-[400px]:max-w-[21rem] md:hidden select-none"
              img={idem.courseImg_url}
              classNameImg=" h-[12.625rem] rounded-bl-[10px] rounded-br-[10px]"
              classNameBorder="h-[52px] flex-row justify-between items-center w-[170px] top-[182px]"
              classNameButton="text-xl tracking-wider w-[120px] pl-[14px] pr-[14px] h-[90%] items-center"
              buttonTitle={`$ ${Number(idem.coursePrice)
                .toLocaleString()
                .replace(",", ".")}`}
            />
            <div className="hidden md:block select-none w-full h-auto ">
              <div className="flex flex-col w-[43rem] min-[800px]:w-[47rem] font-ms-gothic">
                <div className="bg-black text-letterWhite font-mystery-mixed flex items-center justify-center rounded-t-[6px]">
                  <h2 className="py-[6px] text-[2rem] leading-9">
                    {idem.courseLongTitle.substring(0, 37)}
                  </h2>
                </div>
                <div className="flex gap-x-3 bg-page  rounded-b-[6px]">
                  <div className="basis-[25%]  flex justify-start items-center h-[12rem]">
                    <Image
                      src={idem.courseImg_url}
                      width={100}
                      height={100}
                      alt="imagen"
                      className="w-[12.5rem] h-full rounded-bl-[6px]"
                    />
                  </div>
                  <div className="basis-[75%] flex flex-col justify-around items-start pt-3 pb-3 pr-3 h-[12rem]">
                    <div className="text-[16px]">{idem.courseSubtitle}</div>
                    <div className="text-[12px] w-[90%] leading-[13px]">
                      {idem.courseDescription.substring(0, 400) + "..."}
                    </div>
                    <div className="flex text-[13px] gap-x-7 justify-center items-center">
                      <div className="flex justify-center items-center gap-x-1">
                        <Signal height={24} width={24} />
                        <h2>{idem.courseLevel}</h2>
                      </div>

                      <div className="flex justify-center items-center gap-x-1">
                        <Clock height={24} width={24} />
                        <h2>{idem.courseDuration}</h2>
                      </div>

                      <div className="flex justify-center items-center gap-2">
                        <h2>Agregar a la lista de deseos</h2>
                        <Heart height={25} width={25} />
                      </div>
                      <div className="flex justify-end items-center gap-2 mt-[1rem]">
                        <h2>{`$ ${Number(idem.coursePrice)
                          .toLocaleString()
                          .replace(",", ".")} ARS`}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="w-[40rem] min-[640px]:w-[20rem] h-[13rem] bg-green flex flex-col">
                <div className="text-center">{idem.courseLongTitle}</div>
                <div className="flex gap-x-3 justify-center items-center">
                  <div className="basis-[30%]">
                    <Image
                      src={idem.courseImg_url}
                      width={100}
                      height={100}
                      alt="imagen"
                      className="w-[20rem]"
                    />
                  </div>
                  <div className="basis-[70%]">tarjeta 1</div>
                </div>
              </div> */}
              {/* <CardsDesktop
                key={idem._id}
                handleViewCoursesClick={() => console.log(idem._id)}
                courseTitleClasses="text-2xl leading-loose min-[1024px]:text-3xl min-[1024px]:py-2"
                courseLongTitle={idem.courseLongTitle}
                courseImg_url={idem.courseImg_url}
                courseSubtitle={idem.courseSubtitle}
                courseSubtitleClasses="text-[1rem] min-[1024px]:text-[1.275rem]"
                coursePrice={idem.coursePrice}
                coursePriceClasses="text-[1rem] min-[1024px]:text-[1.275rem]"
                courseDescription={idem.courseDescription}
                courseDescriptionClasses="text-[0.8rem] min-[1024px]:text-[1.02rem]"
                courseLevel={idem.courseLevel}
                courseLevelClasses="text-[0.8rem] min-[1024px]:text-[1.02rem]"
                courseDuration={idem.courseDuration}
                courseDurationClasses="text-[0.8rem] min-[1024px]:text-[1.02rem]"
                clockWidth={isLgBreakpoint ? "25px" : "16px"}
                clockHeight={isLgBreakpoint ? "25px" : "16px"}
                courseFavoriteClasses="text-[0.8rem] tracking-tight min-[1024px]:text-[1.02rem]"
                heartWidth={isLgBreakpoint ? "25px" : "16px"}
                heartHeight={isLgBreakpoint ? "25px" : "16px"}
                signaltWidth={isLgBreakpoint ? "50px" : "25px"}
                signalHeight={isLgBreakpoint ? "50px" : "25px"}
              /> */}
            </div>
          </div>
        );
      })}
      <div className="w-full flex justify-end items-center">
        <Button
          onClick={() => console.log("confirmandoooo")}
          type="rounder"
          className="font-ms-gothic text-[33px] w-[88%] min-[300px]:max-w-[260px] mt-4 py-2 flex justify-center items-center gap-x-2"
        >
          <h2>Comprar</h2>
          <CartShopSimple height={24} width={24} />
        </Button>
      </div>
      {/* <div className="flex flex-col items-center">
        <div className="mt-12">
          <h3 className="text-h2Black font-mystery-mixed text-[38px] transform -rotate-2 md:rotate-0 md:text-5xl">
            Detalle de compras
          </h3>
        </div>

        {cartCourses?.map((course) => (
          //Contenido para dispositivos móviles
          <Cards
            key={course._id}
            title={course.courseTitle}
            buttonTitle="$ 10.000"
            img={course.courseImg_url}
            className="w-[50%] mt-8 text-1xl md:hidden"
            classNameImg=""
          />
        ))}
        {cartCourses?.map((course) => (
          //Contenido para dispositivo de escritorio``
          <div
            key={course._id}
            className="hidden md:flex flex-col w-[80%] mt-12 shadow-xl"
          >
            <div className="w-full bg-black flex justify-between items-center rounded-t-md">
              <h3 className="flex-1 m-0 text-center text-white font-mystery-mixed text-2xl">
                {course.courseTitle}
              </h3>
              <IconButton
                onClick={() => handleRemove(course._id)}
                className={"p-1"}
              >
                <Close color={"white"} />
              </IconButton>
            </div>
            <div className="bg-page flex justify-between rounded-b-md">
              <div className="w-[25%]">
                <Image
                  src={course.courseImg_url}
                  width={300}
                  height={300}
                  alt="Picture"
                  className="h-full rounded-bl-lg"
                />
              </div>
              <div className="w-[75%] flex flex-col justify-between">
                <p className="text-black font-ms-gothic mx-2 text-lg">
                  {course.courseSubtitle}
                </p>
                <p className=" text-darkGray font-ms-gothic mx-2 text-sm">
                  {course.courseDescription}
                </p>
                <p className="text-black font-ms-gothic flex justify-end mx-2 text-base">
                  $ 10.000 ARS
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-8">
          <h3 className="text-h2Black font-ms-gothic text-[16px] md:text-lg">
            Tengo un cupón de descuento
          </h3>
        </div>
        <div className=" flex items-center justify-center text-h2Black font-mystery-mixed text-2xl w-[70%] mt-6 md:justify-center md:text-5xl">
          <h2 className="mx-8">Total:</h2>
          <h2 className="mx-8">$10.000</h2>
        </div>
        <Button
          onClick={handleCheck}
          type="rounder"
          className="font-ms-gothic text-[25px] w-[60%] mt-4 py-1 md:w-[25%]"
        >
          Confirmar
        </Button>
      </div> */}
    </div>
  );
}
