import React from "react";
import Button from "@/common/Button";
import { Message } from "./Message";
import Image from "next/image";
import { Arrow, BurgerMenu } from "@/common/Icons";
import IconButton from "@/common/IconButton";

export default function CourseSections() {
  return (
    <div className="bg-white flex flex-col justify-between h-auto items-center gap-8">
      <div className="flex flex-row w-[92%] items-center justify-between mt-4">
        <div className="flex flex-row justify-between w-[52%] text-base">
          <IconButton className={""}>
            <BurgerMenu width="16" height="16" color={"black"} />
          </IconButton>
          <h2 className="font-ms-gothic text-base items-center">
            Secciones del curso
          </h2>
        </div>
        <IconButton>
          <Arrow color={"black"} />
        </IconButton>
      </div>
      <div>
        <Message
          item_num={"1"}
          text={"Planificación y diseño de roadmaps de investigación efectivos"}
          className={
            "text-white text-2xl w-[90%] bg-no-repeat bg-cover bg-center py-12"
          }
        />
      </div>
      <Button
        type={"rounder"}
        className={
          "flex flex-row justify-between items-center w-56 p-2 font-ms-gothic text-2xl mb-14"
        }
      >
        Completar
        <Image
          src={"/img/Ellipse.png"}
          width={"26"}
          height={"26"}
          alt="ellipse"
        />
      </Button>
    </div>
  );
}
