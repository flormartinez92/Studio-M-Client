import React, { useState } from "react";
import Image from "next/image";
import IconButton from "@/common/IconButton";
import { Pencil, Save } from "@/common/Icons";
import Input from "@/common/Input";

const MyData = () => {
  const [changePassword, setChangePassword] = useState(false)
  //userData

  //Manejador de click
  const handleClickEdit = () => setChangePassword(!changePassword);

  return (
    //Contenedor
    <div className="mt-7 relative flex flex-col items-center md:h-80 md:flex-row md:justify-between md:items-start md:mt-12">
      {/*Imagen e Icono*/}
      <div className="flex flex-row mb-1 justify-between md:mx-4 md:mr-6">
        <Image
          src={"/img/usuario.png"}
          width={100}
          height={100}
          alt="Profile Image"
          className="rounded-full w-[85px] h-[85px] md:w-[155px] md:h-[155px]"
        />
        <div className="relative">
          <IconButton
            className="absolute bottom-0 right-0 bg-[#1E1E1E] items-center justify-center rounded-full w-[18px] h-[18px] md:w-[24px] md:h-[22px] md:right-0 md:bottom-0"
            style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
          >
            <Pencil color="white" width="12" height="10" />
          </IconButton>
        </div>
      </div>
      {/*Inputs*/}
      <div className="w-[60%] mb-11 md:w-1/3 md:mx-4">
        <Input
          name="name"
          type="text"
          // value={userData.name}
          className="w-full"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="Nombre"
        />
        <Input
          name="lastName"
          type="text"
          // value={userData.lastname}
          className="w-full"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="Apellido"
        />
        <Input
          name="email"
          type="text"
          // value={userData.mail}
          className="w-full"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="Email"
        />
        <Input
          name="document"
          type="INT"
          // value={userData.dni}
          className="w-full"
          classNameInput="p-[5.5px]"
          classNameLabel="text-[20px]"
          label="DNI"
        />
        {/*Inputs cambio de contraseña*/}
        {changePassword && (
          <>
            <Input
              name="NewPassword"
              type="password"
              placeholder="********"
              className="w-full"
              classNameInput="p-[5.5px]"
              classNameLabel="text-[20px]"
              label="Nueva contraseña"
            />
            <Input
              name="ConfirmPassword"
              type="password"
              placeholder="********"
              className="w-full"
              classNameInput="p-[5.5px]"
              classNameLabel="text-[20px]"
              label="Confirmar contraseña"
            />
          </>
        )}
      </div>
      {/* Icono cambio de contraseña */}
      {/*ANTES LA LINEA DE ABAJO ESTABA ASI NO SE PORQUE:  <div className={`flex ${changePassword ? "editing" : ""}`}>*/}
      <div className={"absolute bottom-0 right-0 mr-[5%] mb-[4.5%]"}>
        <IconButton
          className="bg-[#1E1E1E] rounded-full w-6 h-6"
          style={{ boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.75)" }}
          onClick={handleClickEdit}
        >
          {changePassword ? (
            <Save color="white" width="14" height="14" />
          ) : (
            <Pencil color="white" width="14" height="15" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default MyData;