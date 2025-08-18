"use client";
import React, { useRef } from "react";
import Image from "next/image";
import HospitalGallery from "@/public/images/hospital-gallery.jpg";
import HospitalReception from "@/public/images/hospital-reception.jpg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutVisionSection = () => {
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
    <section className="relative px-8 py-12" ref={sectionRef}>
      <div className="flex flex-col items-center justify-between gap-10 py-10 text-center md:flex-row md:text-left lg:gap-20 xl:gap-[8.8125rem]">
        <div className="2xl:max-w-max">
          <h4 className="text-body-primary animate-fade text-[40px] leading-tight">
            Our Vision
          </h4>
          <p className="text-body-main animate-fade my-9 text-xl lg:text-2xl">
            To be the Center of Excellence for advanced healthcare, known for
            exceptional care and wellbeing, trusted locally and globally.
          </p>
          <div className="animate-fade">
            <Image
              src={HospitalGallery}
              width={656}
              height={383}
              alt="hospital-gallery"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 2xl:max-w-max">
          <div className="md:row-start-2">
            <h4 className="text-body-primary animate-fade text-[40px] leading-tight md:mt-9">
              Mission Statement
            </h4>
            <p className="text-body-main animate-fade my-9 text-xl lg:text-2xl">
              Provide Best in Class Hospital-based ethical Healthcare Services,
              ensuring patient first value while acting as the Leading State of
              Art Hospital.
            </p>
          </div>
          <span className="animate-fade">
            <Image
              src={HospitalReception}
              width={656}
              height={409}
              alt="hospital-reception"
              className="md:row-start-1"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection;
