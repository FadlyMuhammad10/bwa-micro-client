import { Button } from "@/components/ui/button";
import React from "react";

export default function TransitionPrice() {
  return (
    <>
      <div className="meta-price w-full bg-white z-50 px-3 py-4">
        <div className="container mx-auto">
          <div className="w-3/4 mx-auto">
            <div className="flex items-center">
              <div className="w-full">
                <h2 className="text-gray-600">Name Course</h2>
                <h3 className="text-2xl text-gray-900">Graphic Designer 101</h3>
              </div>
              <h5 className="text-2xl text-teal-500 whitespace-nowrap mr-4">
                Free
              </h5>
              <div rel="noopener noreferrer">
                <Button className="bg-[#FE721C] hover:bg-orange-400 rounded-none  transition-all duration-200">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
