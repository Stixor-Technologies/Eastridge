"use client";

// Card component for displaying a service
import { FC } from "react";
import { ServiceDetail } from "@/src/core/department";
import Arrow from "@/public/icons/right-arrow.svg";
import Image from "next/image";

import Link from "next/link";
import {
  MEDICAL_SERVICES,
  SUPPORT_SERVICES,
  PATIENT_SERVICES,
} from "@/src/core/department";

import IconBadge from "../../icon-badge";

interface ServiceCardProps {
  service: ServiceDetail;
  className?: string;
  isMedical?: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({
  service,
  className = "",
  isMedical,
}) => (
  <Link
    key={service?.slug}
    href={`/department/${service?.slug}`}
    className={`group bg-card-bg hover:bg-accent p-5 transition-all duration-300 ease-in-out hover:!text-white ${className} ${isMedical ? "rounded-3xl" : "border-card-border rounded-lg border"}`}
  >
    {service?.icon && (
      <IconBadge icon={service?.icon} altText={service?.title} />
    )}
    <h3
      className={`text-body-primary mb-4 text-[1.375rem] leading-tight font-semibold transition-all duration-300 ease-in-out group-hover:text-white ${isMedical ? "mt-8 lg:mt-16" : "mt-8"}`}
    >
      {service?.title}
    </h3>
    <p className="text-body-main text-xl transition-all duration-300 ease-in-out group-hover:text-white">
      {service?.description}
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
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:gap-6 lg:mb-16">
          <h2 className="text-body-primary md:font-4xl text-left text-4xl font-normal lg:text-5xl">
            Medical Services
          </h2>
          <p className="text-body-main text-xl md:max-w-[35.75rem] md:text-justify">
            Eastridge Prime Care is a multi-specialty Hospital envisioning in
            the near future to become a Teaching Hospital affiliated with
            Foundation University Medical College (FUMC) and Foundation
            University College of Nursing (FUCN). Initially, following clinical
            departments will be established:
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(17.1875rem,_1fr))] gap-8">
          {MEDICAL_SERVICES?.map((service) => (
            <ServiceCard key={service.slug} service={service} isMedical />
          ))}
        </div>
      </section>

      {/* Support Services Section */}
      <section className="container my-20 lg:my-40">
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
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Patient Services Section */}
      <section className="container">
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
            <ServiceCard
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
      </section>
    </div>
  );
};

export default DeptServices;
