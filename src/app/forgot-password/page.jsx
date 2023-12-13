"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";

export default function Forgot() {
  const router = useRouter();
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlertOk, setMessageAlertOk] = useState("");

  const {
    OnChange: OnChangeMail,
    value: valueMail,
    blur: BlurMail,
    focus: FocusMail,
    message: MessageMail,
  } = useInput("mail");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (valueMail.trim() == "") {
      setMessageAlert("¡Completar el campo!");
      setTimeout(() => {
        setMessageAlert("");
      }, 1300);
    } else {
      if (MessageMail) {
        setMessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setMessageAlert("");
        }, 1300);
      } else {
        try {
          await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/forgot`, {
              mail: valueMail,
            })
            .then(() => {
              setMessageAlert("");
              setMessageAlertOk("¡Mail enviado!");
              setTimeout(() => {
                router.push("/forgot-password/success");
              }, 1300);
            });
        } catch (error) {
          console.error(error);
          setMessageAlert("Error al intentar recuperar la contraseña");
          setTimeout(() => {
            setMessageAlert("");
          }, 1300);
        }
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] py-20">
      <h2 className="font-mystery-mixed text-[35px] mx-6 text-center min-[320px]:text-[45px] sm:text-[55px]">
        Recuperá tu contraseña
      </h2>
      <form
        onSubmit={handleSubmit}
        className="
            mt-10 
            w-[80%] 
            min-[450px]:max-w-[350px]
            sm:max-w-[450px] 
            "
      >
        <div
          className="
        mb-4 
        w-[100%] 
        sm:px-3
        flex flex-col
        justify-start
        items-center"
        >
          <Input
            label={"Mail"}
            name={"mail"}
            classNameLabel={"block text-[23px]"}
            type={"email"}
            className={"w-full sm:max-w-[85%]"}
            classNameInput={`p-[5px] outline-none w-[100%] h-[40px] bg-black/20`}
            placeholder={"ingresa tu mail"}
            value={valueMail}
            onFocus={FocusMail}
            onChange={OnChangeMail}
            onBlur={BlurMail}
          />
          <div className="h-[.5rem]">
            {MessageMail && (
              <p className="text-red text-[.9rem]  leading-3">{MessageMail}</p>
            )}
          </div>
          <p className=" font-ms-gothic text-lg text-center pt-4">
            Te enviaremos un mail con las instrucciones para que generes una
            nueva clave de acceso.
          </p>
        </div>

        <div
          className="
        flex
        flex-col
        justify-center 
        items-center 
        mt-[40px]"
        >
          <div className="h-[.5rem] mb-[1.2rem]">
            {messageAlert ? (
              <p className="text-red text-[1rem] leading-3">{messageAlert}</p>
            ) : (
              <p className="text-darkGreen text-[1rem] leading-3">
                {messageAlertOk}
              </p>
            )}
          </div>
          <Button
            onClick={handleSubmit}
            className={`bg-black 
          text-white 
          py-[16px] 
          px-[55px] 
          rounded-[5px] 
          leading-3 
          text-[19px]
          block
          sm:w-[13rem]
          md:w-[14rem]`}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </div>
  );
}
