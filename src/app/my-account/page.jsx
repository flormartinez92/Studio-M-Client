"use client";

import IconButton from "@/common/IconButton";
import {
  Arrow,
  CartShopSimple,
  Download,
  Pencil,
  Save,
  Share,
} from "@/common/Icons";
import Input from "@/common/Input";
import Image from "next/image";
import React, { use, useState } from "react";
import Cards from "../../components/Cards";
import Border from "@/common/Border";
import Button from "@/common/Button";
import axios from "axios";
import Link from "next/link";

export default function MyAccount() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("Mis datos");

  const [isEditing, setIsEditing] = useState(false);
  const [buttonSave, setButtonSave] = useState(false);
  const [newInputs, setNewInputs] = useState(false);
  const [userCourses, setUserCourses] = useState([]);
  const [userData, setUserData] = useState({});

  const handleClickEdit = () => {
    setIsEditing(true);
    setButtonSave(true);
    setNewInputs(true);
  };

  const handleClickSave = () => {
    //esto seria una vez que queres guardar los datos, despues iria la logica
    setIsEditing(false);
    setButtonSave(false);
    setNewInputs(false);
  };

  function newTitle(title) {
    const titleArray = title.split(" ");
    const titleLength = titleArray.length;
    return titleArray[titleLength - 2] + " " + titleArray[titleLength - 1];
  }

  const pages = [
    {
      title: "Mis datos",
      content: (
        <div className=" mt-6 flex flex-col items-center md:h-[350px] md:flex-row md:justify-between md:items-start md:mt-12">
          <div className="flex flex-row justify-between md:mx-4">
            <Image
              src={"/img/usuario.png"}
              width={100}
              height={100}
              className="rounded-full w-[82px] h-[83px] md:w-[155px] md:h-[155px]"
            />
            <IconButton className="bottom-0 bg-black rounded-full w-[18px] h-[17px] md:w-[24px] md:h-[22px] md:right-16 md:-bottom-2">
              <Pencil color="white" width="12" height="10" />
            </IconButton>
          </div>

          <div className="w-[65%] md:w-1/3 md:mx-4">
            <Input
              name="name"
              type="text"
              value={userData.name}
              className="w-full"
              classNameLabel="text-[20px]"
              label="Nombre"
            />
            <Input
              name="lastName"
              type="text"
              value={userData.lastname}
              className="w-full"
              classNameLabel="text-[20px]"
              label="Apellido"
            />
            <>
              {newInputs && (
                <Input
                  name="lastName"
                  type="password"
                  placeholder="********"
                  className="w-full"
                  classNameLabel="text-[20px]"
                  label="Nueva contraseña"
                />
              )}
            </>
          </div>

          <div className="w-[65%] md:w-1/3 md:mx-4">
            <Input
              name="email"
              type="text"
              value={userData.mail}
              className="w-full"
              classNameLabel="text-[20px]"
              label="Email"
            />
            <Input
              name="document"
              type="INT"
              value={userData.dni}
              className="w-full"
              classNameLabel="text-[20px]"
              label="DNI"
            />
            <>
              {newInputs && (
                <Input
                  name="lastName"
                  type="password"
                  placeholder="********"
                  className="w-full"
                  classNameLabel="text-[20px]"
                  label="Confirmar contraseña"
                />
              )}
            </>
          </div>
          <div
            className={`hidden md:flex md:absolute md:bottom-52 md:right-16 ${
              isEditing ? "editing" : ""
            }`}
          >
            <IconButton
              className=" bg-black rounded-full w-[27px] h-[26px]"
              onClick={isEditing ? handleClickSave : handleClickEdit}
            >
              {isEditing ? (
                <Save color="white" />
              ) : (
                <Pencil color="white" width="15" height="16" />
              )}
            </IconButton>
          </div>
        </div>
      ),
    },
    {
      title: "Mis cursos",
      content: (
        <div className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center">
          <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6 flex flex-row">
            {userCourses?.map((userCourse) => (
              <div key={userCourse._id} className="mr-4">
                <Link href={`/my-account/${userCourse._id}`}>
                  <Cards
                    title={newTitle(userCourse.courseTitle)}
                    buttonTitle="20 %"
                    img={userCourse.courseImg_url}
                    className="max-w-[205px]"
                    classNameButton="py-1 px-3"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Mi lista",
      content: (
        <div className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center">
          <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6">
            <Cards
              title="UX Research"
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img="/img/indonesiaGrande.png"
              className="max-w-[205px]"
              classNameBorder="w-[145px]"
              classNameButton="py-1 px-3 whitespace-nowrap w-auto"
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
              classNameButton="py-1 px-3 whitespace-nowrap w-auto"
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
              classNameButton="py-1 px-3 whitespace-nowrap w-auto"
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
                className="mt-3"
              />
              <div className="absolute pt-8 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-2xl font-mystery-mixed">Certificado</h2>
                <h3 className="text-3xl font-mystery-mixed">Ux Researcher</h3>
                <p className="text-base font-ms-gothic">Emilia Rodriguez</p>
                <p className="text-base font-ms-gothic">DNI: 36.363.363</p>
                <p className="text-sm font-ms-gothic">
                  Ha realizado y completado con éxito su curso en by M Studio,
                  cumpliendo con todos los requisitos académicos exigidos
                </p>
                <p className="text-base font-ms-gothic">03 de Agosto de 2023</p>
              </div>
              <div className="absolute top-16 right-10">
                <IconButton className="flex flex-col">
                  <Download />
                  <Share />
                </IconButton>
              </div>
              <div className="absolute bottom-20 left-40 flex">
                <h3 className=" font-mystery-mixed text-xl">Studio by M</h3>
              </div>
              <div className=" absolute bottom-12 right-44">
                <h3 className=" font-ms-gothic text-sm text-center">
                  <span>Macarena</span>
                  <br />
                  <span>Bernal</span>
                </h3>
              </div>
              <Image
                src="/img/firma.png"
                width={100}
                height={100}
                alt="Picture"
                className="w-[40px] h-[70px] absolute right-48 bottom-24"
              />
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

  const handleTitle = async (title) => {
    const userId = localStorage.getItem("userId");

    if (title === "Mis cursos") {
      try {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}/purchasedCourse`
          )
          .then((res) => setUserCourses(res.data));
        setCurrentTitle(title);
      } catch (error) {
        console.error(error);
      }
    } else if (title === "Mis datos") {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}`)
          .then((res) => setUserData(res.data));
        setCurrentTitle(title);
      } catch (error) {
        console.error(error);
      }
    } else {
      setCurrentTitle(title);
    }
  };

  return (
    <>
      {/*modo mobile*/}
      <div className="flex flex-col h-screen items-center md:hidden">
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
      <div className="hidden h-screen md:flex md:flex-col md:items-center">
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
