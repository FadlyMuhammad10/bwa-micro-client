import Image from "next/image";
import React from "react";

export default function ImagePreview() {
  return (
    <>
      <div className="w-full h-[170px]">
        <div className="relative w-full h-[170px] overflow-hidden group ">
          <Image
            src={"/images/item-image1.png"}
            alt="/images/item-image1.png"
            width={272}
            height={170}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-0 w-full h-full group-hover:bg-[#2E37A4] opacity-75"></div>
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-0 -translate-x-full  group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out ">
            <Image
              src={"/images/icon-preview.svg"}
              alt="icon-play"
              width={46}
              height={46}
              className="text-orange-400 bg-orange-400 rounded-[100%] "
            />
          </div>
        </div>
      </div>
    </>
  );
}
