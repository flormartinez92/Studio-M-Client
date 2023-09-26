import React from "react";
import IconButton from "./IconButton";

export default function ListItem({
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  className,
  iconOne,
  iconTwo,
  iconThree,
  classNameText,
  classNameP,
}) {
  return (
    <div
      className={`flex items-center justify-between bg-white bg-opacity-0 px-4 border-solid  ${
        className || ""
      }`}
    >
      <p
        className={`font-ms-gothic ${
          classNameText ? classNameText : "text-xl"
        }`}
      >
        {text}
      </p>
      <div className="flex justify-center items-center gap-3">
        <p className={`hidden ${classNameP}`}>{text1}</p>
        <p className={`hidden ${classNameP}`}>{text2}</p>
        <p className={`hidden ${classNameP}`}>{text3}</p>
        <p className={`hidden ${classNameP}`}>{text4}</p>
        <p className={`hidden ${classNameP}`}>{text5}</p>
        <IconButton>{iconOne}</IconButton>
        <IconButton>{iconTwo}</IconButton>
        <IconButton>{iconThree}</IconButton>
      </div>
    </div>
  );
}
