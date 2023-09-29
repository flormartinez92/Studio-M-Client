import Button from "@/common/Button";
import Input from "@/common/Input";
import React from "react";

export const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <h2 className="font-mystery-mixed text-[49px] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3">
        Registro
      </h2>
      <form
        className="mt-[50px] 
            w-[80%]
            max-w-[300px] 
            sm:max-w-[750px]
            md:flex md:flex-col md:items-center"
      >
        <div className="flex flex-col sm:flex-row w-full sm:gap-x-3 ">
          <div className="basis-[39%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              label={"Nombre"}
              classNameLabel={"block text-[23px]"}
              placeholder={"Ingresa tu nombre"}
              name={"nombre"}
              classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
            bg-black/20`}
            />
          </div>
          <div className="basis-[39%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              label={"Apellido"}
              classNameLabel={"block text-[23px]"}
              name={"apellido"}
              type={"text"}
              placeholder={"Ingresa tu apellido"}
              classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
          </div>

          <div className="basis-[22%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              type={"number"}
              label={"DNI"}
              classNameLabel={"block text-[23px]"}
              name={"dni"}
              placeholder={"Ingrese su dni"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:gap-x-3 mb-2">
          <div className="mb-[0.1rem] basis-[50%]">
            <Input
              className={"flex-none"}
              type={"email"}
              label={"Mail"}
              classNameLabel={"block text-[23px]"}
              name={"mail"}
              placeholder={"Ingresa tu mail"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
          </div>
          <div className="mb-[0.1rem] basis-[50%]">
            <Input
              className={"flex-none"}
              type={"password"}
              label={"Contraseña"}
              classNameLabel={"block text-[23px]"}
              name={"password"}
              placeholder={"Ingresa tu contraseña"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
          </div>
        </div>
        <div
          className="
        flex 
        justify-center 
        items-center 
        mt-[60px]"
        >
          <Button
            className={`bg-black 
          text-white 
          py-[18px] 
          px-[54px] 
          rounded-[5px] 
          leading-3 
          text-[19px] 
          block
          w-[17rem]
          sm:w-[15rem]`}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </div>
  );
};
