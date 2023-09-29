import React from "react";
import Image from "next/image";
import Button from "@/common/Button";
import Border from "../common/Border";

export default function Cards({
  title,
  buttonTitle,
  icon,
  img,
  classNameImg,
  className,
  className2,
  classNameButton,
  classNameIconButton,
  classNameBorder,
}) {
  return (
    <div className={`w-80 relative ${className || ""}`}>
      <h2 className="text-3xl text-white bg-black font-mystery-mixed p-1 flex items-center justify-center rounded-t-lg">
        {title}
      </h2>

      <div className={`${className2}`}>
        <Image
          src={img}
          width={500}
          height={500}
          alt="Picture"
          className={classNameImg}
        />
        <div className="md:transform md:hover:scale-150 md:transition-transform">
          <Border
            className={`flex justify-between gap-0.5 w-[70%] absolute bottom-2 left-1/2 transform -translate-x-1/2 border-pink border-[1px] p-1 ${classNameBorder}`}
          >
            <Button className={`font-mystery-mixed  ${classNameButton}`}>
              {buttonTitle}
            </Button>
            <Button className={` ${classNameIconButton}`}>{icon}</Button>
          </Border>
        </div>
      </div>
    </div>
  );
}
