import React from "react";
import Border from "./Border";

export default function CheckList({ icon, text, className }) {
  return (
    <div className={`p-5 flex items-start w-[80%] gap-2 ${className || ""}`}>
      <Border className={`border-2 p-0.5 ${className || ""}`}>{icon}</Border>
      <p className=" font-ms-gothic leading-tight">{text}</p>
    </div>
  );
}
