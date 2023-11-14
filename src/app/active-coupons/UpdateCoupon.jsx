import axios from "axios";
import React, { useState } from "react";

export default function UpdateCoupon({ couponId, couponData, onCouponUpdate }) {
  const [updateCoupon, setUpdateCoupon] = useState(couponData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateCoupon({ ...updateCoupon, [name]: value });
  };

  const handleSubmitUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/course/updateCoupon/${couponId}`,
        updateCoupon
      );
     
      onCouponUpdate(response.data)
    } catch (error) {
      console.error("error updating coupon", error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <form className="w-[65%]">
        <Input
          name="couponCode"
          type="code"
          placeholder="escriba su codigo"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Codigo"
          value={updateCoupon.couponCode}
          onChange={handleInputChange}
        />
        <Input
          name="startDate"
          type="date"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Fecha creacion"
          value={updateCoupon.startDate}
          onChange={handleInputChange}
        />
        <Input
          name="endDate"
          type="date"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Fecha vencimiento"
          value={updateCoupon.endDate}
          onChange={handleInputChange}
        />
        <Input
          name="discountCoupon"
          type="number"
          placeholder="escriba el descuento"
          className="w-full"
          classNameLabel="text-[20px]"
          label="Descuento"
          value={updateCoupon.discountCoupon}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          onSubmit={handleSubmitUpdate}
          className="w-[25%] rounded bg-darkGreen mt-4 flex justify-center"
        >
          Actualizar cupon
        </Button>
      </form>
    </div>
  );
}
