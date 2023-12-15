"use client";
import Button from "@/common/Button";
import Input from "@/common/Input";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";

export default function Register() {
  const router = useRouter();
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");
  const {
    OnChange: OnChangeName,
    value: valueName,
    blur: BlurName,
    focus: FocusName,
    message: MessageName,
  } = useInput("name");
  const {
    OnChange: OnChangeLastName,
    value: valueLastName,
    blur: BlurLastName,
    focus: FocusLastName,
    message: MessageLastName,
  } = useInput("lastname");
  const {
    OnChange: OnChangeDni,
    value: valueDni,
    blur: BlurDni,
    focus: FocusDni,
    message: MessageDni,
  } = useInput("dni");
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
  } = useInput("password");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    //Verificacion campos de los input
    if (
      valueName.trim() == "" ||
      valueLastName.trim() == "" ||
      valueDni.trim() == "" ||
      valueMail.trim() == "" ||
      valuePassword.trim() == ""
    ) {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      //Verificacion campos de los mensajes de error
      if (
        MessageLastName ||
        MessageName ||
        MessageDni ||
        MessageMail ||
        MessagePassword
      ) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        //Registro de usuario
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/add`, {
            name: valueName,
            lastname: valueLastName,
            dni: valueDni,
            mail: valueMail,
            password: valuePassword,
          });
          setmessageAlert("");
          setmessageAlertOk("¡Bienvenido!");
          setTimeout(() => {
            router.push("/login");
          }, 1300);
        } catch (error) {
          console.error(error);
          const { data } = error.response;
          //Uso de las validaciones del back, si el correo esta registrado se le manda un alerta al cliente
          if (data == "Email is already registered") {
            setmessageAlert("El correo ya se encuentra en uso");
            setTimeout(() => {
              setmessageAlert("");
            }, 1300);
          }
        }
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <h2 className="font-mystery-mixed text-[49px] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3">
        Registro
      </h2>
      <form
        onSubmit={onSubmitForm}
        className="mt-[50px] 
            w-[80%]
            max-w-[300px] 
            sm:max-w-[750px]
            md:flex md:flex-col md:items-center"
      >
        <div className="flex flex-col sm:flex-row w-full sm:gap-x-3 ">
          <div className="basis-[39%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              label={"Nombre"}
              value={valueName}
              onChange={OnChangeName}
              onBlur={BlurName}
              onFocus={FocusName}
              classNameLabel={"block text-[23px]"}
              placeholder={"Ingresa tu nombre"}
              name={"nombre"}
              classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
            <div className="h-[.5rem]">
              {MessageName && (
                <p className="text-red text-[.9rem] leading-3">{MessageName}</p>
              )}
            </div>
          </div>
          <div className="basis-[39%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              label={"Apellido"}
              value={valueLastName}
              onChange={OnChangeLastName}
              onBlur={BlurLastName}
              onFocus={FocusLastName}
              classNameLabel={"block text-[23px]"}
              name={"apellido"}
              type={"text"}
              placeholder={"Ingresa tu apellido"}
              classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
            <div className="h-[.5rem]">
              {MessageLastName && (
                <p className="text-red text-[.9rem] leading-3">
                  {MessageLastName}
                </p>
              )}
            </div>
          </div>

          <div className="basis-[22%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              type={"text"}
              label={"DNI"}
              value={valueDni}
              onChange={OnChangeDni}
              onBlur={BlurDni}
              onFocus={FocusDni}
              classNameLabel={"block text-[23px]"}
              name={"dni"}
              placeholder={"Ingrese su dni"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
            <div className="h-[.5rem]">
              {MessageDni && (
                <p className="text-red text-[.9rem] leading-3">{MessageDni}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:gap-x-3 mb-2">
          <div className="mb-[0.1rem] basis-[50%]">
            <Input
              className={"flex-none"}
              type={"text"}
              label={"Mail"}
              value={valueMail}
              onChange={OnChangeMail}
              onBlur={BlurMail}
              onFocus={FocusMail}
              classNameLabel={"block text-[23px]"}
              name={"mail"}
              placeholder={"Ingresa tu mail"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
            <div className="h-[.5rem]">
              {MessageMail && (
                <p className="text-red text-[.9rem] leading-3">{MessageMail}</p>
              )}
            </div>
          </div>
          <div className="mb-[0.1rem] basis-[50%]">
            <Input
              className={"flex-none"}
              type={"password"}
              label={"Contraseña"}
              value={valuePassword}
              onChange={OnChangePassword}
              onBlur={BlurPassword}
              onFocus={FocusPassword}
              classNameLabel={"block text-[23px]"}
              name={"password"}
              placeholder={"Ingresa tu contraseña"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
              isPasswordVisible={isPasswordVisible}
              togglePasswordVisibility={() =>
                setIsPasswordVisible(!isPasswordVisible)
              }
            />
            <div className="h-[.5rem]">
              {MessagePassword && (
                <p className="text-red text-[.9rem] leading-3">
                  {MessagePassword}
                </p>
              )}
            </div>
          </div>
        </div>
        <div
          className="
        flex
        flex-col 
        justify-center 
        items-center 
        mt-[40px] sm:mt-[50px]"
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
            className={`bg-black 
          text-white 
          py-[18px] 
          px-[54px] 
          rounded-[5px] 
          leading-3 
          text-[19px] 
          block
          w-[17rem]
          sm:w-[15rem]`}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </div>
  );
}
