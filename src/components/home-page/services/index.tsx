"use client";
import React, { useRef } from "react";
import { SERVICES } from "@/src/core/constants";
import IconBadge from "../../icon-badge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServicesSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement | null>(null);
  const servicesList = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: "4rem",
        duration: 0.7,
        scrollTrigger: {
          trigger: container?.current,
          start: "top 80%",
        },
      });

      gsap.from([".service-card "], {
        opacity: 0,
        y: "4rem",
        stagger: 0.1,
        duration: 0.7,
        ease: "power1",
        scrollTrigger: {
          trigger: servicesList?.current,
          start: "top 85%",
        },
      });
    },
    {
      scope: container,
    },
  );

  return (
    <section className="container py-10" ref={container}>
      <h2 className="fade-up">Services</h2>
      <h4 className="fade-up text-body-primary mt-[1.625rem] text-center text-[1.625rem] leading-tight md:mt-5 md:text-[2.5rem]">
        Our Support & Emergency Services
      </h4>

      {/* services list */}
      <div
        ref={servicesList}
        className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(18.75rem,_1fr))] gap-x-[clamp(00.5rem,10vw,8.875rem)] gap-y-[1.9375rem] md:mt-[3.75rem] md:gap-y-10"
      >
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="service-card border-body-secondary bg-card-bg border-card-border rounded-lg border p-[1.4375rem]"
          >
            <IconBadge
              icon={service?.icon}
              altText={`${service?.title} - icon`}
            />
            <div>
              <h5 className="text-body-primary mt-9 text-2xl leading-tight font-semibold md:text-[1.6875rem]">
                {service.title}
              </h5>
              <p className="text-body-main mt-3 leading-tight md:text-lg">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
