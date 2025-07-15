"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { LEADERSHIP_TEAM } from "@/src/core/constants";
import TeamMemberModal from "@/src/components/home-page/team/team-member-modal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Leadership = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  // const handleMemberClick = (member: any) => {
  //   setSelectedMember(member);
  //   setModalOpen(true);
  // };

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
    <section ref={container} className="overflow-hidden md:pt-6">
      <div className="container">
        <h2>Board of Directors</h2>

        <div className="mt-10 md:mt-[3.625rem]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LEADERSHIP_TEAM?.map((member, index) => (
              <div key={index} className="flex justify-center">
                <div className="border-card-border flex h-full w-full max-w-[25rem] cursor-pointer flex-col rounded-xl border px-4 py-10 transition-shadow duration-300 hover:shadow-lg">
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
              </div>
            ))}
          </div>
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
