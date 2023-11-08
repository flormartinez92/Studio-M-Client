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
  const [file, setFile] = useState("");
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

  const {
    OnChange: OnChangeTitleLong,
    value: valueTitleLong,
    blur: BlurTitleLong,
    focus: FocusTitleLong,
    message: MessageTitleLong,
  } = useInput("course");
  const {
    OnChange: OnChangeTitleShort,
    value: valueTitleShort,
    blur: BlurTitleShort,
    focus: FocusTitleShort,
    message: MessageTitleShort,
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
    OnChange: OnChangePrice,
    value: valuePrice,
    blur: BlurPrice,
    focus: FocusPrice,
    message: MessagePrice,
  } = useInput("course");
  const {
    OnChange: OnChangeCourseLevel,
    value: valueCourseLevel,
    blur: BlurCourseLevel,
    focus: FocusCourseLevel,
    message: MessageCourseLevel,
  } = useInput("course");
  const {
    OnChange: OnChangeCourseDuration,
    value: valueCourseDuration,
    blur: BlurCourseDuration,
    focus: FocusCourseDuration,
    message: MessageCourseDuration,
  } = useInput("course");

  const {
    OnChange: OnChangeImage,
    value: valueImage,
    blur: BlurImage,
    focus: FocusImage,
    message: MessageImage,
  } = useInput("course");
  const {
    OnChange: OnChangeProjectsTitle,
    value: valueProjectsTitle,
    blur: BlurProjectsTitle,
    focus: FocusProjectsTitle,
    message: MessageProjectsTitle,
  } = useInput("course");
  const {
    OnChange: OnChangeProjectsDescription,
    value: valueProjectsDescription,
    blur: BlurProjectsDescription,
    focus: FocusProjectsDescription,
    message: MessageProjectsDescription,
  } = useInput("course");
  const {
    OnChange: OnChangeProjectAim,
    value: valueProjectAim,
    blur: BlurProjectAim,
    focus: FocusProjectAim,
    message: MessageProjectAim,
  } = useInput("course");
  const feikdata = [
    {
      moduleName: "modulo 1",
      topics: [
        { topicName: "tema 1", classes: [{ nameClass: "", url_video: "" }] },
        { topicName: "tema 2", classes: [{ nameClass: "", url_video: "" }] },
      ],
    },
    {
      moduleName: "modulo 2",
      topics: [
        { topicName: "tema 3", classes: [{ nameClass: "", url_video: "" }] },
        { topicName: "tema 4", classes: [{ nameClass: "", url_video: "" }] },
      ],
    },
  ];

  const data = { 0: [{}, {}], 1: [] };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("archivo", file);
    console.log(campos);
    console.log(classes);
    const sd = campos.map((idem, i) => {
      console.log(idem);
      const depured = idem.topics.forEach((r, t) => {
        //idem.topics[t].classes = classes[i][t];
        console.log(classes[i][t]);
        idem.topics[t].classes.push(...classes[i][t]);
        //return classes[i][t];
      });
      return idem;
      //console.log(classes[i]);
    });
    console.log(sd);
    /*  const newsd = campos.map((idem, i) => {
      idem.topics = classes[i];
      return idem;
      console.log(idem.topics);
      console.log(classes[i]);
    }); */

    const properties = Object.keys(classes);
    properties.forEach((x) => {
      //console.log(classes[x]);
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

    /* console.log(campos);
    console.log(classes);
  
    console.log(valueTitleLong);
    console.log(valueTitleShort);
    console.log(valueSubtitle);
    console.log(valueDescription);
    console.log(valuePrice);
    console.log(valueCourseLevel);
    console.log(valueCourseDuration);
    console.log(valueImage);
    console.log(valueProjectsTitle);
    console.log(valueProjectsDescription);
    console.log(valueProjectAim); */
    /* try {
      const resp = await axios.put(
        "http://localhost:8081/api/adminCourse/updateImg/6549369425edcecc35118f94",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(resp);
    } catch (err) {
      console.log(err);
    } */
    /* console.log(campos);
    console.log(classes);

    const obj = { ...raiz };
    obj.courseLongTitle = valueTitle;
    setRaiz(obj); */
  };
  const agregarCampo = () => {
    setCampos([
      ...campos,
      {
        moduleName: "",
        topics: [{ topicName: "", classes: [] }],
      },
    ]);
    console.log(campos);
  };
  const agregarTema = (i, y) => {
    console.log("agregando tema al modulo " + i);
    if (!topics[i]) topics[i] = [];
    const objs = { ...topics };
    objs[i].push("TEMA");
    console.log(objs);
    setTopics(objs);
  };

  const agregarClasse = (i, x) => {
    //console.log(i);

    if (!classes[i]) classes[i] = [];
    if (!classes[i][x]) classes[i][x] = [];

    const objs = { ...classes };
    objs[i][x].push({ url_video: "", nameClass: "" });
    setClasses(objs);
  };
  const handleInputChange = (i, e) => {
    const nuevosCampos = [...campos];
    nuevosCampos[i][e.target.name] = e.target.value;
    setCampos(nuevosCampos);
  };

  const handleInputChangeClasse = (e, i, c, p) => {
    const objs = { ...classes };
    classes[i][c][p].nameClass = e.target.value;
    setClasses(objs);
  };
  const handleInputChangeUrlVideo = (e, i, c, p) => {
    const objs = { ...classes };
    classes[i][c][p].url_video = e.target.value;
    setClasses(objs);
  };

  const handleInputChangeTopic = (e, i, c) => {
    if (!campos[i]["topics"][c])
      campos[i]["topics"][c] = {
        topicName: "",
        classes: [],
      };

    //console.log(campos[i]["topics"][c]?.topicName);
    const topic_name = [...campos];
    topic_name[i]["topics"][c].topicName = e.target.value;
    setCampos(topic_name);
  };
  const handleInputFile = (e) => {
    //console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <h2 className="font-mystery-mixed w-full h-auto text-[2.3rem] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3 text-center">
        Agregar Curso
      </h2>
      {/* {JSON.stringify(raiz)} */}
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
            label={"Titulo largo"}
            value={valueTitleLong}
            onChange={OnChangeTitleLong}
            onBlur={BlurTitleLong}
            onFocus={FocusTitleLong}
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
            label={"Titulo largo"}
            type={"file"}
            accept="image/*"
            /* value={valueTitleLong}
            onChange={OnChangeTitleLong} */
            onChange={handleInputFile}
            onBlur={BlurTitleLong}
            onFocus={FocusTitleLong}
            classNameLabel={"block text-[1.21rem]"}
            name={"archivo"}
            classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20
              
              `}
          />

          <Input
            className={"flex-none"}
            label={"Titulo corto"}
            value={valueTitleShort}
            onChange={OnChangeTitleShort}
            onBlur={BlurTitleShort}
            onFocus={FocusTitleShort}
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
            label={"Precio"}
            value={valuePrice}
            onChange={OnChangePrice}
            onBlur={BlurPrice}
            onFocus={FocusPrice}
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
          <Input
            className={"flex-none"}
            label={"Dificultad del curso"}
            value={valueCourseLevel}
            onChange={OnChangeCourseLevel}
            onBlur={BlurCourseLevel}
            onFocus={FocusCourseLevel}
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
          <Input
            className={"flex-none"}
            label={"Duracion del curso"}
            value={valueCourseDuration}
            onChange={OnChangeCourseDuration}
            onBlur={BlurCourseDuration}
            onFocus={FocusCourseDuration}
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
            <div className="flex flex-col w-[100%] h-auto gap-y-4">
              {campos.map((e, i) => (
                <div className="w-[100%] bg-buttonBlack/5 py-4" key={i}>
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
                            placeholder={"Ingresa nombre del modulo"}
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
                                  value={classes[i][c][p].nameClass}
                                  onChange={(e) =>
                                    handleInputChangeClasse(e, i, c, p)
                                  }
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
                                  label={"Url Video"}
                                  value={classes[i][c][p].url_video}
                                  onChange={(e) =>
                                    handleInputChangeUrlVideo(e, i, c, p)
                                  }
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
                                {/* {name_classe}
                                {video_url} */}
                              </div>
                            );
                            /* return (
                              <div className="bg-purple mb-2" key={p}>
                                {item.map((ds, r) => {
                                  return (
                                    <div key={r}>
                                      <Input
                                        className={"flex-none"}
                                        label={"Nombre de modulo"}
                                        value={campos.moduleName}
                                        
                                        classNameLabel={"block text-[1.21rem]"}
                                        placeholder={
                                          "Ingresa nombre del modulo"
                                        }
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
                            ); */
                            /* return item.map((ds, r) => (
                              <div key={r}>{JSON.stringify(ds)}</div>
                            )); */
                          })}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            {/* h-[18.71rem] overflow-y-scroll */}
            {/*  <div className="flex flex-col w-[100%] h-auto gap-y-4 ">
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
            </div> */}
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
