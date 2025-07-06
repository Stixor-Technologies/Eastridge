"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import { MANAGEMENT_TEAM } from "@/src/core/constants";
import TeamMemberModal from "./TeamMemberModal";
import SwiperNavButton from "../../swiper-nav-buttons";

const Team = () => {
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

  return (
    <section className="overflow-hidden pt-16 pb-10">
      <h2>Management Team</h2>
      <div className="relative">
        <div className="container mt-10 md:mt-[3.625rem]">
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
                  className={`w-full md:max-w-[21.3125rem]`}
                  onClick={() => handleMemberClick(member)}
                >
                  <div className="border-card-border cursor-pointer rounded-xl border py-10 transition-shadow duration-300 hover:shadow-lg">
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
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>
      <TeamMemberModal
        open={modalOpen}
        member={selectedMember}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Team;
