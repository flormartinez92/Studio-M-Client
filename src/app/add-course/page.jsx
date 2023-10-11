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
  const [campos, setCampos] = useState([
    { moduleName: "", topicName: "", classesName: "", info: useInput("name") },
  ]);

  const {
    OnChange: OnChangeName,
    value: valueName,
    blur: BlurName,
    focus: FocusName,
    message: MessageName,
  } = useInput("name");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    console.log(campos);
  };
  const agregarCampo = () => {
    setCampos([...campos, { nombre: "", tema: "", classes: "" }]);
  };
  const handleInputChange = (i, e) => {
    const nuevosCampos = [...campos];
    nuevosCampos[i][e.target.name] = e.target.value;
    setCampos(nuevosCampos);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <h2 className="font-mystery-mixed text-[49px] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3">
        Agregar Curso
      </h2>
      <form
        onSubmit={onSubmitForm}
        className="mt-[50px] 
            w-[80%]
            max-w-[300px] 
            sm:max-w-[650px]
            flex
            flex-col
            items-center
            "
      >
        <div className="w-[100%] sm:w-[60%]">
          <Input
            className={"flex-none"}
            label={"Titulo"}
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
          <Input
            className={"flex-none"}
            label={"Sub-titulo"}
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
          <Input
            className={"flex-none"}
            label={"Descripcion"}
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
              h-[9rem] 
              rounded-[3px]   
              bg-black/20
              text-start`}
          />
          <Input
            className={"flex-none"}
            label={"Url_Imagen"}
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
          <div className="flex flex-col justify-center items-center w-[100%]">
            <div className="flex flex-row justify-around items-center w-full h-auto">
              <h2 className="text-[2.3rem]" onClick={agregarCampo}>
                +
              </h2>
            </div>
            <div className="flex flex-col w-[100%] h-[18.71rem] overflow-y-scroll">
              {campos.map((e, i) => (
                <div className="w-[100%] bg-page/25 p-4" key={i}>
                  <Input
                    className={"flex-none"}
                    label={"Nombre de modulo"}
                    value={campos.nombre}
                    onChange={(e) => handleInputChange(i, e)}
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
                  <Input
                    className={"flex-none"}
                    label={"Nombre del tema"}
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
                  <Input
                    className={"flex-none"}
                    label={"clases"}
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
                </div>
              ))}
            </div>
          </div>
          <Input
            className={"flex-none"}
            label={"Nombre del proyecto"}
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
          <Input
            className={"flex-none"}
            label={"Descripcion del proyecto"}
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
              h-[9rem] 
              rounded-[3px]   
              bg-black/20`}
          />
          <Input
            className={"flex-none"}
            label={"Mensaje curso completado"}
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
          w-[100%]
          mt-[2rem]
          sm:w-[15rem]`}
        >
          Confirmar
        </Button>
      </form>
    </div>
  );
}
