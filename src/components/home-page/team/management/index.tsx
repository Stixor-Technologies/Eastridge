"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import { MANAGEMENT_TEAM } from "@/src/core/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SwiperNavButton from "@/src/components/swiper-nav-buttons";
import TeamMemberModal from "@/src/components/home-page/team/team-member-modal";

const ManagementTeam = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);

  const swiperRef = useRef<SwiperClass | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300); // allow animation to finish
  };

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
    <section
      ref={container}
      className="container overflow-hidden bg-[url(/images/stars.png)] bg-cover bg-[left_-8.5rem_top_-14rem] pt-16 pb-10"
    >
      <h2>Management Team</h2>

      <div className="relative">
        <div className="mt-10 md:mt-[3.625rem]">
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
              {MANAGEMENT_TEAM?.map((member, index) => (
                <SwiperSlide
                  key={index}
                  className={`w-full sm:max-w-[21.3125rem]`}
                  onClick={() => handleMemberClick(member)}
                >
                  <div className="border-card-border cursor-pointer rounded-xl border px-4 py-10 transition-shadow duration-300 hover:shadow-lg">
                    <div className="relative">
                      <div className="bg-body-primary absolute top-14 left-1/2 -z-10 aspect-square w-[90%] -translate-x-1/2 rounded-full"></div>

                      <Image
                        src={member?.image}
                        alt={`${member?.name}-image`}
                        className=""
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
            </div>
          </Swiper>

          {/* Slider button */}
          <div className="mt-[3.625rem] flex justify-center gap-10">
            <SwiperNavButton
              onClick={() => swiperRef.current?.slidePrev()}
              direction="prev"
            />
            <SwiperNavButton
              onClick={() => swiperRef.current?.slideNext()}
              direction="next"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24" />
      </div>
      <TeamMemberModal
        open={modalOpen}
        member={selectedMember}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ManagementTeam;
