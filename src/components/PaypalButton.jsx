import {
  fetchUser,
  paypalCheckPayment,
  setTransactionId,
} from "@/helpers/apiHelpers";
import { updateCart } from "@/state/features/arrayCartSlice";
import { addToCart } from "@/state/features/cartSlice";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const PayPalButton = ({ orderId, amount, userId, cartCourses }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.totalDiscount);

  const createOrder = async (data, actions) => {
    const user = await fetchUser();

    const { data: amount } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/total/${user?._id}`
    );

    const priceTernary =
      amount.totalDiscount == 0 ? amount.totalAmount : amount.totalDiscount;
    const rountedAmount = Math.round(priceTernary * 100) / 100;

    const transactionId = await actions.order.create({
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            value: `${rountedAmount}`,
          },
        },
      ],
    });
    const responseOrder = await setTransactionId(transactionId, userId);

    return transactionId;
  };
  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      if (!details) return;
      await paypalCheckPayment(details.id, userId);
      const responseCourses = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${userId}`
      );
      dispatch(updateCart(responseCourses.data));
      const responseCart = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/confirmBuy/${userId}`
      );

      dispatch(addToCart(0));

      localStorage.setItem("purchase", JSON.stringify(cartCourses));
      router.push("/trolley/purchase-completed");
    } catch (err) {
      console.error(err);
    }
  };

  const cancelOrder = async (data, actions, amount) => {
    console.log(amount);
  };

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
      onCancel={(data, actions) => cancelOrder(data, actions, amount)}
      className="flex items-center justify-center"
      style={{
        layout: "horizontal",
        color: "gold",
        shape: "pill",
        label: "paypal",
        height: 35,
        tagline: false,
      }}
    />
  );
};
