import { notFound } from "next/navigation";
import CheckMark from "@/public/icons/checkmark-red.svg";
import Link from "next/link";
import Image from "next/image";
import {
  getDepartmentByDocumentId,
  getDepartmentsForSidebar,
} from "@/src/api/departmentApi";
import { DepartmentSidebarItem } from "@/src/core/department";
import { Department, Doctor, StaffedGroupBlock } from "@/src/core/department";
import DepartmentTiming from "@/src/components/department";
import { createSlug } from "@/src/utils/slug";

interface DepartmentPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  let dept: Department;
  let sidebarData: DepartmentSidebarItem[];

  try {
    const { slug } = await params;
    const [deptResult, sidebar] = await Promise.all([
      getDepartmentByDocumentId(slug),
      getDepartmentsForSidebar(),
    ]);

    if ("error" in deptResult || !deptResult.data) {
      notFound();
    }
    dept = deptResult.data;

    if ("error" in sidebar || !sidebar.data) {
      notFound();
    }
    sidebarData = sidebar.data;
    return (
      <section className="py-40">
        <div className="container flex flex-col items-start gap-12 lg:flex-row">
          {/* Other Services Sidebar */}

          <div className="top-24 w-full rounded-2xl border border-gray-200 bg-white p-6 sm:w-[90vw] lg:sticky lg:w-[45.125rem]">
            <div className="mb-6 flex items-center">
              <div className="mr-1.5 flex h-6 w-6 items-center justify-center">
                {dept?.hoverIcon ? (
                  <Image
                    src={dept.hoverIcon}
                    alt={dept.name}
                    width={25}
                    height={25}
                  />
                ) : dept?.icon ? (
                  <Image
                    src={dept.icon}
                    alt={dept.name}
                    width={20}
                    height={20}
                  />
                ) : null}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Other Services
              </h3>
            </div>
            <ul className="divide-accent/10 space-y-0 divide-y-1">
              {sidebarData.map((department) => {
                const isActive = department.documentId === slug;
                return (
                  <li key={department.id}>
                    <Link
                      href={`/departments/${department.documentId}`}
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
                {dept?.supportGroup?.title}
              </h3>

              <p className="text-body-main text-base">
                {dept?.supportGroup?.description}
              </p>

              <ul className="mt-8 space-y-4">
                {dept?.supportGroup?.bulletPoints?.map((point, index) => (
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

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.7fr] md:gap-0">
                <div className="relative overflow-hidden rounded-2xl md:h-full md:max-h-[500px] md:min-h-[400px] md:w-full">
                  {dept?.facilityImages?.length > 0 && (
                    <Image
                      src={dept.facilityImages[0]}
                      alt={dept.name}
                      className="h-full w-full object-cover"
                      width={600}
                      height={500}
                    />
                  )}
                </div>

                <div className="flex gap-4 md:ml-4 md:h-full md:flex-col md:justify-between">
                  <div className="relative w-full overflow-hidden rounded-2xl md:h-[240px] md:w-full">
                    {dept?.facilityImages?.[1] && (
                      <Image
                        src={dept.facilityImages[1]}
                        alt={dept.name}
                        className="h-full w-full object-cover"
                        width={400}
                        height={240}
                      />
                    )}
                  </div>
                  <div className="relative w-full overflow-hidden rounded-2xl md:h-[240px] md:w-full">
                    {dept?.facilityImages?.[2] && (
                      <Image
                        src={dept.facilityImages[2]}
                        alt={dept.name}
                        className="h-full w-full object-cover"
                        width={400}
                        height={240}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {dept?.facilityImages?.length > 3 &&
                  dept.facilityImages
                    .slice(3, 5)
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
              {Array.isArray(dept.staffedGroup) &&
                dept?.staffedGroup?.map(
                  (block: StaffedGroupBlock, idx: number) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={idx} className="text-body-main mb-2 text-base">
                          {block.children?.map((child) => child.text || null)}
                        </p>
                      );
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={idx} className="mt-4 space-y-4">
                          {block.children?.map((item, liIdx) => (
                            <li
                              key={liIdx}
                              className="text-body-main flex items-start text-base"
                            >
                              <div className="bg-accent/10 mt-0.5 mr-4 flex size-[1.4375rem] shrink-0 justify-center rounded-full">
                                <Image src={CheckMark} alt="Check Mark" />
                              </div>
                              {item.children?.map(
                                (child) => child.text || null,
                              )}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  },
                )}
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
                <p className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-center text-sm text-[#D82519]">
                  No doctors available in Assigned Doctors
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } catch {
    notFound();
  }
}
