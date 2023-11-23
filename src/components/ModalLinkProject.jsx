"use client";

import Border from "@/common/Border";
import Button from "@/common/Button";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRef, useEffect, useState } from "react";

export default function ModalLinkProject({ status, closeModal, courseId }) {
  const dialofRef = useRef(null);
  const [link, setLink] = useState("");
  const [showThanksModal, setShowThanksModal] = useState(false);
  const userToken = sessionStorage.getItem("token");
  const { mail } = jwtDecode(userToken);

  const handleInputLink = (event) => {
    event.preventDefault();
    setLink(event.target.value);
  };

  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/project//addProject/${courseId}`,
        { project_url: link, mail }
      );
      setShowThanksModal(true);
    } catch (error) {
      console.error("Error al entregar el link:", error);
    }
  };

  const handleThanksModalClose = () => {
    setShowThanksModal(false);
    closeModal(); // Cerrar el modal principal después de cerrar el modal de agradecimiento
  };

  useEffect(() => {
    if (status) {
      dialofRef.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialofRef.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        status &&
        dialofRef.current &&
        !dialofRef.current.contains(event.target)
      ) {
        console.log("Cerrando modal con click por fuera");
        closeModal();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [status, closeModal]);

  return (
    <>
      {status && !showThanksModal && (
        <div
          onClick={() => closeModal()}
          className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(event) => handleModalContentClick(event)}
            className="flex items-center justify-center w-[80%] h-[27%] border-[2px] border-dashed border-purple rounded-md
        min-[560px]:w-[90%] min-[560px]:h-[35%]
        md:w-[90%] md:h-[40%]
        lg:w-[90%] lg:h-[90%]"
          >
            <div className="flex flex-col justify-center items-center bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center w-[97%] h-[97%]">
              <h2
                className=" py-2 font-mystery-mixed text-white text-2xl
              min-[560px]:text-4xl
              "
              >
                Link de Entrega
              </h2>
              <p
                className="pb-3 font-ms-gothic text-xs text-white text-center w-56
              min-[560px]:text-xl min-[560px]:w-80 min-[560px]:pb-4"
              >
                El proyecto debe presentarse con un link de behance, drive (pdf)
                o a la presentación realizada en figma
              </p>
              <form onSubmit={handleButtonClick} className="w-[80%]">
                <div className="flex flex-col justify-center items-center">
                  <input
                    onChange={handleInputLink}
                    type="text"
                    value={link}
                    className=" bg-lightGrey w-[100%]"
                  ></input>
                </div>
              </form>
              <div className="pt-4 flex items-center justify-center w-full">
                <Border
                  className="flex flex-col justify-center items-center w-[152px] h-[32px] border-[1px] border-pink 
                "
                >
                  <Button
                    onClick={handleButtonClick}
                    className=" w-[95%] h-[80%] text-center text-base font-mystery-mixed"
                  >
                    Entregar
                  </Button>
                </Border>
              </div>
            </div>
          </div>
        </div>
      )}

      {showThanksModal && (
        <div
          onClick={handleThanksModalClose}
          className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            className="flex items-center justify-center w-[80%] h-[27%] border-[2px] border-dashed border-purple rounded-md
        min-[560px]:w-[90%] min-[560px]:h-[35%]
        md:w-[90%] md:h-[40%]
        lg:w-[90%] lg:h-[90%]"
          >
            <div className="flex flex-col justify-center items-center bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center w-[97%] h-[97%]">
              <h2 className="py-2 font-mystery-mixed text-white text-2xl">
                ¡Gracias por tu entrega!
              </h2>
              <p className="pb-3 font-ms-gothic text-base font-light text-white text-center w-56 leading-4">
                Recibirás la corrección en hasta 7 días hábiles. Cuando este la
                corrección aprobada se habilitará el certificado en la sección
                “Mi cuenta”
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
