import React from "react";
import Border from "./Border";

export default function CheckList({ icon, text, className }) {
  return (
    <div
      className={`flex justify-center items-center gap-4 w-[80%] ${
        className || ""
      }`}
    >
      <Border className={`border-4 p-0.5 ${className || ""}`}>{icon}</Border>
      <p className="font-ms-gothic leading-tight">{text}</p>
    </div>
  );
}

