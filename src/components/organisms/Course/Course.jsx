import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Course() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h3 className=" text-gray-600">New Classes</h3>
          <h4 className="text-xl">
            Summer <span className="text-teal-500">Productive</span>
          </h4>
        </div>
        <div className="w-auto">
          <Link href="/" className="hover:underline text-gray-600">
            View All Courses
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-6 min-w-[272px] max-h-[232px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 hover:cursor-pointer "
          >
            <div className="relative w-full h-[170px] overflow-hidden group ">
              <Image
                src={"/images/item-image1.png"}
                alt="/images/item-image1.png"
                width={272}
                height={232}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out ">
                <Image
                  src={"/images/icon-play.svg"}
                  alt="icon-play"
                  width={46}
                  height={46}
                  className="text-orange-400 bg-orange-400 rounded-[100%] "
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold">Graphic Designer 101</h1>
              <p className="text-gray-600 text-sm">All Levels</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
