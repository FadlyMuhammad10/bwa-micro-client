"use client";
import TitleSection from "@/components/atoms/TitleSection";
import Footer from "@/components/layouts/Footer/Footer";
import FeaturedItem from "@/components/organisms/CourseDetail/FeaturedItem";
import HeroDetail from "@/components/organisms/CourseDetail/HeroDetail";
import TransitionPrice from "@/components/organisms/TransitionPrice/TransitionPrice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FEATURE_OPTIONS } from "@/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

export default function DetailCoursePage() {
  const footer = useRef(null);
  const [isSticky, setIsSticky] = useState(true);
  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top;
    const stickyMetaToggler = () => {
      setIsSticky(stickyOffsetTop >= window.scrollY + window.innerHeight);
    };
    window.addEventListener("scroll", stickyMetaToggler);
    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  }, []);
  return (
    <>
      <section>
        <div className="relative top-0 left-0 right-0 bottom-0 bg-indigo-900 h-[660px] z-0">
          <HeroDetail />
        </div>
        <div className="container mx-auto">
          <div className="w-3/4 mx-auto transform -translate-y-1/2">
            <div className="flex justify-between">
              {FEATURE_OPTIONS.map((item, index) => (
                <FeaturedItem item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={300}
            classNames={"meta-price"}
            unmountOnExit
          >
            <TransitionPrice />
          </CSSTransition>
        </div>
        <div className="container mx-auto">
          <div className="w-3/4 mx-auto">
            <div className="flex flex-col gap-4">
              <TitleSection word1={"About"} word2={"Course"} />
              <div className="flex flex-col gap-4 text-gray-600 text-lg leading-relaxed ">
                <p>
                  MERN Stack adalah bagian dari Full-Stack Web Developer yang
                  difokuskan kepada JavaScript (Full-Stack JavaScript
                  Developer). M untuk MongoDB, E untuk ExpressJS, R untuk
                  ReactJS, dan N untuk NodeJS. Kalian akan mempelajari semua hal
                  tersebut pada kelas ini. Tapi bukan hanya sekedar ngoding aja
                  namun kalian akan mulai dari bagian UI dan UX sehingga paham
                  betul bagaimana caranya membangun suatu website yang memiliki
                  better experience.
                </p>
                <p>
                  Setelah proses Wireframe selesai maka akan dilanjutkan kepada
                  tahap Visual Design dan Web Development. Silakan bergabung
                  untuk mempelajarinya lebih lanjut. Kami akan tunggu kalian di
                  kelas ya.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <TitleSection word1={"Course"} word2={"Photos"} />
              <div className="grid grid-cols-4 gap-6 min-w-[272px] max-h-[170px] ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="w-full h-[170px]">
                    <div className="relative w-full h-[170px] overflow-hidden group ">
                      <Image
                        src={"/images/item-image1.png"}
                        alt="/images/item-image1.png"
                        width={272}
                        height={170}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 z-0 w-full h-full group-hover:bg-[#2E37A4] opacity-75"></div>
                      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-0 -translate-x-full  group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out ">
                        <Image
                          src={"/images/icon-preview.svg"}
                          alt="icon-play"
                          width={46}
                          height={46}
                          className="text-orange-400 bg-orange-400 rounded-[100%] "
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 ">
              <TitleSection word1={"You Will"} word2={"Learn"} />
              <div className="w-1/2">
                <Accordion type="single" collapsible className="w-full">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border text-[#7186A0] "
                    >
                      <div className="container">
                        <AccordionTrigger>Getting Started</AccordionTrigger>
                      </div>
                      <div className="bg-[#F6F6F6]">
                        <AccordionContent className="container pt-2  flex flex-col gap-4">
                          <div className="flex flex-row justify-between items-center">
                            <div>Adobe XD for Windows</div>
                            <Image
                              src={"/images/icon-play.svg"}
                              alt="ic-play"
                              width={24}
                              height={24}
                              className=" bg-teal-500 rounded-[100%] "
                            />
                          </div>
                          {Array.from({ length: 3 }).map((_, index) => (
                            <div
                              key={index}
                              className="flex flex-row justify-between items-center"
                            >
                              <div>Plugins for Adobe XD</div>
                              <Image
                                src={"/images/icon-lock.svg"}
                                alt="ic-lock"
                                width={24}
                                height={24}
                                className=" "
                              />
                            </div>
                          ))}
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <TitleSection word1={"Our"} word2={"Instructor"} />
              <div className="flex flex-row gap-4 items-center">
                <div className="w-[80px] h-[80px]">
                  <Image
                    src={"/images/pic.png"}
                    alt="img-instructor"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xl text-[#132B50]">Angga Brains</div>
                  <div className="text-[#7186A0]">Website Developer</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <TitleSection word1={"Happy"} word2={"Students"} />
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaRegStar
                        key={index}
                        className="w-[20px] h-[19px] fill-[#FFD911]"
                      />
                    ))}
                  </div>
                  <div className="w-[38%] text-[#7186A0]">
                    I think this is the best invesment that I ever did better
                    than my daily lipstick or cream.
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <div className="w-[55px] h-[55px]">
                      <Image
                        src={"/images/pic (1).png"}
                        alt="img-student"
                        width={55}
                        height={55}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-xl text-[#132B50]">Suneo Giant</div>
                      <div className="text-[#7186A0]">Dev Ops</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={footer}>
        <Footer></Footer>
      </section>
    </>
  );
}
