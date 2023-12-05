import Image from "next/image";

export default function Loading_common({
  className = "w-20 h-20",
  classNameH2 = "text-3xl",
}) {
  return (
    <div className={`${className} flex justify-center items-center gap-x-1`}>
      <h2 className={`font-ms-gothic ${classNameH2}`}>{`Cargando`}</h2>
      <Image
        src={"/svg/icons8-carga.gif"}
        objectFit="cover"
        width={100}
        height={100}
        alt="icon animated"
      />
    </div>
  );
}
