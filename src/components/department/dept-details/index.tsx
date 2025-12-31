import React from "react";
import CheckMark from "@/public/icons/checkmark-red.svg";
import DepartmentTiming from "@/src/components/department";
import {
  Department,
  DepartmentSidebarItem,
  Doctor,
} from "@/src/core/department";
import { createSlug } from "@/src/utils/slug";
import Image from "next/image";
import Link from "next/link";

const DepartmentDetails = ({
  dept,
  sidebarData,
  slug,
}: {
  dept: Department;
  sidebarData: DepartmentSidebarItem[];
  slug: string;
}) => {
  const hasSideImages = dept?.facilityImages?.length > 1;

  return (
    <section className="py-40">
      <div className="container flex flex-col items-start gap-12 lg:flex-row">
        {/* Other Services Sidebar */}
        <div className="top-24 w-full shrink-0 rounded-2xl border border-gray-200 bg-white p-6 sm:w-[90vw] lg:sticky lg:w-[17.80rem] lg:flex-none">
          {/* Header */}
          <div className="mb-6 flex items-center">
            <div className="mr-1.5 flex h-6 w-6 shrink-0 items-center justify-center">
              {dept?.hoverIcon ? (
                <Image
                  src={dept.hoverIcon}
                  alt={dept.name}
                  width={25}
                  height={25}
                />
              ) : dept?.icon ? (
                <Image src={dept.icon} alt={dept.name} width={20} height={20} />
              ) : null}
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Other Services
            </h3>
          </div>

          {/* Links */}
          <ul className="divide-accent/10 divide-y">
            {sidebarData.map((department) => {
              const isActive = department.documentId === slug;

              return (
                <li key={department.id}>
                  <Link
                    href={`/departments/${department.documentId}`}
                    className={`group flex items-center justify-between py-4 transition-colors ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-700 hover:text-red-500"
                    } `}
                  >
                    <span className="text-base font-medium">
                      {department.name}
                    </span>

                    <svg
                      className={`h-4 w-4 shrink-0 transition-colors ${
                        isActive
                          ? "text-red-500"
                          : "text-gray-400 group-hover:text-red-500"
                      } `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* right side */}
        <div>
          {dept.bannerImage && (
            <Image
              className="w-full"
              src={dept.bannerImage}
              alt={`${dept.name} banner`}
              width={800}
              height={400}
            />
          )}

          {/* Support Group */}
          <div className="mt-9">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              {dept?.supportTitle}
            </h3>

            <p className="text-body-main text-base">
              {dept?.supportDescription}
            </p>

            <ul className="mt-8 space-y-4">
              {Array.isArray(dept?.supportBulletPoints) &&
                dept.supportBulletPoints.map((point) => {
                  return (
                    <li
                      key={point.id}
                      className="text-body-main flex items-start text-base"
                    >
                      <div className="bg-accent/10 mt-0.5 mr-4 flex size-[1.4375rem] shrink-0 items-center justify-center rounded-full">
                        <Image src={CheckMark} alt="Check Mark" />
                      </div>
                      {point.supportPoints}
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Facility Images */}

          <div className="mt-[3.5rem]">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              View Of Facility From Inside
            </h3>

            <div
              className={`mt-6 grid gap-4 ${
                hasSideImages
                  ? "grid-cols-1 md:grid-cols-[1fr_0.7fr] md:gap-0"
                  : "grid-cols-1"
              }`}
            >
              {/* MAIN IMAGE */}
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  hasSideImages
                    ? "md:h-full md:max-h-[500px] md:min-h-[400px]"
                    : "h-[400px] w-full"
                }`}
              >
                {dept?.facilityImages?.[0] && (
                  <Image
                    src={dept.facilityImages[0]}
                    alt={dept.name}
                    className="h-full w-full object-cover"
                    width={800}
                    height={500}
                    priority
                  />
                )}
              </div>

              {hasSideImages && (
                <div className="grid grid-cols-2 gap-4 md:ml-4 md:flex md:h-full md:flex-col md:justify-between">
                  <div className="relative aspect-[459/280] overflow-hidden rounded-2xl md:aspect-auto md:h-[240px]">
                    <Image
                      src={dept.facilityImages[1]}
                      alt={dept.name}
                      className="h-full w-full object-cover"
                      width={400}
                      height={240}
                    />
                  </div>

                  {dept?.facilityImages?.[2] && (
                    <div className="relative aspect-[459/280] overflow-hidden rounded-2xl md:aspect-auto md:h-[240px]">
                      <Image
                        src={dept.facilityImages[2]}
                        alt={dept.name}
                        className="h-full w-full object-cover"
                        width={400}
                        height={240}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {dept?.facilityImages?.length > 3 &&
                dept.facilityImages
                  .slice(3)
                  .map((image: string, index: number) => (
                    <Image
                      key={index}
                      src={image}
                      alt={dept.name}
                      className="aspect-[459/280] w-300 rounded-2xl object-cover"
                      width={300}
                      height={200}
                    />
                  ))}
            </div>
          </div>

          {/* Emergency Staffing (staffedGroup) */}
          <div className="mt-9">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              {dept?.staffedTitle}
            </h3>

            <p className="text-body-main text-base">
              {dept?.staffedDescription}
            </p>

            <ul className="mt-8 space-y-4">
              {Array.isArray(dept?.staffedBulletPoints) &&
                dept.staffedBulletPoints.map((point) => {
                  return (
                    <li
                      key={point.id}
                      className="text-body-main flex items-start text-base"
                    >
                      <div className="bg-accent/10 mt-0.5 mr-4 flex size-[1.4375rem] shrink-0 items-center justify-center rounded-full">
                        <Image src={CheckMark} alt="Check Mark" />
                      </div>
                      {point.staffedPoints}
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* timings */}
          <div className="mt-[3.5rem]">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              Availability Timings
            </h3>
            <DepartmentTiming timing={dept?.timings} />
          </div>

          {/* Assigned Doctors */}
          <div className="mt-[3.5rem]">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              Assigned Doctors
            </h3>

            {dept?.doctors && dept.doctors.length > 0 ? (
              <div className="grid grid-flow-row auto-rows-auto justify-start gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(12.4375rem,12.4375rem))]">
                {dept.doctors.map((doctor: Doctor) => (
                  <Link
                    key={doctor.id}
                    href={`/doctor-listing/${createSlug(doctor.name)}`}
                    className={`group block`}
                  >
                    <div className="flex flex-col">
                      <div className="relative aspect-[313/387] w-full overflow-hidden rounded-2xl border border-[#EBEBEB] transition-shadow duration-300 ease-in-out group-hover:shadow-xl">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          className="object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
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
                ))}
              </div>
            ) : (
              <div className="text-body-main text-base">
                No doctors assigned yet
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetails;
