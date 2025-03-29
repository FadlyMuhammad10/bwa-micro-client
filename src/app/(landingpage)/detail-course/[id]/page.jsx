"use client";
import TitleSection from "@/components/atoms/TitleSection";
import Footer from "@/components/layouts/Footer/Footer";
import FeaturedItem from "@/components/organisms/CourseDetail/FeaturedItem";
import HeroDetail from "@/components/organisms/CourseDetail/HeroDetail";
import ImagePreview from "@/components/organisms/CourseDetail/ImagePreview";
import Instructor from "@/components/organisms/CourseDetail/Instructor";
import StudentReview from "@/components/organisms/CourseDetail/StudentReview";
import TransitionPrice from "@/components/organisms/CourseDetail/TransitionPrice";
import VideoItem from "@/components/organisms/CourseDetail/VideoItem";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FEATURE_OPTIONS } from "@/constants";
import { useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { GetCourseDetail } from "../../../../../services/participant";

export default function DetailCoursePage({ params }) {
  const footer = useRef(null);
  const [isSticky, setIsSticky] = useState(true);
  const [courseDetail, setCourseDetail] = useState();

  const fetchData = useCallback(async () => {
    try {
      const result = await GetCourseDetail(params.id);

      setCourseDetail(result.data);
    } catch (error) {
      console.error("Error fetching experience data:", error);
    }
  }, []);
  useEffect(() => {
    fetchData();
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
          <HeroDetail data={courseDetail} />
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
            <TransitionPrice data={courseDetail} />
          </CSSTransition>
        </div>
        <div className="container mx-auto">
          <div className="w-3/4 mx-auto">
            <div className="flex flex-col gap-4">
              <TitleSection word1={"About"} word2={"Course"} />
              <div className="flex flex-col gap-4 text-gray-600 text-lg leading-relaxed ">
                <p>{courseDetail?.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <TitleSection word1={"Course"} word2={"Photos"} />
              <div className="grid grid-cols-4 gap-6 min-w-[272px] max-h-[170px] ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <ImagePreview key={index} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 ">
              <TitleSection word1={"You Will"} word2={"Learn"} />
              <div className="w-1/2">
                <Accordion type="single" collapsible className="w-full">
                  {courseDetail?.chapters.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border text-[#7186A0] "
                    >
                      <VideoItem data={item} />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <TitleSection word1={"Our"} word2={"Instructor"} />
              <Instructor data={courseDetail} />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <TitleSection word1={"Happy"} word2={"Students"} />
              {Array.from({ length: 3 }).map((_, index) => (
                <StudentReview key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={footer}>
        <Footer />
      </section>
    </>
  );
}
