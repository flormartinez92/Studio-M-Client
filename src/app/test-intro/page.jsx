"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
/* import { useState } from "react"; */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../state/features/authSlice";
import useInput from "@/hooks/useInput";
import Link from "next/link";
import Image from "next/image";
import CheckList from "@/common/CheckList";
import { CartShopSimple, Check } from "@/common/Icons";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cards from "@/components/Cards";
import Border from "@/common/Border";
import inputScroll from "@/hooks/useScroll";

import { Dialog, Transition } from "@headlessui/react";

export default function Intro_test() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const handleOutsideClick = (event) => {
  
    console.log(!modalRef.current.contains(event.target));
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden"; // Bloquea el scroll del body
    } else {
      document.removeEventListener("mousedown", handleOutsideClick); // fugas de memoria mejor eliminar
      document.body.style.overflow = "auto"; // Habilita el scroll del body
    }
  }, [isOpen]);

  const handleClick = (status) => {
    if (!status) {
      setIsOpen(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={``}>
        <button
          className={`bg-blue  text-black font-bold py-2 px-4 rounded ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => handleClick(isOpen)}
        >
          Ingresar cupon
        </button>
        <div
          ref={modalRef}
          className={`bg-purple w-[600px] h-[600px] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          asd
        </div>
      </div>

      {/* <Transition show={isOpen} as={Dialog} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 w-full" />
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Title className="text-lg font-bold mb-2">
              Mi Ventana Modal asdsd
            </Dialog.Title>
            <p>Contenido de la ventana modal...</p>
          </div>
        </Dialog.Panel>
      </Transition> */}
    </div>
  );
}
