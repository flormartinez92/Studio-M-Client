import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";

export default function Cards({ title }) {
  return (
    <div className="w-80 relative">
      <h2 className="text-4xl text-[#FFFFFF] bg-[#1E1E1E] font-mystery-mixed p-2 flex items-center justify-center border-solid rounded-md">
        {title}
      </h2>
      <Image src="/svg/indonesia.png" width={500} height={500} alt="Picture" />
      <Border className="absolute left-10 bottom-10 w-100 z-10">
        <Button
          text={"curso"}
          className="absolute left-10 bottom-10 w-250 z-0"
        />
      </Border>
    </div>
  );
}
