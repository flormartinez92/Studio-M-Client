import { Arrow } from "@/common/Icons";
import Input from "@/common/Input";
import Image from "next/image";
import React from "react";

export default function MiCuenta() {
  return (
    <div className="bg-lightGrey flex flex-col justify-center items-center">
      <div className="bg-black w-full h-14 flex justify-center items-center">
        <h2 className="text-white font-mystery-mixed text-3xl underline decoration-pink">
          Mis datos
        </h2>
        <Arrow />
      </div>
      <div className="h-auto flex flex-col items-center space-y-4 mt-4 mb-8">
        <div className="rounded-full overflow-hidden">
          <Image
            src={"/image/usuario.png"}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <Input
          name="name"
          type="text"
          placeholder="Escriba su nombre"
          className=""
          label="Nombre"
        />
        <Input
          name="lastName"
          type="text"
          placeholder="Escriba su apellido"
          className=""
          label="Apellido"
        />
        <Input
          name="email"
          type="text"
          placeholder="Escriba su email"
          className=""
          label="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Escriba su contraseña"
          className=""
          label="Contraseña"
        />
      </div>
    </div>
  );
}
