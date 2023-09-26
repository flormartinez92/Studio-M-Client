import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";

export default function Cards({ title, buttonTitle, icon, img, className, classNameButton, classNameIconButton }) {
  return (
    <div className={`w-80 relative ${className || ""}`}>
      <h2 className="text-3xl text-white bg-black font-mystery-mixed p-1 flex items-center justify-center rounded-t-lg">
        {title}
      </h2>
      <Image src={img} width={500} height={500} alt="Picture" />
      <Border className="flex justify-between gap-0.5 w-[70%] absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1">
        <Button className={`font-mystery-mixed py-1.5 px-5 ${classNameButton}`}>{buttonTitle}</Button>
        <Button className={`py-2 ${classNameIconButton}`}>{icon}</Button>
      </Border>
    </div>
  );
}
