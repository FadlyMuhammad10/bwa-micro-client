import Navbar from "@/components/layouts/Navbar/Navbar";
import React from "react";
import Youtube from "react-youtube";

export default function HeroDetail() {
  return (
    <>
      <div className="video-wrapper absolute inset-0 z-0">
        <Youtube
          videoId="MLMZ4e6WkZE"
          id="MLMZ4e6WkZE"
          opts={{ playerVars: { loop: 1, autoplay: 1, controls: 0, mute: 1 } }}
          onEnd={(event) => {
            event.target.playVideo();
          }}
        />
      </div>
      <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
      <div className="meta-title absolute inset-0 z-0 w-full object-fill flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-lg text-white">Online Course:</h3>
          <h4 className="text-6xl text-teal-500 font-semibold">
            Graphic Designer 101
          </h4>
        </div>
      </div>
      <div className="container mx-auto relative inset-0 z-0 pt-10">
        <Navbar titleBtn={"Login"} href={"/signin"} />
      </div>
    </>
  );
}
