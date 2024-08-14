"use client";
import TitleHeader from "@/components/atoms/TitleHeader";
import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MemberPage() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row">
        <div className=" hidden lg:block w-[18%] bg-[#161A4F] overflow-hidden sticky">
          <Sidebar />
        </div>
        <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%] max-h-screen ">
          <div className="container mx-auto  py-6 ">
            <div className="flex flex-col gap-4">
              <TitleHeader
                title="My Class"
                subtitle={"Continue learning to pursue your dreams"}
              />

              <div className="grid grid-cols-4 gap-6 mt-6 min-w-[272px] max-h-[232px]">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 hover:cursor-pointer "
                    onClick={() => router.push("/class-room/1")}
                  >
                    <div className="relative w-full h-[170px] overflow-hidden group ">
                      <Image
                        src={"/images/item-image1.png"}
                        alt="/images/item-image1.png"
                        width={272}
                        height={232}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 z-0 w-full h-full group-hover:bg-[#2E37A4] opacity-75"></div>
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
                      <h1 className="font-semibold text-[#132B50]">
                        Graphic Designer 101
                      </h1>
                      <p className="text-gray-600 text-sm">All Levels</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
