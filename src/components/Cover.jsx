import Image from "next/image";
import Link from "next/link";

export default function Cover() {
  return (
    <div className="bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center">
      <div className=" md:h-screen flex flex-col md:px-[30px] md:flex-row md:pb-[100px]">
        <div className="mx-auto mt-[20px] md:px-[40px] flex flex-col justify-center items-center">
          <h1 className="text-white font-mystery-mixed text-[44px] md:text-[55px] xl:text-[110px] tracking-wide md:pb-10">
            Studio by M
          </h1>
          {/* Este div se ve en modo desktop */}
          <div className="hidden md:block md:pt-8 relative md:w-[162px] md:h-[84px] xl:w-[270px] xl:h-[140px]">
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
              className="relative md:-top-[82px] md:-right-[63px] xl:-top-[135px] xl:-right-[103px]"
            />
            <Link href={"#"}>
              <h3 className="text-[#000000] font-mystery-mixed text-[30px] xl:text-[50px] relative md:-top-[140px] md:-right-[10px] xl:-top-[230px] xl:-right-[16px] -rotate-6">
                Ver cursos
              </h3>
            </Link>
          </div>
        </div>

        <div className="mx-auto  mb-[60px] mt-[20px] relative md:m-auto md:w-auto md:h-auto">
          <Image
            src="/img/pink-square.png"
            width={55}
            height={55}
            alt="pinkSquare"
            className="m-auto absolute -left-3 -top-2 md:-top-3 md:-left-6 xl:-top-5 xl:-left-9 md:w-[110.4px] md:h-[110.4px] xl:w-[165.6px] xl:h-[165.6px]"
          />
          <Image
            src="/img/green-square.png"
            width={59}
            height={59}
            alt="greenSquare"
            className="m-auto absolute -right-0 -bottom-3.5 md:-bottom-[27px] md:right-1 xl:-bottom-[38px] xl:-right-0 md:w-[118.2px] md:h-[118.2px] xl:w-[177.3px] xl:h-[177.3px]"
          />
          <Image
            src="/img/Maca.png"
            width={130}
            height={154}
            alt="MacaLogo"
            className="m-auto relative md:w-[261.6px] md:h-[309px] xl:w-[392.4px] xl:h-[463.5px] "
          />
        </div>
      </div>
    </div>
  );
}
