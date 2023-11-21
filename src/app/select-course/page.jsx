"use client";

import React, { useState } from "react";
import Button from "@/common/Button";
import { Message } from "../../common/Message";
import Image from "next/image";
import { Arrow, ArrowBack, BurgerMenu2, Check } from "@/common/Icons";
import IconButton from "@/common/IconButton";

export default function SelectCourse() {
  const [completed, setCompleted] = useState(false);
  const handleClick = () => !completed && setCompleted(true);

  return (
    <div className="bg-white bg-opacity-0 flex flex-col justify-between h-auto items-center gap-8">
      <div className="flex flex-row w-[90%] items-center justify-between mt-4">
        <div className="flex flex-row justify-between items-center gap-2 text-base">
          <IconButton className={""}>
            <BurgerMenu2 width="30" height="30" color={"black"} />
          </IconButton>
          <h2 className="font-ms-gothic text-base items-center">
            Secciones del curso
          </h2>
        </div>
        <IconButton>
          <ArrowBack color={"black"} />
          <span style={{ marginRight: "20px" }}></span>
          <Arrow color={"black"} />
        </IconButton>
      </div>
      <div className="w-full">
        <Message
          item_num="1"
          text={"Planificacion y diseño de roadmaps de investigacion efectiva"}
          className={
            "text-white text-2xl w-[90%] bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center py-14 sm:py-24 md:py-28 md:px-10 md:text-3xl lg:py-40 lg:px-28 lg:text-4xl xl:py-48 xl:text-5xl"
          }
        />
      </div>
      {completed ? (
        <Button
          type={"rounder"}
          className={
            "flex flex-row justify-center items-center w-40 p-2 mb-14 bg-green xl:p-2 xl:px-10 xl:w-80 xl:text-3xl"
          }
        >
          <Check color={"black"} width={"50"} height={"50"} />
        </Button>
      ) : (
        <Button
          type={"rounder"}
          className={
            "flex flex-row justify-between items-center w-56 p-2 font-ms-gothic text-2xl mb-14 xl:p-2 xl:px-10 xl:w-60 xl:text-3xl"
          }
          onClick={handleClick}
        >
          Completar&nbsp;
          <Image
            src={"/img/Ellipse.png"}
            width={"26"}
            height={"26"}
            alt="ellipse"
          />
        </Button>
      )}
    </div>
  );
}
