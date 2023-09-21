import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";

export default function Cards({ title, buttonTitle, icon, img, className }) {
  return (
    <div className={`w-80 relative ${className || ""}`}>
      <h2 className="text-4xl text-white bg-black font-mystery-mixed p-2 flex items-center justify-center rounded-t-md">
        {title}
      </h2>
      <Image src={img} width={500} height={500} alt="Picture" />
      <Border className="flex gap-2 w-[70%] absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <Button className="font-mystery-mixed">{buttonTitle}</Button>
        <Button>{icon}</Button>
      </Border>
    </div>
  );
}
