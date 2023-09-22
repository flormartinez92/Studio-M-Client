import React from "react";
import Cards from "./Cards";
import { CartShopSimple, Check } from "@/common/Icons";
import CheckList from "../common/CheckList";
import Image from "next/image";
import Indonesia from "../../public/img/indonesia.png";
import studio from "../../public/img/studio.png";
import tirza from "../../public/img/tirza.png";

export default function Intro() {
  return (
    <div>
      <h1 className="text-5xl text-black font-mystery-mixed p-2 mt-20 mb-20 flex items-center justify-center transform -rotate-6">
        Qué vas a aprender hoy?
      </h1>
      <div className="flex gap-4 overflow-x-auto">
        <Cards
          title="UX Research"
          buttonTitle="Ver curso"
          icon={<CartShopSimple />}
          img={Indonesia}
        />
        <Cards
          title="UX Writing"
          buttonTitle="Ver curso"
          icon={<CartShopSimple />}
          img={studio}
        />
        <Cards
          title="UI Design"
          buttonTitle="Ver curso"
          icon={<CartShopSimple />}
          img={tirza}
        />
      </div>

      <h2 className="text-5xl text-black font-mystery-mixed p-2 mt-20 mb-20 flex items-center justify-center transform -rotate-6">
        Qué esperar de un curso en by M studio?
      </h2>
      <div className="w-[85%] m-auto flex flex-col items-center justify-center gap-3">
        <CheckList
          icon={<Check />}
          text="Aprende a tu ritmo y de manera asincrónica"
        />
        <CheckList
          className="border-green"
          icon={<Check />}
          text="Accede a contenido actualizado"
        />
        <CheckList
          className="border-blue"
          icon={<Check />}
          text="Accede y conecta con una comunidad de trainees"
        />
        <CheckList icon={<Check />} text="Obtén tu certificado al finalizar" />
      </div>

      <div className="flex flex-col items-center w-100% relative mt-10 mb-20">
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
