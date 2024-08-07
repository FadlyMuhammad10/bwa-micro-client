import Navbar from "@/components/layouts/Navbar/Navbar";
import Client from "@/components/organisms/Client/Client";
import Hero from "@/components/organisms/Hero/Hero";
import Image from "next/image";
import Link from "next/link";

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
      <section className="container mx-auto pt-24">
        <Client />
      </section>
      <section className="container mx-auto pt-24">
        <div className="flex justify-between items-center">
          <div className="w-auto">
            <h3 className=" text-gray-600">New Classes</h3>
            <h4 className="text-xl">
              Summer <span className="text-teal-500">Productive</span>
            </h4>
          </div>
          <div className="w-auto">
            <Link href="/">View All Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
