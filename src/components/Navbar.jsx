import IconButton from "@/common/IconButton";
import { BurgerMenu } from "@/common/Icons";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-black w-full h-16">
      <div className="flex justify-between px-6 items-center h-16">
        <h2 className="text-white font-mystery-mixed text-3xl">Studio by M</h2>
        <IconButton>
          <BurgerMenu width="25" height="25" />
        </IconButton>
      </div>
    </div>
  );
}
