export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: "medical" | "support" | "patient";
}

export const SERVICES: ServiceDetail[] = [
  // Medical Services
  {
    slug: "surgery-allied",
    title: "Surgery & Allied",
    description:
      "Comprehensive surgical care across multiple specialties, delivered by experienced surgeons using advanced techniques and equipment.",
    category: "medical",
  },
  {
    slug: "diagnostics-allied",
    title: "Diagnostics Allied",
    description:
      "Expert medical care for chronic and acute conditions, supported by a team of skilled physicians across various internal medicine fields.",
    category: "medical",
  },
  {
    slug: "medicine-allied",
    title: "Medicine & Allied",
    description:
      "Accurate and timely diagnostics including imaging, lab tests, and screenings to support effective diagnosis and treatment planning.",
    category: "medical",
  },
  // Support Services
  {
    slug: "emergency-services-trauma",
    title: "Emergency Services And Trauma Capabilities",
    description: "24/7 critical care for emergencies and trauma cases.",
    category: "support",
  },
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging Services",
    subtitle: "(MRI, CT, X-Ray, Etc.)",
    description: "Advanced MRI, CT, X-ray, and more for accurate diagnostics.",
    category: "support",
  },
  {
    slug: "laboratory-services",
    title: "Laboratory Services And Testing Capabilities",
    description: "Fast, reliable testing for precise diagnosis.",
    category: "support",
  },
  {
    slug: "pharmacy-services",
    title: "Pharmacy Services",
    description: "On-site pharmacy with timely medication support.",
    category: "support",
  },
  // Patient Services
  {
    slug: "admission-discharge",
    title: "Admission And Discharge Processes",
    description:
      "Streamlined processes ensuring smooth patient entry and timely discharge.",
    category: "patient",
  },
  {
    slug: "visitor-policies",
    title: "Visitor Policies And Guidelines",
    description:
      "Visitors allowed during set hours. Maintain hygiene and respect privacy.",
    category: "patient",
  },
  {
    slug: "patient-rights-responsibilities",
    title: "Patient Rights & Responsibilities",
    description:
      "Empowering patients with clear rights and shared responsibilities for their care.",
    category: "patient",
  },
  {
    slug: "language-interpretation",
    title: "Language Interpretation Services",
    subtitle: "(If applicable)",
    description: "Interpretation support for effective communication.",
    category: "patient",
  },
  {
    slug: "special-populations",
    title: "Special Patient Populations",
    description:
      "Care tailored for pediatric, geriatric, and other specific patient groups.",
    category: "patient",
  },
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return SERVICES.find((service) => service.slug === slug);
};

export const getServicesByCategory = (
  category: "medical" | "support" | "patient",
): ServiceDetail[] => {
  return SERVICES.filter((service) => service.category === category);
};
