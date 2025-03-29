import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

export default function VideoItem(data) {
  const [preview, setPreview] = React.useState(data.data.lessons[0].name);
  return (
    <>
      <div className="container">
        <AccordionTrigger>{data.data.name}</AccordionTrigger>
      </div>
      <div className="bg-[#F6F6F6]">
        <AccordionContent className="container pt-2  flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <div>{preview}</div>
            <Image
              src={"/images/icon-play.svg"}
              alt="ic-play"
              width={24}
              height={24}
              className=" bg-teal-500 rounded-[100%] "
            />
          </div>
          {data.data.lessons.slice(1).map((item, index) => (
            <div
              className="flex flex-row justify-between items-center"
              key={index}
            >
              <div>{item.name}</div>
              <Image
                src={"/images/icon-lock.svg"}
                alt="ic-lock"
                width={24}
                height={24}
              />
            </div>
          ))}
        </AccordionContent>
      </div>
    </>
  );
}
