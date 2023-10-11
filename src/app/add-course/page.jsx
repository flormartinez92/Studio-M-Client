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
    { moduleName: "", topicName: "", classesName: "" },
  ]);

  const {
    OnChange: OnChangeTitle,
    value: valueTitle,
    blur: BlurTitle,
    focus: FocusTitle,
    message: MessageTitle,
  } = useInput("course");
  const {
    OnChange: OnChangeSubtitle,
    value: valueSubtitle,
    blur: BlurSubtitle,
    focus: FocusSubtitle,
    message: MessageSubtitle,
  } = useInput("course");

  const {
    OnChange: OnChangeDescription,
    value: valueDescription,
    blur: BlurDescription,
    focus: FocusDescription,
    message: MessageDescription,
  } = useInput("course");

  const {
    OnChange: OnChangeImage,
    value: valueImage,
    blur: BlurImage,
    focus: FocusImage,
    message: MessageImage,
  } = useInput("course");
  const {
    OnChange: OnChangeNameProject,
    value: valueNameProject,
    blur: BlurNameProject,
    focus: FocusNameProject,
    message: MessageNameProject,
  } = useInput("course");
  const {
    OnChange: OnChangeDescriptionProject,
    value: valueDescriptionProject,
    blur: BlurDescriptionProject,
    focus: FocusDescriptionProject,
    message: MessageDescriptionProject,
  } = useInput("course");
  const {
    OnChange: OnChangeMessageProject,
    value: valueMessageProject,
    blur: BlurMessageProject,
    focus: FocusMessageProject,
    message: MessageProject,
  } = useInput("course");

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
            value={valueTitle}
            onChange={OnChangeTitle}
            onBlur={BlurTitle}
            onFocus={FocusTitle}
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
            value={valueSubtitle}
            onChange={OnChangeSubtitle}
            onBlur={BlurSubtitle}
            onFocus={FocusSubtitle}
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
            value={valueDescription}
            onChange={OnChangeDescription}
            onBlur={BlurDescription}
            onFocus={FocusDescription}
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
            value={valueImage}
            onChange={OnChangeImage}
            onBlur={BlurImage}
            onFocus={FocusImage}
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
                  {[1, 2, 3, 4].map((e, i) => {
                    return <div key={i}>{e}</div>;
                  })}
                </div>
              ))}
            </div>
          </div>
          <Input
            className={"flex-none"}
            label={"Nombre del proyecto"}
            value={valueNameProject}
            onChange={OnChangeNameProject}
            onBlur={BlurNameProject}
            onFocus={FocusNameProject}
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
            value={valueDescriptionProject}
            onChange={OnChangeDescriptionProject}
            onBlur={BlurDescriptionProject}
            onFocus={FocusDescriptionProject}
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
            value={valueMessageProject}
            onChange={OnChangeMessageProject}
            onBlur={BlurMessageProject}
            onFocus={FocusMessageProject}
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
