import Button from "@/common/Button";
import { Trash, Pencil, Plus, ArrowReload } from "@/common/Icons";
import ListItem from "@/common/ListItem";
import React from "react";

export default function ActiveCourses() {
  return (
    <div className="px-4">
      <h2 className="text-4xl md:text-6xl font-mystery-mixed mt-20 mb-10 md:mb-20 text-center flex justify-center">
        Cursos Activos
      </h2>
      <div className="">
        <ListItem
          text="Curso"
          text1="clases"
          text2="Alumnos"
          text3="Agregar"
          text4="Editar"
          text5="Bloquear/Habilitar"
          classNameP="md:block"
          className="w-full md:w-[1211px] h-[48px] hidden md:block"
        />
        <ListItem
          text="UX Writing"
          classNameText="Curso"
          iconOne={<Plus color="#4FE21B" />}
          iconTwo={<Pencil color="#1BBEE2" />}
          iconThree={<Trash color="#A31616" />}
          className="w-full md:w-[1211px] h-[48px] border-b-[0.5px] border-gray"
        />
        <ListItem
          text="UX Research"
          iconOne={<Plus color="#4FE21B" />}
          iconTwo={<Pencil color="#1BBEE2" />}
          iconThree={<Trash color="#A31616" />}
          className="w-full md:w-[1211px] h-[48px] border-b-[0.5px] border-gray"
        />
        <ListItem
          text="UI Design"
          iconOne={<Plus color="#4FE21B" />}
          iconTwo={<Pencil color="#1BBEE2" />}
          iconThree={<ArrowReload color="#E21B7B" />}
          className="w-full md:w-[1211px] h-[48px] shadow-xl "
        />
        <div className="flex justify-end mt-6 mr-24">
          <Button className="w-[120px] h-[40px] bg-[#389817] flex items-center rounded-md">
            <Button className=" bg-[#389817] rounded-md p-1">
              {<Plus className="text-white" />}
            </Button>
            <span className="text-white">Crear curso</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
