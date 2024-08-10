import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

export default function VideoItem() {
  return (
    <>
      <div className="container">
        <AccordionTrigger>Getting Started</AccordionTrigger>
      </div>
      <div className="bg-[#F6F6F6]">
        <AccordionContent className="container pt-2  flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <div>Adobe XD for Windows</div>
            <Image
              src={"/images/icon-play.svg"}
              alt="ic-play"
              width={24}
              height={24}
              className=" bg-teal-500 rounded-[100%] "
            />
          </div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center"
            >
              <div>Plugins for Adobe XD</div>
              <Image
                src={"/images/icon-lock.svg"}
                alt="ic-lock"
                width={24}
                height={24}
                className=" "
              />
            </div>
          ))}
        </AccordionContent>
      </div>
    </>
  );
}
