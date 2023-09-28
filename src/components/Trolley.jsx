import React from "react";
import Cards from "./Cards";
import Button from "@/common/Button";
import Image from "next/image";

export default function Trolley() {
  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center w-full h-screen md:hidden">
        <h2 className="text-h2Black font-mystery-mixed text-[38px] mb-12 transform -rotate-2">
          Detalle de compra
        </h2>
        <Cards
          title="Ux Research"
          buttonTitle="$ 10.000"
          img="/img/indonesiaGrande.png"
          className="mb-8 w-[12rem] h-[15]"
        />
        <h2 className="text-h2Black font-ms-gothic text-[16px] mb-8">
          Tengo un cupon de descuento
        </h2>
        <div className="w-[15rem] h-[1.3rem] flex items-center justify-between text-h2Black font-mystery-mixed text-[33px] mb-8">
          <h2>Total:</h2>
          <h2>$10.000</h2>
        </div>
        <Button
          children="Confirmar"
          type="rounder"
          className="w-[14rem] h-[2.8rem] mb-4"
        />
      </div>

      <div className=" hidden md:block">
        <div className="bg-white flex flex-col items-center justify-center h-screen">
          <h2 className="text-h2Black font-mystery-mixed text-[50px] mb-8">
            Detalle de compra
          </h2>
          <div className="flex flex-col items-center w-[66 rem] h-[19rem]">
            <h2 className="bg-h2Black text-white font-mystery-mixed rounded-t-md w-full">
              Curso avanzado de Ux Research
            </h2>
            <div className="flex items-center mb-6">
              <div className="">
              <Image
                  src={"/img/indonesiaGrande.png"}
                  width={244}
                  height={238}
                  alt="Picture"
                />
              </div>
              <div className="bg-page w-[51rem] h-[15rem] rounded-br-xl">
                asdasdadadas
              </div>
            </div>
          </div>
          <h2 className="text-h2Black font-ms-gothic text-[16px] mb-8">
            Tengo un cupon de descuento
          </h2>
          <div className="w-[15rem] h-[1.3rem] flex items-center justify-between text-h2Black font-mystery-mixed text-[33px] mb-8">
            <h2>Total:</h2>
            <h2>$10.000</h2>
          </div>
          <Button
            children="Confirmar"
            type="rounder"
            className="w-[14rem] h-[2.8rem] mb-4"
          />
        </div>
      </div>
    </>
  );
}
