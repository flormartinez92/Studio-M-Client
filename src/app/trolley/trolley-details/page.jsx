"use client";
import Border from "@/common/Border";
import Button from "@/common/Button";
import IconButton from "@/common/IconButton";
import { CartShopSimple, Close, Signal } from "@/common/Icons";
import Input from "@/common/Input";
import Cards from "@/components/Cards";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

export default function trolleyDetails() {
  const [cartCourses, setCartCourses] = useState([]);
  const [cartAmount, setCartAmount] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [trolley, setTrolley] = useState(null);

  const modalRef = useRef();
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleCheck = async () => {
    console.log(user);
    try {
      const responseCart = await axios.post(
        `http://localhost:8081/api/cart/confirmBuy/${user._id}`
      );
      console.log(responseCart);
      router.push("/");
    } catch (err) {
      console.error(err);
    }

    //http://localhost:8081/api/cart/confirmBuy/65538c7afc108110ec0e0273
    /* if (cartAmount.totalDiscount == 0) {
      console.log(
        "No hay descuento aplicado, el precio real es",
        cartAmount.totalAmount
      );
    } else {
      const totalDiscount =
        cartAmount.totalAmount -
        (cartAmount.totalAmount * cartAmount.discount) / 100;
      if (totalDiscount !== cartAmount.totalDiscount) return;
      console.log("Hay descuento, el precio real es", totalDiscount);
    }
    console.log(cartAmount); */
  };
  const handleAddCoupon = async () => {
    if (!coupon) return;
    try {
      const responseCoupon = await axios.put(
        "http://localhost:8081/api/cart/addDiscount",
        { couponCode: coupon, mail: user.mail }
      );
      const responseTotalAmount = await axios.get(
        `http://localhost:8081/api/cart/courses/total/${user._id}`
      );

      setCartAmount(responseTotalAmount.data);
      setIsOpen(false);
      setTrolley(responseCoupon.data.totalDiscount);

      console.log(responseCoupon);
    } catch (err) {
      console.error(err);
    }
    /* console.log(user.mail);
    console.log(coupon); */
  };
  const onChangeCoupon = (e) => {
    e.preventDefault();
    setCoupon(e.target.value);
  };
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden"; // Bloquea el scroll del body
      document.body.querySelector("nav").style.opacity = "0.9";
      document.body.querySelector("#Footer").style.opacity = "0.9";
      document.body.querySelector("#details").style.opacity = "0.7";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick); // fugas de memoria mejor eliminar
      document.body.style.overflow = "auto"; // Habilita el scroll del body
      document.body.querySelector("nav").style.opacity = "1";
      document.body.querySelector("#Footer").style.opacity = "1";
      document.body.querySelector("#details").style.opacity = "1";
    }
  }, [isOpen]);
  const handleCoupon = (status) => {
    if (!status) {
      setIsOpen(true);
    }
    //console.log("agregando cupon");
  };

  const getUser = async () => {
    try {
      const responseUser = await axios.get(
        "http://localhost:8081/api/user/me",
        {
          withCredentials: true,
        }
      );
      setUser(responseUser.data);

      const responseCourses = await axios.get(
        `http://localhost:8081/api/cart/courses/${responseUser.data._id}`
      );

      const responseTotalAmount = await axios.get(
        `http://localhost:8081/api/cart/courses/total/${responseUser.data._id}`
      );

      setCartAmount(responseTotalAmount.data);

      setCartCourses(responseCourses.data);
    } catch (error) {
      console.error(error);
    }
  };
  //console.log(cartCourses);
  //console.log(cartAmount);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <div
        id="details"
        className="flex w-full flex-col justify-center items-center relative"
      >
        <div className="mt-12 mb-6 md:mb-10">
          <h3 className="text-h2Black font-mystery-mixed text-[29px] min-[320px]:text-[38px] transform -rotate-2 md:rotate-0 md:text-5xl">
            Detalle de la orden
          </h3>
        </div>
        {cartCourses?.map((course) => (
          //Contenido para dispositivos móviles
          <Cards
            key={course._id}
            title={course.courseShortTitle}
            className="pb-10 w-[66%] min-h-[15rem] min-w-[14rem] max-w-[14rem] min-[400px]:max-w-[15rem] md:hidden select-none"
            img={course.courseImg_url}
            classNameImg=" h-[12.625rem] rounded-bl-[10px] rounded-br-[10px]"
            classNameBorder="h-[52px] flex-row justify-between items-center w-[170px] top-[182px]"
            classNameButton="text-xl tracking-wider w-[120px] pl-[14px] pr-[14px] h-[90%] items-center"
            buttonTitle={`$ ${Number(course.coursePrice)
              .toLocaleString()
              .replace(",", ".")}`}
          />
        ))}
        {cartCourses?.map((course) => {
          return (
            <div
              className="hidden md:block select-none w-full h-auto mb-8"
              key={course._id}
            >
              <div className="flex justify-center items-center">
                <div className="flex flex-col w-[43rem] min-[800px]:w-[47rem] font-ms-gothic">
                  <div className="bg-black text-letterWhite font-mystery-mixed flex items-center justify-center rounded-t-[6px]">
                    <h2 className="py-[6px] text-[1.6rem] leading-9">
                      {course.courseLongTitle.substring(0, 37)}
                    </h2>
                  </div>
                  <div className="flex gap-x-3 bg-page  rounded-b-[6px]">
                    <div className="basis-[25%]  flex justify-start items-center h-[10rem]">
                      <Image
                        src={course.courseImg_url}
                        width={100}
                        height={100}
                        alt="imagen"
                        className="w-[12.5rem] h-full rounded-bl-[6px]"
                      />
                    </div>
                    <div className="basis-[75%] flex flex-col justify-around items-start pb-3 pr-3 h-[10rem]">
                      <div className="text-[16px]">{course.courseSubtitle}</div>
                      <div className="text-[12px] w-[90%] leading-[13px]">
                        {course.courseDescription.substring(0, 400) + "..."}
                      </div>
                      <h2 className="w-full text-end">{`$${Number(
                        course.coursePrice
                      )
                        .toLocaleString()
                        .replace(",", ".")} ARS`}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* {cartCourses?.map((course) => (
          //Contenido para dispositivo de escritorio``
          <div
            key={course._id}
            className="hidden md:flex flex-col w-[80%] mt-12 shadow-xl"
          >
            <div className="w-full bg-black flex justify-between items-center rounded-t-md">
              <h3 className="flex-1 m-0 text-center text-white font-mystery-mixed text-2xl">
                {course.courseLongTitle}
              </h3>
              <IconButton
                onClick={() => handleRemove(course._id)}
                className={"p-1"}
              >
                <Close color={"white"} />
              </IconButton>
            </div>
            <div className="bg-page flex justify-between rounded-b-md">
              <div className="w-[25%]">
                <Image
                  src={course.courseImg_url}
                  width={300}
                  height={300}
                  alt="Picture"
                  className="h-full rounded-bl-lg"
                />
              </div>
              <div className="w-[75%] flex flex-col justify-between">
                <p className="text-black font-ms-gothic mx-2 text-lg">
                  {course.courseSubtitle}
                </p>
                <p className=" text-darkGray font-ms-gothic mx-2 text-sm">
                  {course.courseDescription}
                </p>
                <p className="text-black font-ms-gothic flex justify-end mx-2 text-base">
                  {`$ ${Number(course.coursePrice)
                    .toLocaleString()
                    .replace(",", ".")} ARS`}
                </p>
              </div>
            </div>
          </div>
        ))} */}
        <div
          className="mt-3 cursor-pointer select-none flex justify-center items-center relative"
          onClick={() => handleCoupon(isOpen)}
        >
          <h3 className="text-h2Black font-ms-gothic text-[16px] md:text-lg">
            Tengo un cupón de descuento
          </h3>
        </div>
        <div className=" flex items-center justify-center text-h2Black font-mystery-mixed text-2xl min-[320px]:text-3xl w-[70%] mt-6 md:justify-center md:text-5xl">
          <h2 className="mx-8">Total:</h2>
          <h2 className="mx-8">
            {!trolley
              ? Number(cartAmount.totalAmount)
                  .toLocaleString()
                  .replace(",", ".")
              : Number(trolley).toLocaleString().replace(",", ".")}
          </h2>
        </div>
        <Button
          onClick={handleCheck}
          type="rounder"
          className="font-ms-gothic text-[28px] w-[60%] max-w-[270px] mt-4 py-1  mb-[5rem] sm:mb-[8rem] sm:max-w-[210px]"
        >
          Confirmar
        </Button>
      </div>

      {/*  {cartCourses?.map((course) => (
        //Contenido para dispositivos móviles
        <Cards
          key={course._id}
          title={course.courseTitle}
          buttonTitle="$ 10.000"
          img={course.courseImg_url}
          className="w-[50%] mt-8 text-1xl md:hidden"
          classNameImg=""
        />
      ))} */}
      <div
        className={` w-full  flex items-center justify-center fixed inset-0 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modalRef}
          className="w-full max-w-[1100px] h-[350px] min-[500px]:h-[400px] min-[600px]:h-[500px] min-[700px]:h-[600px] min-[800px]:h-[720px]  bg-[url(../../public/img/background.png)] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center mx-4 sm:m-20"
        >
          <div className="flex h-[240px] min-[500px]:h-[350px] min-[600px]:h-[550px] w-full flex-col gap-y-10 justify-between min-[500px]:justify-around items-center">
            <h2 className="font-mystery-mixed text-[2rem] min-[500px]:text-[3rem] min-[600px]:text-[3.5rem] min-[700px]:text-[4rem] md:text-[4.5rem] text-letterWhite">
              Ingresá tu cupón
            </h2>

            <Input
              className={
                "w-[83%] max-w-[420px] min-[500px]:max-w-[620px] min-[600px]:max-w-[820px]"
              }
              classNameInput={
                "h-[2.7rem] min-[500px]:h-[3.1rem] min-[600px]:h-[3.5rem] text-[2rem] min-[500px]:text-[3rem]"
              }
              onChange={onChangeCoupon}
              value={coupon}
            />
            <Border
              className={`flex gap-0.5 border-pink border-[1px] p-1 ${""}`}
            >
              <Button
                className={`font-mystery-mixed p-3 whitespace-nowrap flex items-center text-[1.5rem] min-[500px]:text-[2.5rem] min-[500px]:p-5  leading-3 min-[500px]:leading-5 `}
                onClick={handleAddCoupon}
              >
                {"Aplicar descuento"}
              </Button>
            </Border>
          </div>
        </div>
      </div>
    </div>
  );
}
