import React from "react";
import Cards from "../../components/Cards";
import Button from "@/common/Button";
import Image from "next/image";
import IconButton from "@/common/IconButton";
import { Close } from "@/common/Icons";

export default function Trolley({ details }) {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="flex flex-col items-center">
        <div className="mt-12">
          <h3 className="text-h2Black font-mystery-mixed text-[38px] transform -rotate-2 md:rotate-0 md:text-5xl">
            Detalle de compra
          </h3>
        </div>
        {/* Contenido para dispositivos móviles */}
        <Cards
          title="Ux Research"
          buttonTitle="$ 10.000"
          img="/img/indonesiaGrande.png"
          className="w-[50%] mt-8 text-1xl md:hidden"
        />

        {/* Contenido para dispositivos de escritorio */}
        <div className="hidden md:flex flex-col w-[80%] mt-12 shadow-xl">
          <div className="w-full bg-black flex justify-between items-center rounded-t-md">
            <h3 className="flex-1 m-0 text-center text-white font-mystery-mixed text-2xl">
              Curso avanzado de Ux Research
            </h3>
            <IconButton className={"p-1"}><Close color={"white"}/></IconButton>
          </div>
          <div className="bg-page flex justify-between rounded-b-md">
            <div className="w-[25%]">
              <Image
                src={"/img/indonesiaGrande.png"}
                width={300}
                height={300}
                alt="Picture"
                className=""
              />
            </div>
            <div className="w-[75%] flex flex-col justify-between">
              <p className="text-black font-ms-gothic mx-2 text-lg">
                Profundizando en tecnologias y practicas avanzadas
              </p>
              <p className=" text-darkGray font-ms-gothic mx-2 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo ex voluptas iste non, vitae veritatis possimus!
                Molestias quam dicta natus earum necessitatibus obcaecati
                doloremque ut aut, nisi perspiciatis, ipsa voluptatibus?
              </p>
              <p className="text-black font-ms-gothic flex justify-end mx-2 text-base">
                $ 10.000 ARS
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-h2Black font-ms-gothic text-[16px] md:text-lg">
            Tengo un cupón de descuento
          </h3>
        </div>
        <div className=" flex items-center justify-center text-h2Black font-mystery-mixed text-2xl w-[70%] mt-6 md:justify-center md:text-5xl">
          <h2 className="mx-8">Total:</h2>
          <h2 className="mx-8">$10.000</h2>
        </div>
        <Button
          type="rounder"
          className="font-ms-gothic text-[25px] w-[60%] mt-4 py-1 md:w-[25%]"
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
}
