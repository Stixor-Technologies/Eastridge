"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Ambulance from "@/public/icons/ambulance.svg";
import { HERO_SLIDER_IMAGES } from "@/src/core/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useSectionInView from "@/src/hooks/useSectionInView";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const { ref } = useSectionInView("#home");

  const container = useRef<HTMLDivElement | null>(null);
  const infoText = useRef<HTMLParagraphElement | null>(null);
  const headingText = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({});
      tl.to(infoText.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power1",
      });
      tl.to(
        headingText.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "<0.2",
      );
    },

    { scope: container },
  );

  return (
    <section id="home" ref={ref}>
      <div className="relative text-white" ref={container}>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: 2000,
          }}
          className="h-[100dvh]"
        >
          {HERO_SLIDER_IMAGES?.map((data) => {
            return (
              <SwiperSlide key={data?.id}>
                {/* <Image
                className="h-full w-full object-cover"
                src={data?.src}
                width={1536}
                height={900}
                alt={data?.alt}
              /> */}
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={data?.mobileSrc?.src}
                  />
                  <Image
                    className="h-full w-full object-cover"
                    src={data?.src}
                    width={1536}
                    height={900}
                    alt={data?.alt}
                  />
                </picture>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="absolute top-1/2 z-10 -mt-12 w-full -translate-y-1/2">
          <div className="container">
            <p
              className="max-w-[32.375rem] translate-y-12 text-[2rem] font-medium opacity-0"
              ref={infoText}
            >
              connected healthcare designed to support your journey, every step
              of the way.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 z-10 w-full">
          <div className="container">
            <div className="bg-accent mb-4 ml-auto flex size-[clamp(60px,6.5vw,90px)] items-center justify-center rounded-2xl md:mb-0 md:rounded-4xl">
              <Image src={Ambulance} alt="ambulance-icon" />
            </div>

            <h1
              className="translate-y-12 text-center text-[clamp(1.875rem,11vw,10.575rem)] leading-none font-medium tracking-tighter opacity-0 xl:-tracking-[2.95px]"
              ref={headingText}
            >
              Care at Every Step
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
