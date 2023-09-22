import { BurgerMenu } from "@/common/Icons";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="relative">
      <Image
        className="w-full h-20"
        src={"/image/fondo.png"}
        width={100}
        height={100}
        alt="FOTO"
      ></Image>
      <div className="absolute inset-0 flex flex-row items-center justify-around gap-20 w-full h-auto">
        <h2 className="text-white font-mystery-mixed text-3xl flex justify-center items-center w-40 h-7">
          Studio by M
        </h2>
        <BurgerMenu />
      </div>
    </div>
  );
}

/*
<nav className=" flex flex-row items-center justify-around w-full h-20 gap-12 absolute">
        <h2 className="text-white font-mystery-mixed text-3xl flex items-center w-40 h-7">
          Studio by M
        </h2>

        <BurgerMenu />
      </nav>
*/
