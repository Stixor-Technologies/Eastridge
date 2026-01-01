"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Arrow from "@/public/icons/right-arrow.svg";
import IconBadge from "../../icon-badge";
import { Department } from "@/src/core/department";
import { getDepartments } from "@/src/api/departmentApi";
import ShowMoreButton from "@/src/components/ui/ShowMoreBtn";
import IconLoader from "../../ui/IconLoader";

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
    href={`/departments/${department.documentId}`}
    className={`group bg-card-bg hover:bg-accent p-5 transition-all duration-300 hover:!text-white ${
      isMedical ? "rounded-3xl" : "border-card-border rounded-lg border"
    } ${className}`}
  >
    {department.icon && (
      <IconBadge
        icon={department.icon}
        hoverIcon={department.hoverIcon}
        altText={department.name}
      />
    )}

    <h3
      className={`text-body-primary mb-4 text-[1.375rem] font-semibold transition-all group-hover:text-white ${
        isMedical ? "mt-8 lg:mt-16" : "mt-8"
      }`}
    >
      {department.name}
    </h3>

    <p className="text-body-main text-xl transition-all group-hover:text-white">
      {department.description}
    </p>

    {isMedical && (
      <div className="mt-8 flex items-center gap-2 lg:mt-11">
        Discover More <Image src={Arrow} alt="Arrow Icon" />
      </div>
    )}
  </Link>
);

const DeptServices: FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const LIMIT = 9;

  useEffect(() => {
    getDepartments()
      .then((result) => {
        if ("error" in result) {
          setError(result.error);
          setLoading(false);
          return;
        }
        setDepartments(result.data);
        setLoading(false);
        if (!result.data.length) {
          setError("No departments found.");
        }
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
        setLoading(false);
      });
  }, []);

  const visibleDepartments = showAll
    ? departments
    : departments.slice(0, LIMIT);

  const handleToggle = () => {
    if (showAll && buttonRef.current) {
      const top =
        buttonRef.current.getBoundingClientRect().top + window.scrollY;

      setShowAll(false);

      requestAnimationFrame(() => {
        window.scrollTo({ top: top - 100, behavior: "smooth" });
      });
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className="py-16">
      <section className="container mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center lg:mb-16">
          <h2 className="text-body-primary text-left text-4xl lg:max-w-[30.875rem] lg:text-5xl">
            Real Advice, From Real Health Experts
          </h2>
          <p className="text-body-main text-xl md:max-w-[22.25rem]">
            Get practical tips and personalized care from professionals who are
            here to help at every step.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center">
            <IconLoader />
          </div>
        ) : error ? (
          <div className="text-center font-semibold text-red-600">{error}</div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,_minmax(21.875rem,_1fr))]">
              {visibleDepartments.map((dept) => (
                <DepartmentCard key={dept.id} department={dept} isMedical />
              ))}
            </div>

            <ShowMoreButton
              showAll={showAll}
              totalItems={departments.length}
              limit={LIMIT}
              onToggle={handleToggle}
              buttonRef={buttonRef}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default DeptServices;
