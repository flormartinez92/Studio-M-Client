import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux"
import axios from "axios"
import Cards from "./Cards";
import { CartShopSimple } from "@/common/Icons";

const MyList = () => {
  const { user } = useSelector((store) => store.auth);
  const [userFavorites, setUserFavorites] = useState([])
  
  useEffect(() => {
    if(user?.id){
      try {
        axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/favorites/${user?.id}`)
        .then((res) => setUserFavorites(res.data))
        //setCurrentTitle(title);
      } catch (error) {
        console.error(error);
      }
    }
  },[user?.id])
  console.log(userFavorites)

  return (
    <div className="py-14 flex overflow-x-auto md:bg-center md:h-[400px] items-center">
      <div className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6">
        {userFavorites.courseId?.map((userFavorite) => (
          <div key={userFavorite}>
            <Cards
              title={userFavorite.courseShortTitle}
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img="/img/indonesiaGrande.png"
              className="max-w-[205px]"
              classNameBorder="w-[145px]"
              classNameButton="py-1 px-3 whitespace-nowrap w-auto"
              classNameIconButton="py-1 px-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;