import Border from "@/common/Border";
import Button from "@/common/Button";
import Image from "next/image";

export const Cupon = () => {
  return (
    <div className="w-[100%] h-auto relative">
      <Image
        src={"/Fondo_3.png"}
        width={100}
        height={100}
        alt="Fondo3"
        className="w-full items-center relative"
      />
      <div className="w-auto absolute inset-0 text-white flex flex-col items-center justify-center">
        <h2 className="text-center font-mystery-mixed text-[30px]">
          Ingresá tu cupón
        </h2>
        <input
          type={"text"}
          name={"Cupon"}
          className="p-2 pl-3 font-ms-gothic outline-none text-[#3f3e3e] mt-[30px] w-[280px]"
        />
        <Border className={`mt-[30px] w-[200px] text-center leading-3 block`}>
          <Button>Aplicar Descuento</Button>
        </Border>
      </div>
    </div>
  );
};
