"use client";
import React, { useRef } from "react";
import { VALUE_ADDITIONS } from "@/src/core/constants";
import IconBadge from "../../icon-badge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SwiperClass from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavButton from "../../swiper-nav-buttons";

const ValueAdditions = () => {
  gsap.registerPlugin(ScrollTrigger);

  const swiperRef = useRef<SwiperClass | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const servicesList = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: "4rem",
        duration: 0.7,
        scrollTrigger: {
          trigger: container?.current,
          start: "top 80%",
        },
      });

      gsap.from([".service-card "], {
        opacity: 0,
        y: "4rem",
        stagger: 0.1,
        duration: 0.7,
        ease: "power1",
        scrollTrigger: {
          trigger: servicesList?.current,
          start: "top 85%",
        },
      });
    },
    {
      scope: container,
    },
  );

  return (
    <div className="overflow-hidden py-10" ref={container}>
      <div className="container">
        <h2 className="fade-up">Value Additions</h2>

        <div ref={servicesList} className="mt-10 md:mt-[3.75rem]">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={43}
            className="flex items-stretch !overflow-visible"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {VALUE_ADDITIONS?.map((value, index) => {
              return (
                // !h-auto
                <SwiperSlide key={index} className="w-full max-w-[26.375rem]">
                  <div
                    key={index}
                    className="service-card border-body-secondary bg-card-bg border-card-border h-full justify-items-center rounded-lg border p-5 md:p-7"
                  >
                    <IconBadge
                      icon={value?.icon}
                      altText={`${value?.title} - icon`}
                    />
                    <h5 className="text-body-primary mt-6 text-center text-2xl leading-tight font-semibold md:text-[1.6875rem]">
                      {value?.title}
                    </h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mt-10 flex justify-center gap-10">
            <SwiperNavButton
              onClick={() => swiperRef.current?.slidePrev()}
              direction="prev"
            />
            <SwiperNavButton
              onClick={() => swiperRef.current?.slideNext()}
              direction="next"
            />
          </div>

          {/* <Swiper
          slidesPerView={"auto"}
          spaceBetween={43}
          className="flex items-stretch !overflow-visible"
        >
          {VALUE_ADDITIONS?.map((value, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex h-auto w-full max-w-[26.375rem]"
              >
                <div className="service-card border-body-secondary bg-card-bg border-card-border flex h-full flex-col justify-items-center rounded-lg border p-[1.4375rem]">
                  <IconBadge
                    icon={value?.icon}
                    altText={`${value?.title} - icon`}
                  />
                  <div className="flex flex-1 flex-col justify-center">
                    <h5 className="text-body-primary mt-9 text-center text-2xl leading-tight font-semibold md:text-[1.6875rem]">
                      {value?.title}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default ValueAdditions;
