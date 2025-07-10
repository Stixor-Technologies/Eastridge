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
    <section ref={container} className="container pt-16 pb-10">
      <h2>Management Team</h2>

      <div className="my-20">
        <div className="hidden w-full md:block">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 300"
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
            // style={{ minHeight: "250px" }}
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
          <div className="flex flex-col items-center space-y-4">
            {/* CEO */}
            <div className="flex flex-col items-center">
              <div className="border-accent/70 flex size-24 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg">
                <Image src={CEO} alt="ceo-image" />
              </div>

              <span className="text-body-primary mt-2 text-xs font-semibold">
                CEO
              </span>
            </div>

            {/* Connection Line */}
            <div className="h-4 w-0.5 bg-[#d1d5db]" />

            {/* Department Managers */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex flex-col items-center">
                <div className="border-accent/70 flex size-24 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg">
                  <Image src={COO} alt="coo-image" />
                </div>

                <span className="text-body-primary mt-2 text-xs font-semibold">
                  COO
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="border-accent/70 flex size-24 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg">
                  <Image src={CNO} alt="cno-image" />
                </div>

                <span className="text-body-primary mt-2 text-xs font-semibold">
                  CNO
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="border-accent/70 flex size-24 items-center justify-center overflow-hidden rounded-full border-4 shadow-lg">
                  <Image src={HCAdmin} alt="hcadmin-image" />
                </div>

                <span className="text-body-primary mt-2 text-xs font-semibold">
                  HC Admin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
