"use client";

import IconButton from "@/common/IconButton";
import { BurgerMenu, CartShopSimple, Close } from "@/common/Icons";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {menuOpen ? (
        <nav className="h-screen bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center">
          <div className="flex items-center justify-end">
            <IconButton
              className="cursor-pointer mx-6 mt-6"
              onClick={toggleMenu}
            >
              <Close width="30" height="30" color="white" />
            </IconButton>
          </div>
          <div className="flex flex-col items-center justify-center z-10 absolute w-full left-0 py-7 pl-7">
            <ul className=" md:z-auto md:static md:w-auto md:py-0 md:pl-0 ">
              <li className="mx-[3rem]">
                <a
                  href="#"
                  className="text-[50px] text-white font-mystery-mixed"
                >
                  Incio
                </a>
              </li>
              <li className="mx-[2rem]">
                <a
                  href="#"
                  className="text-[50px] text-white font-mystery-mixed"
                >
                  Cursos
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="text-[50px] text-white font-mystery-mixed"
                >
                  Mi cuenta
                </a>
              </li>
              <li className="mx-[4.5rem]">
                <IconButton>
                  <CartShopSimple width="43" height="40" />
                </IconButton>
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
        <nav className=" bg-black p-5 shadow text-white font-mystery-mixed md:flex md:items-center md:justify-end">
          <div className="flex justify-between items-center">
            <span className="text-[35px] cursor-pointer md:hidden">
              Studio by M
            </span>
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden md:hidden"
            />
            <label htmlFor="menu-toggle" className="md:hidden">
              <IconButton
                className="cursor-pointer mx-2 mb-2"
                onClick={toggleMenu}
              >
                <BurgerMenu width="24" height="24" />
              </IconButton>
            </label>
            <div className="hidden md:block">
              <ul className="md:w-full md:flex md:flex-row md:items-center">
                <li className="mx-4">
                  <a
                    href="#"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Incio
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="#"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Cursos
                  </a>
                </li>
                <li className="mx-4">
                  <a
                    href="#"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Mi cuenta
                  </a>
                </li>
                <li className="mx-4">
                  <IconButton className="hover:underline hover:decoration-pink">
                    <CartShopSimple width="43" height="40" />
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
