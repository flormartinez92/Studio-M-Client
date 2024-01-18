import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MpButton({ orderId, longTitle, finalPrice }) {
  const [dataMp, setDataMp] = useState({ preferenceId: "", orderData: {} });

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_KEY);
    const createOrder = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/paymentMp/create-order`,
          {
            orderId: orderId,
            title: longTitle,
            price: finalPrice,
          }
        );
        console.log(res.data);
        const preferenceId = res.data.mpPreferenceID;
        setDataMp({ preferenceId });
      } catch (error) {
        console.error(error);
      }
    };
    if (dataMp.preferenceId == "") {
      createOrder();
    }
  }, [dataMp, orderId, longTitle, finalPrice]);

  return (
    <div>
      {dataMp.preferenceId && (
        <Wallet
          initialization={{
            preferenceId: dataMp.preferenceId,
          }}
        />
      )}
    </div>
  );
}
