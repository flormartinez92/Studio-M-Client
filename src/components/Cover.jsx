import Image from "next/image";

export default function Cover() {
  return (
    <div className="bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center w-[100%] min-h-min flex flex-col md:py-[70px] md:pr-[70px] md:flex-row">
      <div className="mx-auto mt-[20px] md:my-[50px] md:py-10 md:pr-[40px] md:mb-8 flex flex-col justify-center items-center md:h-full">
        <h1 className="text-white font-mystery-mixed text-[44px] md:text-[100px] tracking-wide m-auto text-center p-4 md:mb-6">
          Studio by M
        </h1>
        {/* Este div se ve en modo desktop */}
        <div className="hidden md:block  py-14 relative w-[270px] h-[140px]">
          <Image
            src="/img/paper-desktop-cover.png"
            width={270}
            height={140}
            alt="paperDesktopCover"
            className="absolute"
          />
          <Image
            src="/img/star.gif"
            width={279}
            height={279}
            alt="starGIF"
            className="relative -top-[135px] -right-[105px]"
          />
          <h3 className="text-[#000000] font-mystery-mixed text-[50px] relative -top-[230px] -right-[14px] -rotate-6">
            Ver cursos
          </h3>
        </div>
      </div>

      <div className="mx-auto  mb-[60px] mt-[20px] relative md:w-auto md:h-auto ">
        <Image
          src="/img/pink-square.png"
          width={55}
          height={55}
          alt="pinkSquare"
          className="m-auto absolute -left-3 -top-2 md:-top-5 md:-left-10 md:w-[184px] md:h-[184px]"
        />
        <Image
          src="/img/green-square.png"
          width={59}
          height={59}
          alt="greenSquare"
          className="m-auto absolute -right-0 -bottom-3.5 md:-bottom-11 md:-right-1 md:w-[197px] md:h-[197px]"
        />
        <Image
          src="/img/Maca.png"
          width={130}
          height={154}
          alt="MacaLogo"
          className="m-auto relative md:w-[436px] md:h-[515px] "
        />
      </div>
    </div>
  );
}
