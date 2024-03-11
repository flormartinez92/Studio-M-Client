"use client";

import Border from "@/common/Border";
import Button from "@/common/Button";
import { useMediaQuery } from "@react-hook/media-query";
import axios from "axios";

import { useRef, useEffect, useState } from "react";

export default function ModalCommentProject({ status, closeModal, projectId }) {
  const dialofRef = useRef(null);
  const [comment, setComment] = useState("");
  const [showThanksModal, setShowThanksModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const isMdBreakpoint = useMediaQuery("(min-width: 768px)");

  const handleInputComment = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/allProjects`)
      .then((res) => {
        const projects = res.data;
        // Mapear los proyectos y extraer los correos electrónicos
        const userMail = projects.map((project) => project.mail);
        setProjects(projects);
      })
      .catch((error) => {
        console.error("Error getting Projects:", error);
      });
  }, []);

  const handleButtonClick = async (event) => {
    event.preventDefault();
    try {
      // Buscar el correo electrónico asociado al userId
      const userProject = projects.find(
        (project) => project.projectId === projectId
      );
      const userMail = userProject?.mail || "";
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminProject/${projectId}`,
        { comment, mail: userMail }
      );
      setShowThanksModal(true);
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
    }
  };

  const handleThanksModalClose = () => {
    setShowThanksModal(false);
    closeModal();
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
        md:w-[90%] md:h-[50%]
        lg:w-[90%] lg:h-[90%]"
          >
            <div className="flex flex-col justify-center items-center bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center w-[97%] h-[97%] md:justify-normal md:pt-5 lg:justify-center min-[820]:justify-center">
              <h2
                className=" py-1 font-mystery-mixed text-white text-xl min-[390px]:text-2xl min-[390px]:pb-3
              min-[560px]:text-4xl md:text-5xl md:pb-7 md:pt-9 min-[820px]:pt-16 lg:text-6xl lg:py-10 xl:text-7xl
              "
              >
                Agregar comentario
              </h2>

              <form onSubmit={handleButtonClick} className="w-[75%] md:w-[80%]">
                {isMdBreakpoint ? (
                  <div className="flex flex-col justify-start items-start pb-2 ">
                    <h3 className=" font-mystery-mixed text-white text-start text-3xl lg:text-4xl">
                      Comentario
                    </h3>
                  </div>
                ) : null}
                <div className="flex flex-col justify-center items-center">
                  <textarea
                    onChange={handleInputComment}
                    type="text"
                    value={comment}
                    className=" bg-lightGrey w-[100%] xl:h-[150px] md:h-[100px] h-[80px]"
                  ></textarea>
                </div>
              </form>

              <div className="pt-2 flex items-center justify-center w-full min-[390px]:pt-4 md:pt-7">
                <Border
                  className="flex flex-col justify-center items-center w-[120px] h-[25px] border-[1px] border-pink md:w-[300px] md:h-[55px] lg:h-[60px] 
                "
                >
                  <Button
                    onClick={handleButtonClick}
                    className=" w-[95%] h-[80%] text-center text-sm font-mystery-mixed md:text-3xl"
                  >
                    {isMdBreakpoint ? "Enviar Comentario" : "Enviar"}
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
              <h2 className="py-2 font-mystery-mixed text-white text-lg min-[390px]:text-2xl min-[390px]:pb-12 md:text-5xl lg:text-6xl">
                ¡Comentario enviado!
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
