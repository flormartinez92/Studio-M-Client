import React from "react";
import Cards from "./Cards";
import { Arrow, CartShopSimple, Vector } from "@/common/Icons";
import Button from "@/common/Button";
import IconButton from "@/common/IconButton";

export default function Courses() {
  return (
    <div className="flex flex-col h-auto justify-around items-center font-mystery-mixed gap-16 mt-10 mb-16">
      <div className="hidden md:block md:space-x-2 md:w-[80%]">
        <Button
          className={
            "bg-white bg-opacity-0 text-[#000] flex flex-row items-center gap-2"
          }
        >
          A-Z <Vector width={"19"} />
        </Button>
      </div>
      <h2 className="text-4xl md:hidden">Nuestros Cursos</h2>
      <Cards
        title={"UX Research"}
        buttonTitle={"Ver Curso"}
        icon={<CartShopSimple width={"16px"} height={"16px"} />}
        img={"/img/indonesiaGrande.png"}
        className={"w-[60%] md:w-[80%] md:h-auto md:bg-[#D9D9D9] rounded-lg"}
        className2={"md:flex md:flex-row font-ms-gothic"}
        classNameButton={"md:hidden"}
        classNameIconButton={"px-[7.5px] md:hidden"}
        classNameBorder={"md:hidden"}
        classNameImg={"md:max-h-64 md:max-w-[176px] md:rounded-r-none"}
        newClass={"md:block md:flex md:flex-col md:justify-between md:items-center md:text-xs md:my-1.5"}
        titleResume={"Profundizando en tecnologías y prácticas avanzadas"}
        price={"10.000"}
        resume={"Esta especialización en UX Research está diseñada para aquellos que desean profundizar en las metodologías y prácticas avanzadas de investigación de experiencia de usuario. A lo largo de esta especialización, te sumergirás en una serie de temas clave que te permitirán convertirte en un experto en la investigación de usuarios y en la creación de soluciones basadas en insights sólidos."}
        level={"Intermedio"}
        hours={"30"}
        wishes={"Agregar a la lista de deseos"}
      />


      <Cards
        title={"UX writing"}
        buttonTitle={"Ver Curso"}
        icon={<CartShopSimple width={"16px"} height={"16px"} />}
        img={"/img/studio.png"}
        className={"w-[60%] md:w-[80%] md:h-auto md:bg-[#D9D9D9] rounded-lg"}
        classNameButton={"md:hidden"}
        classNameIconButton={"px-[7.5px] md:hidden"}
        classNameBorder={"md:hidden"}
        classNameImg={"md:max-h-64 md:max-w-[176px] md:rounded-r-none"}
        newClass={"md:block"}
      />
      <Cards
        title={"Ui Design"}
        buttonTitle={"Ver Curso"}
        icon={<CartShopSimple width={"16px"} height={"16px"} />}
        img={"/img/tirza.png"}
        className={"w-[60%] md:w-[80%] md:h-auto md:bg-[#D9D9D9] rounded-lg"}
        classNameButton={"md:hidden"}
        classNameIconButton={"px-[7.5px] md:hidden"}
        classNameBorder={"md:hidden"}
        classNameImg={"md:max-h-64 md:max-w-[176px] md:rounded-r-none"}
        newClass={"md:block"}
      />
      <div className="hidden md:block md:space-x-2 md:w-[80%]">
        <div className="md:flex md:flex-row md:gap-2">
          <p>1-10</p>
          <IconButton>
            <Arrow width={"14"}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
