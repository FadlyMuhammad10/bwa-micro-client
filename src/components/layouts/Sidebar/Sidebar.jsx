"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className=" container mx-auto flex flex-col  items-center justify-center pt-10">
          <div className="w-[110px] h-[110px] border border-border rounded-full p-3 ">
            <Image
              src={"/images/default-avatar.svg"}
              alt="img-profile"
              width={90}
              height={90}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-white pt-3">BuildWith Angga</h2>
          <p className="text-[#7176B8] text-sm">Web Designer</p>
        </div>
        <div className=" text-[#7176B8]   mt-16 space-y-3">
          <Button
            variant="ghost"
            className="justify-start hover:text-white hover:bg-[#2E37A4] rounded-none w-full h-[60px]"
          >
            <h2 className="ml-3">My Class</h2>
          </Button>
          <Button
            variant="ghost"
            className="justify-start hover:text-white hover:bg-[#2E37A4] rounded-none w-full h-[60px] "
            onClick={() => router.push("/")}
          >
            <h2 className="ml-3">Library</h2>
          </Button>
          <Button
            variant="ghost"
            className="justify-start hover:text-white hover:bg-[#2E37A4] rounded-none w-full h-[60px] "
            onClick={() => router.push("/transactions")}
          >
            <h2 className="ml-3">Transactions</h2>
          </Button>
          <Button
            variant="ghost"
            className="justify-start hover:text-white hover:bg-[#2E37A4] rounded-none w-full  h-[60px]"
          >
            <h2 className="ml-3">Settings</h2>
          </Button>
        </div>
        <div className="flex justify-end text-[#7176B8] mt-auto mb-16">
          <Button
            variant="ghost"
            className="justify-start hover:text-white hover:bg-[#2E37A4] rounded-none w-full h-[60px]"
          >
            <h2 className="ml-3">Logout</h2>
          </Button>
        </div>
      </div>
    </>
  );
}
