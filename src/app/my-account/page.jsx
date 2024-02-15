"use client";

import React, { useEffect, useState } from "react";
import Button from "@/common/Button";
import IconButton from "@/common/IconButton";
import { Arrow } from "@/common/Icons";
import MyData from "@/components/MyData";
import MyCourses from "@/components/MyCourses";
import MyList from "@/components/MyList";
import MyCertificates from "@/components/MyCertificates";
import { fetchUser } from "@/helpers/apiHelpers";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/state/features/authSlice";

export default function MyAccount() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("Mis datos");
  const [user, setUser] = useState(null);
  const [arrowColors, setArrowColors] = useState({
    left: "white",
    right: "white",
  });
  const router = useRouter();
  const userState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //Si no hay user, te redirige a Login
  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
      setUser(user);
      if (!user) {
        router.push("/login");
        return;
      }
    };
    checkUserAuthentication();
  }, []);

  //Arreglo de las 4 secciones a mostrar
  const pages = [
    {
      key: "mydata",
      title: "Mis datos",
      content: <MyData />,
    },
    {
      key: "mycourses",
      title: "Mis cursos",
      content: <MyCourses decodedToken={user} title="Mis cursos" />,
    },
    {
      key: "mylist",
      title: "Mi lista",
      content: <MyList decodedToken={user} />,
    },
    {
      key: "mycertificates",
      title: "Mis certificados",
      content: <MyCertificates decodedToken={user} />,
    },
  ];

  // Manejadores de paginas (siguiente y previa)
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setArrowColors({
        left: "white",
        right: "white",
      });
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      setArrowColors({
        left: "white",
        right: "white",
      });
    }
  };

  // Maneja Color de Arrow
  const handleArrowTouchStart = (direction) => {
    setArrowColors((prevColors) => ({
      ...prevColors,
      [direction]: "#E21B7B",
    }));
  };

  // Maneja Color de Arrow
  const handleArrowTouchEnd = (direction) => {
    setArrowColors((prevColors) => ({
      ...prevColors,
      [direction]: "white",
    }));
  };

  // Hace los pedidos para traer la informacion de las secciones
  const handleTitle = (title) => {
    setCurrentTitle(title);
  };

  return (
    <>
      {/*modo mobile*/}
      <div className="flex flex-col items-center md:hidden">
        <div
          className="bg-[#D9D9D9] mb-28 rounded-xl mt-10 w-[90%]"
          style={{ boxShadow: "0px 5px 6px -2px rgba(0,0,0,0.40)" }}
        >
          <div className="bg-[#1E1E1E] w-full rounded-t-xl flex justify-between items-center py-3">
            {currentPage > 0 && (
              <IconButton
                className="absolute left-0 ml-[10%] rotate-180"
                onTouchStart={() => {
                  handlePrevPage();
                  handleArrowTouchStart("left");
                }}
                onTouchEnd={() => handleArrowTouchEnd("left")}
              >
                <Arrow color={arrowColors.left} />
              </IconButton>
            )}
            <h2
              className="text-white font-mystery-mixed text-2xl underline decoration-pink text-center flex-1"
              style={{ textUnderlineOffset: "6px" }}
            >
              {pages[currentPage].title}
            </h2>
            {currentPage < pages.length - 1 && (
              <IconButton
                className="absolute right-0 mr-[10%]"
                onTouchStart={() => {
                  handleNextPage();
                  handleArrowTouchStart("right");
                }}
                onTouchEnd={() => handleArrowTouchEnd("right")}
              >
                <Arrow color={arrowColors.right} />
              </IconButton>
            )}
          </div>
          {pages[currentPage].content}
        </div>
      </div>

      {/* Modo escritorio */}
      <div className="hidden md:flex md:flex-col md:items-center">
        <div
          className="bg-[#D9D9D9] rounded-xl mt-10 mb-48 w-[90%] max-w-[1000px]"
          style={{ boxShadow: "0px 5px 6px -2px rgba(0,0,0,0.40)" }}
        >
          <div className="bg-[#1E1E1E] w-full rounded-t-lg py-3 flex items-center px-4 md:justify-around md:px-0">
            {pages?.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleTitle(page.title)}
                className={`w-full `}
              >
                <h2
                  className={`text-[#fff] bg-[#1E1E1E] font-mystery-mixed text-2xl py-1 md:text-[20px] lg:text-3xl ${
                    currentTitle === page.title
                      ? "underline decoration-pink decoration-[1.5px]"
                      : "hover:underline hover:decoration-pink hover:decoration-[1.5px]"
                  }`}
                  style={{ textUnderlineOffset: "6px" }}
                >
                  {page.title}
                </h2>
              </Button>
            ))}
          </div>
          {/* Renderiza el contenido basado en el título activo */}
          {pages.map((page, index) => (
            <div key={index}>{currentTitle === page.title && page.content}</div>
          ))}
        </div>
      </div>
    </>
  );
}
