"use client";
import React, { useRef, useState } from "react";
import { SERVICES_OFFERED } from "@/src/core/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Arrow from "@/public/icons/arrow.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import useSectionInView from "@/src/hooks/useSectionInView";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ValueAdditions from "@/src/components/home-page/value-additions";

const ServicesSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement | null>(null);

  const { ref } = useSectionInView("#services");
  const [selectedService, setSelectedService] = useState(
    SERVICES_OFFERED[0]?.id,
  );

  const currentService = SERVICES_OFFERED.find(
    (service) => service?.id === selectedService,
  );

  const swiperRef = useRef<SwiperClass | null>(null);

  useGSAP(
    () => {
      gsap.from(container?.current, {
        opacity: 0,
        y: "4rem",
        duration: 0.7,
        ease: "power1",
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
    <section className="overflow-hidden pt-16 pb-10" id="services" ref={ref}>
      <div ref={container} className="container">
        <h2>Services Offered</h2>

        <div className="mt-[1.625rem] flex items-end justify-center gap-1.5 md:mt-9 md:gap-3">
          {SERVICES_OFFERED.map((servicesOffered) => (
            <button
              key={servicesOffered?.id}
              className={`cursor-pointer rounded-md px-2 leading-tight transition-all duration-300 md:rounded-xl md:px-6 ${
                selectedService === servicesOffered?.id
                  ? "bg-gradient-to-r from-[#B63B27] to-[#D94B2B] py-1.5 text-[clamp(10px,1.6vw,22px)] text-white md:py-3"
                  : "bg-card-bg text-primary py-1 text-[clamp(10px,1.6vw,16px)] md:py-2"
              }`}
              onClick={() => setSelectedService(servicesOffered?.id)}
            >
              {servicesOffered?.label}
            </button>
          ))}
        </div>

        <div className="mt-10 md:mt-[3.75rem]">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={43}
            className="!overflow-visible"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <ul className="mb-10 cursor-pointer overflow-visible">
              {currentService?.items?.map((service, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={`w-full max-w-[26.375rem]`}
                  >
                    <li className="">
                      <div className="bg-card-bg px flex items-center gap-6 rounded-2xl px-8 py-10">
                        <Image
                          src={service?.icon}
                          alt={`${service?.title} icon`}
                        />
                        <h4 className="text-body-primary text-2xl md:text-[2rem]">
                          {service?.title}
                        </h4>
                      </div>
                    </li>
                  </SwiperSlide>
                );
              })}
            </ul>
          </Swiper>

          {/* slider buttons */}
          <div className="mt-10 flex justify-center gap-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-accent shadow-slider-btn flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
              aria-label="Previous"
            >
              <Image src={Arrow} alt="arrow-previous" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-accent shadow-slider-btn flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
              aria-label="Next"
            >
              <Image src={Arrow} alt="arrow-next" className="rotate-180" />
            </button>
          </div>
        </div>
      </div>

      <ValueAdditions />
    </section>
  );
};

export default ServicesSection;
