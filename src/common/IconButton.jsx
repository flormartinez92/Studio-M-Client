import React from "react";

export default function IconButton({ iconButtonStyle, icon }) {
  const style = iconButtonStyle ? iconButtonStyle : "";

  return (
    <div>
      <button className={`${style}`}>{icon}</button>
    </div>
  );
}
