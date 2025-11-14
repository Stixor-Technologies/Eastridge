

'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctors } from '@/src/core/doctor';
import RightArrow from '@/public/icons/right-arrow.svg';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DoctorListingSection = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Calculate visible doctors based on screen size
  // Desktop (lg): 4 columns × 3 rows = 12 doctors
  // Mobile: 2 columns × 4 rows = 8 doctors
  const desktopLimit = 12;
  const mobileLimit = 8;

  const visibleDoctors = showAll ? doctors : doctors.slice(0, desktopLimit);

  const handleToggle = () => {
    if (showAll && buttonRef.current) {
      // Store button position before collapsing
      const buttonTop = buttonRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 100; // Offset from top of viewport
      
      setShowAll(false);
      
      // After state update, scroll to keep button in view
      requestAnimationFrame(() => {
        window.scrollTo({
          top: buttonTop - offset,
          behavior: 'smooth'
        });
      });
    } else {
      setShowAll(true);
    }
  };

  // Group doctors into rows
  // Mobile: 2 per row, Desktop (md): 3 per row, Desktop (lg): 4 per row
  const groupDoctorsIntoRows = () => {
    const rows = [];
    const lgCols = 4; // lg: grid-cols-4
    
    for (let i = 0; i < visibleDoctors.length; i += lgCols) {
      rows.push(visibleDoctors.slice(i, i + lgCols));
    }
    
    return rows;
  };

  const doctorRows = groupDoctorsIntoRows();

  useGSAP(
    () => {
      const rows = container.current?.querySelectorAll('.doctor-row');
      
      if (!rows) return;

      rows.forEach((row) => {
        // Skip animation if row already has been animated
        if (row.getAttribute('data-animated')) return;
        
        gsap.from(row, {
          opacity: 0,
          y: "4rem",
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
            onEnter: () => {
              row.setAttribute('data-animated', 'true');
            },
          },
        });
      });
    },
    {
      scope: container,
      dependencies: [showAll],
      revertOnUpdate: true,
    },
  );

  return (
    <section className="py-16 px-4">
      <div ref={container} className="container mx-auto max-w-7xl">
        {doctorRows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="doctor-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8 last:mb-0"
          >
            {row.map((doctor) => {
              const globalIndex = visibleDoctors.indexOf(doctor);
              const isAlternate = (globalIndex % 2 === 1);

              return (
                <Link 
                  key={doctor.id} 
                  href={`/doctor-detail-page/${doctor.id}`}
                  className={`block ${isAlternate ? 'mt-8 md:mt-12' : ''}`}
                >
                  <div className="flex flex-col">
                    <div className="relative w-full aspect-[313/387] overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">
                        {doctor.name}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mt-1">
                        {doctor.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
        
        {doctors.length > desktopLimit && (
          <div className="flex justify-center mt-12">
            <button 
              ref={buttonRef}
              onClick={handleToggle}
              className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-semibold py-4 pl-10 pr-6 rounded-full transition-colors duration-300 flex items-center gap-4 text-lg"
              aria-label={showAll ? 'Show less doctors' : 'Show more doctors'}
            >
              {showAll ? 'Show Less' : 'Show More'}
              <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 ${
                showAll ? 'rotate-180' : ''
              }`}>
                <Image 
                  src={RightArrow} 
                  alt=""
                  width={20}
                  height={20}
                  className="text-[#D32F2F]"
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorListingSection;