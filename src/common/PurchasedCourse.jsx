import Image from "next/image";
import Button from "./Button";

export default function PurchasedCourse({}) {
  return (
    <div className="flex  flex-col justify-center items-center my-14">
      <h3 className=" font-mystery-mixed text-[32px] text-h2Black -rotate-3">
        ¡Gracias por tu compra!
      </h3>
      <div className="flex flex-row space-x-10 my-4">
        <h3 className=" font-mystery-mixed text-[32px] text-h2Black -rotate-3 m-auto">
          Ux research
        </h3>
        <Image
          src={"/images/Group29.png"}
          width={99}
          height={101.16}
          alt="Group29"
        />
      </div>
      <div className="mx-12 mb-20">
        <h4 className="font-ms-gothic text-center text-[20px] text-h3Black my-4">
          Profundizando en tecnologías y prácticas avanzadas
        </h4>
        <p className="font-ms-gothic text-center text-[16px] text-darkGray leading-4">
          Esta especialización en UX Research está diseñada para aquellos que
          desean profundizar en las metodologías y prácticas avanzadas de
          investigación de experiencia de usuario. A lo largo de esta
          especialización, te sumergirás en una serie de temas clave que te
          permitirán convertirte en un experto en la investigación de usuarios y
          en la creación de soluciones basadas en insights sólidos.
        </p>
      </div>
      <Button type="rounder" className="font-ms-gothic">
        Iniciar Curso
      </Button>
    </div>
  );
}
