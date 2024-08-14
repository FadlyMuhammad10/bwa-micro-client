"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "../../../../public/images/logo.svg";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar({ titleBtn, href }) {
  const [isLogin, setIsLogin] = useState(false);
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
        className={`inline-flex items-center gap-10  ${
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
          {isLogin ? (
            <div className="inline-flex items-center gap-2">
              <Separator orientation="vertical" className="h-[33px]" />

              <DropdownMenu>
                <DropdownMenuTrigger className="border-none outline-none">
                  <div className="inline-flex items-center gap-4">
                    <div>Hi, User</div>
                    <Image
                      src="/images/default-avatar.svg"
                      alt="avatar"
                      width="45"
                      height="45"
                      className="max-h-[45px] max-w-[45px] rounded-full"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem>My Courses</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button
              className="bg-[#4D55BC] hover:bg-indigo-800 rounded-none px-4 py-2 "
              onClick={() => router.push(href)}
            >
              {titleBtn}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
