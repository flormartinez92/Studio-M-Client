import Button from "@/common/Button";
import {
  Trash,
  Pencil,
  Plus,
  ArrowReload,
  UilArrow1,
  UilArrow2,
} from "@/common/Icons";
import React from "react";

export default function ActiveCourses() {
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-mystery-mixed mt-20 mb-10 md:mb-20 text-center flex justify-center">
        Cursos activos
      </h2>
      <div className="px-4 font-ms-gothic text-xl md:ml-20 md:mr-20">
        <table className="w-full md:table-fixed">
          <thead className="max-sm:hidden">
            <tr className="w-full md:w-[1211px] h-[48px] border-b-[0.5px] border-gray border-t-[0.5px]">
              <td color="white">Curso</td>
              <td>Clases</td>
              <td>Alumnos</td>
              <td>Agregar</td>
              <td>Editar</td>
              <td>Bloquear/Habilitar</td>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full md:w-[1211px] h-[48px] border-b-[0.5px] border-gray">
              <td>UX Writing</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td>
                <Plus color="#4FE21B" />
              </td>
              <td>
                <Pencil color="#1BBEE2" />
              </td>
              <td>
                <Trash color="#A31616" />
              </td>
            </tr>
            <tr className="w-full md:w-[1211px] h-[48px] border-b-[0.5px] border-gray">
              <td>UX Research</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td>
                <Plus color="#4FE21B" />
              </td>
              <td>
                <Pencil color="#1BBEE2" />
              </td>
              <td>
                <Trash color="#A31616" />
              </td>
            </tr>
            <tr className="w-full md:w-[1211px] h-[48px] max-sm:shadow-xl">
              <td>UI Design</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td className="max-sm:hidden">&nbsp;</td>
              <td>
                <Plus color="#4FE21B" />
              </td>
              <td>
                <Pencil color="#1BBEE2" />
              </td>
              <td>
                <ArrowReload color="#E21B7B" />
              </td>
            </tr>
          </tbody>
          <tfoot className="w-full md:w-[1211px] h-[48px] max-sm:hidden border-t-[0.5px] border-gray shadow-xl">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td></td>
            <td>Filas por página</td>
            <td className="flex justify-between mt-3">
              1 de 10
              <UilArrow1 color="lightGrey" />
              <UilArrow2 color="lightGrey" />
            </td>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center mt-10 md:justify-end md:mr-60">
        <Button className="w-[120px] h-[40px] bg-darkGreen flex items-center rounded-md">
          <Button className=" bg-darkGreen rounded-md p-1">
            <Plus className="text-white" width="15" />
          </Button>
          <span className="text-white">Crear curso</span>
        </Button>
      </div>
    </div>
  );
}
