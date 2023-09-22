import React from "react";
import Image from "next/image";

export const Qr_social_networks = ({
  styles,
  rotation,
  url,
  height = 100,
  width = 100,
}) => {
  return (
    <div className={`${rotation}`}>
      <Image
        src={"/images/" + url}
        width={width}
        height={height}
        className={`${styles}`}
      ></Image>
    </div>
  );
};
