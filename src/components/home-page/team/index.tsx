"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import { MANAGEMENT_TEAM } from "@/src/core/constants";

const Team = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="overflow-hidden pt-16 pb-10">
      <h2>Management Team</h2>

      <div className="relative">
        <div className="container mt-10 md:mt-[3.75rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="!overflow-visible"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: "auto",
                spaceBetween: 81,
              },
            }}
          >
            <div className="mb-10 cursor-pointer overflow-visible">
              {MANAGEMENT_TEAM?.map((member, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={`w-full md:max-w-[21.3125rem]`}
                  >
                    <div className="border-card-border rounded-xl border py-10">
                      <Image
                        src={member?.image}
                        alt={`${member?.name}-iamge`}
                        className="px-4"
                      />

                      <div className="border-card-border border-t px-3.5 pt-[2.125rem] text-center">
                        <h4 className="text-body-primary text-2xl md:text-[2rem]">
                          {member?.name}
                        </h4>
                        <span className="text-body-main text-xl">
                          {member?.title}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>

          {/* slider buttons */}
          {/* 
        <div className="mt-10 flex justify-center gap-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-accent shadow-slider-btn flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
            aria-label="Previous"
          >
            <Image src={Arrow} alt="arrow-previous" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-accent shadow-slider-btn flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
            aria-label="Next"
          >
            <Image src={Arrow} alt="arrow-next" className="rotate-180" />
          </button>
        </div> */}
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
    </section>
  );
};

export default Team;
