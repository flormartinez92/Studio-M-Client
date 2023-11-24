import Image from "next/image";
import Link from "next/link";

export default function Cover() {
  return (
    <section className="bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center">
      <div
        className="border-solid border-t border-h2Black h-1/2 flex flex-col
      md:h-screen md:px-7 md:flex-row md:pb-24"
      >
        <div
          className="mx-auto mt-5 flex flex-col justify-center items-center
        md:px-10 "
        >
          <h1
            className="text-white font-mystery-mixed text-[2.75rem] tracking-wide
          md:text-[3.5rem] md:pb-10
          xl:text-[6.9rem]"
          >
            Studio by M
          </h1>
          {/* Este div se ve en modo desktop */}
          <div
            className="hidden md:block md:pt-8 relative md:w-40 md:h-20 
          xl:w-64 xl:h-36"
          >
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
              className="relative md:-top-[5.125rem] md:-right-[3.94rem] 
              xl:-top-[8.125rem] xl:-right-[6.25rem]"
            />
            <Link href={"/courses"}>
              <h3
                className="text-[#000000] font-mystery-mixed text-3xl relative -rotate-6
              md:-top-[8.75rem] md:-right-[0.625rem]
              xl:text-5xl xl:-top-[13.125rem] xl:-right-[0.875rem] "
              >
                Ver cursos
              </h3>
            </Link>
          </div>
        </div>

        <div
          className="mx-auto mb-14 mt-5 relative 
        md:m-auto md:w-auto md:h-auto"
        >
          <Image
            src="/img/pink-square.png"
            width={55}
            height={55}
            alt="pinkSquare"
            className="m-auto absolute -left-3 -top-2 
            md:-top-3 md:-left-6 md:w-[110.4px] md:h-[110.4px]
            xl:-top-5 xl:-left-9 xl:w-[165.6px] xl:h-[165.6px]"
          />
          <Image
            src="/img/green-square.png"
            width={59}
            height={59}
            alt="greenSquare"
            className="m-auto absolute -right-0 -bottom-3.5 
            md:-bottom-[27px] md:right-1 md:w-[118.2px] md:h-[118.2px]
            xl:-bottom-[38px] xl:-right-0 xl:w-[177.3px] xl:h-[177.3px]"
          />
          <Image
            src="/img/Maca.png"
            width={130}
            height={154}
            alt="MacaLogo"
            className="m-auto relative 
            md:w-[261.6px] md:h-[309px] 
            xl:w-[392.4px] xl:h-[463.5px] "
          />
        </div>
      </div>
    </section>
  );
}
