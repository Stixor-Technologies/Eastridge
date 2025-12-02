"use client";

import Link from "next/link";
import {
  MedicalServiceIcon1,
  MedicalServiceIcon2,
  MedicalServiceIcon3,
  SupportServiceIcon1,
  SupportServiceIcon2,
  SupportServiceIcon3,
  GearServiceIcon,
  PatientServiceIcon1,
  PatientServiceIcon2,
  PatientServiceIcon3,
  PatientServiceIcon4,
} from "./ServiceIcons";

interface Service {
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  featured?: boolean;
  slug: string;
}

const MEDICAL_SERVICES: Service[] = [
  {
    title: "Surgery & Allied",
    slug: "surgery-allied",
    description:
      "Comprehensive Surgical Care Across Multiple Specialties, Delivered By Experienced Surgeons Using Advanced Techniques And Equipment.",
    link: "Discover More",
  },
  {
    title: "Diagnostics Allied",
    slug: "diagnostics-allied",
    description:
      "Expert Medical Care For Chronic And Acute Conditions, Supported By A Team Of Skilled Physicians Across Various Internal Medicine Fields.",
    link: "Discover More",
    featured: true,
  },
  {
    title: "Medicine & Allied",
    slug: "medicine-allied",
    description:
      "Accurate And Timely Diagnostics Including Imaging, Lab Tests, And Screenings To Support Effective Diagnosis And Treatment Planning.",
    link: "Discover More",
  },
];

const SUPPORT_SERVICES: Service[] = [
  {
    title: "Emergency Services And Trauma Capabilities",
    slug: "emergency-services-trauma",
    description: "24/7 critical care for emergencies and trauma cases.",
  },
  {
    title: "Diagnostic Imaging Services",
    slug: "diagnostic-imaging",
    subtitle: "(MRI, CT, X-Ray, Etc.)",
    description: "Advanced MRI, CT, X-ray, and more for accurate diagnostics.",
  },
  {
    title: "Laboratory Services And Testing Capabilities",
    slug: "laboratory-services",
    description: "Fast, reliable testing for precise diagnosis.",
  },
  {
    title: "Pharmacy Services",
    slug: "pharmacy-services",
    description: "On-site pharmacy with timely medication support.",
  },
];

const PATIENT_SERVICES: Service[] = [
  {
    title: "Admission And Discharge Processes",
    slug: "admission-discharge",
    description:
      "Streamlined processes ensuring smooth patient entry and timely discharge.",
  },
  {
    title: "Visitor Policies And Guidelines",
    slug: "visitor-policies",
    description:
      "Visitors allowed during set hours. Maintain hygiene and respect privacy. Access may be limited in critical areas.",
  },
  {
    title: "Patient Rights & Responsibilities",
    slug: "patient-rights-responsibilities",
    description:
      "Empowering patients with clear rights and shared responsibilities for their care.",
  },
  {
    title: "Language interpretation services",
    slug: "language-interpretation",
    subtitle: "(If applicable)",
    description:
      "Interpretation support for effective communication (if needed).",
  },
  {
    title: "Special patient populations served (pediatric, geriatric, etc.)",
    slug: "special-populations",
    description:
      "Care tailored for pediatric, geriatric, and other specific patient groups.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 px-4 py-16">
      {/* Medical Services Section */}
      <section className="container mx-auto mb-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-normal text-gray-900 md:text-5xl">
            Medical Services
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 md:text-right">
            Eastridge Prime Care is a multi-specialty Hospital envisioning in
            the near future to become a Teaching Hospital affiliated with
            Foundation University Medical College (FUMC) and Foundation
            University College of Nursing (FUCN). Initially, following clinical
            departments will be established:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {MEDICAL_SERVICES.map((service, idx) => (
            <Link
              key={service.title}
              href={`/department/${service.slug}`}
              className="relative overflow-hidden rounded-3xl p-8 transition-all"
              style={{
                background: "white",
                color: "#1a202c",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D82519";
                e.currentTarget.style.color = "white";
                Array.from(
                  e.currentTarget.querySelectorAll("h3, p, span, button"),
                ).forEach((el) => {
                  (el as HTMLElement).style.color = "white";
                });
                // Icon circle
                const iconDiv = e.currentTarget.querySelector(
                  ".medical-service-icon",
                );
                if (iconDiv) {
                  (iconDiv as HTMLElement).style.background = "white";
                  (iconDiv as HTMLElement).style.color = "#D82519";
                  // Change SVG path fill to red
                  const svgPaths = iconDiv.querySelectorAll("path");
                  svgPaths.forEach((path) =>
                    (path as SVGPathElement).setAttribute("fill", "#D82519"),
                  );
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1a202c";
                Array.from(
                  e.currentTarget.querySelectorAll("h3, p, span, button"),
                ).forEach((el) => {
                  (el as HTMLElement).style.color = "#1a202c";
                });
                // Icon circle
                const iconDiv = e.currentTarget.querySelector(
                  ".medical-service-icon",
                );
                if (iconDiv) {
                  (iconDiv as HTMLElement).style.background = "#f3f4f6";
                  (iconDiv as HTMLElement).style.color = "#1a202c";
                  // Change SVG path fill to black
                  const svgPaths = iconDiv.querySelectorAll("path");
                  svgPaths.forEach((path) =>
                    (path as SVGPathElement).setAttribute(
                      "fill",
                      idx === 0 ? "#292D32" : "#333333",
                    ),
                  );
                }
              }}
            >
              {/* Icon for the first and second box only */}
              <div
                className="medical-service-icon mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: "#f3f4f6",
                  color: "#1a202c",
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                {idx === 0 && <MedicalServiceIcon1 />}
                {idx === 1 && <MedicalServiceIcon2 />}
                {idx === 2 && <MedicalServiceIcon3 />}
              </div>

              <h3
                className="mb-3 text-xl font-semibold"
                style={{ color: "inherit" }}
              >
                {service.title}
              </h3>
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: "inherit" }}
              >
                {service.description}
              </p>

              {service.link && (
                <button
                  className="inline-flex items-center gap-2 text-sm font-medium transition-transform"
                  style={{
                    background: "transparent",
                    color: "inherit",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {service.link}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Support Services Section */}
      <section className="container mx-auto mb-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-normal text-gray-900 md:text-5xl">
            Support Services
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 md:text-right">
            Essential non-clinical services including pharmacy, nursing,
            rehabilitation, housekeeping, and administration — all ensuring
            smooth, patient-focused hospital operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SUPPORT_SERVICES.map((service, idx) => (
            <Link
              key={service.title}
              href={`/department/${service.slug}`}
              className="rounded-3xl p-6 transition-all"
              style={{
                background: "white",
                color: "#1a202c",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D82519";
                e.currentTarget.style.color = "white";
                Array.from(
                  e.currentTarget.querySelectorAll("h3, p, span"),
                ).forEach((el) => {
                  (el as HTMLElement).style.color = "white";
                });
                const iconDiv = e.currentTarget.querySelector(
                  ".support-service-icon",
                );
                if (iconDiv) {
                  (iconDiv as HTMLElement).style.background = "white";
                  (iconDiv as HTMLElement).style.color = "#D82519";
                  // Only fill changes color for gear icon
                  if (idx === 1) {
                    const svgPaths = iconDiv.querySelectorAll("path");
                    svgPaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute("fill", "#D82519"),
                    );
                  } else {
                    // Previous logic for other icons
                    const svgStrokePaths = iconDiv.querySelectorAll(
                      "path.stroke-dynamic",
                    );
                    svgStrokePaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute(
                        "stroke",
                        "#D82519",
                      ),
                    );
                    const svgFillPaths = iconDiv.querySelectorAll(
                      "path:not(.stroke-dynamic)",
                    );
                    if (idx === 3) {
                      svgFillPaths.forEach((path) =>
                        (path as SVGPathElement).setAttribute("fill", "white"),
                      );
                    } else {
                      svgFillPaths.forEach((path) =>
                        (path as SVGPathElement).setAttribute(
                          "fill",
                          "#D82519",
                        ),
                      );
                    }
                  }
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1a202c";
                Array.from(
                  e.currentTarget.querySelectorAll("h3, p, span"),
                ).forEach((el) => {
                  (el as HTMLElement).style.color = "#1a202c";
                });
                const iconDiv = e.currentTarget.querySelector(
                  ".support-service-icon",
                );
                if (iconDiv) {
                  (iconDiv as HTMLElement).style.background = "#f3f4f6";
                  (iconDiv as HTMLElement).style.color = "#1a202c";
                  if (idx === 1) {
                    const svgPaths = iconDiv.querySelectorAll("path");
                    svgPaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute("fill", "#12141D"),
                    );
                  } else {
                    const svgStrokePaths = iconDiv.querySelectorAll(
                      "path.stroke-dynamic",
                    );
                    svgStrokePaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute(
                        "stroke",
                        "#12141D",
                      ),
                    );
                    const svgFillPaths = iconDiv.querySelectorAll(
                      "path:not(.stroke-dynamic)",
                    );
                    if (idx === 3) {
                      svgFillPaths.forEach((path) =>
                        (path as SVGPathElement).setAttribute("fill", "white"),
                      );
                    } else {
                      svgFillPaths.forEach((path) =>
                        (path as SVGPathElement).setAttribute(
                          "fill",
                          idx === 0
                            ? "#12141D"
                            : idx === 2
                              ? "none"
                              : "#12141D",
                        ),
                      );
                    }
                  }
                }
              }}
            >
              {/* Icon for the first, second, third, and fourth box only */}
              <div
                className="support-service-icon mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: "#f3f4f6",
                  color: "#1a202c",
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                {idx === 0 && <SupportServiceIcon1 />}
                {idx === 1 && <GearServiceIcon />}
                {idx === 2 && <SupportServiceIcon2 />}
                {idx === 3 && <SupportServiceIcon3 />}
              </div>

              <h3
                className="mb-1 text-base font-semibold"
                style={{ color: "inherit" }}
              >
                {service.title}
                {service.subtitle && (
                  <span
                    className="block text-sm font-normal"
                    style={{ color: "inherit", opacity: 0.9 }}
                  >
                    {service.subtitle}
                  </span>
                )}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "inherit", opacity: 0.9 }}
              >
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Patient Services Section */}
      <section className="container mx-auto">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-normal text-gray-900 md:text-5xl">
            Patient Services
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 md:text-right">
            Your path to better health begins in just a few easy steps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PATIENT_SERVICES.map((service, idx) => (
            <Link
              key={service.title}
              href={`/department/${service.slug}`}
              className="rounded-3xl p-6 transition-all"
              style={{
                background: "white",
                color: "#1a202c",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D82519";
                e.currentTarget.style.color = "white";
                Array.from(
                  e.currentTarget.querySelectorAll("h3, p, span"),
                ).forEach((el) => {
                  (el as HTMLElement).style.color = "white";
                });
                const iconDiv = e.currentTarget.querySelector(
                  ".patient-service-icon",
                );
                if (iconDiv) {
                  (iconDiv as HTMLElement).style.background = "white";
                  (iconDiv as HTMLElement).style.color = "#D82519";
                  // Only fill changes color for gear icon
                  if (idx === 1 || idx === 3) {
                    const svgPaths = iconDiv.querySelectorAll("path");
                    svgPaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute("fill", "#D82519"),
                    );
                  } else {
                    // Previous logic for other icons
                    const svgStrokePaths = iconDiv.querySelectorAll(
                      "path.stroke-dynamic",
                    );
                    svgStrokePaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute(
                        "stroke",
                        "#D82519",
                      ),
                    );
                    const svgFillPaths = iconDiv.querySelectorAll(
                      "path:not(.stroke-dynamic)",
                    );
                    svgFillPaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute("fill", "#D82519"),
                    );
                  }
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1a202c";
                Array.from(
                  e.currentTarget.querySelectorAll("h3, p, span"),
                ).forEach((el) => {
                  (el as HTMLElement).style.color = "#1a202c";
                });
                const iconDiv = e.currentTarget.querySelector(
                  ".patient-service-icon",
                );
                if (iconDiv) {
                  (iconDiv as HTMLElement).style.background = "#f3f4f6";
                  (iconDiv as HTMLElement).style.color = "#1a202c";
                  if (idx === 1 || idx === 3) {
                    const svgPaths = iconDiv.querySelectorAll("path");
                    svgPaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute("fill", "#12141D"),
                    );
                  } else {
                    const svgStrokePaths = iconDiv.querySelectorAll(
                      "path.stroke-dynamic",
                    );
                    svgStrokePaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute(
                        "stroke",
                        "#12141D",
                      ),
                    );
                    const svgFillPaths = iconDiv.querySelectorAll(
                      "path:not(.stroke-dynamic)",
                    );
                    svgFillPaths.forEach((path) =>
                      (path as SVGPathElement).setAttribute(
                        "fill",
                        idx === 0
                          ? "#12141D"
                          : idx === 2 || idx === 4
                            ? "none"
                            : "#12141D",
                      ),
                    );
                  }
                }
              }}
            >
              {/* Icon for the first, second, third, fourth, and fifth box only */}
              <div
                className="patient-service-icon mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: "#f3f4f6",
                  color: "#1a202c",
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                {idx === 0 && <PatientServiceIcon1 />}
                {idx === 1 && <PatientServiceIcon2 />}
                {idx === 2 && <PatientServiceIcon3 />}
                {idx === 3 && <PatientServiceIcon4 />}
                {idx === 4 && <PatientServiceIcon3 />}
              </div>

              <h3
                className="mb-1 text-base font-semibold"
                style={{ color: "inherit" }}
              >
                {service.title}
                {service.subtitle && (
                  <span
                    className="block text-sm font-normal"
                    style={{ color: "inherit", opacity: 0.9 }}
                  >
                    {service.subtitle}
                  </span>
                )}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "inherit", opacity: 0.9 }}
              >
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
