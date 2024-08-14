"use client";
import TitleHeader from "@/components/atoms/TitleHeader";
import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function TransactionsPage() {
  return (
    <div className="flex flex-row">
      <div className=" hidden lg:block w-[18%] bg-[#161A4F] overflow-hidden sticky">
        <Sidebar />
      </div>
      <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%] max-h-screen ">
        <div className="container mx-auto  py-6 ">
          <div className="flex flex-col gap-4">
            <TitleHeader
              title="Transactions"
              subtitle={"Keep on track what you’ve invested"}
            />

            <div className="inline-flex items-center justify-between gap-6  mt-6 overflow-x-auto ">
              <div className="relative w-[150px] h-[100px] overflow-hidden  ">
                <Image
                  src={"/images/item-image1.png"}
                  alt="/images/item-image1.png"
                  width={150}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-[#132B50]">
                  Graphic Designer 101
                </h1>
                <p className="text-gray-600 text-sm">All Levels</p>
              </div>
              <span className="text-[#132B50] text-lg">Rp 280.000</span>
              <span className="text-[#132B50] text-lg">22 Jan, 2020</span>
              <Button
                variant="secondary"
                className="rounded-none bg-[#EDEDED] text-[#ACACAC] "
              >
                Lihat Kelas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
