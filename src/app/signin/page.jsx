import Footer from "@/components/layouts/Footer/Footer";
import Navbar from "@/components/layouts/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

export default function SigninPage() {
  return (
    <>
      <section className="h-screen">
        <div className="container mx-auto relative inset-0 z-0 pt-10">
          <Navbar titleBtn={"Register"} />
        </div>
        <div className="container mx-auto relative ">
          <div className="w-[85%] mx-auto">
            <div className="grid grid-cols-2">
              <div className="flex items-start justify-between transform translate-y-1/2">
                <div className="w-auto flex flex-col text-white gap-5">
                  <h1 className="text-3xl text-[#132B50]">
                    <span className="font-semibold">Continue</span> Study,{" "}
                    <br /> Finish Your{" "}
                    <span className="font-semibold">Goals</span>
                  </h1>
                  <div className="w-full text-[#132B50] ">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="rounded-none w-[300px] focus:outline-none border-[#7186A0] focus:text-black"
                    />
                  </div>

                  <div className="w-full text-[#132B50] ">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="rounded-none w-[300px] focus:outline-none border-[#7186A0] focus:text-black"
                    />
                  </div>
                  <Button className="w-full bg-[#FE721C] hover:bg-orange-400 rounded-none  transition-all duration-200">
                    Login
                  </Button>
                </div>
              </div>
              <div className="transform translate-y-1/2 relative right-0">
                <div className="w-[369px] h-[440px] relative">
                  <div className=" border-indigo-700 border-2 w-[360px] h-[442px] absolute right-0   -z-50" />
                  <div className="w-full h-full absolute ml-8 mt-10  ">
                    <Image
                      src={"/images/img-hero-mbak-tamara-cakep.jpg"}
                      alt="hero-image-login"
                      width={369}
                      height={440}
                    />
                  </div>
                  <div className="absolute translate-x-[60%] bottom-0  transform translate-y-[70%] z-10 bg-white w-[290px] h-[113px] py-3 px-4 ">
                    <div className="flex flex-col gap-3">
                      <p className="text-[#132B50]">
                        Learn knowledge casually like watching a movie on
                        Netflix
                      </p>
                      <span className="text-[#7186A0]">
                        Tamara, Apps Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
