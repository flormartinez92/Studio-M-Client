"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const id = searchParams.get("id");
  const router = useRouter();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/resetPassword`, {
        userId: id,
        token,
        password: password.confirmPassword,
      })
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center bg-[#fff] py-[115px]">
        <h2 className="font-mystery-mixed text-[35px] min-[320px]:text-[45px] sm:text-[55px] leading-3">
          Restablecer Contraseña
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-[50px] w-[80%] min-[450px]:max-w-[350px] sm:max-w-[450px]"
        >
          <div className="mb-4 w-[100%] sm:px-3 flex justify-center items-center">
            <Input
              label={"Nueva Contraseña"}
              name={"password"}
              classNameLabel={"text-[23px]"}
              type={"password"}
              className="w-full sm:max-w-[85%]"
              classNameInput={`p-[5px] outline-none w-[100%] h-[40px] rounded-[3px] bg-black/20`}
              placeholder={"Ingresa tu nueva contraseña"}
              value={password.password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4 w-[100%] sm:px-3 flex justify-center items-center">
            <Input
              label={"Confirmar Contraseña"}
              name={"confirmPassword"}
              classNameLabel={"text-[23px]"}
              type={"password"}
              className="w-full sm:max-w-[85%] "
              classNameInput={`p-[5px] outline-none w-[100%] h-[40px] rounded-[3px] bg-black/20`}
              placeholder={"Confirma tu contraseña"}
              value={password.confirmPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex justify-center items-center mt-[60px]">
            <Button
              onClick={handleSubmit}
              className={`bg-black text-white py-[16px] px-[55px] rounded-[5px] leading-3 text-[19px] block sm:w-[13rem] md:w-[14rem]`}
            >
              Aceptar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
