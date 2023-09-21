import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";

export default function Cards({ title, buttonTitle, icon, img, className }) {
  return (
    <div className={`w-80 relative ${className || ""}`}>
      <h2 className="text-3xl text-white bg-black font-mystery-mixed p-2 flex items-center justify-center rounded-t-md">
        {title}
      </h2>
      <Image src={img} width={300} height={300} alt="Picture" />
      <Border className="flex justify-between gap-0.5 w-[80%] absolute bottom-2 left-1/2 transform -translate-x-1/2 p-1.5">
        <Button className="font-mystery-mixed py-0 px-5 text-[20px] h-10">{buttonTitle}</Button>
        <Button className={"p-1 px-2.5 h-10 flex items-center"}>{icon}</Button>
      </Border>
    </div>
  );
}