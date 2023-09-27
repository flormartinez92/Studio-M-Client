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
            "bg-white bg-opacity-0 text-black flex flex-row items-center gap-2"
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
        className={"w-[60%] md:w-[80%] md:h-auto md:bg-[#D9D9D9] md:shadow-lg md:transform md:hover:translate-y-[-4px] md:transition-transform rounded-lg"}
        className2={"md:flex md:flex-row font-ms-gothic"}
        classNameButton={"md:hidden"}
        classNameIconButton={"px-[7.5px] md:hidden"}
        classNameBorder={"md:hidden"}
        classNameImg={"md:max-h-64 md:max-w-[176px] md:rounded-r-none lg:max-h-72 lg:max-w-[208px] xl:h-[15rem] xl:max-w-[15rem]"}
        newClass={"md:block md:flex md:flex-col md:justify-between md:items-center md:text-xs md:my-1.5 lg:my-2.5 xl:my-3.5"}
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
        className={"w-[60%] md:w-[80%] md:h-auto md:bg-[#D9D9D9] md:shadow-lg md:transform md:hover:translate-y-[-4px] md:transition-transform rounded-lg"}
        className2={"md:flex md:flex-row font-ms-gothic"}
        classNameButton={"md:hidden"}
        classNameIconButton={"px-[7.5px] md:hidden"}
        classNameBorder={"md:hidden"}
        classNameImg={"md:max-h-64 md:max-w-[176px] md:rounded-r-none lg:max-h-72 lg:max-w-[208px] xl:h-[15rem] xl:max-w-[15rem]"}
        newClass={"md:block md:flex md:flex-col md:justify-between md:items-center md:text-xs md:my-1.5 lg:my-2.5 xl:my-3.5"}
        titleResume={"Dominio en la Creación de Contenidos Centrados en el Usuario"}
        price={"10.000"}
        resume={"Este curso avanzado de UX Writing te llevará más allá de los fundamentos y te sumergirá en el mundo del diseño de contenidos de interfaz de usuario de alto nivel. Aprenderás a comunicarte con claridad y empatía, influyendo en la experiencia del usuario a través de mensajes efectivos y estratégicos. Desde la creación de microcopys hasta guías de contenido completas, este curso te proporcionará las herramientas y técnicas necesarias para convertirte en un experto en la creación de contenido de alta calidad que mejore la usabilidad y la satisfacción del usuario."}
        level={"Intermedio"}
        hours={"30"}
        wishes={"Agregar a la lista de deseos"}
      />
      <Cards
        title={"Ui Design"}
        buttonTitle={"Ver Curso"}
        icon={<CartShopSimple width={"16px"} height={"16px"} />}
        img={"/img/tirza.png"}
        className={"w-[60%] md:w-[80%] md:h-auto md:bg-[#D9D9D9] md:shadow-lg md:transform md:hover:translate-y-[-4px] md:transition-transform rounded-lg"}
        className2={"md:flex md:flex-row font-ms-gothic"}
        classNameButton={"py-1.5 px-5 md:hidden"}
        classNameIconButton={"py-2 px-[7.5px] md:hidden"}
        classNameBorder={"md:hidden"}
        classNameImg={"md:max-h-64 md:max-w-[176px] md:rounded-r-none lg:max-h-72 lg:max-w-[208px] xl:h-[15rem] xl:max-w-[15rem]"}
        newClass={"md:block md:flex md:flex-col md:justify-between md:items-center md:text-xs md:my-1.5 lg:my-2.5 xl:my-3.5"}
        titleResume={"Explorando Funcionalidades Avanzadas y Metodologías Modernas"}
        price={"10.000"}
        resume={"Este curso avanzado te proporcionará las habilidades necesarias para destacarte en el diseño de interfaces de usuario, utilizando las últimas características de Figma, incluyendo variantes, autolayout, variables y Figma Dev. Al final del curso, los estudiantes estarán listos para crear diseños interactivos, adaptables y accesibles, mientras aplican metodologías modernas y colaboran eficazmente con desarrolladores."}
        level={"Intermedio"}
        hours={"30"}
        wishes={"Agregar a la lista de deseos"}
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
