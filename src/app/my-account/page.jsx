"use client";

import React, { useEffect, useState } from "react";
import Button from "@/common/Button";
import IconButton from "@/common/IconButton";
import { Arrow, User } from "@/common/Icons";
import MyData from "@/components/MyData";
import MyCourses from "@/components/MyCourses";
import MyList from "@/components/MyList";
import MyCertificates from "@/components/MyCertificates";
import { fetchUser } from "@/helpers/apiHelpers";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/state/features/authSlice";
import { motion } from "framer-motion";
import axios from "axios";
import {
  addCourses,
  certificatesUser,
  listFavorites,
  updatemyAccountStatus,
} from "@/state/features/myAccountSlice";
import Loading_common from "@/common/Loading_common";
export default function MyAccount() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("Mis datos");
  const [user, setUser] = useState(null);
  const { user: UserData } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const { coursesUser, favoritesUser, certificates, myAccountStatus } =
    useSelector((state) => state.myAccount);

  const [arrowColors, setArrowColors] = useState({
    left: "white",
    right: "white",
  });
  const router = useRouter();
  const dispatch = useDispatch();

  //Si no hay user, te redirige a Login
  console.log(certificates);
  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      console.log(user);
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
      content: <MyData arrCourses={coursesUser} />,
    },
    {
      key: "mycourses",
      title: "Mis cursos",
      content: (
        <MyCourses
          decodedToken={user}
          arrCourses={coursesUser}
          title="Mis cursos"
        />
      ),
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
  const getFavoritesUser = async (userId) => {
    try {
      const favorites = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/${userId}`
      );
      dispatch(listFavorites(favorites.data));
    } catch (error) {
      console.error(error);
    }
  };
  const getDataUser = async (userId) => {
    //console.log(userId);
    try {
      if (userId) {
        /* const courses = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/userCourses/${userId}`
        );
        const favorites = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/${userId}`
        );
        const certificates = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/certificate/${userId}`
        ); */
        const [courses, favorites, certificates] = await Promise.all([
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/userCourses/${userId}`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/${userId}`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/certificate/${userId}`
          ),
        ]);
        //console.log(certificates);
        dispatch(certificatesUser(certificates.data));
        dispatch(listFavorites(favorites.data));
        dispatch(addCourses(courses.data));
        dispatch(updatemyAccountStatus(!myAccountStatus));
        setIsLoading(!isLoading);

        //console.log(courses.data);
      }

      //console.log(coursesUser);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (myAccountStatus) {
      //console.log("esta lleno");
      setIsLoading(false);
    } else {
      getDataUser(user?._id);
    }
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/*modo mobile*/}
      {isLoading ? (
        <div className=" w-full h-[670px] flex justify-center items-center">
          <Loading_common />
        </div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:hidden"
          >
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
                dispatch
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex md:flex-col md:items-center"
          >
            <div
              className="bg-[#D9D9D9] rounded-xl mt-10 mb-48 w-[90%] max-w-[1000px]"
              style={{ boxShadow: "0px 5px 6px -2px rgba(0,0,0,0.40)" }}
            >
              <div className="bg-[#1E1E1E] w-full rounded-t-lg py-3 flex items-center px-4 md:justify-around md:px-0 ">
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
              <div className="h-[380px]">
                {pages.map((page, index) => (
                  <div key={index}>
                    {currentTitle === page.title && page.content}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Modo escritorio */}
    </motion.div>
  );
}
