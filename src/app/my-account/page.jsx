"use client";

import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Button from "@/common/Button";
import IconButton from "@/common/IconButton";
import { Arrow } from "@/common/Icons";
import MyData from "@/components/MyData";
import MyCourses from "@/components/MyCourses";
import MyList from "@/components/MyList";
import MyCertificates from "@/components/MyCertificates";

export default function MyAccount() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("Mis datos");

  //Token para la informacion de usuario.
  const userToken = sessionStorage.getItem("token");
  const decodedToken = jwtDecode(userToken);
  
  //Arreglo de las 4 secciones a mostrar
  const pages = [
    { key: "mydata", title: "Mis datos", content: <MyData decodedToken={decodedToken}/> },
    { key: "mycourses", title: "Mis cursos", content: <MyCourses decodedToken={decodedToken} title="Mis cursos"/> },
    { key: "mylist", title: "Mi lista", content: <MyList decodedToken={decodedToken}/> },
    { key: "mycertificates", title: "Mis certificados", content: <MyCertificates decodedToken={decodedToken}/> },
  ];

  //Manejadores de paginas (siguiente y previa)
  const handlePrevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1)
  const handleNextPage = () => currentPage < (pages.length - 1) && setCurrentPage(currentPage + 1)

  //Hace los pedidos para traer la informacion de las secciones
  const handleTitle = (title) => setCurrentTitle(title)

  return (
    <>
      {/*modo mobile*/}
      <div className="flex flex-col items-center md:hidden">
        <div className="bg-[#D9D9D9] mb-28 rounded-xl mt-10 w-[90%]" style={{ boxShadow: '0px 5px 6px -2px rgba(0,0,0,0.40)' }}>
          <div className="bg-[#1E1E1E] w-full rounded-t-xl flex justify-between items-center py-3">
            {currentPage > 0 && (
              <IconButton
                className="absolute left-0 ml-[10%] rotate-180"
                onClick={handlePrevPage}
              >
                <Arrow color="white"/>
              </IconButton>
            )}
            <h2 className="text-white font-mystery-mixed text-2xl underline decoration-pink text-center flex-1" style={{ textUnderlineOffset: "6px" }} >
              {pages[currentPage].title}
            </h2>
            {currentPage < pages.length - 1 && (
              <IconButton className="absolute right-0 mr-[10%]" onClick={handleNextPage}>
                <Arrow color="white" />
              </IconButton>
            )}
          </div>
          {pages[currentPage].content}
        </div>
      </div>

      {/* Modo escritorio */}
      <div className="hidden md:flex md:flex-col md:items-center">
        <div className="bg-[#D9D9D9] rounded-xl mt-10 mb-48 w-[90%] max-w-[1000px]" style={{ boxShadow: '0px 5px 6px -2px rgba(0,0,0,0.40)' }}>
          <div className="bg-[#1E1E1E] w-full rounded-t-lg py-3 flex items-center px-4">
            {pages?.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleTitle(page.title)}
                className={`w-full `}
              >
                <h2 className={`text-[#fff] bg-[#1E1E1E] font-mystery-mixed text-2xl py-1 ${currentTitle === page.title ? "underline decoration-pink decoration-[1.5px]" : "hover:underline hover:decoration-pink hover:decoration-[1.5px]"}`} style={{ textUnderlineOffset: "6px" }}>
                  {page.title}
                </h2>
              </Button>
            ))}
          </div>
          {/* Renderiza el contenido basado en el título activo */}
          {pages.map((page, index) => (
            <div key={index}>
              {currentTitle === page.title && page.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}