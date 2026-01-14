"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createSlug } from "../../../utils/slug";
import Link from "next/link";
import Image from "next/image";
import { Doctor } from "@/src/core/doctors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoctorSearchBar from "../searchbar-section";
import ShowMoreButton from "@/src/components/ui/ShowMoreBtn";
import { getDoctors } from "@/src/api/doctorApi";
import { getImageUrl } from "@/src/api/departmentApi";
import IconLoader from "../../ui/IconLoader";

gsap.registerPlugin(ScrollTrigger);

const DoctorListing = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Track screen size for proper row calculation
  const [columnsPerRow, setColumnsPerRow] = useState(4);

  const [allDoctors, setAllDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const FILTERS_KEY = "doctorDepartmentFilters";

  useEffect(() => {
    const getDoctorsData = async () => {
      setLoading(true);
      setError(null);

      try {
        const doctorsResult = await getDoctors();

        if (doctorsResult.error) {
          setError(doctorsResult.error);
        }

        const doctors = doctorsResult.doctors;
        setAllDoctors(doctors);

        let filteredDoctors = doctors;

        try {
          const saved = localStorage.getItem(FILTERS_KEY);
          if (saved) {
            const parsed = JSON.parse(saved) as { department?: string[] };

            if (
              Array.isArray(parsed.department) &&
              parsed.department.length > 0
            ) {
              filteredDoctors = doctors.filter(
                (doc) =>
                  doc.department && parsed.department!.includes(doc.department),
              );
            }
          }
        } catch {
          localStorage.removeItem(FILTERS_KEY);
        }

        setFilteredDoctors(filteredDoctors);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to connect to server",
        );
        setAllDoctors([]);
        setFilteredDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    getDoctorsData();
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumnsPerRow(2);
      } else if (window.innerWidth < 1024) {
        setColumnsPerRow(3);
      } else {
        setColumnsPerRow(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

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
        window.scrollTo({
          top: buttonTop - offset,
          behavior: "smooth",
        });
      });
    } else {
      setShowAll(true);
    }
  };

  const groupDoctorsIntoRows = () => {
    const rows = [];
    for (let i = 0; i < visibleDoctors.length; i += columnsPerRow) {
      rows.push(visibleDoctors.slice(i, i + columnsPerRow));
    }
    return rows;
  };

  const doctorRows = groupDoctorsIntoRows();

  // Animations
  useGSAP(
    () => {
      const rows = container.current?.querySelectorAll(".doctor-row");
      if (!rows) return;

      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger &&
          container.current?.contains(trigger.vars.trigger as Element)
        ) {
          trigger.kill();
        }
      });

      rows.forEach((row) => {
        gsap.set(row, { opacity: 1, y: 0 });

        gsap.from(row, {
          opacity: 0,
          y: "4rem",
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            once: true,
          },
        });
      });
    },
    {
      scope: container,
      dependencies: [showAll, filteredDoctors, columnsPerRow],
      revertOnUpdate: true,
    },
  );

  const handleFilter = useCallback((doctorsList: Doctor[]) => {
    setFilteredDoctors(doctorsList);
    setShowAll(false);
    setError(null); // ← Safe reset
  }, []);

  return (
    <section className="px-4 py-16">
      <div ref={container} className="md:container md:mx-auto md:max-w-7xl">
        <DoctorSearchBar
          doctor={allDoctors}
          onFilter={handleFilter}
          FILTERS_KEY={FILTERS_KEY}
        />

        {/* Loading State */}
        {loading && (
          <div role="status" aria-live="polite">
            <IconLoader />
            <span className="sr-only">Loading content</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="py-20 text-center">
            <p className="mb-6 text-xl font-medium text-red-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800"
            >
              Try Again
            </button>
          </div>
        )}

        {/* No Doctors Found */}
        {!loading && !error && filteredDoctors.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-gray-600">
              No doctors found matching your criteria.
            </p>
            <p className="mt-4 text-gray-500">
              Try adjusting filters or search term.
            </p>
          </div>
        )}

        {/* Doctors Grid - Only show when data is ready */}
        {!loading && !error && doctorRows.length > 0 && (
          <>
            {doctorRows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}-${columnsPerRow}`}
                className="doctor-row mb-6 grid grid-cols-2 gap-6 last:mb-0 md:mb-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
              >
                {row.map((doctor) => {
                  const globalIndex = visibleDoctors.indexOf(doctor);
                  const isAlternate = globalIndex % 2 === 1;

                  return (
                    <Link
                      key={doctor.id}
                      href={`/doctor-listing/${createSlug(doctor.documentId)}`}
                      className={`group block ${isAlternate ? "mt-8 md:mt-12" : ""}`}
                    >
                      <div className="flex flex-col">
                        <div className="relative aspect-[313/387] w-full overflow-hidden rounded-2xl border border-[#EBEBEB] transition-shadow duration-300 group-hover:shadow-xl">
                          {doctor.image && (
                            <Image
                              src={getImageUrl(doctor.image)}
                              alt={doctor.name}
                              fill
                              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                          )}
                        </div>

                        <div className="mt-4">
                          <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                            {doctor.name}
                          </h3>
                          <p className="mt-1 text-xs text-gray-600 md:text-sm">
                            {doctor.designation}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}

            <ShowMoreButton
              showAll={showAll}
              totalItems={filteredDoctors.length}
              limit={desktopLimit}
              onToggle={handleToggle}
              buttonRef={buttonRef}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default DoctorListing;
