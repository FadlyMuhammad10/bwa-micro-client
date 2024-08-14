import React from "react";

export default function TitleHeader({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-3xl text-[#132B50]">{title}</h3>
      <p className="text-[#7186A0]">{subtitle}</p>
    </div>
  );
}
