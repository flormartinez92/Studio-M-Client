import { Qr_social_networks } from "@/common/Qr_social_networks";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="relative bg-[url('/Fondo.png')] bg-no-repeat w-[100%] h-screen flex flex-col text-center overflow-y-scroll bg-cover bg-center">
      <h2 className="font-mystery-mixed text-white mt-[90px] text-[45px]">
        Studio by M
      </h2>
      <p className="font-ms-gothic text-white text-[16px] text-left leading-[20px] mt-6 mx-[40px]">
        Soy Macarena Bernal. Me defino como una apasionada docente,
        desarrolladora Fullstack y diseñadora UX/UI. Mi camino en el mundo de la
        tecnología me ha permitido fusionar mi amor por la enseñanza con la
        creación de experiencias digitales accesibles y atractivas.
      </p>
      <h2 className="font-mystery-mixed text-white text-[35px] mt-[45px] mb-[17px]">
        Contacto
      </h2>
      <div className="w-full max-w-[250px] h-auto mx-auto  grid place-items-center grid-cols-2 mb-[30px]">
        <Qr_social_networks
          styles={" mr-[1px] w-[113px] h-[108px]"}
          url={"behance.png"}
          width={100}
          height={108}
          alt="behance"
        />
        <Qr_social_networks
          styles={"mt-10 ml-[19px] w-[122px] h-[118px]"}
          url={"instagram.png"}
          width={100}
          height={108}
          alt="instagram"
        />
        <Qr_social_networks
          styles={"mr-[20px] mt-[20px] w-[113px] h-[108px]"}
          url={"github.png"}
          width={100}
          height={108}
          alt="github"
        />
        <Qr_social_networks
          styles={"mt-[55px] ml-4 w-[127px] h-[119px]"}
          url={"wpp.png"}
          width={100}
          height={108}
          alt="wpp"
        />

        <Qr_social_networks
          styles={"mt-4 mt-[27px] w-[115px] h-[124px]"}
          url={"tiktok.png"}
          rotation={"col-span-2"}
          width={100}
          height={108}
          alt="tiktok"
        />
      </div>
      <Image
        src={"/Star_blue_1.png"}
        width={50}
        height={50}
        alt="Logo"
        className="w-[85px] h-[90px] flex flex-col items-center justify-start absolute top-[-46px] right-[20px]"
      ></Image>
    </div>
  );
};
