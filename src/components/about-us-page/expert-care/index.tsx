"use client";
import React from "react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutExpertCareSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  // Animation setup for fade-in effects on scroll
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
      <div className="grid grid-cols-1 overflow-hidden rounded-lg bg-white md:grid-cols-2">
        {/* Images section - top on mobile, right on desktop */}
        <div className="flex justify-center gap-4 p-8 pl-8 md:order-2 md:justify-end md:pl-0 lg:gap-8 lg:pl-8">
          {/* First image with top margin on medium+ screens */}
          <div className="animate-fade md:mt-14">
            <img
              src="/images/sample-1.png"
              alt="Doctor with patient"
              className="aspect-[11/16] h-80 w-56 rounded-3xl object-cover shadow-md sm:w-52 md:w-44 lg:w-56"
            />
          </div>
          {/* Second image aligned to top */}
          <img
            src="/images/sample-2.png"
            alt="Nurse with patient"
            className="animate-fade aspect-[11/16] h-80 w-56 rounded-3xl object-cover shadow-md sm:w-52 md:w-44 lg:w-56"
          />
        </div>

        {/* Content section - left aligned text */}
        <div className="flex flex-col p-8 text-left md:order-1">
          {/* Section label */}
          <span className="animate-fade mb-6 block text-xl font-semibold text-[#D82519]">
            EXPERT CARE YOU CAN TRUST
          </span>

          {/* Main heading with responsive sizing */}
          <h2 className="animate-fade mb-6 text-left text-2xl leading-snug font-normal text-[#333333] md:text-4xl lg:text-5xl xl:text-6xl">
            Personalized care,
            <br />
            powered by expertise
          </h2>

          {/* Description text */}
          <p className="animate-fade text-xl leading-snug font-normal text-[#A1A1A1]">
            Get support that's tailored to your health needs whether you need
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
