"use client";
import Image from "next/image";
import React from "react";
import { historyEvents } from "@/src/core/constants";

const OurHistorySection = () => {
  return (
    <section className="px-8 py-12 md:mx-8">
      <div className="mx-auto max-w-[1094px]">
        {/* Main section heading */}
        <h2 className="text-left text-[2rem] leading-tight font-normal text-[#333333] md:text-center md:text-[4.375rem] md:leading-tight">
          Our History
        </h2>

        {/* History events list */}
        <div className="space-y-8 md:space-y-12">
          {historyEvents.map((event) => (
            <div key={event.id} className="mt-8 md:mt-12">
              {/* Event image */}
              <div className="w-full">
                <Image
                  src={event.image}
                  alt={`${event.title} - Our History`}
                  width={1094}
                  height={383}
                  className="aspect-[1094/383] h-auto w-full rounded-[14px] object-cover"
                />
              </div>

              {/* Event details */}
              <div className="py-6">
                {/* Event title and year */}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-[0.78rem] leading-tight font-normal text-[#333333] md:text-[2.75rem] md:leading-tight">
                    {event.title}
                  </h3>
                  <span className="text-[0.57rem] leading-tight font-normal text-[#333333] md:text-[2rem] md:leading-tight">
                    {event.year}
                  </span>
                </div>

                {/* Event description */}
                <p className="text-[0.35rem] leading-relaxed font-normal text-[#A1A1A1] md:text-[1.25rem] md:leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHistorySection;
