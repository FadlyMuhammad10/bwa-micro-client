"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Youtube from "react-youtube";

export default function ClassRoomPage() {
  const router = useRouter();
  return (
    <div className="flex flex-row">
      <div className=" hidden lg:block w-[18%] bg-[#161A4F]">
        <div className="flex flex-col max-h-screen">
          <div
            className="container mx-auto inline-flex items-center gap-3 hover:cursor-pointer  pt-10"
            onClick={() => router.push("/dashboard")}
          >
            <FaArrowLeft width={16} height={16} fill="#ffffff" />
            <span className=" text-[#ffffff] text-lg">Back to Home</span>
          </div>
          <div className="mt-16 overflow-y-auto  ">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-3 ">
                <div className="bg-[#323775] container ">
                  <Button
                    variant="ghost"
                    className="justify-start text-white hover:text-white hover:bg-[#323775] rounded-none w-full h-[60px] p-0"
                  >
                    Warming Up
                  </Button>
                </div>
                <div className="container">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <Button
                      key={index}
                      variant="link"
                      className="justify-start  rounded-none w-full p-0 text-[#7176B8] hover:text-[#36C2CF] hover:no-underline"
                    >
                      Install Tools
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-3 overflow-sticky lg:col-span-5 lg:border-l w-[82%] max-h-screen">
        <div className="container mx-auto  pt-10 ">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl text-[#132B50]">Install Tools</h3>
            <p className="text-[#7186A0] text-lg">
              Materi bagian dari Warming Up
            </p>
          </div>

          <div className="video-players  mt-16 ">
            <Youtube
              videoId="MLMZ4e6WkZE"
              id="MLMZ4e6WkZE"
              opts={{
                playerVars: { controls: 1 },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
