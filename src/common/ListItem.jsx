import React from "react";
import IconButton from "./IconButton";

export default function ListItem({
  text,
  className,
  iconOne,
  iconTwo,
  iconThree,
  classNameText,
}) {
  return (
    <div
      className={`flex items-center justify-between bg-white p-2 px-4 w-full border-solid border-2 border-gray ${
        className || ""
      }`}
    >
      <p className={`font-ms-gothic ${classNameText ? classNameText : "text-xl"}`}>{text}</p>
      <div className="flex justify-center items-center gap-3">
        <IconButton>{iconOne}</IconButton>
        <IconButton>{iconTwo}</IconButton>
        <IconButton>{iconThree}</IconButton>
      </div>
    </div>
  );
}
