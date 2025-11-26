"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/src/core/doctor";
import RightArrow from "@/public/icons/right-arrow.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoctorSearchBar from "../searchbar-section";

import { useState as useReactState } from "react";

gsap.registerPlugin(ScrollTrigger);

// Helper function to create URL-friendly slugs from doctor names
const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const DoctorListing = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showAll, setShowAll] = useState(false);

  // --- Filtered doctors state ---
  const [filteredDoctors, setFilteredDoctors] = useReactState(doctors);

  // Calculate visible doctors based on screen size
  const desktopLimit = 12;
  const visibleDoctors = showAll
    ? filteredDoctors
    : filteredDoctors.slice(0, desktopLimit);

  const handleToggle = () => {
    if (showAll && buttonRef.current) {
      const buttonTop =
        buttonRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      setShowAll(false);
      requestAnimationFrame(() => {
        window.scrollTo({ top: buttonTop - offset, behavior: "smooth" });
      });
    } else {
      setShowAll(true);
    }
  };

  // Group doctors into rows
  const groupDoctorsIntoRows = () => {
    const rows = [];
    const lgCols = 4;
    for (let i = 0; i < visibleDoctors.length; i += lgCols) {
      rows.push(visibleDoctors.slice(i, i + lgCols));
    }
    return rows;
  };
  const doctorRows = groupDoctorsIntoRows();

  // Animation
  useGSAP(
    () => {
      const rows = container.current?.querySelectorAll(".doctor-row");
      if (!rows) return;
      rows.forEach((row) => {
        if (row.getAttribute("data-animated")) return;
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
              row.setAttribute("data-animated", "true");
            },
          },
        });
      });
    },
    {
      scope: container,
      dependencies: [showAll, filteredDoctors],
      revertOnUpdate: true,
    },
  );

  // --- Filtering logic: pass a callback to DoctorSearchBar to update filteredDoctors ---
  const handleFilter = (doctorsList: typeof doctors) => {
    setFilteredDoctors(doctorsList);
    setShowAll(false); // Reset to collapsed view on filter
  };

  return (
    <section className="px-4 py-16">
      <div ref={container} className="container mx-auto max-w-7xl">
        <DoctorSearchBar onFilter={handleFilter} />
        {doctorRows.length === 0 && (
          <div className="py-12 text-center text-lg text-gray-500">
            No doctors found.
          </div>
        )}
        {doctorRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="doctor-row mb-6 grid grid-cols-2 gap-6 last:mb-0 md:mb-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
          >
            {row.map((doctor) => {
              const globalIndex = visibleDoctors.indexOf(doctor);
              const isAlternate = globalIndex % 2 === 1;
              return (
                <Link
                  key={doctor.id}
                  href={`/doctor-listing/${createSlug(doctor.name)}`}
                  className={`group block ${isAlternate ? "mt-8 md:mt-12" : ""}`}
                >
                  <div className="flex flex-col">
                    <div className="relative aspect-[313/387] w-full overflow-hidden rounded-2xl border border-[#EBEBEB] transition-shadow duration-300 ease-in-out group-hover:shadow-xl">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                        {doctor.name}
                      </h3>
                      <p className="mt-1 text-xs text-gray-600 md:text-sm">
                        {doctor.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}

        {filteredDoctors.length > desktopLimit && (
          <div className="mt-12 flex justify-center">
            <button
              ref={buttonRef}
              onClick={handleToggle}
              className="flex w-full max-w-[209px] cursor-pointer items-center justify-between rounded-full bg-[#D32F2F] py-4 pr-4 pl-8 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#B71C1C]"
              aria-label={showAll ? "Show less doctors" : "Show more doctors"}
            >
              <span className="flex-1 text-left">
                {showAll ? "Show Less" : "Show More"}
              </span>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
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

export default DoctorListing;
