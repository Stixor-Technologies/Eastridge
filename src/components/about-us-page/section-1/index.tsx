"use client";
import React from "react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutEastridgeSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      if (!sectionRef.current) return;
      gsap.from(sectionRef.current.querySelectorAll(".animate-fade"), {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power1",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );
  return (
    <section className="relative py-12" ref={sectionRef}>
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 overflow-hidden rounded-lg bg-white md:grid-cols-4">
          {/* Left Grid */}
          <div className="relative flex flex-col items-start border-b-0 border-gray-300 p-8 leading-snug font-medium md:col-span-1 md:border-t md:border-r md:border-b md:border-l-0 md:border-gray-300">
            <span className="md:text-[22px] animate-fade mb-[82px] text-[24px] text-[#D82519]">
              ABOUT EASTRIDGE
            </span>
            <span className="animate-fade text-[5.375rem] font-semibold text-[#333333]">
              95<span className="text-[#D82519]">%</span>
            </span>
            <span className="animate-fade mt-4 text-[24px] text-[#767676]">
              users trust our care experience
              <br />
              it for yourself.
            </span>
          </div>
          {/* Right Grid */}
          <div className="relative flex items-center border-b border-gray-300 p-8 md:col-span-3 md:border-t-0 md:border-r-0 md:border-b md:border-l-0">
            <p className="animate-fade relative z-10 text-[20px] leading-snug font-medium text-[#A1A1A1] md:text-[22px]">
              Eastridge Prime Care is a 173-bed, multi-specialty hospital by the
              Fauji Foundation, set to launch in August 2025. Built with
              advanced medical technology and expert staff, it aims to deliver
              ethical, high-quality care with empathy. Located in Rawalpindi, it
              will serve the twin cities and beyond, with plans for future
              expansion and medical tourism initiatives. Once fully completed in
              2026, the facility will exceed 200,000 sq. ft., featuring a
              state-of-the-art Cardiac Centre and support infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEastridgeSection;
