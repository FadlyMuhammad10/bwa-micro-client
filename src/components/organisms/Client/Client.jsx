import Image from "next/image";
import React from "react";

export default function Client() {
  return (
    <div className="flex justify-between items-center">
      <Image
        src={"/images/logo-amazon.svg"}
        alt="logo-amazon"
        width={172}
        height={52}
      />
      <Image
        src={"/images/logo-microsoft.svg"}
        alt="logo-amazon"
        width={172}
        height={37}
      />
      <Image
        src={"/images/logo-tesla.svg"}
        alt="logo-amazon"
        width={172}
        height={23}
      />
      <Image
        src={"/images/logo-google.svg"}
        alt="logo-amazon"
        width={172}
        height={57}
      />
      <Image
        src={"/images/logo-facebook.svg"}
        alt="logo-amazon"
        width={172}
        height={35}
      />
    </div>
  );
}
