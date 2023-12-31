"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../state/features/authSlice";
import useInput from "@/hooks/useInput";
import Link from "next/link";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");

  const {
    OnChange: OnChangeMail,
    value: valueMail,
    blur: BlurMail,
    focus: FocusMail,
    message: MessageMail,
  } = useInput("mail");

  const {
    OnChange: OnChangePassword,
    value: valuePassword,
    blur: BlurPassword,
    focus: FocusPassword,
    message: MessagePassword,
    isPasswordVisible,
    setIsPasswordVisible,
  } = useInput("passwordLogin");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (valueMail.trim() == "" || valuePassword.trim() == "") {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      //Verificacion campos de los mensajes de error
      if (MessageMail || MessagePassword) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        //Registro de usuario
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
            {
              mail: valueMail,
              password: valuePassword,
            },
            { withCredentials: true }
          );

          const data = response.data;
          dispatch(
            setCredentials({
              dni: data.user.dni,
              name: data.user.name,
              lastname: data.user.lastname,
              mail: data.user.mail,
              id: data.user._id,
            })
          );
          setmessageAlert("");
          setmessageAlertOk("¡Bienvenido!");
          router.push("/");
        } catch (error) {
          console.error(error);
          setmessageAlert("Error en el login");
          setTimeout(() => {
            setmessageAlert("");
          }, 1300);
        }
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] w-full h-full py-[115px]">
      <h2 className="font-mystery-mixed text-[49px] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3">
        Iniciar sesión
      </h2>
      <form
        onSubmit={onSubmitForm}
        className="
        mt-[50px] 
        w-[80%]
        min-[450px]:max-w-[350px]
        sm:max-w-[450px]
        md:flex md:flex-col md:items-center
            "
      >
        <div
          className="
        mb-4 
        w-[100%] 
        sm:px-3
        flex justify-start items-center
        flex-col
        "
        >
          <Input
            label={"Mail"}
            name={"mail"}
            classNameLabel={"block text-[30px]"}
            type={"text"}
            className={"w-full sm:max-w-[85%]"}
            classNameInput={`p-[20px] outline-none w-[100%] h-[40px] bg-black/20`}
            placeholder={"Ingrese su mail"}
            onFocus={FocusMail}
            value={valueMail}
            onChange={OnChangeMail}
            onBlur={BlurMail}
          />
          <div className="h-[.5rem]">
            {MessageMail && (
              <p className="text-red text-[.9rem] leading-3">{MessageMail}</p>
            )}
          </div>
        </div>
        <div
          className="mb-4 w-[100%] flex justify-start items-center flex-col
        sm:px-3"
        >
          <Input
            label={"Contraseña"}
            name={"password"}
            classNameLabel={"text-[30px]"}
            type={"password"}
            className={"w-full sm:max-w-[85%]"}
            classNameInput={`p-[20px] outline-none w-[100%] h-[40px] bg-black/20`}
            placeholder={"Ingrese su contraseña"}
            value={valuePassword}
            onFocus={FocusPassword}
            onChange={OnChangePassword}
            onBlur={BlurPassword}
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={() =>
              setIsPasswordVisible(!isPasswordVisible)
            }
          />

          <div className="h-[.5rem] pb-6">
            {MessagePassword && (
              <p className="text-red text-[.9rem] leading-3">
                {MessagePassword}
              </p>
            )}
          </div>
          <Link href="/forgot-password" className="underline text-center">
            Olvidé mi contraseña
          </Link>
        </div>

        <div
          className="
        flex
        flex-col 
        justify-center 
        items-center 
        mt-[60px]"
        >
          <div className="h-[.5rem] mb-[1.2rem]">
            {messageAlert ? (
              <p className="text-[#ff0000] text-[1rem] leading-3">
                {messageAlert}
              </p>
            ) : (
              <p className="text-darkGreen text-[1rem] leading-3">
                {messageAlertOk}
              </p>
            )}
          </div>
          <Button
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
        <div
          className="
        flex 
        text-black 
        gap-x-3 
        justify-center 
        items-center 
        mt-3 
        flex-col
        sm:text-[17px] 
        sm:flex-row"
        >
          <p>¿No tenés cuenta?</p>
          <Link href="/register" className="underline">
            Registrate
          </Link>
        </div>
      </form>
    </div>
  );
}
