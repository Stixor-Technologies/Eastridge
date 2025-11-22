"use client";

import Image from "next/image";
import { Doctor } from "@/src/core/doctor";
import { useRef } from "react";
//import RightArrow from "@/public/icons/right-arrow.svg";
import VideoBG from "@/public/images/video-bg.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DoctorDetailSectionProps {
  doctor: Doctor;
}

const DoctorDetailSection = ({ doctor }: DoctorDetailSectionProps) => {
  const container = useRef<HTMLDivElement | null>(null);

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

  // Validate doctor prop
  if (!doctor || typeof doctor !== "object") {
    return null;
  }

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname.toLowerCase();

      // Validate YouTube hostname
      if (hostname !== "youtu.be" && !hostname.endsWith("youtube.com")) {
        return "";
      }

      let videoId = "";

      // Handle youtu.be format
      if (hostname === "youtu.be") {
        videoId = parsedUrl.pathname.slice(1).split("?")[0];
      }
      // Handle youtube.com/watch format
      else if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v") || "";
      }
      // Handle youtube.com/embed format
      else if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1]?.split("?")[0] || "";
      }

      // Validate videoId contains only safe characters
      if (videoId && /^[a-zA-Z0-9_-]+$/.test(videoId)) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch {
      // Invalid URL
      return "";
    }

    return "";
  };

  return (
    <div className="bg-white" ref={container}>
      {/* Breadcrumb - Centered with top spacing */}
      <div className="container mx-auto max-w-7xl px-4 pt-24 pb-6 lg:pt-30 lg:pb-8">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
          <span className="text-gray-700">Doctor Listing</span>
          <span className="text-gray-400">&gt;</span>
          <span className="font-semibold text-red-600">Doctor Name</span>
        </div>
      </div>

      {/* Doctor Name Title - Desktop */}
      <div className="mb-12 hidden text-center lg:block">
        <h1 className="text-5xl font-bold text-gray-900">{doctor.name}</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Left Column - Image, Name, Description, Button */}
          <div className="w-full lg:w-[43%]">
            {/* Mobile Version */}
            <div className="lg:hidden">
              <div className="mb-6 overflow-hidden rounded-2xl border border-[#EBEBEB] bg-gray-100">
                <div className="relative" style={{ aspectRatio: "537/690" }}>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Mobile Doctor Name and Description */}
              <div className="mb-6 text-center">
                <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                  {doctor.name}
                </h2>
                <p className="mb-6 px-2 text-sm leading-relaxed text-gray-600">
                  {doctor.description}
                </p>
                {/*
                <button className="inline-flex cursor-pointer items-center gap-4 rounded-full bg-[#D32F2F] py-4 pr-6 pl-10 text-lg font-semibold whitespace-nowrap text-white transition-colors duration-300 hover:bg-[#B71C1C]">
                  Make Appointment
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12">
                    <Image
                      src={RightArrow}
                      alt="Right Arrow"
                      width={14}
                      height={14}
                      className="text-[#D32F2F] sm:h-5 sm:w-5"
                    />
                  </div>
                </button>
                */}
              </div>
            </div>

            {/* Desktop Version */}
            <div className="hidden lg:block">
              <div className="mb-8 overflow-hidden rounded-2xl border border-[#EBEBEB] bg-gray-100">
                <div className="relative" style={{ aspectRatio: "537/690" }}>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  {doctor.name}
                </h2>
                <p className="mb-6 px-2 text-sm leading-relaxed text-gray-600">
                  {doctor.description}
                </p>
                {/*
                <button className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#D32F2F] py-2 pr-3 pl-5 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-300 hover:bg-[#B71C1C] sm:gap-4 sm:py-4 sm:pr-6 sm:pl-10 sm:text-lg">
                  Make Appointment
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12">
                    <Image
                      src={RightArrow}
                      alt="Right Arrow"
                      width={20}
                      height={20}
                      className="text-[#D32F2F]"
                    />
                  </div>
                </button>
                */}
              </div>
            </div>
          </div>

          {/* Right Column - Biography, Details, Awards */}
          <div className="w-full lg:w-[57%]">
            <h3 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl">
              Biography
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-8">
              {doctor.biography}
            </p>

            <div className="mb-8 space-y-2 text-sm sm:mb-10 sm:space-y-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Department:
                </span>
                <span className="text-gray-600">{doctor.department}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Experience:
                </span>
                <span className="text-gray-600">{doctor.experience} years</span>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Qualifications:
                </span>
                <span className="text-gray-600">
                  <ul className="list-inside list-disc">
                    {doctor.qualifications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </span>
              </div>

              {/* 
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Certificates:
                </span>
                <span className="text-gray-600">
                  {Array.isArray(doctor.certificates)
                    ? doctor.certificates.join(", ")
                    : ""}
                </span>
              </div>
              

              <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Skills:
                </span>
                <span className="text-gray-600">
                  {Array.isArray(doctor.skills) ? doctor.skills.join(", ") : ""}
                </span>
              </div>
              */}
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Location:
                </span>
                <span className="text-gray-600">{doctor.location}</span>
              </div>
              {/* 
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Email:
                </span>
                <span className="text-gray-600">{doctor.email}</span>
              </div>
              */}
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
                <span className="w-full flex-shrink-0 font-bold text-gray-900 sm:w-44">
                  Department Phone:
                </span>
                <span className="text-gray-600">{doctor.phoneNo}</span>
              </div>
            </div>

            {/* Awards & Hours */}
            <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
              Hours
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-8">
              {/*doctor.hours ||
                "Please contact the department for office hours."*/}
              Please contact the department for office hours.
            </p>

            {/* Award Icons 
            <div className="mb-8 flex flex-wrap gap-6 sm:mb-10 sm:gap-8">
              {(Array.isArray(doctor.awards) ? doctor.awards : [])
                .slice(0, 2)
                .map((award, index) => (
                  <div key={index} className="text-left">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-pink-50">
                      <Image
                        src={award.icon}
                        alt={award.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900">
                      {award.name}
                    </h4>
                    <p className="text-xs text-gray-600">{award.description}</p>
                  </div>
                ))}
            </div>
            */}
            {/* Video Section */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src={VideoBG}
                alt="Video Background"
                className="h-auto w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                <div className="h-full w-full overflow-hidden rounded-2xl">
                  <iframe
                    className="h-full w-full"
                    src={getEmbedUrl(doctor.youtubeVideoLink)}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailSection;
