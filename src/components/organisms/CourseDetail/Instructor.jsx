import Image from "next/image";
import React from "react";

export default function Instructor({ data }) {
  if (data.length === 0) return <></>;
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <div className="w-[80px] h-[80px]">
          <Image
            src={data.Mentor.avatar}
            alt="img-instructor"
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl text-[#132B50]">{data.Mentor.name}</div>
          <div className="text-[#7186A0]">{data.Mentor.profession}</div>
        </div>
      </div>
    </>
  );
}
