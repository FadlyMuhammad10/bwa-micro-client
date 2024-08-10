import Image from "next/image";
import React from "react";
import Navbar from "../layouts/Navbar/Navbar";
import Hero from "../organisms/Hero/Hero";

export default function Header() {
  return (
    <>
      <div className="header-clipping  relative top-0 left-0 right-0 bottom-0 bg-indigo-900 h-[648px] z-0">
        <Image
          src={"/images/circle-accent-1.svg"}
          alt="circle-accent-1"
          width={419}
          height={425}
          className="absolute  left-0 right-0 bottom-0 "
        />
        <div className="sunshine -z-50" />
      </div>
      <div className="container mx-auto pt-10 absolute top-0 left-0 right-0 bottom-0 ">
        <Navbar titleBtn={"Login"} />
        <Hero />
      </div>
    </>
  );
}
