import axios from "axios";
import React from "react";

export default function DeleteCoupon({ couponId }) {
  const handleDelete = () => {
    axios.delete(`/api/course/deleteCoupon/${couponId}`);
  };
}
