"use client"

import React from "react";
import IconButton from "./IconButton";
import { Icon } from "@iconify/react";

export default function ListItem({ title, icon, itemStyle, listStyle }) {
  const style = itemStyle ? itemStyle : "";

  return (
    <div className={`flex flex-row items-center justify-around max-w-[319px] max-h-10 border-b border-[#C7C7C7] ml-2 ${listStyle}`} style={{ boxShadow: "-2px 0px 2px 0px rgba(199, 199, 199, 0.50)"}}>
      <p className="mr-auto">{title}</p>
      <IconButton iconButtonStyle={"text-[#389817] w-[21px] h-[21px]"} icon={<Icon icon="typcn:plus"/>} />
      <IconButton iconButtonStyle={"text-[#1bbee2] w-[21px] h-[21px]"} icon={<Icon icon="material-symbols:edit"/>} />
      <IconButton iconButtonStyle={`${style} `} icon={icon} /> 
    </div>
  );
}