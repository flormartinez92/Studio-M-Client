import React from "react";
import Cards from "./Cards";
import { CartShopSimple } from "@/common/Icons";

const MyList = () => {
  //userCourses
  //title

  //Titulo acortado
  const shortTitle = (title) => title.split(" ").slice(0, 2);

  return (
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
    </div>
  );
};

export default MyList;