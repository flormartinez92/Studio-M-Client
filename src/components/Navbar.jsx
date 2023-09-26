"use client";

import IconButton from "@/common/IconButton";
import { BurgerMenu, CartShopSimple, Close } from "@/common/Icons";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {menuOpen ? (
        <nav className=" h-screen bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center">
          <div className="flex items-center justify-end">
            <IconButton
              className="cursor-pointer mx-2 mt-2"
              onClick={toggleMenu}
            >
              <Close width="24" height="24" color="white" />
            </IconButton>
          </div>
          <div className="">
            <ul className="z-10 flex flex-col items-center justify-center absolute w-full left-0 py-7 pl-7 transition-all ease-in duration-500 md:z-auto md:static md:w-auto md:py-0 md:pl-0 ">
              <li className="">
                <a
                  href="#"
                  className="text-[50px] text-white font-mystery-mixed hover:text-cyan-500 duration-500"
                >
                  Incio
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="text-[50px] text-white font-mystery-mixed hover:text-cyan-500 duration-500"
                >
                  Cursos
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="text-[50px] text-white font-mystery-mixed hover:text-cyan-500 duration-500"
                >
                  Mi cuenta
                </a>
              </li>
              <li className="">
                <IconButton>
                  <CartShopSimple width="43" height="40" />
                </IconButton>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className=" bg-black p-5 shadow text-white font-mystery-mixed md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <span className="text-[35px] font-bold cursor-pointer">
              Studio by M
            </span>
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden md:hidden"
            />
            <label htmlFor="menu-toggle" className="md:hidden">
              <IconButton className="cursor-pointer mx-2" onClick={toggleMenu}>
                <BurgerMenu width="24" height="24" />
              </IconButton>
            </label>
          </div>
        </nav>
      )}
    </>
  );
}

/*
 className={`md:flex md:items-center z-10 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-7 md:pl-0 pl-7 transition-all ease-in duration-500 ${
                menuOpen
                  ? "transform md:translate-y-0 translate-y-[calc(-100% + 2rem)] opacity-100 md:translate-x-0 translate-x-0"
                  : "transform md:translate-y-0 translate-y-[calc(-100% + 2rem)] opacity-0 md:opacity-100 md:translate-x-0 translate-x-[2rem]"
              }`}
*/
