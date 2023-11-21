import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import { CartShopSimple, Heart, LineHeart } from "@/common/Icons";

const MyList = ({ decodedToken }) => {
  //Estado que setea los favoritos del usuario
  const [userFavorites, setUserFavorites] = useState([]);

  //Pedido al back para trae los favoritos de un usuario
  useEffect(() => {
    if (decodedToken._id) {
      try {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/${decodedToken._id}`
          )
          .then((res) => setUserFavorites(res.data));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <div className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center">
      <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6 flex flex-row">
        {userFavorites?.map((userFavorite) => (
          <div key={userFavorite._id}>
            <Cards
              title={userFavorite.courseShortTitle}
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img={userFavorite.courseImg_url}
              iconFavorite={<Heart />}
              iconFavorite2={<LineHeart />}
              courseId={userFavorite._id}
              className="min-w-[12.5rem] max-w-[12.5rem] h-[15rem] max-h-[15rem] mr-4"
              classNameBorder="mb-2"
              classNameButton="py-1 px-3 text-lg whitespace-nowrap w-auto flex items-center"
              classNameImg="h-[12rem] object-cover rounded-b-lg"
              className2="h-full"
              classNameIconButton="py-1 px-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
