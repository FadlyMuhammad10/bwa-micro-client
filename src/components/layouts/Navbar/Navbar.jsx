"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Logo from "../../../../public/images/logo.svg";

export default function Navbar({ titleBtn, href }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/signup";
  return (
    <header className="flex justify-between items-center">
      <div className="logo">
        {isAuthPage ? (
          <>
            <Logo className="text-[#132B50]" />
          </>
        ) : (
          <>
            <Logo className="text-white" />
          </>
        )}
      </div>
      <div
        className={`inline-flex items-center gap-16  ${
          isAuthPage ? "text-[#132B50]" : "text-white"
        } text-lg`}
      >
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
          <Button
            className="bg-[#4D55BC] hover:bg-indigo-800 rounded-none px-4 py-2 "
            onClick={() => router.push(href)}
          >
            {titleBtn}
          </Button>
        </div>
      </div>
    </header>
  );
}
