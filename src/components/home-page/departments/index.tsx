"use client";
import React, { useRef, useState } from "react";
import { DEPARTMENTS } from "@/src/core/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Arrow from "@/public/icons/arrow.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";

const DepartmentsSection = () => {
  const [selectedDept, setSelectedDept] = useState(DEPARTMENTS[0].id);

  const currentDept = DEPARTMENTS.find((dept) => dept.id === selectedDept);

  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="overflow-hidden pt-16 pb-10">
      <h2>Departments</h2>

      <div className="mt-[1.625rem] flex items-end justify-center gap-2 md:mt-9 md:gap-3">
        {DEPARTMENTS.map((dept) => (
          <button
            key={dept.id}
            className={`cursor-pointer rounded-md px-2 leading-tight transition-all duration-300 md:rounded-xl md:px-6 ${
              selectedDept === dept.id
                ? "bg-gradient-to-r from-[#B63B27] to-[#D94B2B] py-1.5 text-xs text-white md:py-3 md:text-[1.375rem]"
                : "bg-card-bg text-primary py-1 text-xs md:py-2 md:text-base"
            }`}
            onClick={() => setSelectedDept(dept.id)}
          >
            {dept.label}
          </button>
        ))}
      </div>

      <div className="container mt-10 md:mt-[3.75rem]">
        {/* <ul className="mb-10 cursor-pointer overflow-visible"> */}
        {/* <li className="bg-smoke-black text-light-silver flex-1 rounded-2xl px-[2rem] py-[1.563rem]"> */}
        {/* </ul> */}

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={43}
          className="!overflow-visible"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <ul className="mb-10 cursor-pointer overflow-visible">
            {currentDept?.items?.map((department, index) => {
              return (
                <SwiperSlide key={index} className={`w-full max-w-[26.375rem]`}>
                  <li className="">
                    <div className="bg-card-bg px flex items-center gap-6 rounded-2xl px-8 py-10">
                      <Image
                        src={department?.icon}
                        alt={`${department?.title} icon`}
                      />
                      <h4 className="text-body-primary text-2xl md:text-[2rem]">
                        {department?.title}
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
    </section>
  );
};

export default DepartmentsSection;
