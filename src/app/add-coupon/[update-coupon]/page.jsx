"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import NotFound from "@/common/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";

export default function UpdateCoupon({ params }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const couponId = params["update-coupon"];
  const router = useRouter();
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");
  const {
    OnChange: OnChangeCouponName,
    value: valueCouponName,
    blur: BlurCouponName,
    focus: FocusCouponName,
    message: MessageCouponName,
  } = useInput("couponName");
  const {
    OnChange: OnChangeDiscount,
    value: valueDiscount,
    blur: BlurDiscount,
    focus: FocusDiscount,
    message: MessageDiscount,
  } = useInput("discount");

  useEffect(() => {
    const fetchCouponDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/allCoupons/${couponId}`
        );
        const { couponCode, discountCoupon } = response.data;
        OnChangeCouponName({ target: { value: couponCode } });
        OnChangeDiscount({ target: { value: discountCoupon } });
      } catch (error) {
        console.error("Error al obtener los detalles del cupón:", error);
      }
    };
    fetchCouponDetails();
  }, [couponId]);

  // Función para manejar la actualización del cupón
  const handleUpdateCoupon = async () => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/adminCoupon/${couponId}`,
        {
          couponCode: valueCouponName,
          discountCoupon: valueDiscount,
        }
      );
      setmessageAlert("");
      setmessageAlertOk("¡Cupón Actualizado!");
      setTimeout(() => {
        router.push("/active-coupons");
      }, 1300);
    } catch (error) {
      console.error(error);
      const { data } = error.response;
      console.log(data);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // Verificación campos de los input
    if (valueCouponName.trim() === "" || valueDiscount.trim() === "") {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      // Verificación campos de los mensajes de error
      if (MessageCouponName || MessageDiscount) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        // Llama directamente a la función para actualizar el cupón
        handleUpdateCoupon();
      }
    }
  };

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuthentication();
  }, []);

  return (
    <>
      {user && user.isAdmin ? (
        <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
          <h2 className="font-mystery-mixed text-[49px] mb-[10px] sm:text-[71px] sm:mb-[20px] leading-3">
            Editar Cupón
          </h2>
          <form
            onSubmit={onSubmitForm}
            className="mt-[50px] 
            w-[80%]
            max-w-[300px] 
            sm:max-w-[750px]
            md:flex md:flex-col md:items-center"
          >
            <div
              className="flex flex-col sm:justify-center 
        sm:items-center sm:flex-row  w-full sm:gap-x-3  
        "
            >
              <div className="basis-[32%] mb-[0.1rem]">
                <Input
                  className={"flex-none"}
                  label={"Nombre del cupón"}
                  value={valueCouponName}
                  onChange={OnChangeCouponName}
                  onBlur={BlurCouponName}
                  onFocus={FocusCouponName}
                  classNameLabel={"block text-[23px]"}
                  placeholder={"Ingresa nombre del cupón"}
                  name={"nombre del cupón"}
                  classNameInput={`p-[5px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
                />
                <div className="h-[.5rem]">
                  {MessageCouponName && (
                    <p className="text-red text-[.9rem] leading-3">
                      {MessageCouponName}
                    </p>
                  )}
                </div>
              </div>
              <div className="basis-[26%] mb-[0.1rem]">
                <Input
                  className={"flex-none"}
                  type={"text"}
                  label={"Descuento"}
                  value={valueDiscount}
                  onChange={OnChangeDiscount}
                  onBlur={BlurDiscount}
                  onFocus={FocusDiscount}
                  classNameLabel={"block text-[23px]"}
                  name={"descuento"}
                  placeholder={"Ingrese el descuento"}
                  classNameInput={`p-[4px] 
              outline-none 
              w-[100%]
              h-[40px] 
              rounded-[3px]   
              bg-black/20`}
                />
                <div className="h-[.5rem]">
                  {MessageDiscount && (
                    <p className="text-red text-[.9rem] leading-3">
                      {MessageDiscount}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div
              className="
        flex
        flex-col 
        justify-center 
        items-center 
        mt-[40px] sm:mt-[50px]"
            >
              <div className="h-[.5rem] mb-[1.2rem]">
                {messageAlert ? (
                  <p className="text-red text-[1rem] leading-3">
                    {messageAlert}
                  </p>
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
          w-[17rem]
          sm:w-[15rem]`}
              >
                Confirmar
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
