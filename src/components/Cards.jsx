import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";

export default function Cards({ title, buttonTitle, icon, img, className }) {
  return (
    <div className={`w-[50%] relative ${className || ""}`}>
      <div className="grid place-content-center bg-black text-white p-2 rounded-t-md">
        <h2 className="text-2xl font-mystery-mixed ">{title}</h2>
      </div>
      <Image src={img} className="w-full" alt="Picture" />
      <Border className="flex gap-1 w-[80%] absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <Button className="font-mystery-mixed text-lg w-[80%]">{buttonTitle}</Button>
        <Button>{icon}</Button>
      </Border>
    </div>
  );
}