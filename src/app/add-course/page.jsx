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
  const [campos, setCampos] = useState([{ moduleName: "", topicName: "" }]);
  const [classes, setClasses] = useState({});
  const [topics, setTopics] = useState({});

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
    console.log(classes);
    console.log(campos);
    console.log(topics);
    /* const newArr = [];
    campos.forEach(({ moduleName, topicName }) => {
      newArr.push({ moduleName, topics: [{ topicName, classes: [] }] });
      //console.log(e);
    });
    console.log(newArr);

    console.log(valueTitle);
    console.log(valueSubtitle);
    console.log(valueDescription);
    console.log(valueImage);
    console.log(valueNameProject);
    console.log(valueDescriptionProject);
    console.log(valueMessageProject); */
  };
  const agregarCampo = () => {
    setCampos([...campos, { moduleName: "", topicName: "" }]);
  };
  const agregarTema = (i, y) => {
    console.log(i);
    console.log(y);
    /* if (!topics[i]) topics[i] = [];
    const objs = { ...topics };
    objs[i].push({ topicName: "", classes: [] });
    setTopics(objs); */
  };

  const agregarClasse = (i) => {
    //console.log(i);

    if (!classes[i]) classes[i] = [];
    /* console.log(i);
    console.log(classes[i]); */
    const objs = { ...classes };
    objs[i].push({ classeDescription: "" });
    setClasses(objs);
    //setClasses()
    //setClasses([...classes, { classeDescription: "" }]);
  };
  const handleInputChange = (i, e) => {
    const nuevosCampos = [...campos];
    nuevosCampos[i][e.target.name] = e.target.value;
    setCampos(nuevosCampos);
  };
  const handleInputChangeClasse = (i, e, y) => {
    const class_module = [...classes[y]];
    class_module[i][e.target.name] = e.target.value;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <h2 className="font-mystery-mixed w-full h-auto text-[2.3rem] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3 text-center">
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
            classNameLabel={"block text-[1.21rem]"}
            placeholder={"Ingresa titulo del curso"}
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
            classNameLabel={"block text-[1.21rem]"}
            placeholder={"Ingresa Subtitulo del curso"}
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
            classNameLabel={"block text-[1.21rem]"}
            placeholder={"Ingresa descripcion del curso"}
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
            classNameLabel={"block text-[1.21rem]"}
            placeholder={"Ingresa link de la imagen"}
            name={"nombre"}
            classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
          />
          <div className="flex flex-col justify-center items-center w-[100%]">
            <div className="flex flex-row justify-center items-center w-full h-auto py-1">
              <div className="text-[30px]">+</div>
              <div
                className="text-[18px] font-ms-gothic"
                onClick={agregarCampo}
              >
                Agregar modulo
              </div>
            </div>
            {/* h-[18.71rem] overflow-y-scroll */}
            <div className="flex flex-col w-[100%] h-auto gap-y-4 ">
              {campos.map((e, i) => (
                <div className="w-[100%] bg-page/25 p-4 " key={i}>
                  <Input
                    className={"flex-none"}
                    label={"Nombre de modulo"}
                    value={campos.moduleName}
                    onChange={(x) => handleInputChange(i, x)}
                    classNameLabel={"block text-[1.21rem]"}
                    placeholder={"Ingresa nombre del modulo"}
                    name={"moduleName"}
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
                    value={campos.topicName}
                    onChange={(x) => handleInputChange(i, x)}
                    classNameLabel={"block text-[1.21rem]"}
                    placeholder={"Ingresa nombre del tema"}
                    name={"topicName"}
                    classNameInput={`p-[5px] 
                    outline-none 
                    w-[100%]
                    h-[40px]
                    rounded-[3px]
                    bg-black/20`}
                  />

                  {classes[i]?.map((e, y) => {
                    return (
                      <div key={y}>
                        <Input
                          className={"flex-none"}
                          label={`Clase ${y + 1}`}
                          //value={classes[i][y].classeDescription}
                          onChange={(x) => handleInputChangeClasse(y, x, i)}
                          classNameLabel={"block text-[1.21rem]"}
                          placeholder={"Ingresa informacion de la clase"}
                          name={"classeDescription"}
                          classNameInput={`p-[5px] 
                            outline-none 
                            w-[100%]
                            h-[40px] 
                            rounded-[3px]   
                            bg-black/20`}
                        />
                        <div
                          className="flex flex-row justify-center items-center w-full h-auto cursor-pointer"
                          onClick={() => agregarTema(i, y)}
                        >
                          <div className="text-[30px]">+</div>
                          <div className="text-[18px] font-ms-gothic">
                            Agregar tema
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex flex-row justify-center items-center w-full h-auto py-4 leading-3">
                    <div className="text-[30px]">+</div>
                    <div
                      className="text-[18px] font-ms-gothic"
                      onClick={() => agregarClasse(i)}
                    >
                      Agregar clase
                    </div>
                  </div>
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
            classNameLabel={"block text-[1.21rem]"}
            placeholder={"Ingresa nombre del proyecto"}
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
            classNameLabel={"block text-[1.21rem]"}
            placeholder={"Ingresa descripcion del proyecto"}
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
            classNameLabel={"block text-[1.21rem]"}
            placeholder={"Ingresa mensaje"}
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
