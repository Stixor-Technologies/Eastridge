"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import { LEADERSHIP_TEAM } from "@/src/core/constants";
import TeamMemberModal from "@/src/components/home-page/team/team-member-modal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Leadership = () => {
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
    setTimeout(() => setSelectedMember(null), 300);
  };

  useGSAP(
    () => {
      gsap.from(container?.current, {
        opacity: 0,
        y: "3rem",
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
    <section ref={container} className="container overflow-hidden md:pt-6">
      <h2>Board of Directors</h2>

      <div className="relative">
        <div className="mt-10 flex justify-center md:mt-[3.625rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            className="md:flex md:justify-center md:!overflow-visible"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: "auto",
              },
            }}
          >
            {LEADERSHIP_TEAM?.map((member, index) => (
              <SwiperSlide
                key={index}
                className="flex !h-auto w-full sm:max-w-[400px]"
                onClick={() => handleMemberClick(member)}
              >
                <div className="border-card-border flex h-full w-full cursor-pointer flex-col rounded-xl border px-4 py-10 transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative">
                    <Image
                      src={member?.image}
                      alt={`${member?.name}-image`}
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

      <TeamMemberModal
        open={modalOpen}
        member={selectedMember}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Leadership;
