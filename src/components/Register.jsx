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
            sm:max-w-[600px]
            md:flex md:flex-col md:items-center"
      >
        <div className="flex flex-col sm:flex-row w-auto sm:gap-x-3 ">
          <div className="mb-2">
            <label
              htmlFor="mail"
              className="
            font-mystery-mixed 
            text-[23px]"
            >
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              className="
            p-[5px] 
            outline-none 
            w-[100%]
            h-[40px] 
            rounded-[3px]
             
          bg-gray"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="mail"
              className="
            font-mystery-mixed 
            text-[23px]"
            >
              Apellido
            </label>
            <input
              type="text"
              placeholder="Ingrese su apellido"
              className="
            p-[5px] 
            outline-none 
            w-[100%]
            h-[40px] 
            rounded-[3px]
             
          bg-gray"
            />
          </div>

          <div className="basis-[33.3%] mb-2">
            <label
              htmlFor="mail"
              className="
            font-mystery-mixed 
            text-[23px]"
            >
              DNI
            </label>
            <input
              type="number"
              placeholder="Ingrese su dni"
              className="
            p-[5px] 
            outline-none 
            w-[100%]
            h-[40px] 
            
            rounded-[3px] 
          bg-gray
            mr-0"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:gap-x-3 mb-2">
          <div className="mb-2">
            <label
              htmlFor="mail"
              className="
            font-mystery-mixed 
            text-[23px]"
            >
              Mail
            </label>
            <input
              type="email"
              placeholder="Ingrese su correo"
              className="
            p-[5px] 
            outline-none 
            w-[100%]
            h-[40px] 
            rounded-[3px]
             
          bg-gray"
            />
          </div>
          <div>
            <label
              htmlFor="mail"
              className="
            font-mystery-mixed 
            text-[23px]"
            >
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              className="
            p-[5px] 
            outline-none 
            w-[100%]
            h-[40px] 
            rounded-[3px]
             
          bg-gray"
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
          <button
            className="
          bg-black 
          text-white 
          py-[18px] 
          px-[54px] 
          rounded-[5px] 
          leading-3 
          text-[19px]"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};
