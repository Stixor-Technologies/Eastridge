"use client";

import Image from "next/image";
import { doctors } from "@/src/core/doctor";
import { notFound } from "next/navigation";
import { useRef } from "react";
import RightArrow from "@/public/icons/right-arrow.svg";
import VideoBG from "@/public/images/video-bg.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface DoctorDetailSectionProps {
  doctorName: string;
}

// Helper function to create URL-friendly slugs from doctor names
const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const DoctorDetailSection = ({ doctorName }: DoctorDetailSectionProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  // Find doctor by matching slug to their name
  const doctor = doctors.find((d) => createSlug(d.name) === doctorName);

  if (!doctor) {
    notFound();
  }

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

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    // Handle youtu.be format
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com/watch format
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Already in embed format
    if (url.includes("/embed/")) {
      return url;
    }

    return url;
  };

  return (
    <div className="bg-white" ref={container}>
      {/* Breadcrumb - Centered with top spacing */}
      <div className="container mx-auto max-w-7xl px-4 pt-30 pb-8">
        <div className="flex items-center justify-center gap-2 text-sm">
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
              <div className="mb-6 overflow-hidden rounded-3xl bg-gray-100">
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
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  {doctor.name}
                </h2>
                <p className="mb-6 px-4 text-sm text-gray-600">
                  {doctor.description}
                </p>
                <button className="inline-flex items-center gap-4 rounded-full bg-[#D32F2F] py-4 pr-6 pl-10 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#B71C1C]">
                  Make Appointment
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Image
                      src={RightArrow}
                      alt="Right Arrow"
                      width={20}
                      height={20}
                      className="text-[#D32F2F]"
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Desktop Version */}
            <div className="hidden lg:block">
              <div className="mb-8 overflow-hidden rounded-3xl bg-gray-100">
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
                <p className="mb-6 px-8 text-sm leading-relaxed text-gray-600">
                  {doctor.description}
                </p>
                <button className="inline-flex items-center gap-4 rounded-full bg-[#D32F2F] py-4 pr-6 pl-10 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#B71C1C]">
                  Make Appointment
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Image
                      src={RightArrow}
                      alt="Right Arrow"
                      width={20}
                      height={20}
                      className="text-[#D32F2F]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Biography, Details, Awards */}
          <div className="w-full lg:w-[57%]">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Biography</h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              {doctor.biography}
            </p>

            <div className="mb-10 space-y-3 text-sm">
              <div className="flex">
                <span className="w-44 flex-shrink-0 font-bold text-gray-900">
                  Occupation:
                </span>
                <span className="text-gray-600">{doctor.occupation}</span>
              </div>
              <div className="flex">
                <span className="w-44 flex-shrink-0 font-bold text-gray-900">
                  Experience:
                </span>
                <span className="text-gray-600">{doctor.experience}</span>
              </div>
              <div className="flex">
                <span className="w-44 flex-shrink-0 font-bold text-gray-900">
                  Certificates:
                </span>
                <span className="text-gray-600">
                  {doctor.certificates.join(", ")}
                </span>
              </div>
              <div className="flex">
                <span className="w-44 flex-shrink-0 font-bold text-gray-900">
                  Skills:
                </span>
                <span className="text-gray-600">
                  {doctor.skills.join(", ")}
                </span>
              </div>
              <div className="flex">
                <span className="w-44 flex-shrink-0 font-bold text-gray-900">
                  Location:
                </span>
                <span className="text-gray-600">{doctor.location}</span>
              </div>
              <div className="flex">
                <span className="w-44 flex-shrink-0 font-bold text-gray-900">
                  Email:
                </span>
                <span className="text-gray-600">{doctor.email}</span>
              </div>
              <div className="flex">
                <span className="w-44 flex-shrink-0 font-bold text-gray-900">
                  Department Phone:
                </span>
                <span className="text-gray-600">{doctor.phoneNo}</span>
              </div>
            </div>

            {/* Awards & Hours */}
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Awards & Hours
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-600">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from re
            </p>

            {/* Award Icons */}
            <div className="mb-10 flex flex-wrap gap-8">
              {doctor.awards.slice(0, 2).map((award, index) => (
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

            {/* Video Section */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={VideoBG}
                alt="Video Background"
                className="h-auto w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
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
