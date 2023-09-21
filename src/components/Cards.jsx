import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";
import { CartShopSimple } from "@/common/Icons";

export default function Cards({ title, buttonTitle }) {
  return (
    <div className="w-80 relative">
      <h2 className="text-4xl text-[#FFFFFF] bg-[#1E1E1E] font-mystery-mixed p-2 flex items-center justify-center rounded-t-md">
        {title}
      </h2>
      <Image src="/svg/indonesia.png" width={500} height={500} alt="Picture" />
      <Border className="flex gap-2 m-auto w-60 absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <Button className="font-mystery-mixed m-auto">{buttonTitle}</Button>
        <Button>
          <CartShopSimple />
        </Button>
      </Border>
    </div>
  );
}
