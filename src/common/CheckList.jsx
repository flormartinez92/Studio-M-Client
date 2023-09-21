import React from "react";
import Border from "./Border";
import { Check } from "@/common/Icons";

export default function CheckList({ icon, className }) {
  return (
    <div className="w-80 mx-auto flex justify-center items-center">
      <Border className={`w-20 border-4 py-1 px-2  ${className || ""}`}>
        {icon}
      </Border>
    </div>
  );
}
