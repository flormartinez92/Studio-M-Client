import IconButton from "@/common/IconButton";
import { Arrow, Pencil } from "@/common/Icons";
import Input from "@/common/Input";
import Image from "next/image";
import React from "react";

export default function MyAccount() {
  return (
    <div className="bg-white mx-4">
      <div className="bg-lightGrey  rounded-2xl mt-4 shadow-md">
        <div className="bg-black w-full h-14 flex justify-between items-center rounded-t-lg">
          <h2 className="text-white font-mystery-mixed text-2xl underline decoration-pink flex items-center justify-center flex-grow pl-8">
            Mis datos
          </h2>
          <IconButton className="mr-4">
            <Arrow color="white" />
          </IconButton>
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className="relative">
            <Image
              src={"/img/usuario.png"}
              width={100}
              height={100}
              className="rounded-full w-[82px] h-[83px]"
            />
            <IconButton className="absolute right-2 bottom-0 bg-black rounded-full w-[18px] h-[17px]">
              <Pencil color="white" width="9px" height="8px" />
            </IconButton>
          </div>

          <Input
            name="name"
            type="text"
            placeholder="Marcos"
            className="w-[65%]"
            classNameLabel="text-[20px]"
            label="Nombre"
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Solis"
            className="w-[65%]"
            classNameLabel="text-[20px]"
            label="Apellido"
          />
          <Input
            name="email"
            type="text"
            placeholder="marcos10@gmail.com"
            className="w-[65%]"
            classNameLabel="text-[20px]"
            label="Email"
          />
          <Input
            name="document"
            type="INT"
            placeholder="45671231"
            className="w-[65%] mb-12"
            classNameLabel="text-[20px]"
            label="DNI"
          />
        </div>
      </div>
    </div>
  );
}
