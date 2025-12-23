"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Arrow from "@/public/icons/right-arrow.svg";
import IconBadge from "../../icon-badge";
import { Department } from "@/src/core/department";
import { getDepartments } from "@/src/api/departmentApi";
import React from "react";
import { LoaderOne } from "@/src/components/ui/loader";

interface ServiceCardProps {
  department: Department;
  className?: string;
  isMedical?: boolean;
}

const DepartmentCard: FC<ServiceCardProps> = ({
  department,
  className = "",
  isMedical,
}) => (
  <Link
    href={`/departments/${department?.slug}`}
    className={`group bg-card-bg hover:bg-accent p-5 transition-all duration-300 ease-in-out hover:!text-white ${className} ${isMedical ? "rounded-3xl" : "border-card-border rounded-lg border"}`}
  >
    {department?.icon && (
      <IconBadge
        icon={department.icon}
        hoverIcon={department.hoverIcon}
        altText={department.name}
      />
    )}
    <h3
      className={`text-body-primary mb-4 text-[1.375rem] font-semibold transition-all duration-300 ease-in-out group-hover:text-white ${isMedical ? "mt-8 lg:mt-16" : "mt-8"}`}
    >
      {department.name}
    </h3>
    <p className="text-body-main text-xl transition-all duration-300 ease-in-out group-hover:text-white">
      {department.description}
    </p>
    {isMedical && (
      <div className="mt-8 flex items-center gap-2 lg:mt-11">
        Discover More <Image src={Arrow} alt="Arrow Icon" />
      </div>
    )}
  </Link>
);

interface ShowMoreBtnProps {
  expanded: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const ShowMoreBtn: FC<ShowMoreBtnProps> = ({
  expanded,
  onClick,
  disabled = false,
}) => (
  <button
    className={`mt-8 flex items-center gap-2 rounded-full bg-[#D82519] px-6 py-5 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#b81d13] ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    onClick={disabled ? undefined : onClick}
    disabled={disabled}
  >
    {expanded ? "Show Less" : "Show More"}
    <div className="rounded-full bg-white p-3">
      <Image
        src={Arrow}
        alt={expanded ? "Arrow Up" : "Arrow Right"}
        width={20}
        height={20}
      />
    </div>
  </button>
);

const DeptServices: FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getDepartments()
      .then((data) => {
        setDepartments(data);
        setLoading(false);
        if (!data?.length)
          setError("No departments found. Please try again later.");
      })
      .catch(() => {
        setError(
          "Failed to load departments. Please check your connection or try again.",
        );
        setLoading(false);
      });
  }, []);

  const visibleDepartments = showAll ? departments : departments.slice(0, 6);
  const disableShowMore = departments.length <= 6;

  return (
    <div className="py-16">
      <section className="container mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:gap-6 lg:mb-16">
          <h2 className="text-body-primary md:font-4xl text-4xl font-normal lg:max-w-[39.875rem] lg:text-5xl">
            Real Advice, From Real Health Experts
          </h2>
          <p className="text-body-main text-xl md:max-w-[22.25rem] md:text-justify">
            Get practical tips and personalized care from professionals who are
            here to help at every step.
          </p>
        </div>

        {/* Departments */}
        {loading ? (
          <div className="flex items-center justify-center">
            <LoaderOne />
          </div>
        ) : error ? (
          <div className="my-8 text-center font-semibold text-red-600">
            {error}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,_minmax(21.875rem,_1fr))]">
              {visibleDepartments.map((dept, idx) => (
                <DepartmentCard
                  key={`${dept.id}-${idx}`}
                  department={dept}
                  isMedical
                />
              ))}
            </div>
            {departments.length > 0 && (
              <div className="flex justify-center">
                <ShowMoreBtn
                  expanded={showAll}
                  onClick={() => setShowAll((v) => !v)}
                  disabled={disableShowMore}
                />
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default DeptServices;
