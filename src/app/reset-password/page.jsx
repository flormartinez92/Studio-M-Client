"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import useInput from "@/hooks/useInput";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");
  const router = useRouter();
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlertOk, setMessageAlertOk] = useState("");
  // const [password, setPassword] = useState({
  //   password: "",
  //   confirmPassword: "",
  // });

  // const handlePasswordChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log("e--->", e);
  //   setPassword((data) => ({
  //     ...data,
  //     [name]: value,
  //   }));
  // };

  const {
    OnChange: OnChangePassword,
    value: valuePassword,
    blur: BlurPassword,
    focus: FocusPassword,
    message: MessagePassword,
  } = useInput("password");

  const {
    OnChange: OnChangeConfirmPassword,
    value: valueConfirmPassword,
    blur: BlurConfirmPassword,
    focus: FocusConfirmPassword,
    message: MessageConfirmPassword,
  } = useInput("password");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (valuePassword.trim() == "" || valueConfirmPassword.trim() == "") {
      setMessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setMessageAlert("");
      }, 1300);
    } else {
      if (MessagePassword || MessageConfirmPassword) {
        setMessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setMessageAlert("");
        }, 1300);
      } else if (valuePassword === valueConfirmPassword) {
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/resetPassword`,
            {
              userId: id,
              token,
              password: valuePassword,
            }
          );
          setMessageAlert("");
          setMessageAlertOk("¡Contraseña recuperada!");
          setTimeout(() => {
            router.push("/login");
          }, 1300);
        } catch (error) {
          console.error(error);
        }
      } else {
        setMessageAlert(
          "Las contraseñas no coinciden. Por favor, inténtalo de nuevo."
        );
        setTimeout(() => {
          setMessageAlert("");
        }, 1300);
        return;
      }
    }
  };

  console.log("PASSWORD--->", valuePassword);
  console.log("CONFIRMPASSWORD-->", valueConfirmPassword);

  return (
    <section>
      <div className="flex flex-col justify-center items-center bg-[#fff] py-[115px]">
        <h2 className="font-mystery-mixed text-[35px] min-[320px]:text-[45px] sm:text-[55px] leading-3">
          Restablecer Contraseña
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-[50px] w-[80%] min-[450px]:max-w-[350px] sm:max-w-[450px]"
        >
          <div className="mb-4 w-[100%] sm:px-3 flex flex-col justify-center items-center">
            <Input
              label={"Nueva Contraseña"}
              name={"password"}
              classNameLabel={"text-[23px]"}
              type={"password"}
              className="w-full sm:max-w-[85%]"
              classNameInput={`p-[5px] outline-none w-[100%] h-[40px] rounded-[3px] bg-black/20`}
              placeholder={"Ingresa tu nueva contraseña"}
              value={valuePassword}
              onChange={OnChangePassword}
              onBlur={BlurPassword}
              onFocus={FocusPassword}
            />
            <div className="h-[.5rem]">
              {MessagePassword && (
                <p className="text-red text-[.9rem] leading-3">
                  {MessagePassword}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4 w-[100%] sm:px-3 flex flex-col justify-center items-center">
            <Input
              label={"Confirmar Contraseña"}
              name={"confirmPassword"}
              classNameLabel={"text-[23px]"}
              type={"password"}
              className="w-full sm:max-w-[85%]"
              classNameInput={`p-[5px] outline-none w-[100%] h-[40px] rounded-[3px] bg-black/20`}
              placeholder={"Confirma tu contraseña"}
              value={valueConfirmPassword}
              onChange={OnChangeConfirmPassword}
              onBlur={BlurConfirmPassword}
              onFocus={FocusConfirmPassword}
            />
            <div className="h-[.5rem]">
              {MessageConfirmPassword && (
                <p className="text-red text-[.9rem] leading-3">
                  {MessageConfirmPassword}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-[60px]">
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
              className={`bg-black text-white py-[16px] px-[55px] rounded-[5px] leading-3 text-[19px] block sm:w-[13rem] md:w-[14rem]`}
            >
              Aceptar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
