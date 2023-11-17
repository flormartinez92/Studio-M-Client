"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconButton from "@/common/IconButton";
import { BurgerMenu, CartShopSimple, Close } from "@/common/Icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState("");

  //condicion para que cuando este en la home no muestre el titulo studio by m
  const pathname = usePathname();
  const titleShouldDisplay = pathname !== "/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (title) => {
    setTitle(title);
    setMenuOpen(false);
  };

  return (
    <>
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
            <ul className=" md:z-auto md:static md:w-auto md:py-0 md:pl-0 ">
              <li className="mx-[3rem]">
                <Link
                  href="/"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  Inicio
                </Link>
              </li>
              <li className="mx-[2rem]">
                <Link
                  href="/courses"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  Cursos
                </Link>
              </li>
              <li className="">
                <Link
                  href="/my-account"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  Mi cuenta
                </Link>
              </li>
              <li className="mx-[4.5rem]">
                <Link
                  href="/trolley"
                  className="text-[50px] text-white font-mystery-mixed"
                  onClick={handleClick}
                >
                  <IconButton>
                    <CartShopSimple width="43" height="40" />
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
        <nav className=" bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center p-10 md:p-5 shadow text-white font-mystery-mixed md:flex md:items-center md:justify-end">
          <div className="flex justify-between items-center">
            {titleShouldDisplay && (
              <span className="text-[35px] cursor-pointer absolute left-0 ml-[8%] md:hidden">
                Studio by M
              </span>
            )}
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
                  <Link
                    href="/courses"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Cursos
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/my-account"
                    className="text-[40px] text-white font-mystery-mixed hover:underline hover:decoration-pink"
                  >
                    Mi cuenta
                  </Link>
                </li>
                <li className="mx-4">
                  <Link href="/trolley">
                    <IconButton className="hover:underline hover:decoration-pink">
                      <CartShopSimple width="43" height="40" />
                    </IconButton>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
