import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";

export default function StudentReview() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaRegStar
              key={index}
              className="w-[20px] h-[19px] fill-[#FFD911]"
            />
          ))}
        </div>
        <div className="w-[38%] text-[#7186A0]">
          I think this is the best invesment that I ever did better than my
          daily lipstick or cream.
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="w-[55px] h-[55px]">
            <Image
              src={"/images/pic (1).png"}
              alt="img-student"
              width={55}
              height={55}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl text-[#132B50]">Suneo Giant</div>
            <div className="text-[#7186A0]">Dev Ops</div>
          </div>
        </div>
      </div>
    </>
  );
}
