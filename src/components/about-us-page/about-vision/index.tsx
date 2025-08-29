"use client";
import React, { useRef } from "react";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutVisionSection = () => {
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
    <section className="relative px-8 py-12" ref={sectionRef}>
      {/* Main container with equal width columns */}
      <div className="flex flex-col items-center justify-between gap-10 py-10 text-center md:flex-row md:text-left lg:gap-20 xl:gap-36">
        {/* Left section - Vision */}
        <div className="w-full md:w-1/2">
          <h4 className="text-body-primary animate-fade text-[2.5rem] leading-tight">
            Our Vision
          </h4>
          <p className="text-body-main animate-fade my-9 text-[1.25rem] lg:text-[1.5rem]">
            To be the Center of Excellence for advanced healthcare, known for
            exceptional care and wellbeing, trusted locally and globally.
          </p>

          {/* Vision image with consistent aspect ratio */}
          <div className="animate-fade">
            <Image
              src="/images/hospital-gallery.jpg"
              width={656}
              height={383}
              alt="hospital-gallery"
              className="aspect-[4/3] h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right section - Mission */}
        <div className="grid w-full grid-cols-1 md:w-1/2">
          {/* Mission text content - reordered on desktop */}
          <div className="md:row-start-2">
            <h4 className="text-body-primary animate-fade text-[2.5rem] leading-tight md:mt-9">
              Mission Statement
            </h4>
            <p className="text-body-main animate-fade my-9 text-[1.25rem] lg:text-[1.5rem]">
              Provide Best in Class Hospital-based ethical Healthcare Services,
              ensuring patient first value while acting as the Leading State of
              Art Hospital.
            </p>
          </div>

          {/* Mission image with consistent aspect ratio - appears first on desktop */}
          <div className="animate-fade md:row-start-1">
            <Image
              src="/images/hospital-reception.jpg"
              width={656}
              height={409}
              alt="hospital-reception"
              className="aspect-[4/3] h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection;
