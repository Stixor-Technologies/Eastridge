"use client";
import React, { useRef } from "react";
import ExportedImage from "next-image-export-optimizer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
              <div className="border-card-border flex h-full w-full max-w-[14rem] cursor-pointer flex-col rounded-xl border px-4 py-10 transition-shadow duration-300 hover:shadow-lg md:max-w-[16rem]">
                <div className="relative">
                  <ExportedImage
                    src={firstMember.image}
                    alt={`${firstMember.title}-image`}
                    className="aspect-[4/5] object-cover"
                  />
                </div>
                <div className="border-card-border border-t pt-[2.125rem] text-center">
                  <h4 className="text-body-primary text-[clamp(1.25rem,3vw,1.75rem)]">
                    {firstMember.name}
                  </h4>
                  <span className="text-body-main text-[clamp(1rem,2.5vw,1.25rem)]">
                    {firstMember?.title}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Members Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {remainingMembers?.map((member, index) => (
              <div key={index} className="flex justify-center">
                <div className="border-card-border flex h-full w-full max-w-[14rem] cursor-pointer flex-col rounded-xl border px-4 py-10 transition-shadow duration-300 hover:shadow-lg md:max-w-[16rem]">
                  <div className="relative">
                    <ExportedImage
                      src={member?.image}
                      alt={`${member?.title}-image`}
                      className="aspect-[4/5] object-cover"
                    />
                  </div>
                  <div className="border-card-border border-t pt-[2.125rem] text-center">
                    <h4 className="text-body-primary text-[clamp(1.25rem,3vw,1.75rem)]">
                      {member?.name}
                    </h4>
                    <span className="text-body-main text-[clamp(1rem,2.5vw,1.25rem)]">
                      {member?.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
