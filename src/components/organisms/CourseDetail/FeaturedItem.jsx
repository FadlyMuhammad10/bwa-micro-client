import React from "react";

export default function FeaturedItem({ item }) {
  return (
    <>
      <div className="border border-gray-300 p-6 w-[290px] bg-white">
        <div className="flex">
          <div className="w-auto text-[#36C2CF]">{item.icon}</div>
          <div className="ml-5">
            <span className="text-gray-600 block">{item.title}</span>
            <span className="text-3xl text-gray-900">{item.value}</span>
          </div>
        </div>
      </div>
    </>
  );
}
