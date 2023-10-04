"use client";

import IconButton from "@/common/IconButton";
import { Arrow, CartShopSimple, Heart, Pencil } from "@/common/Icons";
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
        <div className="flex overflow-x-auto h-[483px] md:bg-center md:justify-center items-center">
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
        <div className="h-[483px] flex overflow-x-auto md:bg-[length:100%_500px] md:bg-center md:justify-center items-center">
          <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Research"
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img="/img/indonesiaGrande.png"
              className="max-w-[205px]"
              classNameBorder="w-[140px]"
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
              classNameBorder="w-[140px]"
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
              classNameBorder="w-[140px]"
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
        <div className="h-[483px]">
          <div></div>
          <div></div>
          <div></div>
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
