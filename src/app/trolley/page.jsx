"use client";

import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Button from "@/common/Button";
import Image from "next/image";
import IconButton from "@/common/IconButton";
import { Close } from "@/common/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Trolley() {
  const userId = localStorage.getItem("userId");
  const [cartCourses, setCartCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
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
  };
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="flex flex-col items-center">
        <div className="mt-12">
          <h3 className="text-h2Black font-mystery-mixed text-[38px] transform -rotate-2 md:rotate-0 md:text-5xl">
            Detalle de compra
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
      </div>
    </div>
  );
}
