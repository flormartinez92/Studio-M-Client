import React from "react";
import Border from "./Border";

export default function CheckList({ icon, className }) {
  return (
    <div className="flex items-center">
      <Border className={`w-10 border-4 py-1 px-2 ${className || ""}`}>
        <div>{icon}</div>
      </Border>
    </div>
  );
}
