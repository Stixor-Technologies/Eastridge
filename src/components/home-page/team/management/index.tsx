"use client";
import React, { useRef } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { MANAGEMENT_TEAM } from "@/src/core/constants";

const ManagementTeam = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(container?.current, {
        opacity: 0,
        y: "4rem",
        duration: 0.7,
        ease: "power1",
        stagger: 0.1,

        scrollTrigger: {
          trigger: container?.current,
          start: "top 80%",
        },
      });
    },
    {
      scope: container,
    },
  );

  // First element in first row, remaining in second row
  const firstMember = MANAGEMENT_TEAM?.[0];
  const remainingMembers = MANAGEMENT_TEAM?.slice(1);

  return (
    <section ref={container} className="overflow-hidden pt-16 pb-10">
      <div className="container">
        <h2>Management Team</h2>

        <div className="mt-10 md:mt-[3.625rem]">
          {/* First Member Row */}
          {firstMember && (
            <div className="mb-8 flex justify-center">
              <div className="border-card-border flex h-full w-full max-w-[25rem] cursor-pointer flex-col rounded-xl border px-4 py-10 transition-shadow duration-300 hover:shadow-lg">
                <div className="relative">
                  <Image
                    src={firstMember.image}
                    alt={`${firstMember.title}-image`}
                    className="aspect-[0.80/1] object-cover"
                  />
                </div>
                <div className="border-card-border border-t pt-[2.125rem] text-center">
                  <h4 className="text-body-primary text-2xl md:text-[2rem]">
                    {firstMember.name}
                  </h4>
                  <span className="text-body-main text-xl">
                    {firstMember?.title}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Members Row */}
          <div className="flex justify-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="md:flex md:justify-center md:!overflow-visible"
              breakpoints={{
                768: {
                  slidesPerView: "auto",
                },
              }}
            >
              {remainingMembers?.map((member, index) => (
                <SwiperSlide
                  key={index}
                  className="flex !h-auto w-full sm:max-w-[25rem]"
                >
                  <div className="border-card-border flex h-full w-full cursor-pointer flex-col rounded-xl border px-4 py-10 transition-shadow duration-300 hover:shadow-lg">
                    <div className="relative">
                      <Image
                        src={member?.image}
                        alt={`${member?.title}-image`}
                        className="aspect-[0.80/1] object-cover"
                      />
                    </div>
                    <div className="border-card-border border-t pt-[2.125rem] text-center">
                      <h4 className="text-body-primary text-2xl md:text-[2rem]">
                        {member?.name}
                      </h4>
                      <span className="text-body-main text-xl">
                        {member?.title}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
