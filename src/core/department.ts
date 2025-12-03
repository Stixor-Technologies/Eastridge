import { StaticImageData } from "next/image";
import Modular from "@/public/icons/services/value-additions/modular.svg";
import Mosque from "@/public/icons/services/value-additions/mosque.svg";
import Safety from "@/public/icons/services/safety.svg";
import Signal from "@/public/icons/services/signal.svg";
import Zoom from "@/public/icons/services/zoom-in.svg";
import Book from "@/public/icons/services/book.svg";
import Heart from "@/public/icons/services/heart.svg";

// Service Detail Interface
export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: "medical" | "support" | "patient";
  icon?: StaticImageData;
}

// Medical Services (Main Departments)
export const MEDICAL_SERVICES: ServiceDetail[] = [
  {
    slug: "surgery-allied",
    title: "Surgery & Allied",
    description:
      "Comprehensive Surgical Care Across Multiple Specialties, Delivered By Experienced Surgeons Using Advanced Techniques And Equipment.",
    category: "medical",
    icon: Zoom,
  },
  {
    slug: "diagnostics-allied",
    title: "Diagnostics Allied",
    description:
      "Expert Medical Care For Chronic And Acute Conditions, Supported By A Team Of Skilled Physicians Across Various Internal Medicine Fields.",
    category: "medical",
    icon: Book,
  },
  {
    slug: "medicine-allied",
    title: "Medicine & Allied",
    description:
      "Accurate And Timely Diagnostics Including Imaging, Lab Tests, And Screenings To Support Effective Diagnosis And Treatment Planning.",
    category: "medical",
    icon: Heart,
  },
];

// Support Services Data
export const SUPPORT_SERVICES: ServiceDetail[] = [
  {
    slug: "emergency-services-trauma",
    title: "Emergency Services And Trauma Capabilities",
    description: "24/7 critical care for emergencies and trauma cases.",
    category: "support",
    icon: Safety,
  },
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging Services",
    subtitle: "(MRI, CT, X-Ray, Etc.)",
    description: "Advanced MRI, CT, X-ray, and more for accurate diagnostics.",
    category: "support",
    icon: Modular,
  },
  {
    slug: "laboratory-services",
    title: "Laboratory Services And Testing Capabilities",
    description: "Fast, reliable testing for precise diagnosis.",
    category: "support",
    icon: Signal,
  },
  {
    slug: "pharmacy-services",
    title: "Pharmacy Services",
    description: "On-site pharmacy with timely medication support.",
    category: "support",
    icon: Mosque,
  },
];

// Patient Services Data
export const PATIENT_SERVICES: ServiceDetail[] = [
  {
    slug: "admission-discharge",
    title: "Admission And Discharge Processes",
    description:
      "Streamlined processes ensuring smooth patient entry and timely discharge.",
    category: "patient",
    icon: Safety,
  },
  {
    slug: "visitor-policies",
    title: "Visitor Policies And Guidelines",
    description:
      "Visitors allowed during set hours. Maintain hygiene and respect privacy.",
    category: "patient",
    icon: Modular,
  },
  {
    slug: "patient-rights-responsibilities",
    title: "Patient Rights & Responsibilities",
    description:
      "Empowering patients with clear rights and shared responsibilities for their care.",
    category: "patient",
    icon: Signal,
  },
  {
    slug: "language-interpretation",
    title: "Language interpretation services",
    subtitle: "(If applicable)",
    description:
      "Interpretation support for effective communication (if needed).",
    category: "patient",
    icon: Modular,
  },
  {
    slug: "special-populations",
    title: "Special patient populations served (pediatric, geriatric, etc.)",
    description:
      "Care tailored for pediatric, geriatric, and other specific patient groups.",
    category: "patient",
    icon: Signal,
  },
];

// Utility Functions
export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  // Search in medical services
  const medicalService = MEDICAL_SERVICES.find(
    (service) => service.slug === slug,
  );
  if (medicalService) return medicalService;

  // Search in support services
  const supportService = SUPPORT_SERVICES.find(
    (service) => service.slug === slug,
  );
  if (supportService) return supportService;

  // Search in patient services
  const patientService = PATIENT_SERVICES.find(
    (service) => service.slug === slug,
  );
  if (patientService) return patientService;

  return undefined;
};

export const getServicesByCategory = (
  category: "medical" | "support" | "patient",
): ServiceDetail[] => {
  switch (category) {
    case "medical":
      return MEDICAL_SERVICES;
    case "support":
      return SUPPORT_SERVICES;
    case "patient":
      return PATIENT_SERVICES;
    default:
      return [];
  }
};

export const getAllServices = (): ServiceDetail[] => {
  return [...MEDICAL_SERVICES, ...SUPPORT_SERVICES, ...PATIENT_SERVICES];
};
