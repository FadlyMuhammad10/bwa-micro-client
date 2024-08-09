import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const CompanyLink = ["API Developer", "Career", "Testimonial", "Coming Soon"];
const StudentLink = [
  "Get Scholarship",
  "Our Pathskills",
  "All Features",
  "Refund Policy",
];
const TouchUsLink = [
  "Micro Center",
  "Alleysi Block X No. 12",
  "Jakarta Selatan, Indonesia",
  "+21 2020 1234",
];

export default function Footer() {
  return (
    <section className="mt-24 h-[358px] bg-[#161A4F] relative ">
      <div className="container mx-auto py-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6">
            <h6 className="text-white">Company</h6>
            <div className="flex flex-col gap-2 text-[#53589D] ">
              {CompanyLink.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="hover:text-teal-500 hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="text-white">Student</h6>
            <div className="flex flex-col gap-2 text-[#53589D] ">
              {StudentLink.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="hover:text-teal-500 hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="text-white">Touch Us</h6>
            <div className="flex flex-col gap-2 text-[#53589D] ">
              {TouchUsLink.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="text-white">Promotions</h6>
            <div className="flex flex-col gap-2 text-[#53589D] ">
              <p>Submit your email for new updates</p>
              <div className="inline-flex items-center w-full">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-none  focus:outline-none border-0 focus:text-black"
                />
                <Button className="bg-[#FE721C] hover:bg-orange-400 rounded-none  transition-all duration-200">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-10 bg-[#333769]" />
        <div className="text-center">
          <p className="text-[#333769]">
            © 2024 Copyright Micro by BuildWith Angga. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
