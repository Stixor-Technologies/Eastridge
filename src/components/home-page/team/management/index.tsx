"use client";
import React, { useRef } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CEO from "@/public/images/team/ceo.png";
import COO from "@/public/images/team/coo.png";
import CNO from "@/public/images/team/cno.png";
import HCAdmin from "@/public/images/team/hc-admin.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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

  return (
    <section ref={container} className="overflow-hidden pt-16 pb-10">
      <div className="container">
        <h2>Management Team</h2>

        <div className="mt-10">
          <div className="hidden w-full md:block">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 300"
              className="h-auto w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection Lines */}
              <g stroke="#d1d5db" strokeWidth="3" fill="none">
                {/* CEO to Level 1 */}
                <path d="M400 110 L400 150 L200 150 L200 190" />
                <path d="M400 150 L400 190" />
                <path d="M400 150 L600 150 L600 190" />
              </g>

              {/* CEO */}
              <foreignObject x="340" y="0" width="120" height="120">
                <div className="flex flex-col items-center">
                  {/* Profile Circle */}
                  <div className="border-accent/70 flex h-20 w-16 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg sm:h-24 sm:w-24">
                    <Image src={CEO} alt="ceo-image" />
                  </div>
                  {/* </div> */}
                  <span className="text-body-primary text-xs font-semibold">
                    CEO
                  </span>
                </div>
              </foreignObject>

              {/* Level 1 - Department Managers */}

              {/* Product A Manager */}
              <foreignObject x="140" y="190" width="120" height="120">
                <div className="flex flex-col items-center">
                  {/* Profile Circle */}
                  <div className="border-accent/70 flex h-20 w-16 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg sm:h-24 sm:w-24">
                    <Image src={COO} alt="coo-image" />
                  </div>
                  <span className="text-body-primary text-xs font-semibold">
                    COO
                  </span>
                </div>
              </foreignObject>

              {/* Product B Manager */}
              <foreignObject x="340" y="190" width="120" height="120">
                <div className="flex flex-col items-center">
                  {/* Profile Circle */}
                  <div className="border-accent/70 flex h-20 w-16 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg sm:h-24 sm:w-24">
                    <Image src={CNO} alt="cno-image" />
                  </div>
                  <span className="text-body-primary text-xs font-semibold">
                    CNO
                  </span>
                </div>
              </foreignObject>

              {/* Product C Manager */}
              <foreignObject x="540" y="190" width="120" height="120">
                <div className="flex flex-col items-center">
                  {/* Profile Circle */}
                  <div className="border-accent/70 flex h-20 w-16 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg sm:h-24 sm:w-24">
                    <Image src={HCAdmin} alt="hcadmin-image" />
                  </div>

                  <span className="text-body-primary text-xs font-semibold">
                    HC Admin
                  </span>
                </div>
              </foreignObject>
            </svg>
          </div>

          <div className="md:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="!overflow-visible"
            >
              {MANAGEMENT_TEAM?.map((member, index) => (
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
                        {member?.title}
                      </h4>
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
