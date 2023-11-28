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
  LineHeart,
  Signal,
} from "@/common/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import CardsDesktop from "@/components/CardsDesktop";
import { useMediaQuery } from "@react-hook/media-query";

export default function Trolley() {
  const [cartCourses, setCartCourses] = useState([]);
  const [user, setUser] = useState({});
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
      setUser(responseUser.data);
      console.log(responseUser.data._id);
      //http://localhost:8081/api/cart/courses/65538c7afc108110ec0e0273
      const responseFavorites = await axios.get(
        `http://localhost:8081/api/favorites/${responseUser.data._id}`
      );
      console.log(responseFavorites.data);

      /* responseFavorites.data.courseId.map((e) => {
        console.log(responseCourses.data);
      }); */
      const responseCourses = await axios.get(
        `http://localhost:8081/api/cart/courses/${responseUser.data._id}`
      );

      setCartCourses(responseCourses.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleClickHeart = async (status, idCourse) => {
    /* console.log(status);
    console.log(idCourse);
    console.log(user._id); */
    try {
      if (status) {
        await axios.delete(
          `http://localhost:8081/api/favorites/remove/${idCourse}/${user._id}`
        );
        const responseCourses = await axios.get(
          `http://localhost:8081/api/cart/courses/${user._id}`
        );
        setCartCourses(responseCourses.data);
      } else {
        await axios.post(
          `http://localhost:8081/api/favorites/add/${idCourse}/${user._id}`
        );
        const responseCourses = await axios.get(
          `http://localhost:8081/api/cart/courses/${user._id}`
        );
        setCartCourses(responseCourses.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
    <div className="flex flex-col items-center  mb-20 w-full">
      <div className="flex w-full flex-col gap-y-6 justify-center items-center my-10">
        {cartCourses.map((idem, i) => {
          return (
            <div key={i} className="flex justify-center items-center">
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

              <div className="hidden md:block select-none w-[700px] min-[800px]:w-[900px] lg:w-[900px] h-auto mb-5">
                <div className="flex flex-col w-full font-ms-gothic">
                  <CardsDesktop
                    courseDescription={idem.courseDescription}
                    courseImg_url={idem.courseImg_url}
                    courseLongTitle={idem.courseLongTitle}
                    courseLevel={idem.courseLevel}
                    courseSubtitle={idem.courseSubtitle}
                    courseDuration={idem.courseDuration}
                    coursePrice={idem.coursePrice}
                    key={i}
                    notjustPrice={true}
                    isFavorite={idem.status_favorite}
                    handleFavoriteClick={() =>
                      handleClickHeart(idem.status_favorite, idem._id)
                    }
                  />
                </div>
              </div>
              {/*
              <div className="hidden md:block select-none w-full h-auto mb-5">
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
                          <div className="cursor-pointer">
                            {idem.status_favorite ? (
                              <div
                                onClick={() =>
                                  handleClickHeart(
                                    idem.status_favorite,
                                    idem._id
                                  )
                                }
                              >
                                <Heart height={25} width={25} />
                              </div>
                            ) : (
                              <div
                                onClick={() =>
                                  handleClickHeart(
                                    idem.status_favorite,
                                    idem._id
                                  )
                                }
                              >
                                <LineHeart height={25} width={25} />
                                
                              </div>
                            )}
                          </div>
                         
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
              </div> */}
            </div>
          );
        })}
        <div className="flex w-[43rem] min-[800px]:w-[47rem] flex-col justify-center items-center md:items-end ">
          <Button
            onClick={() => router.push("/trolley/trolley-details")}
            type="rounder"
            className="font-ms-gothic text-[33px] w-[88%] min-[300px]:max-w-[260px] mt-4 py-2 flex justify-center items-center gap-x-2"
          >
            <h2>Comprar</h2>
            <CartShopSimple height={24} width={24} />
          </Button>
        </div>
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
