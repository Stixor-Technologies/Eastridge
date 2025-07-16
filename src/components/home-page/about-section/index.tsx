"use client";
import React, { useRef } from "react";
import Image from "next/image";
import HospitalGallery from "@/public/images/hospital-gallery.jpg";
import HospitalReception from "@/public/images/hospital-reception.jpg";
import useSectionInView from "@/src/hooks/useSectionInView";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { ref } = useSectionInView("#about");

  const container = useRef<HTMLDivElement | null>(null);

  const aboutSectionContainer = useRef<HTMLDivElement | null>(null);
  const visionContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const createTimeline = (
        trigger: Element | null | undefined | string,
        sectionSelector: string | Element | null,
        itemsSelector?: string,
        start: string = "top 75%",
        sectionAnimationOverrides: gsap.TweenVars = {},
        itemsAnimationOverrides: gsap.TweenVars = {},
      ) => {
        if (!trigger) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger,
            start,
          },
          defaults: {
            duration: 0.7,
            ease: "power1",
          },
        });

        timeline.from(sectionSelector, {
          opacity: 0,
          y: "2.5rem",
          stagger: 0.1,
          ...sectionAnimationOverrides,
        });

        if (itemsSelector) {
          timeline.from(
            itemsSelector,
            {
              opacity: 0,
              y: "2.5rem",
              stagger: 0.1,
              ...itemsAnimationOverrides,
            },
            "<0.2",
          );
        }

        return timeline;
      };

      createTimeline(
        aboutSectionContainer.current,
        aboutSectionContainer.current,
        undefined,
      );

      createTimeline(
        visionContainer.current,
        visionContainer.current,
        undefined,
      );
    },
    { scope: container },
  );

  return (
    <section
      className="[background-size:50rem_37.5rem] bg-[right_-8.5rem_top_-14rem] bg-no-repeat pt-10 md:bg-[url(/images/light.png)] lg:pt-16"
      id="about"
      ref={ref}
    >
      <div ref={container} className="container">
        <div className="mb-10 lg:mb-16" ref={aboutSectionContainer}>
          <h2>About Eastridge</h2>

          {/* about section */}
          <div className="mt-10 gap-8 text-center lg:mt-20 lg:flex-row lg:gap-14 lg:text-left xl:gap-[5.625rem]">
            <p className="text-body-main mb-4 flex-1 text-xl font-medium md:text-[1.375rem]">
              Eastridge Primecare is a new 173-bed purpose built greenfield
              hospital of Fauji Foundation. The construction of the hospital
              started in 2022. The hospital is scheduled to open its door to the
              public in 2025.
            </p>

            <p className="text-body-main mb-4 flex-1 text-xl font-medium md:text-[1.375rem]">
              Eastridge Primecare will bring a fresh offering in niche
              healthcare services with technologically advanced equipment
              through reputed consultants, competent nurses and well-trained
              paramedic staff to the landscape of private hospitals in
              Rawalpindi and Islamabad. The spirit of Eastride Primecare remains
              focused on the provision of high-quality patient care services
              with empathy and patient safety in an ethical culture which keeps
              Patient First as its core value for local as well as global
              clientele.
            </p>

            <p className="text-body-main mb-4 flex-1 text-xl font-medium md:text-[1.375rem]">
              The facility is a fully integrated structure with architectural
              ease of movement designed to provide functional patient pathways
              around the intended services. The building has been designed to
              provide natural lighting and an open, airy ambiance. Once
              completely operational with its Cardiac Center, the hospital will
              be housed over 200,000 sqare feet over 5 floors.
            </p>
          </div>
        </div>

        {/* visions section */}

        <div
          ref={visionContainer}
          className="flex flex-col items-center justify-between gap-10 py-10 text-center md:flex-row md:text-left lg:gap-20 xl:gap-[8.8125rem]"
        >
          <div className="md:max-w-[586px] 2xl:max-w-max">
            <h4 className="text-body-primary text-[40px] leading-tight">
              Our Vision
            </h4>
            <p className="text-body-main my-9 text-xl lg:text-2xl">
              To be the Center of Excellence for advanced healthcare, known for
              exceptional care and wellbeing, trusted locally and globally.
            </p>
            <Image
              src={HospitalGallery}
              width={656}
              height={383}
              alt="hospital-gallery"
            />
          </div>

          <div className="grid grid-cols-1 gap-9 md:max-w-[614px] 2xl:max-w-max">
            <h4 className="text-body-primary text-[40px] leading-tight md:row-start-2">
              Mission Statement
            </h4>
            <p className="text-body-main text-xl lg:text-2xl">
              Provide Best in Class Hospital-based ethical Healthcare Services,
              ensuring patient first value while acting as the Leading State of
              Art Hospital.
            </p>
            <Image
              src={HospitalReception}
              width={656}
              height={409}
              alt="hospital-reception"
              className="md:row-start-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
