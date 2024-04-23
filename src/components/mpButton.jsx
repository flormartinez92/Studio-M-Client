import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MpButton({ cartCourses, orderId }) {
  const [dataMp, setDataMp] = useState({ preferenceId: "", orderData: {} });

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_KEY);
    const createOrder = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/paymentMp/create-order`,
          {
            cartCourses: cartCourses,
            orderId: orderId,
          }
        );
        const preferenceId = res.data.mpPreferenceID;
        setDataMp({ preferenceId });
      } catch (error) {
        console.error(error);
      }
    };
    if (dataMp.preferenceId == "") {
      createOrder();
    }
  }, [dataMp, orderId]);

  return (
    <div>
      {dataMp.preferenceId && (
        <Wallet
          initialization={{
            preferenceId: dataMp.preferenceId,
          }}
          customization={{
            texts: { action: "pay", valueProp: "none" },
            visual: {
              buttonWidth: "120px",
              borderRadius: "50px",
              buttonBackground: "black",
              valuePropColor: "white",
            },
          }}
        />
      )}
    </div>
  );
}
