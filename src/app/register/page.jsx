"use client";
import Button from "@/common/Button";
import Input from "@/common/Input";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dni, setDni] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeLastname = (e) => setLastname(e.target.value);
  const onChangeDni = (e) => setDni(e.target.value);
  const onChangeMail = (e) => setMail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const request = async (payload) => {
    try {
      await axios.post("http://localhost:8081/api/user/add", payload);
      router.push("/login");
    } catch (error) {
      const { data } = error.response;
      console.log(data.errors);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    request({
      name,
      lastname,
      dni,
      mail,
      password,
    });
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
              value={name}
              onChange={onChangeName}
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
          </div>
          <div className="basis-[39%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              label={"Apellido"}
              value={lastname}
              onChange={onChangeLastname}
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
          </div>

          <div className="basis-[22%] mb-[0.1rem]">
            <Input
              className={"flex-none"}
              type={"number"}
              label={"DNI"}
              value={dni}
              onChange={onChangeDni}
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
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:gap-x-3 mb-2">
          <div className="mb-[0.1rem] basis-[50%]">
            <Input
              className={"flex-none"}
              type={"email"}
              label={"Mail"}
              value={mail}
              onChange={onChangeMail}
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
          </div>
          <div className="mb-[0.1rem] basis-[50%]">
            <Input
              className={"flex-none"}
              type={"password"}
              label={"Contraseña"}
              value={password}
              onChange={onChangePassword}
              classNameLabel={"block text-[23px]"}
              name={"password"}
              placeholder={"Ingresa tu contraseña"}
              classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
            />
          </div>
        </div>
        <div
          className="
        flex 
        justify-center 
        items-center 
        mt-[60px]"
        >
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
