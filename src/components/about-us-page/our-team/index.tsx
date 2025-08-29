"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { boardMembers } from "@/src/core/constants";
import { teamMembers } from "@/src/core/constants";

const OurTeam = () => {
  return (
    <div className="relative mt-10 mb-10 w-full">
      {/* Marquee at the top */}
      <div className="relative z-10 bg-red-600 py-2">
        <Marquee speed={50} gradient={false}>
          <div className="flex items-center space-x-8 text-white">
            {Array(18)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-center space-x-7">
                  <Image
                    src="/images/vector.png"
                    alt="Vector"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  <span className="text-sm font-medium whitespace-nowrap">
                    YOUR TEXT HERE
                  </span>
                </div>
              ))}
          </div>
        </Marquee>
      </div>

      {/* Background container */}
      <div
        className="min-h-screen w-full px-4 py-10"
        style={{
          backgroundImage: "url('/images/Frame 401.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          {/* Header section */}
          <div className="flex flex-col text-white md:flex-row md:items-start md:justify-between md:gap-8">
            {/* Left Text */}
            <div className="flex flex-col md:w-1/2">
              <p className="mt-6 text-sm font-normal text-[#A1A1A1]">
                Our Team Member --------
              </p>
              <h2 className="mt-2 text-left text-3xl leading-tight font-normal text-white md:text-6xl">
                Our Leaders/Team
              </h2>
            </div>

            {/* Right Text */}
            <div className="mt-6 md:mt-10 md:w-1/2">
              <p className="text-base leading-relaxed font-normal text-[#A1A1A1]">
                With our global network of digital specialists, we're able to
                provide local knowledge in more than 50 international markets.
                Our team has knowledge for new market
              </p>
            </div>
          </div>

          {/* CEO / Chairman Section */}
          <div className="mt-20 flex flex-col items-center text-white md:flex-row md:items-start md:gap-10">
            {/* Image */}
            <div className="h-[332px] w-[312px] md:h-[456px] md:w-[521px]">
              <Image
                src="/images/ceo.png"
                alt="Chairman"
                width={521}
                height={456}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="mt-6 w-full md:mt-0 md:w-[40%]">
              <p className="text-base leading-relaxed font-normal text-[#A1A1A1]">
                "I've been using this site for a few months, and it's incredibly
                reliable. I appreciate the convenience of booking and canceling
                appointments anytime, anywhere"
              </p>
              <h3 className="mt-6 text-3xl leading-tight font-normal text-white md:text-6xl">
                Chairman
              </h3>
              <p className="mt-2 text-base font-normal text-[#ffffff]">
                Name of the Chairman
              </p>
            </div>
          </div>

          {/* Board of Directors Section */}
          <div className="mt-20 pb-10">
            <div className="mb-10 text-center">
              <h2 className="text-[28px] font-normal text-[#FFFFFF] sm:text-[36px] md:text-[48px]">
                Board of Directors
              </h2>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={8}
              navigation={{
                prevEl: ".board-prev",
                nextEl: ".board-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="mySwiper !px-4"
            >
              {boardMembers.map((member) => (
                <SwiperSlide key={member.id} className="!flex !justify-center">
                  <div className="flex h-auto min-h-[500px] w-full max-w-[342px] flex-col rounded-xl border border-[#A1A1A1] bg-black/40 backdrop-blur-sm">
                    <div className="aspect-[339/392] w-full flex-shrink-0 overflow-hidden rounded-t-xl border-b border-[#A1A1A1]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={339}
                        height={392}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex min-h-[180px] flex-1 flex-col justify-start px-3 py-3 text-center sm:px-4 sm:py-4 md:px-6 md:py-6">
                      <h3 className="mb-2 text-[1rem] leading-tight font-semibold text-[#FFFFFF] sm:text-[1.125rem] md:text-[1.25rem]">
                        {member.name}
                      </h3>
                      <p className="mb-3 text-[0.75rem] leading-tight font-medium text-[#A1A1A1] sm:text-[0.875rem] md:text-[1rem]">
                        {member.position}
                      </p>
                      <p className="flex-1 text-[0.625rem] leading-relaxed text-[#A1A1A1] sm:text-[0.75rem] md:text-[0.875rem]">
                        {member.testimonial}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-6 flex justify-center gap-4">
              <button className="board-prev flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white bg-transparent text-2xl font-bold text-white transition-colors hover:bg-white hover:text-black">
                <span className="leading-none">‹</span>
              </button>
              <button className="board-next flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white bg-transparent text-2xl font-bold text-white transition-colors hover:bg-white hover:text-black">
                <span className="leading-none">›</span>
              </button>
            </div>
          </div>

          {/* Management Team Section */}
          <div className="mt-20 pb-10">
            <div className="mb-10 text-center">
              <h2 className="text-[28px] font-normal text-[#FFFFFF] sm:text-[36px] md:text-[48px]">
                Management Team
              </h2>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={8}
              navigation={{
                prevEl: ".management-prev",
                nextEl: ".management-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="mySwiper !px-4"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id} className="!flex !justify-center">
                  <div className="flex h-auto min-h-[500px] w-full max-w-[342px] flex-col rounded-xl border border-[#A1A1A1] bg-black/40 backdrop-blur-sm">
                    <div className="aspect-[339/392] w-full flex-shrink-0 overflow-hidden rounded-t-xl border-b border-[#A1A1A1]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={339}
                        height={392}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex min-h-[180px] flex-1 flex-col justify-start px-3 py-3 text-center sm:px-4 sm:py-4 md:px-6 md:py-6">
                      <h3 className="mb-2 text-[1rem] leading-tight font-semibold text-[#FFFFFF] sm:text-[1.125rem] md:text-[1.25rem]">
                        {member.name}
                      </h3>
                      <p className="mb-3 text-[0.75rem] leading-tight font-medium text-[#A1A1A1] sm:text-[0.875rem] md:text-[1rem]">
                        {member.position}
                      </p>
                      <p className="flex-1 text-[0.625rem] leading-relaxed text-[#A1A1A1] sm:text-[0.75rem] md:text-[0.875rem]">
                        {member.testimonial}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-6 flex justify-center gap-4">
              <button className="management-prev flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white bg-transparent text-2xl font-bold text-white transition-colors hover:bg-white hover:text-black">
                <span className="leading-none">‹</span>
              </button>
              <button className="management-next flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white bg-transparent text-2xl font-bold text-white transition-colors hover:bg-white hover:text-black">
                <span className="leading-none">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
