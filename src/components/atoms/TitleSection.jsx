import React from "react";

export default function TitleSection({ word1, word2 }) {
  return (
    <div>
      <h1 className="text-[#132B50] text-2xl">
        {word1} <span className="text-teal-500">{word2}</span>
      </h1>
    </div>
  );
}
