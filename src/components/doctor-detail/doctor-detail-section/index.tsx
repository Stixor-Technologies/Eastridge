

'use client';

import Image from 'next/image';
import { doctors, Award } from '@/src/core/doctor';
import { notFound } from 'next/navigation';
import { useState, useRef } from 'react';
import RightArrow from '@/public/icons/right-arrow.svg';
import VideoBG from '@/public/images/video-bg.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface DoctorDetailSectionProps {
  doctorId: string;
}

const DoctorDetailSection = ({ doctorId }: DoctorDetailSectionProps) => {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLDivElement | null>(null);
  const doctor = doctors.find(d => d.id === doctorId);
  const [showBiography, setShowBiography] = useState(false);

  if (!doctor) {
    notFound();
  }

  useGSAP(
    () => {
      gsap.from(container?.current, {
        opacity: 0,
        y: '4rem',
        duration: 0.7,
        ease: 'power1',
        scrollTrigger: {
          trigger: container?.current,
          start: 'top 80%',
        },
      });
    },
    {
      scope: container,
    },
  );

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtube.com/watch format
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Already in embed format
    if (url.includes('/embed/')) {
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
          <span className="text-red-600 font-semibold">Doctor Name</span>
        </div>
      </div>

      {/* Doctor Name Title - Desktop */}
      <div className="text-center mb-12 hidden lg:block">
        <h1 className="text-5xl font-bold text-gray-900">
          {doctor.name}
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column - Image, Name, Description, Button */}
          <div className="w-full lg:w-[43%]">
            {/* Mobile Version */}
            <div className="lg:hidden">
              <div className="bg-gray-100 rounded-3xl overflow-hidden mb-6">
                <div className="relative" style={{ aspectRatio: '537/690' }}>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Mobile Doctor Name and Description */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {doctor.name}
                </h2>
                <p className="text-gray-600 text-sm mb-6 px-4">
                  Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing
                </p>
                <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold py-4 pl-10 pr-6 rounded-full transition-colors duration-300 inline-flex items-center gap-4 text-lg">
                  Make Appointment
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
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
              <div className="bg-gray-100 rounded-3xl overflow-hidden mb-8">
                <div className="relative" style={{ aspectRatio: '537/690' }}>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {doctor.name}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm px-8">
                  Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing
                </p>
                <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold py-4 pl-10 pr-6 rounded-full transition-colors duration-300 inline-flex items-center gap-4 text-lg">
                  Make Appointment
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Biography</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              {doctor.biography}
            </p>

            <div className="space-y-3 mb-10 text-sm">
              <div className="flex">
                <span className="font-bold text-gray-900 w-44 flex-shrink-0">Occupation:</span>
                <span className="text-gray-600">{doctor.occupation}</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-44 flex-shrink-0">Experience:</span>
                <span className="text-gray-600">{doctor.experience}</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-44 flex-shrink-0">Certificates:</span>
                <span className="text-gray-600">{doctor.certificates.join(', ')}</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-44 flex-shrink-0">Skills:</span>
                <span className="text-gray-600">{doctor.skills.join(', ')}</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-44 flex-shrink-0">Location:</span>
                <span className="text-gray-600">{doctor.location}</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-44 flex-shrink-0">Email:</span>
                <span className="text-gray-600">{doctor.email}</span>
              </div>
              <div className="flex">
                <span className="font-bold text-gray-900 w-44 flex-shrink-0">Department Phone:</span>
                <span className="text-gray-600">{doctor.phoneNo}</span>
              </div>
            </div>

            {/* Awards & Hours */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Awards & Hours</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from re
            </p>

            {/* Award Icons */}
            <div className="flex flex-wrap gap-8 mb-10">
              {doctor.awards.slice(0, 2).map((award, index) => (
                <div key={index} className="text-left">
                  <div className="w-16 h-16 mb-3 bg-pink-50 rounded-full flex items-center justify-center">
                    <Image
                      src={award.icon}
                      alt={award.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{award.name}</h4>
                  <p className="text-xs text-gray-600">{award.description}</p>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={VideoBG}
                alt="Video Background"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
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