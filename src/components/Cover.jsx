import Image from "next/image";

export default function Cover() {
  return (
    <div className="relative">
      <Image
        src={"/images/fondo.png"}
        width={100}
        height={100}
        alt="background"
        className="w-full"
        priority
      ></Image>
      <div className="inset-0 flex flex-col items-center justify-center absolute">
        <h1 className="font-mystery-mixed text-white mb-6 text-[48px] tracking-wide">
          Studio by M
        </h1>
        <div className="relative">
          <Image
            src={"/images/SquarePink.png"}
            width={55}
            height={55}
            className="absolute top-[-8px] left-[-10px]"
            alt="Cuadrado Rosado"
            priority
          />
          <Image
            src={"/images/SquareGreen.png"}
            width={59}
            height={59}
            className="absolute bottom-[-10px] right-[-2px]"
            alt="Cuadrado Verde"
            priority
          />
          <Image
            src={"/images/Maca.png"}
            width={130}
            height={154}
            className="relative"
            alt="Cuadrado Logo"
            priority
          />
        </div>
      </div>
    </div>
  );
}
