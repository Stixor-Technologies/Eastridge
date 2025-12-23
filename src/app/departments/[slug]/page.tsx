import { notFound } from "next/navigation";
import CheckMark from "@/public/icons/checkmark-red.svg";
import Link from "next/link";
// import { FC } from "react";
import Image from "next/image";
import { getDepartment, departments } from "@/src/core/department";
import { createSlug } from "@/src/utils/slug";

interface DepartmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const dept = getDepartment(slug);

  if (!dept) {
    notFound();
  }
  return (
    <section className="py-40">
      <div className="container flex flex-col items-start gap-12 lg:flex-row">
        {/* Other Services Sidebar */}

        <div className="top-24 w-[90vw] rounded-2xl border border-gray-200 bg-white p-6 lg:sticky lg:w-[45.125rem]">
          <div className="mb-6 flex items-center">
            <div className="mr-3 flex h-6 w-6 items-center justify-center">
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Other Services
            </h3>
          </div>
          <ul className="divide-accent/10 space-y-0 divide-y-1">
            {departments.map((department) => {
              const isActive = department.id === dept?.id;
              return (
                <li key={department.id}>
                  <Link
                    href={`/departments/${department.slug}`}
                    className={`group flex items-center justify-between border-b border-gray-100 px-0 py-4 transition-colors last:border-b-0 ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-700 hover:text-red-500"
                    }`}
                  >
                    <span className="text-base font-medium">
                      {department.name}
                    </span>
                    <svg
                      className={`h-4 w-4 transition-colors ${
                        isActive
                          ? "text-red-500"
                          : "text-gray-400 group-hover:text-red-500"
                      }`}
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
          <Image src={dept.bannerImage} alt={`${dept.name} banner`} />

          {/* Support Group */}
          <div className="mt-9">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              {dept.supportGroup.title}
            </h3>

            <p className="text-body-main text-base">
              {dept.supportGroup.description}
            </p>

            <ul className="mt-8 space-y-4">
              {dept.supportGroup.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-body-main flex items-start text-base"
                >
                  <div className="bg-accent/10 mt-0.5 mr-4 flex size-[1.4375rem] shrink-0 justify-center rounded-full">
                    <Image src={CheckMark} alt="Check Mark" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Facility Images */}

          <div className="mt-[3.5rem]">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              View Of Facility From Inside
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.7fr]">
              <div className="relative row-span-2 overflow-hidden rounded-2xl">
                <Image
                  src={dept?.facilityImages?.[0]}
                  alt="Emergency"
                  className="inset-0 h-full w-full object-cover md:absolute"
                />
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <Image src={dept?.facilityImages?.[1]} alt="Cardiology" />
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <Image src={dept?.facilityImages?.[2]} alt="Neurology" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {dept?.facilityImages?.map((image, index) => (
                // <div key={index} className="rounded-2xl">
                <Image
                  key={index}
                  src={image}
                  alt={`Facility Image ${index + 1}`}
                  className="aspect-[459/280] rounded-2xl object-cover"
                />
                // </div>
              ))}
            </div>
          </div>

          {/* Emergency Staffing */}
          <div className="mt-[3.5rem]">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              {dept?.emergencyStaffing?.title}
            </h3>

            <p className="text-body-main text-base">
              {dept?.emergencyStaffing?.description}
            </p>

            <ul className="mt-8 space-y-4">
              {dept?.emergencyStaffing?.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-body-main flex shrink-0 items-start text-base"
                >
                  <div className="bg-accent/10 mt-0.5 mr-4 flex size-[1.4375rem] shrink-0 justify-center rounded-full">
                    <Image src={CheckMark} alt="Check Mark" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[3.5rem]">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              Availability Timings
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {dept?.timings?.map((t) => (
                <li key={t.day} className="text-body-main text-base">
                  <span className="text-body-primary font-bold">{t.day}</span>:{" "}
                  {t.start} – {t.end}
                </li>
              ))}
            </ul>
          </div>

          {/* Assigned Doctors */}
          <div className="mt-[3.5rem]">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              Assigned Doctors
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,_minmax(13.4375rem,_1fr))]">
              {dept?.doctors?.map((doctor: any) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
