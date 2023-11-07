"use client";

import Cover from "@/components/Cover";

import Intro from "@/components/Intro";
import { setCredentials } from "@/state/features/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import CardsDesktop from "@/components/CardsDesktop";
import { CartShopPlusBgBlack } from "@/common/Icons";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/user/me", { withCredentials: true })

      .then(({ data: { user } }) => {
        if (user) {
          router.push("/");
          dispatch(setCredentials(user));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      <Cover />
      {/* <Intro /> */}
      <CardsDesktop
        courseLongTitle={"Curso Avanzado de UX Research"}
        // courseImg_url={
        //   "https://res.cloudinary.com/dpgnbh7ok/image/upload/v1699026238/wtzr2jphcynffnjqc0br.png"
        // }
        courseSubtitle={"Profundizando en Metodologías y Prácticas Avanzadas"}
        courseDescription={
          "Esta especialización en UX Research está diseñada para aquellos que desean profundizar en las metodologías y prácticas avanzadas de investigación de experiencia de usuario. A lo largo de esta especialización, te sumergirás en una serie de temas clave que te permitirán convertirte en un experto en la investigación de usuarios y en la creación de soluciones basadas en insights sólidos."
        }
        coursePrice="10.000"
        coursePriceClasses="text-3xl"
        courseDuration="30hs."
        courseLevel="Intermedio"
        // courseFavorite="Agregar a la lista de deseos"
        courseFavoriteClasses="text-[1.4375rem]"
        cartShopPlusBgBlack={<CartShopPlusBgBlack />}
      />
    </main>
  );
}
