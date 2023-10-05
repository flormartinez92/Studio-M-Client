"use client";

import IconButton from "@/common/IconButton";
import { Arrow, CartShopSimple, Download, Pencil, Share } from "@/common/Icons";
import Input from "@/common/Input";
import Image from "next/image";
import React, { useState } from "react";
import Cards from "./Cards";
import Border from "@/common/Border";
import Button from "@/common/Button";

export default function MyAccount() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("Mis datos");

  const pages = [
    {
      title: "Mis datos",
      content: (
        <div className=" mt-6 flex flex-col items-center md:h-[400px] md:flex-row md:items-start md:mt-12">
          <div className="relative md:w-1/3 md:mx-4">
            <Image
              src={"/img/usuario.png"}
              width={300}
              height={300}
              className="rounded-full w-[82px] h-[83px] md:w-[150px] md:h-[150px]"
            />
            <IconButton className="absolute right-2 bottom-0 bg-black rounded-full w-[18px] h-[17px]">
              <Pencil color="white" width="9" height="8" />
            </IconButton>
          </div>

          <div className="w-[65%] md:w-1/3 md:mx-4">
            <Input
              name="name"
              type="text"
              placeholder="Marcos"
              className="w-full"
              classNameLabel="text-[20px]"
              label="Nombre"
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Solis"
              className="w-full"
              classNameLabel="text-[20px]"
              label="Apellido"
            />
          </div>

          <div className="w-[65%] md:w-1/3 md:mx-4">
            <Input
              name="email"
              type="text"
              placeholder="marcos10@gmail.com"
              className="w-full"
              classNameLabel="text-[20px]"
              label="Email"
            />
            <Input
              name="document"
              type="INT"
              placeholder="45671231"
              className="w-full"
              classNameLabel="text-[20px]"
              label="DNI"
            />
          </div>
          <div className="hidden md:flex self-end mb-8">
            <IconButton className=" bg-black rounded-full w-[27px] h-[26px]">
              <Pencil color="white" width="15" height="16" />
            </IconButton>
          </div>
        </div>
      ),
    },
    {
      title: "Mis cursos",
      content: (
        <div className="flex overflow-x-auto py-14 md:bg-center md:justify-center items-center">
          <div className="ml-6 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Research"
              buttonTitle="Ver curso"
              img="/img/indonesiaGrande.png"
              className="max-w-[205px]"
              classNameButton="py-1 px-3"
            />
          </div>
          <div className="ml-4 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Writing"
              buttonTitle="Ver curso"
              img="/img/studio.png"
              className="max-w-[205px]"
              classNameButton="py-1 px-3"
            />
          </div>
          <div className="ml-4 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UI Design"
              buttonTitle="Ver curso"
              img="/img/tirza.png"
              className="max-w-[205px]"
              classNameButton="py-1 px-3"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mi lista",
      content: (
        <div className="py-14 flex overflow-x-auto md:bg-[length:100%_500px] md:bg-center md:justify-center items-center">
          <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Research"
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img="/img/indonesiaGrande.png"
              className="max-w-[205px]"
              classNameBorder="w-[145px]"
              classNameButton="py-1 px-3"
              classNameIconButton="py-1 px-2"
            />
          </div>
          <div className="w-70 ml-4 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Writing"
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img="/img/studio.png"
              className="max-w-[205px]"
              classNameBorder="w-[145px]"
              classNameButton="py-1 px-3"
              classNameIconButton="py-1 px-2"
            />
          </div>
          <div className="w-70 ml-4 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UI Design"
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img="/img/tirza.png"
              className="max-w-[205px]"
              classNameBorder="w-[145px]"
              classNameButton="py-1 px-3"
              classNameIconButton="py-1 px-2"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mis certificados",
      content: (
        <>
          {/*modo mobile*/}
          <div className=" py-12 md:hidden">
            <div className="flex justify-center py-4">
              <Border className="border-pink border-2 w-[80%]">
                <div className="flex items-center w-full">
                  <div className="w-[70%] flex flex-col items-center border-r-2 border-solid border-pink">
                    <h2 className=" font-mystery-mixed text-3xl">
                      Ux Research
                    </h2>
                    <h3 className=" font-ms-gothic text-sm">03/08/23</h3>
                  </div>
                  <div className="w-[30%] flex justify-center">
                    <IconButton className="flex flex-col">
                      <Download />
                      <Share />
                    </IconButton>
                  </div>
                </div>
              </Border>
            </div>
            <div className="flex justify-center py-4">
              <Border className="border-blue border-2 w-[80%]">
                <div className="flex items-center w-full">
                  <div className="w-[70%] flex flex-col items-center border-r-2 border-solid border-blue">
                    <h2 className=" font-mystery-mixed text-3xl">Ux Writing</h2>
                    <h3 className=" font-ms-gothic text-sm">03/08/23</h3>
                  </div>
                  <div className="w-[30%] flex justify-center">
                    <IconButton className="flex flex-col">
                      <Download />
                      <Share />
                    </IconButton>
                  </div>
                </div>
              </Border>
            </div>
            <div className="flex justify-center py-4">
              <Border className="border-green border-2 w-[80%]">
                <div className="flex items-center w-full">
                  <div className="w-[70%] flex flex-col items-center border-r-2 border-solid border-green">
                    <h2 className=" font-mystery-mixed text-3xl">Ux Desing</h2>
                    <h3 className=" font-ms-gothic text-sm">03/08/23</h3>
                  </div>
                  <div className="w-[30%] flex justify-center">
                    <IconButton className="flex flex-col">
                      <Download />
                      <Share />
                    </IconButton>
                  </div>
                </div>
              </Border>
            </div>
          </div>

          {/*modo desktop*/}
          <div className="hidden md:flex md:justify-center">
            <div className="relative">
              <Image
                src="/img/paper-background.png"
                width={900}
                height={900}
                alt="Picture"
                className="mt-4"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-3xl font-mystery-mixed">Certificado</h2>
                <h3 className="text-4xl font-mystery-mixed">Ux Researcher</h3>
                <p className="text-base font-ms-gothic">Emilia Rodriguez</p>
                <p className="text-base font-ms-gothic">DNI: 36.363.363</p>
                <p className="text-sm font-ms-gothic">
                  Ha realizado y completado con éxito su curso en by M Studio,
                  cumpliendo con todos los requisitos académicos exigidos
                </p>
                <p className="text-base font-ms-gothic mb-12">03 de Agosto de 2023</p>
              </div>
              <div className="absolute top-16 right-10">
                <IconButton className="flex flex-col">
                  <Download />
                  <Share />
                </IconButton>
              </div>
              <div className="absolute bottom-4 left-4 flex">
                <h3 className=" text-right">Studio by M</h3>
                <h3 className=" text-">Macarena Bernal</h3>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleTitle = (title) => {
    setCurrentTitle(title);
  };

  return (
    <>
      {/*modo mobile*/}
      <div className="flex flex-col items-center md:hidden">
        <div className="bg-lightGrey rounded-2xl mt-4 shadow-xl w-[90%]">
          <div className="bg-black w-full rounded-t-lg flex justify-between items-center py-3">
            {currentPage > 0 && (
              <IconButton
                className="ml-[16px] rotate-180"
                onClick={handlePrevPage}
              >
                <Arrow color="white" />
              </IconButton>
            )}
            <h2 className="text-white font-mystery-mixed text-2xl underline decoration-pink text-center flex-1">
              {pages[currentPage].title}
            </h2>
            {currentPage < pages.length - 1 && (
              <IconButton className="mr-[16px]" onClick={handleNextPage}>
                <Arrow color="white" />
              </IconButton>
            )}
          </div>
          {pages[currentPage].content}
        </div>
      </div>

      {/* Modo escritorio */}
      <div className="hidden md:flex md:flex-col md:items-center">
        <div className="bg-page rounded-2xl mt-4 shadow-xl w-[90%]">
          <div className="bg-black w-full rounded-t-lg py-3 flex items-center">
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleTitle(page.title)}
                className="w-full"
              >
                <h2 className="text-white font-mystery-mixed text-2xl hover:underline hover:decoration-pink mx-2">
                  {page.title}
                </h2>
              </Button>
            ))}
          </div>
          {/* Renderiza el contenido basado en el título activo */}
          {pages.map((page) => (
            <div key={page.title}>
              {currentTitle === page.title && page.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
