import React from "react";
import Image from "next/image";

export const Qr_social_networks = ({
  styles,
  rotation,
  url,
  height = 100,
  width = 100,
  alt,
}) => {
  return (
    <div className={`${rotation}`}>
      <Image
        src={"/img/" + url}
        width={width}
        height={height}
        className={`${styles}`}
        alt={`${alt}`}
      ></Image>
    </div>
  );
};
