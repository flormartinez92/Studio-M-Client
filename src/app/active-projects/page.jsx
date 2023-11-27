"use client";

import React from "react";

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
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 10;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects`)
      .then((res) => {
        const projects = res.data;
        setProjects(projects);
      })
      .catch((error) => {
        console.error("Error getting Projects:", error);
      });
  }, []);

  const toggleStatus = async (projectId, projectStatus, oneProject) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/approved/${projectId}`,
        {
          status: projectStatus,
          userId: oneProject.userId,
          courseId: oneProject.courseId,
        }
      );
      const projects = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects`
      );
      setProjects(projects.data);
    } catch (error) {
      console.error(error);
    }
  };

  const showAlert = (projectId) => {
    const isApproved = window.confirm(
      "¿Estás seguro de que quieres aprobar este proyecto?"
    );

    if (isApproved) {
      alert(`Proyecto ${projectId} aprobado`);
      handleStatusToggle(projectId);
    } else {
      alert("Acción cancelada");
    }
  };

  const handleStatusToggle = async (projectId) => {
    try {
      const oneProject = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects/${projectId}`
      );
      const newStatus = !oneProject.data.status;
      toggleStatus(projectId, newStatus, oneProject.data);
      setTimeout(() => {
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.projectId === projectId
              ? { ...project, status: newStatus }
              : project
          )
        );
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (url) => {
    try {
      if (url) {
        window.open(url, "_blank");
      } else {
        console.warn("La URL está vacía");
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
            {projects?.slice(startIndex, endIndex).map((project) => (
              <tr
                key={project.userId}
                className="w-full md:w-[740px] xl:w-[1211px] h-[48px] border-b-[0.5px] md:border-l-[0.5px] border-lightGrey md:border-r-[0.5px] "
              >
                <td className="p-4">{project.name + " " + project.lastname}</td>
                <td className="max-sm:hidden">{project.courseShortTitle}</td>
                <td className="pl-10">
                  <button onClick={() => handleClick(project.project_url)}>
                    <Link color="#E21B7B" />
                  </button>
                </td>
                <td className="pl-10">
                  <button>
                    <Plus color="#4FE21B" />
                  </button>
                </td>
                <td className="p-4">
                  <button onClick={() => showAlert(project.projectId)}>
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
              <td>&nbsp;</td>
              <td></td>
              <td>Filas por página</td>
              <td className="flex justify-between mt-3">
                &nbsp; {currentPage} de {totalPages}
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <UilArrow1
                    color={currentPage === 1 ? "lightGrey" : "black"}
                  />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prevPage) =>
                      Math.min(prevPage + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                >
                  <UilArrow2
                    color={currentPage === totalPages ? "lightGrey" : "black"}
                  />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
