"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@/common/IconButton";
import { BurgerMenu, CartShopSimple, Close, LogOut } from "@/common/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/state/features/authSlice";
import { addToCart } from "@/state/features/cartSlice";
import { fetchUser } from "@/helpers/apiHelpers";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { itemCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuthentication();
  }, []);

  const cartUser = async () => {
    try {
      const responseUser = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
        {
          withCredentials: true,
        }
      );

      const responseCart = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${responseUser.data._id}`
      );
      const cartLength = responseCart.data.length;
      dispatch(addToCart(cartLength));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cartUser();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleClick = (title) => {
    setTitle(title);
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <section>
      {menuOpen ? (
        <nav className="h-screen bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center animate-navbar">
          <div className="flex items-center justify-end">
            <IconButton
              className="cursor-pointer mx-10 mt-6"
              onClick={toggleMenu}
            >
              <Close width="30" height="30" color="white" />
            </IconButton>
          </div>
          <div className="flex flex-col items-center justify-center z-10 absolute w-full left-0 py-7 pl-7">
            <ul className="text-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 ">
              <li className="">
                <Link
                  href="/"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  Inicio
                </Link>
              </li>
              {!user?.isAdmin ? (
                <li className="">
                  <Link
                    href="/courses"
                    className="text-[50px] text-white font-mystery-mixed"
                    onClick={handleClick}
                  >
                    Cursos
                  </Link>
                </li>
              ) : (
                <li className="">
                  <Link
                    href="/admin-panel"
                    className="text-[50px] text-white font-mystery-mixed"
                    onClick={handleClick}
                  >
                    Mi Panel
                  </Link>
                </li>
              )}
              <li className="">
                <Link
                  href="/my-account"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  Mi cuenta
                </Link>
              </li>
              {user && (
                <li className="mx-[6rem]">
                  <Link
                    href="/"
                    className="text-[50px] text-white font-mystery-mixed"
                    onClick={handleLogout}
                  >
                    <LogOut />
                  </Link>
                </li>
              )}
              <li className="mx-[6rem]">
                <Link
                  href="/trolley"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  <IconButton className={"relative"}>
                    {itemCount >= 1 ? (
                      <>
                        <p className="absolute bottom-5 left-11 text-2xl">
                          {itemCount}
                        </p>
                        <CartShopSimple width="43" height="40" />
                      </>
                    ) : (
                      <CartShopSimple width="43" height="40" />
                    )}
                  </IconButton>
                </Link>
              </li>
            </ul>
            <div className=" mx-auto  mb-[60px] mt-[4rem] relative">
              <Image
                src="/img/pink-square.png"
                width={55}
                height={55}
                alt="pinkSquare"
                className="m-auto absolute left-[-1rem] -top-2 "
              />
              <Image
                src="/img/green-square.png"
                width={59}
                height={59}
                alt="greenSquare"
                className="m-auto absolute right-[-1rem] -bottom-3.5 "
              />
              <Image
                src="/img/Maca.png"
                width={130}
                height={154}
                alt="MacaLogo"
                className="m-auto relative"
              />
            </div>
          </div>
        </nav>
      ) : (
        <nav className=" bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center p-10 md:p-5 text-white font-mystery-mixed md:flex md:items-center md:justify-end">
          <div className="flex justify-between items-center">
            <Link
              href={"/"}
              className="text-[35px] cursor-pointer absolute left-0 ml-[8%] md:hidden"
            >
              Studio by M
            </Link>
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden md:hidden"
            />
            <label
              htmlFor="menu-toggle"
              className="absolute right-0 mr-[8%] md:hidden"
            >
              <IconButton className="cursor-pointer" onClick={toggleMenu}>
                <BurgerMenu width="24" height="24" />
              </IconButton>
            </label>
            <div className="hidden md:block">
              <ul className="md:w-full md:flex md:flex-row md:items-center">
                <li className="mx-4">
                  <Link
                    href="/"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="mx-4">
                  {!user?.isAdmin ? (
                    <Link
                      href="/courses"
                      className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                    >
                      Cursos
                    </Link>
                  ) : (
                    <Link
                      href="/admin-panel"
                      className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                    >
                      Mi Panel
                    </Link>
                  )}
                </li>
                <li className="mx-4">
                  <Link
                    href="/my-account"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Mi cuenta
                  </Link>
                </li>
                {user && (
                  <li className="mx-4">
                    <Link
                      href="/"
                      onClick={handleLogout}
                      className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                    >
                      <LogOut />
                    </Link>
                  </li>
                )}
                <li className="mx-4">
                  <Link href="/trolley">
                    <IconButton className="hover:underline hover:decoration-pink relative">
                      {itemCount >= 1 ? (
                        <>
                          <p className="absolute bottom-6 left-11 text-3xl">
                            {itemCount}
                          </p>
                          <CartShopSimple width="43" height="40" />
                        </>
                      ) : (
                        <CartShopSimple width="43" height="40" />
                      )}
                    </IconButton>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </section>
  );
}
