import { paypalCheckPayment, setTransactionId } from "@/helpers/apiHelpers";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/navigation";

export const PayPalButton = ({ orderId, amount, userId, cartCourses }) => {
  const router = useRouter();
  const rountedAmount = Math.round(amount * 100) / 100; //123.23

  const createOrder = async (data, actions) => {
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
      const responseCart = await axios.post(
        `http://localhost:8081/api/cart/confirmBuy/${userId}`
      );
      //console.log(cartCourses);
      localStorage.setItem("purchase", JSON.stringify(cartCourses));
      //console.log(responseCart);
      router.push("/trolley/purchase-completed");
    } catch (err) {
      console.error(err);
    }
  };

  return <PayPalButtons createOrder={createOrder} onApprove={onApprove} />;
};
