import React from "react";
import Border from "./Border";

export default function CheckList({ icon, text, className, classNameDiv }) {
  return (
    <div className={`flex items-start gap-2 ${classNameDiv || ""}`}>
      <Border className={`border-2 p-0.5 ${className || ""}`}>{icon}</Border>
      <p className=" font-ms-gothic leading-tight">{text}</p>
    </div>
  );
}
