"use client";

import Button from "@/common/Button";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center bg-[#fff] py-[115px]">
        <h2 className="font-mystery-mixed text-[50px] sm:text-[55px] md:text-[65px] lg:text-[70px]">
          Studio by M
        </h2>
        <div
          className="
        mb-4 
        w-[60%]
        max-w-[660px]
        sm:px-3
        flex flex-col
        justify-center
        items-center"
        >
          <h3 className="font-ms-gothic text-xl text-center pt-10 sm:text-2xl md:text-3xl">
            Si tus datos ingresados fueron correctos, recibiras un email.
          </h3>
          <p className="font-ms-gothic text-md font-bold text-center pt-8 sm:text-lg md:text-xl">
            Revisá tu casilla de correo y seguí las instrucciones para modificar
            tu contraseña.
          </p>
        </div>

        <div
          className="
        flex
        justify-center 
        items-center 
        mt-[30px]"
        >
          <Button
            onClick={handleSubmit}
            className={`bg-black 
          text-white 
          py-[16px] 
          px-[55px] 
          rounded-[5px] 
          leading-3 
          text-[19px]
          block
          sm:w-[13rem]
          md:w-[14rem]`}
          >
            Continuar
          </Button>
        </div>
      </div>
    </section>
  );
}
