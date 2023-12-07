"use client";
import React from "react";

interface Props {
  children?: React.ReactNode;
  color?: "yellow" | "black";
}

const Button: React.FC<Props> = ({ children, color = "black" }) => {
  let bg_color: string = "bg-[#000000]";
  let hover_color: string = "hover:bg-[#2d2d2d]";
  let text_color: string = "text-[#F8F200]";

  if (color === "yellow") {
    bg_color = "bg-[#F8F200]";
    hover_color = "hover:bg-[#fffb05]";
    text_color = "text-[#000000]";
  }

  return (
    <button
      className={["z-20 h-full w-full", bg_color, hover_color, text_color].join(
        " ",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
