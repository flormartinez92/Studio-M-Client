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
  const [cartCourses, setCartCourses] = useState(null);
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [isCourseDeleted, setIsCourseDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isMdBreakpoint = useMediaQuery("(min-width: 768px)");

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

  const handleremoveCart = async () => {
    console.log("remover el carrito entero");
    try {
      const responseDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove/${user._id}`
      );

      setCartCourses([]);
      console.log(responseDelete);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (courseId) => {
    /*  console.log(courseId);
    console.log(cartCourses.filter((course) => course._id !== courseId));
    console.log(user);
    setCartCourses(cartCourses.filter((course) => course._id !== courseId)); */
    if (isLoading) return;
    try {
      console.log("ESPERA QUE TERMINO");
      setIsLoading(true);
      const responseDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove/${courseId}/${user._id}`
      );
      setCartCourses(cartCourses.filter((course) => course._id !== courseId));
      /* const responseCourses = await axios.get(
        `http://localhost:8081/api/cart/courses/${user._id}`
      );
      setCartCourses(responseCourses.data); */

      console.log(responseDelete);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      console.log("LISTO");
    }
    /* axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove/${courseId}/${userId}`
      )
      .then(() => router.push("/trolley"))
      .catch((error) => console.error(error)); */
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
    <div
      className={`flex flex-col items-center w-full min-h-[calc(100vh-500px)] `}
    >
      {!cartCourses && (
        <div className=" w-full h-[500px] flex justify-center items-center">
          <div className="w-20 h-20 flex justify-center items-center">
            <h2 className="font-ms-gothic text-2xl">Cargando </h2>
            <Image
              src={"/svg/icons8-carga.gif"}
              objectFit="cover"
              width={100}
              height={100}
            />
          </div>
        </div>
      )}
      {cartCourses &&
        (cartCourses.length !== 0 ? (
          <div className="flex w-full flex-col gap-y-6 justify-center items-center my-10 mb-[10rem]">
            {cartCourses?.map((idem, i) => {
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

                  <div
                    className={`hidden md:block select-none w-full
                    h-auto`}
                  >
                    <div className="flex flex-col justify-center items-center mt-8">
                      <div
                        className={`flex flex-col items-center justify-center w-[90%] gap-y-12 max-w-6xl opacity-0 ${
                          isLoading ? "opacity-70" : "opacity-100"
                        }`}
                      >
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
                          subtitleFull={true}
                          iconDelete={true}
                          handleDelteCourse={() => handleRemove(idem._id)}
                          handleFavoriteClick={() =>
                            handleClickHeart(idem.status_favorite, idem._id)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex w-full justify-center items-center">
              <div className="w-[90%] select-none max-w-[855px]">
                <div className="flex flex-col gap-y-5 justify-center items-center md:justify-end md:flex-row md:gap-x-4">
                  <Button
                    onClick={handleremoveCart}
                    className="bg-buttonBlack w-[270px] md:w-[130px] h-10 p-6 md:h-8 md:p-0  rounded-[10px] flex justify-center items-center gap-x-1"
                  >
                    <h2 className="text-[1.5rem] md:text-[1rem]">
                      Vaciar carrito
                    </h2>
                    <div className="md:hidden">
                      <CartShopSimple height={24} width={24} />
                    </div>
                  </Button>
                  <Button
                    onClick={() => router.push("/trolley/trolley-details")}
                    className="bg-buttonBlack w-[270px] md:w-[130px] h-10 p-6 md:h-8 md:p-0  rounded-[10px] flex justify-center items-center gap-x-1"
                  >
                    <h2 className="text-[1.5rem] md:text-[1rem]">Comprar</h2>
                    <div className="md:hidden">
                      <CartShopSimple height={24} width={24} />
                    </div>
                    <div className="hidden md:block">
                      <CartShopSimple height={20} width={20} />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[600px] w-full bg-page flex justify-center items-center ">
            <h2 className="font-mystery-mixed text-[1.6rem] sm:text-[2.6rem] md:text-[3.6rem] lg:text-[4.6rem] animate__animated animate__flipInX">
              No hay cursos en tu carrito
            </h2>
          </div>
        ))}
    </div>
  );
}
