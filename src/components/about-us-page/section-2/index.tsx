"use client";
import React from "react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutExpertCareSection = () => {
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
      <div className="grid grid-cols-1 gap-8 overflow-hidden rounded-lg bg-white md:grid-cols-2">
        {/* Images on top in mobile, right in desktop */}
        <div className="flex justify-center gap-8 p-8 md:order-2 md:justify-end">
          <div className="animate-fade md:mt-[55px]">
            <img
              src="/images/sample-1.png"
              alt="Doctor with patient"
              className="h-[320px] w-[220px] rounded-[32px] object-cover shadow-md"
            />
          </div>
          <img
            src="/images/sample-2.png"
            alt="Nurse with patient"
            className="animate-fade h-[320px] w-[220px] rounded-[32px] object-cover shadow-md"
          />
        </div>
        {/* Text left-aligned */}
        <div className="flex flex-col p-8 text-left md:order-1">
          <span className="animate-fade mb-6 block text-[20px] font-semibold text-[#D82519]">
            EXPERT CARE YOU CAN TRUST
          </span>
          <h2 className="animate-fade mb-6 text-left text-[32px] leading-snug font-normal text-[#333333] md:text-[70px]">
            Personalized care,
            <br />
            powered by expertise
          </h2>
          <p className="animate-fade text-[20px] leading-snug font-normal text-[#A1A1A1]">
            Get support that’s tailored to your health needs whether you need
            treatment, therapy, or both. Our experienced providers use proven
            methods and real data to create a care plan that works for you from
            start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutExpertCareSection;
