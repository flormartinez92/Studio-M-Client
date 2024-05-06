"use client";
import Button from "@/common/Button";
import Input from "@/common/Input";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import Image from "next/image";

export default function AddCourse() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");
  const [file, setFile] = useState({});
  const [file2, setFile2] = useState({});
  const [raiz, setRaiz] = useState({
    courseLongTitle: "",
    courseShortTitle: "",
    courseSubtitle: "",
    courseDescription: "",
    coursePrice: "",
    courseLevel: "",
    courseDuration: "",
    courseImg_url: "",
    projectsTitle: "",
    projectsDescription: "",
    projectAim: "",
  });
  const [campos, setCampos] = useState([
    {
      moduleName: "",
      topics: [{ topicName: "", classes: [] }],
    },
  ]);
  const [classes, setClasses] = useState({});
  const [items, setItems] = useState({});
  const [topics, setTopics] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const {
    OnChange: OnChangeTitleLong,
    value: valueTitleLong,
    blur: BlurTitleLong,
    focus: FocusTitleLong,
    message: MessageTitleLong,
    setValue: setValueData1,
  } = useInput("course_add");
  const {
    OnChange: OnChangeTitleShort,
    value: valueTitleShort,
    blur: BlurTitleShort,
    focus: FocusTitleShort,
    message: MessageTitleShort,
    setValue: setValueData2,
  } = useInput("course_add");
  const {
    OnChange: OnChangeSubtitle,
    value: valueSubtitle,
    blur: BlurSubtitle,
    focus: FocusSubtitle,
    message: MessageSubtitle,
    setValue: setValueData3,
  } = useInput("course_add");

  const {
    OnChange: OnChangeDescription,
    value: valueDescription,
    blur: BlurDescription,
    focus: FocusDescription,
    message: MessageDescription,
    setValue: setValueData4,
  } = useInput("course_add");
  const {
    OnChange: OnChangePrice,
    value: valuePrice,
    blur: BlurPrice,
    focus: FocusPrice,
    message: MessagePrice,
    setValue: setValueData5,
  } = useInput("course_add");
  const {
    OnChange: OnChangeCourseLevel,
    value: valueCourseLevel,
    blur: BlurCourseLevel,
    focus: FocusCourseLevel,
    message: MessageCourseLevel,
  } = useInput("course_add");
  const {
    OnChange: OnChangeCourseDuration,
    value: valueCourseDuration,
    blur: BlurCourseDuration,
    focus: FocusCourseDuration,
    message: MessageCourseDuration,
    setValue: setValueData6,
  } = useInput("course_add");

  const {
    OnChange: OnChangeImage,
    value: valueImage,
    blur: BlurImage,
    focus: FocusImage,
    message: MessageImage,
  } = useInput("course_add");
  const {
    OnChange: OnChangeProjectsTitle,
    value: valueProjectsTitle,
    blur: BlurProjectsTitle,
    focus: FocusProjectsTitle,
    message: MessageProjectsTitle,
    setValue: setValueData7,
  } = useInput("course_add");
  const {
    OnChange: OnChangeProjectsDescription,
    value: valueProjectsDescription,
    blur: BlurProjectsDescription,
    focus: FocusProjectsDescription,
    message: MessageProjectsDescription,
    setValue: setValueData8,
  } = useInput("course_add");
  const {
    OnChange: OnChangeProjectAim,
    value: valueProjectAim,
    blur: BlurProjectAim,
    focus: FocusProjectAim,
    message: MessageProjectAim,
    setValue: setValueData9,
  } = useInput("course_add");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (
      !valueTitleLong ||
      !valueTitleShort ||
      !valueSubtitle ||
      !valueDescription ||
      !valuePrice ||
      !valueCourseLevel ||
      !valueCourseDuration ||
      !valueProjectsTitle ||
      !valueProjectsDescription ||
      !valueProjectAim
    ) {
      setmessageAlert("Falta completar campos");
      setTimeout(() => {
        setmessageAlert("");
      }, 2000);
    }

    if (!file || !file2) return;

    const formData = new FormData();
    formData.append("archivo", file);
    formData.append("archivo2", file2);

    const arrData = campos.map((idem, i) => {
      idem.topics.forEach((r, t) => {
        //Condicion si la iteracion de classes es undefined
        if (!!classes[i]) {
          classes[i][t].forEach((b, n) => {
            idem.topics[t].classes[n] = b;
          });
        }
      });
      return idem;
    });

    const data = {
      courseLongTitle: valueTitleLong,
      courseShortTitle: valueTitleShort,
      courseSubtitle: valueSubtitle,
      courseDescription: valueDescription,
      coursePrice: valuePrice,
      courseLevel: valueCourseLevel,
      courseDuration: valueCourseDuration,
      courseImg_url: valueImage,
      projectsTitle: valueProjectsTitle,
      projectsDescription: valueProjectsDescription,
      projectAim: valueProjectAim,
      modules: campos,
    };

    try {
      const resp2 = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCourse/add`,
        data
      );
      const resp = await axios.put(

        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCourse/createImg/${resp2.data._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setValueData1("");
      setValueData2("");
      setValueData3("");
      setValueData4("");
      setValueData5("");
      setValueData6("");
      setValueData7("");
      setValueData8("");
      setValueData9("");
      setmessageAlertOk("Curso agregado!");
      setTimeout(() => {
        setmessageAlertOk("");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const agregarCampo = () => {
    setCampos([
      ...campos,
      {
        moduleName: "",
        topics: [{ topicName: "", classes: [] }],
      },
    ]);
  };

  const agregarTema = (i, y) => {
    if (!topics[i]) topics[i] = [];
    const objs = { ...topics };
    objs[i].push("TEMA");
    setTopics(objs);
  };

  const agregarClasse = (i, x) => {
    if (!classes[i]) classes[i] = [];
    if (!classes[i][x]) classes[i][x] = [];

    const objs = { ...classes };
    objs[i][x].push({ video_url: "", classInfo: "" });
    setClasses(objs);
  };

  const handleInputChange = (i, e) => {
    const nuevosCampos = [...campos];
    nuevosCampos[i][e.target.name] = e.target.value;
    setCampos(nuevosCampos);
  };

  const handleInputChangeClasse = (e, i, c, p) => {
    const objs = { ...classes };
    classes[i][c][p].classInfo = e.target.value;
    setClasses(objs);
  };

  const handleInputChangeUrlVideo = (e, i, c, p) => {
    const objs = { ...classes };
    classes[i][c][p].video_url = e.target.value;
    setClasses(objs);
  };

  const handleInputChangeTopic = (e, i, c) => {
    if (!campos[i]["topics"][c])
      campos[i]["topics"][c] = {
        topicName: "",
        classes: [],
      };

    const topic_name = [...campos];
    topic_name[i]["topics"][c].topicName = e.target.value;
    setCampos(topic_name);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setValue(file.name);
  };
  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    console.log("Archivo seleccionado:", file);
    //console.log(file);
    setFile2(file);
    setValue2(file.name);
    // Puedes realizar otras acciones aquí, como cargar el archivo o procesarlo de alguna manera
  };

  const handleDivClick = () => {
    // Programáticamente hacer clic en el input de tipo file cuando se hace clic en el div
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleDivClick2 = () => {
    // Programáticamente hacer clic en el input de tipo file cuando se hace clic en el div
    if (fileInputRef2.current) {
      fileInputRef2.current.click();
    }
  };
  return (
    <>
      <h2 className="font-mystery-mixed w-full h-auto text-[2.3rem] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3 text-center">
        Agregar Curso
      </h2>
      <form
        onSubmit={onSubmitForm}
        className="
            mt-[50px] 
            w-[80%]
            max-w-[400px] 
            sm:max-w-[850px]
            flex
            flex-col
            justify-center
            "
      >
        <div className="w-auto">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-x-3 w-auto">
            <div className=" w-full basis-[33.3%]">
              <Input
                className={"flex-none"}
                label={"Titulo largo"}
                value={valueTitleLong}
                onChange={OnChangeTitleLong}
                onBlur={BlurTitleLong}
                onFocus={FocusTitleLong}
                classNameLabel={"block text-[1.21rem]"}
                placeholder={"Ingresa titulo largo del curso"}
                name={"nombre"}
                classNameInput={`
                p-[5px] 
                outline-none 
                w-[100%]
                h-[40px] 
                rounded-[3px]   
                bg-black/20`}
              />
              <div className="h-[.5rem] mb-2">
                {MessageTitleLong && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessageTitleLong}
                  </p>
                )}
              </div>
            </div>
            <div className=" w-full basis-[33.3%]">
              <Input
                className={"flex-none"}
                label={"Titulo corto"}
                value={valueTitleShort}
                onChange={OnChangeTitleShort}
                onBlur={BlurTitleShort}
                onFocus={FocusTitleShort}
                classNameLabel={"block text-[1.21rem]"}
                placeholder={"Ingresa titulo corto del curso"}
                name={"nombre"}
                classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
              />
              <div className="h-[.5rem] mb-2">
                {MessageTitleShort && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessageTitleShort}
                  </p>
                )}
              </div>
            </div>
            <div className=" w-full basis-[33.3%]">
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
              <div className="h-[.5rem] mb-2">
                {MessageSubtitle && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessageSubtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
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
          <div className="h-[.5rem] mb-2">
            {MessageDescription && (
              <p className="text-red text-[.9rem] leading-3">
                {MessageDescription}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-x-3 w-auto">
            <div className="w-full basis-[50%]">
              <Input
                className={"flex-none"}
                label={"Precio"}
                value={valuePrice}
                onChange={OnChangePrice}
                onBlur={BlurPrice}
                onFocus={FocusPrice}
                classNameLabel={"block text-[1.21rem]"}
                placeholder={"Ingresa precio del curso"}
                name={"nombre"}
                classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
              />
              <div className="h-[.5rem] mb-2">
                {MessagePrice && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessagePrice}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full basis-[50%]">
              <div className="flex flex-col my-2 ">
                <label
                  htmlFor="select_level"
                  className="block text-[1.21rem] font-mystery-mixed mb-1"
                >
                  Dificultad del curso
                </label>
                <select
                  id="select_level"
                  className="w-full p-2   pl-3 font-ms-gothic outline-none bg-black/20 text-[15px] appearance-none h-[40px] 
                  rounded-[3px]"
                  value={valueCourseLevel}
                  onChange={OnChangeCourseLevel}
                  style={{
                    backgroundColor: "lightgray", // Cambia el color de fondo de la opción seleccionada
                  }}
                >
                  <option disabled className="text-[15px]">
                    Selecciona una dificultad
                  </option>
                  <option value="Facil" className="bg-black/20 text-[15px]">
                    Facil
                  </option>
                  <option
                    value="Intermedio"
                    className="bg-black/20 text-[15px]"
                  >
                    Intermedio
                  </option>
                  <option value="Dificil" className="bg-black/20 text-[15px]">
                    Dificil
                  </option>
                </select>
              </div>
              <div className="h-[.5rem] mb-2">
                {MessageCourseLevel && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessageCourseLevel}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-x-3 w-auto">
            <div className="w-full basis-[33.3%]">
              <div className="flex flex-col justify-center">
                <p className="block text-[1.21rem] font-mystery-mixed mb-1">
                  Carga de Imagen
                </p>
                <div
                  className="border h-[40px] bg-buttonBlack p-4 cursor-pointer flex gap-x-5 text-letterWhite justify-center items-center "
                  onClick={handleDivClick}
                >
                  <h1>Selecciona un archivo</h1>

                  <h1>
                    {value == "" ? (
                      <Image
                        src={"/svg/bx-file-blank.svg"}
                        width={24}
                        height={24}
                        className=""
                        alt="SVG Icon"
                      />
                    ) : (
                      value
                    )}
                  </h1>

                  <input
                    type="file"
                    ref={fileInputRef} // Ref para acceder al input de tipo file
                    className="hidden" // Ocultar el input, ya que haremos clic en él programáticamente
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="h-[.5rem] mb-2">
                {MessageImage && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessageImage}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full basis-[33.3%]">
              <div className="flex flex-col justify-center">
                <p className="block text-[1.21rem] font-mystery-mixed mb-1">
                  Carga de Imagen Pequeña
                </p>
                <div
                  className="border h-[40px] bg-buttonBlack p-4 cursor-pointer flex gap-x-5 text-letterWhite justify-center items-center "
                  onClick={handleDivClick2}
                >
                  <h1>Selecciona un archivo</h1>

                  <h1>
                    {value2 == "" ? (
                      <Image
                        src={"/svg/bx-file-blank.svg"}
                        width={24}
                        height={24}
                        className=""
                        alt="SVG Icon"
                      />
                    ) : (
                      value2
                    )}
                  </h1>

                  <input
                    type="file"
                    ref={fileInputRef2} // Ref para acceder al input de tipo file
                    className="hidden" // Ocultar el input, ya que haremos clic en él programáticamente
                    onChange={handleFileChange2}
                  />
                </div>
              </div>
              <div className="h-[.5rem] mb-2">
                {MessageImage && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessageImage}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full basis-[33.3%]">
              <Input
                className={"flex-none"}
                label={"Duracion del curso"}
                value={valueCourseDuration}
                onChange={OnChangeCourseDuration}
                onBlur={BlurCourseDuration}
                onFocus={FocusCourseDuration}
                classNameLabel={"block text-[1.21rem]"}
                placeholder={"Ingresa la duración del curso"}
                name={"nombre"}
                classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
              />
              <div className="h-[.5rem] mb-2">
                {MessageCourseDuration && (
                  <p className="text-red text-[.9rem] leading-3">
                    {MessageCourseDuration}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* MODULOS */}
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
            <div className="flex flex-col w-[100%] h-auto gap-y-4">
              {campos.map((e, i) => {
                return (
                  <div className="w-[100%]  py-4" key={i}>
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

                    <div className="flex flex-row justify-center items-center w-full h-auto py-1">
                      <div className="text-[30px]">+</div>
                      <div
                        className="text-[18px] font-ms-gothic"
                        onClick={() => agregarTema(i)}
                      >
                        Agregar tema
                      </div>
                    </div>
                    {topics[i]?.map((x, c) => {
                      return (
                        <div key={c} className="">
                          <div className="mt-7">
                            <Input
                              className={"flex-none"}
                              label={"Nombre del tema"}
                              value={
                                campos[i]["topics"][c]?.topicName
                                  ? campos[i]["topics"][c]?.topicName
                                  : ""
                              }
                              onChange={(e) => handleInputChangeTopic(e, i, c)}
                              classNameLabel={"block text-[1.21rem]"}
                              placeholder={"Ingresa nombre del tema"}
                              name={"moduleName"}
                              classNameInput={`p-[5px] 
                                      outline-none 
                                      w-[100%]
                                      h-[40px] 
                                      rounded-[3px]   
                                      bg-black/20`}
                            />
                          </div>
                          <div className="flex flex-row justify-center items-center w-full h-auto py-1">
                            <div className="text-[30px]">+</div>
                            <div
                              className="text-[18px] font-ms-gothic"
                              onClick={() => agregarClasse(i, c)}
                            >
                              Agregar clase
                            </div>
                          </div>
                          {classes[i] &&
                            classes[i][c] &&
                            classes[i][c].map((item, p) => {
                              return (
                                <div key={p} className="">
                                  <Input
                                    className={"flex-none"}
                                    label={"Nombre de la clase"}
                                    value={classes[i][c][p].classInfo}
                                    onChange={(e) =>
                                      handleInputChangeClasse(e, i, c, p)
                                    }
                                    classNameLabel={"block text-[1.21rem]"}
                                    placeholder={"Ingresa nombre de la clase"}
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
                                    label={"Url Video"}
                                    value={classes[i][c][p].video_url}
                                    onChange={(e) =>
                                      handleInputChangeUrlVideo(e, i, c, p)
                                    }
                                    classNameLabel={"block text-[1.21rem]"}
                                    placeholder={"Ingresa el url del video"}
                                    name={"moduleName"}
                                    classNameInput={`p-[5px] 
                                      outline-none 
                                      w-[100%]
                                      h-[40px] 
                                      rounded-[3px]   
                                      bg-black/20`}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <Input
            className={"flex-none"}
            label={"Nombre del proyecto"}
            value={valueProjectsTitle}
            onChange={OnChangeProjectsTitle}
            onBlur={BlurProjectsTitle}
            onFocus={FocusProjectsTitle}
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
          <div className="h-[.5rem] mb-2">
            {MessageProjectsTitle && (
              <p className="text-red text-[.9rem] leading-3">
                {MessageProjectsTitle}
              </p>
            )}
          </div>
          <Input
            className={"flex-none"}
            label={"Descripcion del proyecto"}
            value={valueProjectsDescription}
            onChange={OnChangeProjectsDescription}
            onBlur={BlurProjectsDescription}
            onFocus={FocusProjectsDescription}
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
          <div className="h-[.5rem] mb-2">
            {MessageProjectsDescription && (
              <p className="text-red text-[.9rem] leading-3">
                {MessageProjectsDescription}
              </p>
            )}
          </div>
          <Input
            className={"flex-none"}
            label={"Mensaje curso completado"}
            value={valueProjectAim}
            onChange={OnChangeProjectAim}
            onBlur={BlurProjectAim}
            onFocus={FocusProjectAim}
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
          <div className="h-[.5rem] mb-2">
            {MessageProjectAim && (
              <p className="text-red text-[.9rem] leading-3">
                {MessageProjectAim}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="h-[.5rem] mt-3">
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
          w-[100%]
          mt-[2rem]
          sm:w-[20rem]`}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </>
  );
}
