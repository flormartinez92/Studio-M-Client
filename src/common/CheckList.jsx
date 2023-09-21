import React from "react";
import Border from "./Border";
import { Check } from "@/common/Icons";

export default function CheckList({ icon }) {
  return (
    <div className="w-80 mx-auto flex justify-center items-center">
      <Border className="w-20 border-4 py-1 px-2">
        <Check /> {icon}
      </Border>
    </div>
  );
}
