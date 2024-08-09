import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center">
      <div className="logo">
        <Image src={"/images/logo.svg"} alt="logo" width={37} height={54} />
      </div>
      <div className="inline-flex items-center gap-16  text-white text-lg ">
        <Link href="/">
          <div className="hover:text-teal-500">Home</div>
        </Link>
        <Link href="/">
          <div className="hover:text-teal-500">Pricing</div>
        </Link>
        <Link href="/">
          <div className="hover:text-teal-500">Features</div>
        </Link>
        <Link href="/">
          <div className="hover:text-teal-500">Story</div>
        </Link>
        <div>
          <Button className="bg-[#4D55BC] hover:bg-indigo-800 rounded-none">
            Masuk
          </Button>
        </div>
      </div>
    </header>
  );
}
