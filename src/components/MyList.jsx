"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import {
  ArrowBlack1,
  ArrowBlack2,
  CartShopSimple,
  Heart,
  LineHeart,
} from "@/common/Icons";
import inputScroll from "@/hooks/useScroll";
import IconButton from "@/common/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Alert_common from "@/common/Alert_common";
import {
  updateAlertDelete,
  updateStatusDelete,
} from "@/state/features/myAccountSlice";

const MyList = ({ decodedToken }) => {
  //Estado que setea los favoritos del usuario
  const [userFavorites, setUserFavorites] = useState([]);
  const [startCourse, setStartCourse] = useState(0);
  const [userCourses, setUserCourses] = useState([]);
  const cardsPerPage = 3;
  const dispatch = useDispatch();
  const { favoritesUser, alertDelete, statusDelete } = useSelector(
    (state) => state.myAccount
  );
  const [showModal, setshowModal] = useState(false);

  //Pedido al back para trae los favoritos de un usuario
  useEffect(() => {
    setshowModal(alertDelete);
  }, [alertDelete]);
  console.log(showModal);

  useEffect(() => {
    setUserFavorites(favoritesUser);
    /* if (decodedToken._id) {
      try {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/${decodedToken._id}`
          )
          .then((res) => setUserFavorites(res.data));
      } catch (error) {
        console.error(error);
      }
    } */
  }, [favoritesUser]);

  const handlePrevPage = () => {
    if (startCourse > 0) {
      setStartCourse(startCourse - 1);
    }
  };

  const handleNextPage = () => {
    if (startCourse < userCourses.length - 1) {
      setStartCourse(startCourse + 1);
    }
  };
  const handleOk = () => {
    console.log("Eliminando curso");
    dispatch(updateStatusDelete(!statusDelete));
    dispatch(updateAlertDelete(!alertDelete));
  };
  const handleCancel = () => {
    dispatch(updateAlertDelete(!alertDelete));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center scrollbar-none md:mx-[1%] lg:mx-[8%] xl:mx-[11%]"
    >
      {showModal && (
        <Alert_common
          cancelText={"Cancelar"}
          titleAlert="Deseas Eliminar de favorito?"
          classNameAlert="w-[300px]"
          handleAlert={handleOk}
          handleCancel={handleCancel}
        />
      )}

      <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6 flex flex-row">
        <div className="flex items-center space-x-4 md:space-x-3 lg:space-x-9 xl:space-x-11">
          {userFavorites.length == 0 && "NO HAY FAVORITOS"}
          {userFavorites?.map((userFavorite, index) => (
            <div
              key={userFavorite._id}
              className="flex justify-center items-center"
            >
              <Cards
                title={userFavorite.courseShortTitle}
                buttonTitle="Ver curso"
                icon={<CartShopSimple />}
                img={userFavorite.courseImg_url}
                iconFavorite={<Heart />}
                iconFavorite2={<LineHeart />}
                courseId={userFavorite._id}
                className="min-w-[12.5rem] max-w-[12.5rem] h-[15rem] max-h-[15rem]"
                classNameBorder="mb-2"
                classNameButton="py-1 px-3 text-lg whitespace-nowrap w-auto flex items-center"
                classNameImg="h-[12rem] object-cover rounded-b-lg"
                className2="h-full"
                classNameIconButton="py-1 px-2"
              />
            </div>
          ))}
          {userCourses.length > cardsPerPage && (
            <div className="hidden xl:flex">
              <IconButton className="absolute left-0" onClick={handlePrevPage}>
                <ArrowBlack1 />
              </IconButton>
              <IconButton
                className="absolute right-50]"
                onClick={handleNextPage}
              >
                <ArrowBlack2 />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MyList;
