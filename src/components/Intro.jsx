import React from "react";
import Cards from "./Cards";
import { CartShopSimple, Check } from "@/common/Icons";
import CheckList from "../common/CheckList";
import Image from "next/image";

export default function Intro() {
  return (
    <div>
      <h1 className="text-5xl text-black font-mystery-mixed p-2 mt-20 mb-20 flex items-center justify-center transform -rotate-6">
        Qué vas a aprender hoy?
      </h1>
      <div className="flex overflow-x-auto">
        <div className="w-80 ml-4 mr-4">
          <Cards
            title="UX Research"
            buttonTitle="Ver curso"
            icon={<CartShopSimple />}
            img="/img/indonesia.png"
            className="mr-4"
          />
        </div>
        <div className="w-80 mr-4">
          <Cards
            title="UX Writing"
            buttonTitle="Ver curso"
            icon={<CartShopSimple />}
            img="/img/studio.png"
            className="mr-4"
          />
        </div>
        <div className="w-80">
          <Cards
            title="UI Design"
            buttonTitle="Ver curso"
            icon={<CartShopSimple />}
            img="/img/tirza.png"
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center">
        <h2 className="text-5xl text-black font-mystery-mixed p-2 mt-20 mb-20 flex items-center justify-center transform -rotate-6">
          Qué esperar de un curso en by M studio?
        </h2>

        <div className="m-3 flex content-start items-center">
          <CheckList className="p-3" icon={<Check />} />
          <p className="font-ms-gothic ml-2">
            Aprende a tu ritmo y de manera asincrónica
          </p>
        </div>
        <div className="m-3 flex content-start items-center">
          <CheckList className="border-green p-3" icon={<Check />} />
          <p className="font-ms-gothic ml-2">Accede a contenido actualizado</p>
        </div>
        <div className="m-3 flex content-start items-center">
          <CheckList className="border-blue p-3" icon={<Check />} />
          <p className="font-ms-gothic ml-2">
            Accede y conecta con una comunidad de trainees
          </p>
        </div>
        <div className="m-3 flex content-start items-center">
          <CheckList className="p-3" icon={<Check />} />
          <p className="font-ms-gothic ml-2">
            Obtén tu certificado al finalizar
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-100% relative mt-20 mb-20">
        <Image src="/img/paper.png" width={500} height={500} alt="Picture" />
        <p className="text-5xl text-black font-mystery-mixed absolute top-10">
          Studio by M
        </p>
        <p className="text-3xl text-black font-mystery-mixed absolute top-20">
          Cuenta con el apoyo de
        </p>
        <Image src="/img/image1.png" width={178} height={87} alt="Picture" />
        <Image src="/img/image2.png" width={116} height={134} alt="Picture" />
      </div>
    </div>
  );
}
