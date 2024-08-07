import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className=" flex flex-col text-white gap-5">
          <h1 className="text-5xl font-semibold ">
            <span className="text-teal-500">The New</span> Way to <br /> Achieve
            Good <span className="text-teal-500">Skills</span>
          </h1>
          <p>
            We provide tons of pathskill that you <br /> can choose and focus on
          </p>
          <div className="inline-flex items-center">
            <Input
              type="email"
              placeholder="Email Address"
              className="rounded-none w-[300px] focus:outline-none border-0 focus:text-black"
            />
            <Button className="bg-[#FE721C] hover:bg-orange-400 rounded-none w-[200px] transition-all duration-200">
              Get Started
            </Button>
          </div>
        </div>

        <div className=" flex justify-end pt-16 pr-16 relative">
          <div className="w-[369px] h-[440px] relative">
            <div className=" border-indigo-700 border-2 w-[324px] h-[374px] absolute right-0 -mt-10 -mr-6 -z-50" />
            <div className="w-full h-full -ml-8 absolute ">
              <Image
                src={"/images/img-hero-mbak-alyssa-cakep.jpg"}
                alt="hero-image"
                width={369}
                height={440}
              />
            </div>
            <div className="absolute translate-x-[-60%] z-10 bg-white w-[290px] h-[113px] py-3 px-4 mt-16 ">
              <div className="flex flex-col gap-3">
                <p className="text-[#132B50]">
                  Learn knowledge casually like watching a movie on Netflix
                </p>
                <span className="text-[#7186A0]">Alyssa, Apps Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
