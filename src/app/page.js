"use client";
import Header from "@/components/atoms/Header";
import Footer from "@/components/layouts/Footer/Footer";
import Category from "@/components/organisms/Category/Category";
import Client from "@/components/organisms/Client/Client";
import Course from "@/components/organisms/Course/Course";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="container mx-auto pt-24 relative">
        <Client />
      </section>
      <section className="container mx-auto pt-24 relative">
        <Course />
      </section>
      <div className="container mx-auto pt-24 relative">
        <Category />
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}
