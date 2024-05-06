import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "@/state/features/mpSlice";
export default function MpButtonIvan({ price, id }) {
  const dispatch = useDispatch();
  const [preferenceId, setPreferenceId] = useState(null);
  const [linkmp, setlinkmp] = useState("");
  initMercadoPago(process.env.NEXT_PUBLIC_KEY);
  const createOrder = async () => {
    setPreferenceId(null);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/paymentMp/create-order`,
        { quantity: 1, id, title: "Total ammount", price }
      );

      setPreferenceId(res.data.id);
      dispatch(updateStatus(res.data.id));
      setlinkmp(res.data.sandbox_init_point);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPreferenceId(null);
  }, [price]);
  useEffect(() => {
    if (!preferenceId) {
      createOrder();
    }
  }, [preferenceId]);

  return (
    <div className="h-14">
      {preferenceId && (
        <Link href={linkmp} className="">
          <div className="bg-[#262828] hover:bg-[#4893a0] h-[40px] flex justify-center items-center gap-x-2 rounded-[2rem] p-2 md:p-1">
            <Image
              src={"/svg/mp.svg"}
              width={320}
              height={200}
              alt="mp"
              className="w-7  md:w-9"
            />

            <p className="text-[#FFF] hidden sm:block text-[.8rem] sm-450:text-[.9rem]  md:text-[1rem] font-medium">
              Mercado Pago
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
