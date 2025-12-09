"use client";

// Card component for displaying a service
import { FC } from "react";

import Arrow from "@/public/icons/right-arrow.svg";
import Image from "next/image";
import Link from "next/link";

import IconBadge from "../../icon-badge";
// import {
//   MEDICAL_SERVICES,
//   SUPPORT_SERVICES,
//   PATIENT_SERVICES,
// } from "@/src/core/constants";
import { departments } from "@/src/core/department";

interface ServiceCardProps {
  // service: ServiceDetail;
  department: any;
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
      <IconBadge icon={department?.icon} altText={department?.name} />
    )}
    <h3
      className={`text-body-primary mb-4 text-[1.375rem] leading-tight font-semibold transition-all duration-300 ease-in-out group-hover:text-white ${isMedical ? "mt-8 lg:mt-16" : "mt-8"}`}
    >
      {department?.name}
    </h3>
    <p className="text-body-main text-xl transition-all duration-300 ease-in-out group-hover:text-white">
      {department?.description}
    </p>

    {isMedical && (
      <div className="mt-8 flex items-center gap-2 lg:mt-11">
        {`Discover More `} <Image src={Arrow} alt="Arrow Icon" />{" "}
      </div>
    )}
  </Link>
);

const DeptServices = () => {
  return (
    <div className="py-16">
      {/* Medical Services Section */}
      <section className="container mx-auto">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6 lg:mb-16">
          <h2 className="text-body-primary md:font-4xl text-left text-4xl font-normal lg:max-w-[39.875rem] lg:text-5xl">
            Real Advice, From Real Health Experts
          </h2>
          <p className="text-body-main text-xl md:max-w-[22.25rem] md:text-justify">
            Get practical tips and personalized care from professionals who are
            here to help at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,_minmax(21.875rem,_1fr))]">
          {departments?.map((department) => (
            // <DepartmentCard key={department.id} department={department} isMedical />

            <DepartmentCard
              key={department.id}
              department={department}
              isMedical
            />
          ))}
        </div>
      </section>

      {/* Support Services Section */}
      {/* <section className="container my-20 lg:my-40">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:gap-6 lg:mb-16">
          <h2 className="text-body-primary md:font-4xl text-left text-4xl font-normal lg:text-5xl">
            Support Services
          </h2>
          <p className="text-body-main text-xl md:max-w-[35.75rem] md:text-justify">
            Essential non-clinical services including pharmacy, nursing,
            rehabilitation, housekeeping, and administration — all ensuring
            smooth, patient-focused hospital operations.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(17.1875rem,_1fr))] gap-8">
          {SUPPORT_SERVICES?.map((service) => (
            <DepartmentCard key={service.slug} service={service} />
          ))}
        </div>
      </section> */}

      {/* Patient Services Section */}
      {/* <section className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:gap-6 lg:mb-16">
          <h2 className="text-body-primary md:font-4xl text-left text-4xl font-normal lg:text-5xl">
            Patient Services
          </h2>
          <p className="text-body-main text-xl md:max-w-[35.75rem] md:text-justify">
            Your path to better health begins in just a few easy steps.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(17.1875rem,_1fr))] gap-8 lg:grid-cols-6">
          {PATIENT_SERVICES?.map((service, index) => (
            <DepartmentCard
              key={service.slug}
              service={service}
              className={
                index === 0
                  ? "lg:col-span-2"
                  : index === 1
                    ? "lg:col-span-2"
                    : index === 2
                      ? "lg:col-span-2"
                      : index === 3
                        ? "lg:col-span-2 lg:col-start-2"
                        : index === 4
                          ? "lg:col-span-2 lg:col-start-4"
                          : ""
              }
            />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default DeptServices;
