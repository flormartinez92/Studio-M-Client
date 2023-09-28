import Button from "@/common/Button";
import IconButton from "@/common/IconButton";
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
            <tr>
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
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center mt-10 md:justify-end md:mr-24">
        <Button className="w-[120px] h-[40px] bg-darkGreen flex items-center rounded-md p-2 md:p-3 md:w-[130px]">
          <Plus className="text-whiter" width="15" />
          <span className="text-white items-center flex justify-between">
            Crear curso
          </span>
        </Button>
      </div>
    </div>
  );
}
