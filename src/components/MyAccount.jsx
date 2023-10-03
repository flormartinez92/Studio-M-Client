"use client";

import IconButton from "@/common/IconButton";
import { Arrow, CartShopSimple, Pencil } from "@/common/Icons";
import Input from "@/common/Input";
import Image from "next/image";
import React, { useState } from "react";
import Cards from "./Cards";

export default function MyAccount() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Mis datos",
      content: (
        <div className=" mt-6 flex flex-col items-center">
          <div className="relative">
            <Image
              src={"/img/usuario.png"}
              width={300}
              height={300}
              className="rounded-full w-[82px] h-[83px]"
            />
            <IconButton className="absolute right-2 bottom-0 bg-black rounded-full w-[18px] h-[17px]">
              <Pencil color="white" width="9px" height="8px" />
            </IconButton>
          </div>

          <Input
            name="name"
            type="text"
            placeholder="Marcos"
            className="w-[65%]"
            classNameLabel="text-[20px]"
            label="Nombre"
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Solis"
            className="w-[65%]"
            classNameLabel="text-[20px]"
            label="Apellido"
          />
          <Input
            name="email"
            type="text"
            placeholder="marcos10@gmail.com"
            className="w-[65%]"
            classNameLabel="text-[20px]"
            label="Email"
          />
          <Input
            name="document"
            type="INT"
            placeholder="45671231"
            className="w-[65%] mb-12"
            classNameLabel="text-[20px]"
            label="DNI"
          />
        </div>
      ),
    },
    {
      title: "Mis cursos",
      content: (
        <div className="flex overflow-x-auto md:bg-center md:h-[500px] md:justify-center items-center mb:justify-start">
          <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Research"
              buttonTitle="Ver curso"
              img="/img/indonesiaGrande.png"
              className="max-w-[205px]"
              classNameButton="py-1 px-3"
            />
          </div>
          <div className="w-70 ml-4 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Writing"
              buttonTitle="Ver curso"
              img="/img/studio.png"
              className="max-w-[205px]"
              classNameButton="py-1 px-3"
            />
          </div>
          <div className="w-70 ml-4 mr-4 md:w-72 md:ml-6 md:mr-6">
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
        <div className="flex overflow-x-auto md:bg-[length:100%_500px] md:bg-center md:h-[500px] md:justify-center items-center mb:justify-start">
          <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Research"
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img="/img/indonesiaGrande.png"
              className="max-w-[205px]"
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
              classNameButton="py-1 px-3"
              classNameIconButton="py-1 px-2"
            />
          </div>
        </div>
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

  return (
    <div className="flex flex-col items-center">
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
          <h2 className="text-white font-mystery-mixed text-2xl underline decoration-pink text-center flex-1 ">
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
  );
}
