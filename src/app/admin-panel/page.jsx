"use client";

import Link from "next/link";
import AdminButton from "../../common/AdminButton";
import { DashIcons, MenuBook, Percent, User } from "@/common/Icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/state/features/authSlice";
import { fetchUser } from "@/helpers/apiHelpers";
import axios from "axios";
import NotFound from "@/common/NotFound";

export default function AdminPanel() {
  const [projects, setProjects] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const userData = await fetchUser();
      if (!userData) {
        return;
      }
      dispatch(setCredentials(userData));
    };
    checkUserAuthentication();
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects`)
      .then((res) => {
        const projects = res.data;
        setProjects(projects);
      })
      .catch((error) => {
        console.error("Error getting Projects:", error);
      });
  }, []);

  const totalProyectos = projects.reduce((total, project) => total + 1, 0);

  return (
    <>
      {user && user.isAdmin ? (
        <div
          className="flex flex-col gap-12 items-center justify-center my-16
          md:flex-row md:py-[8%] md:gap-5 
          lg:flex-row lg:gap-6
          xl:flex-row xl:gap-16 xl:pb-[17%]"
        >
          <Link href="/active-projects">
            <AdminButton
              icon={<MenuBook width={"5.62rem"} height={"5.62rem"} />}
              text={`${totalProyectos} proyectos para corregir`}
              className={"bg-pink"}
            />
          </Link>
          <Link href="/active-users">
            <AdminButton
              icon={<User width={"5.62rem"} height={"5.62rem"} />}
              text={"Usuarios activos"}
              className={"bg-turquoise"}
            />
          </Link>
          <Link href="/active-courses">
            <AdminButton
              icon={<DashIcons width={"5.62rem"} height={"5.62rem"} />}
              text={"Cursos activos"}
              className={"bg-darkGreen"}
            />
          </Link>
          <Link href="/active-coupons">
            <AdminButton
              icon={<Percent width={"5.62rem"} height={"5.62rem"} />}
              text={"Cupones de descuento activos"}
              className={"bg-purple"}
            />
          </Link>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
