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
  //if (amount === 0) return;
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  /* const priceTernary =
    amount.totalDiscount == 0 ? amount.totalAmount : amount.totalDiscount;
  console.log(priceTernary);
  const rountedAmount = Math.round(priceTernary * 100) / 100; //123.23 */
  //dispatch
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.totalDiscount);
  //console.log(itemCount);
  const createOrder = async (data, actions) => {
    const user = await fetchUser();

    const { data: amount } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/total/${user?._id}`
    );

    const priceTernary =
      amount.totalDiscount == 0 ? amount.totalAmount : amount.totalDiscount;
    //console.log(priceTernary);
    const rountedAmount = Math.round(priceTernary * 100) / 100; //123.23
    //console.log(responseTotalAmount.data);
    //responseTotalAmount.data;
    //console.log(actions);

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
    console.log("onApprove");
    try {
      const details = await actions.order.capture();
      if (!details) return;
      await paypalCheckPayment(details.id, userId);
      const responseCourses = await axios.get(
        `http://localhost:8081/api/cart/courses/${userId}`
      );
      //console.log(responseCourses.data);
      dispatch(updateCart(responseCourses.data));
      const responseCart = await axios.post(
        `http://localhost:8081/api/cart/confirmBuy/${userId}`
      );

      dispatch(addToCart(0));

      /* console.log(cartCourses); */
      localStorage.setItem("purchase", JSON.stringify(cartCourses));
      //console.log(responseCart);
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
