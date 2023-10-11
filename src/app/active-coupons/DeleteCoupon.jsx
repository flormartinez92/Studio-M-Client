import IconButton from "@/common/IconButton";
import { Trash } from "@/common/Icons";
import axios from "axios";
import React from "react";

export default function DeleteCoupon({ couponId, onDeleteCoupon }) {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/course/deleteCoupon/${couponId}`
      );
      onDeleteCoupon(couponId);
    } catch (error) {
      console.error("error when deleting coupon", error);
    }
  };

  return (
    <IconButton onClick={handleDelete}>
      <Trash color="#A31616" />
    </IconButton>
  );
}
