"use client";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Category from "@/components/organisms/Category/Category";
import Client from "@/components/organisms/Client/Client";
import Course from "@/components/organisms/Course/Course";
import Hero from "@/components/organisms/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
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
          <Navbar />
          <Hero />
        </div>
      </section>
      <section className="container mx-auto pt-24 relative">
        <Client />
      </section>
      <section className="container mx-auto pt-24 relative">
        <Course />
      </section>
      <div className="container mx-auto pt-24 relative">
        <Category />
      </div>
    </>
  );
}
