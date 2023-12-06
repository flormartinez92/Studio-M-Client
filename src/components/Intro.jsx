import React from "react";
import Cards from "./Cards";
import { CartShopSimple, Check } from "@/common/Icons";
import CheckList from "../common/CheckList";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import inputScroll from "@/hooks/useScroll";
import Border from "@/common/Border";
import Button from "@/common/Button";

export default function Intro() {
  const [value, setValue] = useState([]);
  const [numCart, setNumCart] = useState();
  const [user, setUser] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/course/all-courses"
      );

      const courses = response.data.map(
        ({ _id, courseShortTitle, courseImg_url }) => ({
          _id,
          courseShortTitle,
          courseImg_url,
        })
      );
      setValue(courses);
    } catch (err) {
      console.error(err);
    }
  };

  const cartUser = async () => {
    try {
      const responseUser = await axios.get(
        "http://localhost:8081/api/user/me",
        {
          withCredentials: true,
        }
      );
      setUser(responseUser.data);
      const responseCart = await axios.get(
        `http://localhost:8081/api/cart/courses/${responseUser.data._id}`
      );

      setNumCart(responseCart.data.length);
    } catch (error) {
      console.error(error);
    }
  };
  const addCourseCart = async (id_curse) => {
    try {
      const { data } = await axios.get("http://localhost:8081/api/user/me", {
        withCredentials: true,
      });
      const responseAddCart = await axios.post(
        "http://localhost:8081/api/cart/add",
        {
          courseId: id_curse,
          userId: data._id,
        }
      );

      setNumCart(responseAddCart.data.courseId.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    cartUser();
  }, []);
  const onclickBtn = (e) => {
    console.log(e);
  };
  const {
    containerRef: ContainerScroll_1,
    handleMouseDown: DownScroll_1,
    handleMouseLeave: LeaveScroll_1,
    handleMouseMove: MoveScroll_1,
    handleMouseUp: MouseUpScroll_1,
  } = inputScroll();
  const {
    containerRef: ContainerScroll_2,
    handleMouseDown: DownScroll_2,
    handleMouseLeave: LeaveScroll_2,
    handleMouseMove: MoveScroll_2,
    handleMouseUp: MouseUpScroll_2,
  } = inputScroll();

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto">
      <div className="w-full my-10">
        <div className="flex flex-col justify-center items-center">
          {/*  asd*/}
          {/* <p className="text-[2rem] [@media(min-width:180px)]:text-[4rem]">
            PROBANDO
          </p> */}

          <h2
            className="font-mystery-mixed text-[1.8rem] min-[400px]:text-[2rem] 
            min-[500px]:text-[2.4rem] md:text-[2.3rem] lg:text-[3rem] text-start md:text-start w-[60%] md:w-[70%]
            max-w-[1350px] 
            leading-8 min-[500px]:leading-10 -rotate-2 py-4 md:mr-[8rem] mt-3  md:mt-16 min-[1500px]:text-[60px] mb-5"
          >
            {numCart}
            ¿Qué vas a aprender hoy?
          </h2>
          <div className="w-full flex justify-center items-start">
            <div className="w-full hidden md:block">
              <div className="relative flex justify-center items-center">
                <Image
                  src={"/img/paper.png"}
                  width={400}
                  height={800}
                  className="w-full max-w-[1350px] h-full"
                  alt="paper_fondo"
                />
                <div className="absolute w-full inset-0 flex justify-center items-center">
                  <div
                    className="select-none flex w-[24rem] md:h-[13.5rem] min-[990px]:h-[14rem] 
                    min-[1000px]:h-[15.5rem] 
                    min-[1300px]:h-[22.5rem]
                    lg:w-[63%]  lg:max-w-[770px] 
                    min-[1500px]:w-[83%]  min-[1500px]:max-w-[1050px]
                    min-[1500px]:ml-[3rem]
                    lg:justify-start lg:items-center  
                    overflow-x-scroll 
                    scrollbar-none   
                  
                    mb-5 lg:mb-8
                    min-[1300px]:gap-x-[5rem]"
                    ref={ContainerScroll_1}
                    onMouseDown={DownScroll_1}
                    onMouseMove={MoveScroll_1}
                    onMouseUp={MouseUpScroll_1}
                    onMouseLeave={LeaveScroll_1}
                  >
                    {value.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="w-[17rem] min-w-[16rem] min-[1300px]:min-w-[17.4rem] 
                          h-auto  flex flex-col justify-center items-center"
                        >
                          <div
                            className="bg-black w-[78%] min-[1000px]:w-[80%] min-[1300px]:w-full 
                            text-white h-10 min-[1300px]:h-14 
                            flex justify-center items-center font-mystery-mixed 
                            text-[1.7rem] min-[1300px]:text-[2.2rem] rounded-t-[.6rem]"
                          >
                            <h1>{item.courseShortTitle}</h1>
                          </div>
                          <div className="relative w-full flex justify-center items-center">
                            <Image
                              src={item.courseImg_url}
                              width={400}
                              height={800}
                              className="w-[78%] h-[10rem] 
                              min-[1000px]:h-[12rem] 
                              min-[1000px]:w-[80%]
                              min-[1300px]:h-[16rem]
                              min-[1300px]:w-full 
                              rounded-b-[.6rem]"
                              alt="indonesia"
                            />
                            <div className="absolute inset-0 flex justify-center items-end mb-2">
                              <div className="w-full group flex justify-center items-end h-auto">
                                <div className="transition-transform duration-700 transform-gpu scale-[1] group-hover:scale-[1.15]">
                                  <Border
                                    className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1`}
                                  >
                                    <Link href={`/courses/${item._id}`}>
                                      <Button
                                        className={`font-mystery-mixed py-2 md:h-[2.3rem] lg:h-[2.6rem] min-[1300px]:h-[2.9rem] min-[1300px]:py-4
                                        min-[1300px]:px-6 px-3 whitespace-nowrap
                                        flex items-center min-[1300px]:text-[1.7rem] text-[1.19rem] leading-3`}
                                        onClick={() => onclickBtn(item._id)}
                                      >
                                        {"Ver curso"}
                                      </Button>
                                    </Link>
                                    <Button
                                      className={`py-2 px-2 flex items-center`}
                                      onClick={() => addCourseCart(item._id)}
                                    >
                                      {<CartShopSimple />}
                                    </Button>
                                  </Border>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* ACA VA EL CAROUSEL */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="select-none flex w-full
        h-full
        pr-10 
        pl-10
        mt-10
        gap-x-4
        md:hidden        
        overflow-x-scroll 
        scrollbar-none   
      
                mb-5 lg:mb-8"
            ref={ContainerScroll_2}
            onMouseDown={DownScroll_2}
            onMouseMove={MoveScroll_2}
            onMouseUp={MouseUpScroll_2}
            onMouseLeave={LeaveScroll_2}
          >
            {value.map((item, i) => {
              return (
                <div className=" w-[13rem] h-[15rem] min-w-[13rem]" key={i}>
                  <div className="bg-black text-white w-full h-10 flex justify-center items-center font-mystery-mixed text-[1.7rem] rounded-t-[.6rem]">
                    <h1>{item.courseShortTitle}</h1>
                  </div>
                  <div className="relative">
                    <Image
                      src={item.courseImg_url}
                      width={400}
                      height={800}
                      className="w-full  h-[12rem] rounded-b-[.6rem]"
                      alt="indonesia"
                    />
                    <div className="absolute inset-0 flex justify-center items-center mb-2">
                      <Border
                        className={`flex gap-0.5 w-auto h-auto absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${""}`}
                      >
                        <Button
                          className={`font-mystery-mixed py-2 px-3 whitespace-nowrap flex items-center text-[1.19rem] leading-3`}
                        >
                          {"Ver curso"}
                        </Button>
                        <Button className={`py-2 px-2 flex items-center`}>
                          {<CartShopSimple />}
                        </Button>
                      </Border>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-6 mt-2 flex flex-col justify-center items-center max-w-[1100px] min-[1500px]:max-w-[1400px] ">
        <div className="w-full flex justify-start sm:justify-center">
          <h2
            className="font-mystery-mixed text-start sm:text-start
        min-[500px]:pl-[2rem] sm:mr-[5rem] md:mr-0
      text-[1.5rem] min-[580px]:text-[1.9rem] w-[70%] leading-7 mb-4 -rotate-2 ml-[.4rem] 
      pb-10 pt-5  lg:pr-[8rem]   
      sm:w-[100%]  md:text-[1.79rem] min-[840px]:text-[2rem] 
      min-[917px]:text-[2.2rem] min-[1000px]:text-[2.7rem] min-[1500px]:text-[60px] lg:w-[100%]"
          >
            ¿Qué esperar de un curso en by m studio?
          </h2>
        </div>
        <div className="flex flex-col gap-y-4 mb-14 mt-10 min-[1500px]:mt-[5rem] text-[15px] items-start">
          <div>
            <CheckList
              text="Aprende a tu ritmo y de manera asincrónica"
              className="p-0.5 border-pink mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem] items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
          <div>
            <CheckList
              text="Accede a contenido actualizado"
              className="p-0.5 border-green mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem]  items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
          <div>
            <CheckList
              text="Accede y conecta con una comunidad de trainees"
              className="p-0.5 border-blue mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem] items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
          <div>
            <CheckList
              text="Obtén tu certificado al finalizar"
              className="p-0.5 border-pink mr-2"
              classNameDiv={
                "w-[100%] text-[.95rem] min-[400px]:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] min-[1500px]:text-[2.2rem] items-center leading-3"
              }
              icon={<Check />}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-auto flex flex-col justify-center items-center md:mb-[7rem] lg:mb-[8rem] ">
        <Image
          src={"/img/paper.png"}
          width={200}
          height={200}
          className="w-full max-w-[1350px] h-full"
          alt="paper_fondo"
        />
        <div className="absolute h-auto inset-0 text-black flex flex-col items-center justify-center">
          <h2
            className="font-mystery-mixed text-[2.4rem] 
          min-[400px]:text-[3rem] 
          min-[500px]:text-[3.5rem]
          min-[600px]:text-[4rem]
          min-[400px]:mb-2 
          min-[500px]:mb-4
          min-[600px]:mb-6
          min-[768px]:mb-4
          
          -translate-y-[19px] leading-10 lg:text-[5.2rem] xl:text-[6rem] lg:leading-[5.7rem] min-[1500px]:leading-[7rem]"
          >
            Studio By M
          </h2>
          <h2 className="font-mystery-mixed text-[1.2rem] min-[400px]:text-[1.5rem] min-[500px]:text-[1.8rem] min-[600px]:text-[2rem] md:text-[1.9rem] lg:text-[3.2rem] xl:text-[3.5rem] pb-[2px] leading-5 lg:leading-3">
            Cuenta con el apoyo de
          </h2>
          <div className="relative mb-[4rem] hidden md:block translate-y-[2.6rem]">
            <div className="flex w-full items-end gap-x-7 min-[1500px]:mt-4">
              <Image
                src={"/img/image1.png"}
                width={200}
                height={200}
                className="w-[10rem] lg:w-[14rem] h-full"
                alt="image1"
              />
              <Image
                src={"/img/image2.png"}
                width={200}
                height={200}
                className="w-[5rem]  lg:w-[6.4rem] h-full"
                alt="image2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center mb-[4rem] md:hidden">
        <Image
          src={"/img/image1.png"}
          width={200}
          height={200}
          className="w-[8rem] min-[450px]:w-[12rem] min-[550px]:w-[13rem] h-full"
          alt="image1"
        />
        <Image
          src={"/img/image2.png"}
          width={200}
          height={200}
          className="w-[5rem] min-[450px]:w-[6rem] min-[550px]:w-[7rem] h-full"
          alt="image2"
        />
      </div>
    </div>
  );
}

/* 


const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/course/all-courses")
      .then((res) => {

        const courses = res.data;
        setCourses(courses);
      })
      .catch((error) => {
        console.error("Error al obtener los cursos:", error);
      });
  }, []);

  function newTitle(title) {
    const titleArray = title.split(" ");
    const titleLength = titleArray.length;
    return titleArray[titleLength - 2] + " " + titleArray[titleLength - 1];
  }

return
 <div className="bg-#F5F0F0">
      <h2 className="text-5xl text-left font-mystery-mixed mb-20 ml-10 mt-20 md:ml-20 -rotate-3">
        Qué vas a aprender hoy?
      </h2>
      <div className="flex overflow-x-auto md:bg-[url('/img/paper-desktop-cover.png')] md:bg-[length:100%_500px] md:bg-center md:h-[500px] md:justify-center items-center mb:justify-start">

        {courses?.slice(0, 3).map((course) => (

          <div
            key={course._id}
            className="w-70 ml-6 mr-4 md:w-72 md:ml-6 md:mr-6"
          >
            <Cards
              id={course._id}
              title={newTitle(course.courseTitle)}
              buttonTitle="Ver curso"
              icon={<CartShopSimple />}
              img={course.courseImg_url}
              className="max-w-[205px]"
              classNameButton="py-2 px-3 whitespace-nowrap flex items-center"
              classNameIconButton="py-2 px-2 flex items-center"
            />
          </div>
        ))}
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <h2 className="text-5xl text-left font-mystery-mixed mb-20 ml-10 mt-20 md:ml-20 -rotate-3">
          Qué esperar de un curso en by M studio?
        </h2>
        <div className="md:text-4xl mb:gap-3 flex flex-col items-center justify-center w-[90%] md:ml-40 md:mb-20">
          <CheckList
            text="Aprende a tu ritmo y de manera asincrónica"
            className="p-[20rem] border-pink mr-5"
            icon={<Check />}
          />
          <CheckList
            text="Accede a contenido actualizado"
            className="p-0.5 border-green mr-5"
            icon={<Check />}
          />
          <CheckList
            text="Accede y conecta con una comunidad de trainees"
            className="p-0.5 border-blue mr-5"
            icon={<Check />}
          />
          <CheckList
            text="Obtén tu certificado al finalizar"
            className="p-0.5 border-pink mr-5"
            icon={<Check />}
          />
        </div>
      </div>

      <div className="flex overflow-x-auto md:bg-[url('/img/paper-desktop-cover.png')] md:bg-[length:100%_500px] md:bg-center md:h-[500px] md:justify-center items-center mb:justify-start">
        <div className="flex flex-col items-center w-100% relative mt-10 mb-20">
          <div className="md:hidden block">
            <Image
              src="/img/paper.png"
              width={500}
              height={500}
              alt="Picture"
            />
          </div>
          <p className="text-5xl md:text-8xl whitespace-nowrap font-mystery-mixed absolute top-10 md:top-auto">
            By M Studio
          </p>
          <p className="text-3xl md:text-6xl whitespace-nowrap font-mystery-mixed absolute top-28 md:top-30">
            Cuenta con el apoyo de
          </p>

          <div className="md:flex md:justify-center md:top-auto ">
            <Image
              src="/img/image1.png"
              width={178}
              height={87}
              alt="Picture"
              className="md:w-80 md:mt-40"
            />
            <Image
              src="/img/image2.png"
              width={116}
              height={134}
              alt="Picture"
              className="md:w-32 md:mt-40"
            />
          </div>
        </div>
      </div>
    </div>

*/
