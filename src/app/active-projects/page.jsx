"use client";

import React from "react";
import Button from "@/common/Button";

import {
  BoxCheck,
  Check,
  Link,
  Plus,
  UilArrow1,
  UilArrow2,
} from "@/common/Icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function ActiveProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects`)
      .then((res) => {
        const projects = res.data;
        console.log(projects);
        setProjects(projects);
      })
      .catch((error) => {
        console.error("Error getting Projects:", error);
      });
  }, []);

  const toggleStatus = async (proyectId, projectStatus) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/approved/${proyectId}`,
        { status: projectStatus }
      );
      const projects = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects`
      );
      setProjects(projects.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusToggle = async (proyectId) => {
    try {
      const oneProject = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects/${proyectId}`
      );
      if (oneProject.data.status) {
        toggleStatus(proyectId, false);
      } else {
        toggleStatus(proyectId, true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="my-20 mb-60">
      <h2 className="text-4xl md:text-5xl xl:text-6xl font-mystery-mixed mt-10 mb-10 md:mb-15 xl:mb-20 text-center flex justify-center">
        Proyectos para corregir
      </h2>
      <div className="flex justify-center px-4 font-ms-gothic md:ml-10 xl:ml-10 md:mr-10 xl:mr-10 ">
        <table className="w-full xl:table-fixed">
          <thead className="max-sm:hidden">
            <tr className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey  md:border-r-[0.5px] rounded-t-lg text-[#757575] border-t-[0.05px]">
              <td className="p-4">Nombre completo</td>
              <td className="sm:pr-10">Curso</td>
              <td className="sm:pr-10">Link de entrega</td>
              <td className="sm:pr-10 md:pr-10">Agregar comentario</td>
              <td className="sm:pr-10 md:pr-10">Aprobar</td>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.userId}
                className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey md:border-r-[0.5px] "
              >
                <td className="p-4">{project.name + " " + project.lastname}</td>
                <td className="max-sm:hidden">{project.courseShortTitle}</td>
                <td className="pl-10">
                  <button>
                    <Link color="#E21B7B" />
                  </button>
                </td>
                <td className="pl-10">
                  <button>
                    <Plus color="#4FE21B" />
                  </button>
                </td>
                <td className="p-4">
                  <button onClick={() => handleStatusToggle(project._id)}>
                    {project.status ? (
                      <Check color="#A31616" />
                    ) : (
                      <BoxCheck color="#E21B7B" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="w-full md:w-[740px] xl:w-[1211px] h-[48px] max-sm:hidden border-t-[0.5px] border-lightGrey shadow-xl md:border-r-[0.5px] md:border-l-[0.5px] rounded-b-lg">
            <tr>
              <td>&nbsp;</td>
              <td></td>
              <td>Filas por página</td>
              <td className="flex justify-between mt-3">
                &nbsp; 1 de 3
                <UilArrow1 color="lightGrey" />
                <UilArrow2 color="lightGrey" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* <div className="flex justify-center mt-10 md:justify-end md:mr-24">
        <Button className="w-[120px] h-[40px] bg-darkGreen flex items-center rounded-md md:p-1 md:w-[150px]">
          <Plus className="" width="25" />
          <span className="text-white items-center flex md:ml-1">
            Crear cupón
          </span>
        </Button>
      </div> */}
    </section>
  );
}
