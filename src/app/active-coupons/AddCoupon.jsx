import Button from "@/common/Button";
import Input from "@/common/Input";
import axios from "axios";
import React, { useState } from "react";

export default function AddCoupon({ onCouponAdd }) {
  const [couponData, setCouponData] = useState({
    couponCode: "",
    startDate: "",
    endDate: "",
    discountCoupon: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCouponData({ ...couponData, [name]: value });
  };

  const handleSubmitAdd = async (event) => {
    event.preventDefault();

    try {
      // Enviar los datos del cupón al servidor usando axios

      const response = await axios.post(
        "http://localhost:8081/api/course/addCoupon",
        couponData
      );

      onCouponAdd(response.data); //crear cupon
      alert("cupon creado exitosamente");
    } catch (error) {
      console.error("error creating coupon", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <form className="w-[65%]" onSubmit={handleSubmitAdd}>
        <Input
          name="couponCode"
          type="code"
          placeholder="escriba su codigo"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Codigo"
          value={couponData.couponCode}
          onChange={handleInputChange}
        />
        <Input
          name="startDate"
          type="date"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Fecha creacion"
          value={couponData.startDate}
          onChange={handleInputChange}
        />
        <Input
          name="endDate"
          type="date"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Fecha vencimiento"
          value={couponData.endDate}
          onChange={handleInputChange}
        />
        <Input
          name="discountCoupon"
          type="number"
          placeholder="escriba el descuento"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Descuento"
          value={parseInt(couponData.discountCoupon)}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          className="w-[25%] rounded bg-darkGreen mt-4 flex justify-center"
        >
          Confirmar
        </Button>
      </form>
    </div>
  );
}
