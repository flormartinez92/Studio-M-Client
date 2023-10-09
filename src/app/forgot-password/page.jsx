"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Forgot() {
  const router = useRouter();
  const [mail, setMail] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setMail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/forgot`, {
        mail: mail,
      })
      .then(() => {
        router.push("/forgot-password/success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#fff] py-[115px]">
      <h2 className="font-mystery-mixed text-[35px] min-[320px]:text-[45px] sm:text-[55px] leading-3">
        Recuperá tu contraseña
      </h2>
      <form
        onSubmit={handleSubmit}
        className="
            mt-[50px] 
            w-[80%] 
            min-[450px]:max-w-[350px]
            sm:max-w-[450px] 
            "
      >
        <div
          className="
        mb-4 
        w-[100%] 
        sm:px-3
        flex flex-col
        justify-center
        items-center"
        >
          <Input
            label={"Mail"}
            name={"mail"}
            classNameLabel={"block text-[23px]"}
            type={"email"}
            className={"w-full sm:max-w-[85%]"}
            classNameInput={`p-[5px] outline-none w-[100%] h-[40px] rounded-[3px] bg-black/20`}
            placeholder={"ingresa tu mail"}
            value={mail}
            onChange={handleEmailChange}
          />
          <p className=" font-ms-gothic text-lg text-center pt-2">
            Te enviaremos un mail con las instrucciones para que generes una
            nueva clave de acceso.
          </p>
        </div>

        <div
          className="
        flex
        justify-center 
        items-center 
        mt-[40px]"
        >
          <Button
            onClick={handleSubmit}
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
      </form>
    </div>
  );
}
