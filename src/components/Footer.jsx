import { Qr_social_networks } from "@/common/Qr_social_networks";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="relative bg-[url('/Fondo.png')] bg-no-repeat w-[100%] h-full flex flex-col text-center bg-cover bg-center sm:grid grid-cols-2 sm:px-[30px]">
      <div>
        <h2 className="font-mystery-mixed text-white mt-[90px] text-[45px]">
          Studio by M
        </h2>
        <p className="font-ms-gothic text-white text-[16px] text-left leading-[20px] mt-6 mx-[40px]">
          Soy Macarena Bernal. Me defino como una apasionada docente,
          desarrolladora Fullstack y diseñadora UX/UI. Mi camino en el mundo de
          la tecnología me ha permitido fusionar mi amor por la enseñanza con la
          creación de experiencias digitales accesibles y atractivas.
        </p>
      </div>
      <div>
        <h2 className="font-mystery-mixed text-white text-[35px] mt-[45px] mb-[17px]">
          Contacto
        </h2>
        <div className="w-full max-w-[250px] h-auto mx-auto grid place-items-center grid-cols-2 mb-[30px]">
          <Qr_social_networks
            styles={" mr-[1px] w-[113px] h-[108px] sm:w-[90px] sm:h-[90px]"}
            url={"behance.png"}
            width={100}
            height={108}
            alt="behance"
          />
          <Qr_social_networks
            styles={
              "mt-10 ml-[19px] w-[122px] h-[118px] sm:w-[90px] sm:h-[90px] sm:ml-[-15px]"
            }
            url={"instagram.png"}
            width={100}
            height={108}
            alt="instagram"
          />
          <Qr_social_networks
            styles={
              "mr-[20px] mt-[20px] w-[113px] h-[108px] sm:w-[90px] sm:h-[90px] sm:mt-[-10px] sm:mr-[0px]"
            }
            url={"github.png"}
            width={100}
            height={108}
            alt="github"
          />
          <Qr_social_networks
            styles={
              "mt-[55px] ml-4 w-[127px] h-[119px] sm:w-[90px] sm:h-[90px] sm:mt-[18px]"
            }
            url={"wpp.png"}
            width={100}
            height={108}
            alt="wpp"
          />

          <Qr_social_networks
            styles={
              "mt-4 mt-[27px] w-[115px] h-[124px] sm:w-[90px] sm:h-[90px]"
            }
            url={"tiktok.png"}
            rotation={"col-span-2"}
            width={100}
            height={108}
            alt="tiktok"
          />
        </div>
      </div>
      <Image
        src={"/Star_blue_1.png"}
        width={50}
        height={50}
        alt="Logo"
        className="w-[85px] h-[90px] flex flex-col items-center justify-start absolute top-[-46px] right-[20px] sm:w-[130px] sm:h-[120px] sm:top-[-60px]"
      ></Image>
    </div>
  );
};
