import React from "react";
import Cards from "./Cards";
import { CartShopSimple, Check } from "@/common/Icons";
import CheckList from "../common/CheckList";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="bg-white">
      <h2 className="text-5xl text-black text-center font-mystery-mixed p-2 mt-20 mb-20 -rotate-6">
        Qué vas a aprender hoy?
      </h2>
      <div className="flex overflow-x-auto">
        <div className="w-70 ml-4 mr-4">
          <Cards
            title="UX Research"
            buttonTitle="Ver curso"
            icon={<CartShopSimple />}
            img="/img/indonesiaGrande.png"
            className="max-w-[205px]"
          />
        </div>
        <div className="w-70 ml-4 mr-4">
          <Cards
            title="UX Writing"
            buttonTitle="Ver curso"
            icon={<CartShopSimple />}
            img="/img/studio.png"
            className="max-w-[205px]"
          />
        </div>
        <div className="w-70 ml-4 mr-4">
          <Cards
            title="UI Design"
            buttonTitle="Ver curso"
            icon={<CartShopSimple />}
            img="/img/tirza.png"
            className="max-w-[205px]"
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center">
        <h2 className="text-5xl text-black text-center font-mystery-mixed p-2 mt-20 mb-20 -rotate-6">
          Qué esperar de un curso en by M studio?
        </h2>
        <div className="gap-3 flex flex-col items-center justify-center w-[90%]">
          <CheckList
            text="Aprende a tu ritmo y de manera asincrónica"
            className="p-0.5 border-pink"
            icon={<Check />}
          />
          <CheckList
            text="Accede a contenido actualizado"
            className="p-0.5 border-green"
            icon={<Check />}
          />
          <CheckList
            text="Accede y conecta con una comunidad de trainees"
            className="p-0.5 border-blue"
            icon={<Check />}
          />
          <CheckList
            text="Obtén tu certificado al finalizar"
            className="p-0.5 border-pink"
            icon={<Check />}
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-100% relative mt-10 mb-20">
        <Image src="/img/paper.png" width={500} height={500} alt="Picture" />
        <p className="text-5xl text-black font-mystery-mixed absolute top-10">
          Studio by M
        </p>
        <p className="text-3xl text-black font-mystery-mixed absolute top-28">
          Cuenta con el apoyo de
        </p>
        <Image src="/img/image1.png" width={178} height={87} alt="Picture" />
        <Image src="/img/image2.png" width={116} height={134} alt="Picture" />
      </div>
    </div>
  );
}
