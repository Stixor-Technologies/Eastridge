import Building from "@/public/images/wallpaper.jpg";
import BuildingMobile from "@/public/images/wallpaper-mobile.jpg";
import BuildingFront from "@/public/images/building_front.jpg";
import BuildingSide from "@/public/images/opd.jpg";
import BuildingFrontMobile from "@/public/images/building-front-mobile.jpg";
import BuildingSideMobile from "@/public/images/opd-mobile.jpg";

import CTSCAN from "@/public/icons/services/value-additions/ct-scan.svg";
import Culinary from "@/public/icons/services/value-additions/culinary.svg";
import Dialysis from "@/public/icons/services/value-additions/dialysis.svg";
import Endoscopy from "@/public/icons/services/value-additions/endoscopy.svg";
import Labour from "@/public/icons/services/value-additions/labor.svg";
import Modular from "@/public/icons/services/value-additions/modular.svg";
import Neonatal from "@/public/icons/services/value-additions/neonatal.svg";
import Suites from "@/public/icons/services/value-additions/suites.svg";
import Trauma from "@/public/icons/services/value-additions/trauma.svg";
import PathologyV from "@/public/icons/services/value-additions/pathology.svg";
import Pharmacy from "@/public/icons/services/value-additions/pharmacy.svg";

import Mosque from "@/public/icons/services/value-additions/mosque.svg";

import Orhtopedics from "@/public/icons/services/orthopedics.svg";
import Cardiothorcic from "@/public/icons/services/cardiothoracic-sugery.svg";
import Pediatric from "@/public/icons/services/pediatric-surgery.svg";

import Vascular from "@/public/icons/services/vasular.svg";
import Gynae from "@/public/icons/services/gynae.svg";

import Ent from "@/public/icons/services/ent.svg";
import Anesthesia from "@/public/icons/services/anesthesia.svg";
import Ophalmology from "@/public/icons/services/opthalmology.svg";
import Dental from "@/public/icons/services/dental.svg";

import GeneralSurgeryIcon from "@/public/icons/services/general-surgery.svg";
import NeuroSurgeryIcon from "@/public/icons/services/neuro-surgery.svg";
import SpinalSurgeryIcon from "@/public/icons/services/spinal-surgery.svg";

import Medicine from "@/public/icons/services/medicine.svg";
import Cardiology from "@/public/icons/services/cardiology.svg";
import Gastentrology from "@/public/icons/services/gastentrology.svg";
import Pulomonology from "@/public/icons/services/pulomonology.svg";
import Neurology from "@/public/icons/services/neurology.svg";
import Nephrology from "@/public/icons/services/nephrology.svg";
import Dermatology from "@/public/icons/services/dermatology.svg";
import Rheumatologt from "@/public/icons/services/rheumatologt.svg";
import Physciatrist from "@/public/icons/services/phstiotherapy.svg";
import Neonotology from "@/public/icons/services/neonotology.svg";
import Pediatrics from "@/public/icons/services/pediatrics.svg";
import Phstiotherapy from "@/public/icons/services/physciatrist.svg";
import Endocronology from "@/public/icons/services/endocronology.svg";

import Pathology from "@/public/icons/services/pathology.svg";
import BloodBank from "@/public/icons/services/blood-bank.svg";
import RadioDiagnosis from "@/public/icons/services/radio-diagnostics.svg";

import Marker from "@/public/icons/marker.svg";
//import Email from "@/public/icons/email.svg";
import Call from "@/public/icons/call.svg";

// Import icons from department.ts for unified structure
import Safety from "@/public/icons/services/safety.svg";
import Signal from "@/public/icons/services/signal.svg";
import Zoom from "@/public/icons/services/zoom-in.svg";
import Book from "@/public/icons/services/book.svg";
import Heart from "@/public/icons/services/heart.svg";

import MDFF from "@/public/images/team/md.jpeg";
import MDMedical from "@/public/images/team/mdmedical.jpg";

import Instagram from "@/public/icons/instagram.svg";
import Facebook from "@/public/icons/facebook.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import YouTube from "@/public/icons/youtube.svg";
import InstagramHover from "@/public/icons/instagram-hover.svg";
import FacebookHover from "@/public/icons/facebook-hover.svg";
import LinkedInHover from "@/public/icons/linkedin-hover.svg";
import YouTubeHover from "@/public/icons/youtube-hover.svg";

import MarkerBlack from "@/public/icons/marker-black.svg";
import CallBlack from "@/public/icons/call-black.svg";
//import Sms from "@/public/icons/sms.svg";

import CEO from "@/public/images/team/ceo.jpg";
import COO from "@/public/images/team/coo.jpg";
import CNO from "@/public/images/team/cno.jpg";
import HCAdmin from "@/public/images/team/hc-admin.jpg";
import SMStaff from "@/public/images/team/sm-staff.jpg";

const MAP_KEY = process.env["MAP_API"];

const MENU = [
  { id: "/#home", label: "Home", scrollOnPage: false },
  { id: "/#about", label: "About", scrollOnPage: false },
  { id: "/#services", label: "Services", scrollOnPage: false },
  { id: "/doctor-listing", label: "Doctors", scrollOnPage: false },
  { id: "/departments", label: "Departments", scrollOnPage: false },
  { id: "/#team", label: "Team", scrollOnPage: false },
  {
    id: "https://careers.eastridgeprimecare.com.pk/",
    label: "Careers",
    scrollOnPage: false,
  },
  { id: "/#contact-us", label: "Contact Us", scrollOnPage: false },
];

const HERO_SLIDER_IMAGES = [
  {
    id: "building-front",
    src: BuildingFront,
    mobileSrc: BuildingFrontMobile,
    alt: "Building Front",
  },
  {
    id: "building-side",
    src: BuildingSide,
    mobileSrc: BuildingSideMobile,
    alt: "Building Side",
  },
  {
    id: "building",
    src: Building,
    mobileSrc: BuildingMobile,
    alt: "Building",
  },
];

const VALUE_ADDITIONS = [
  {
    icon: Modular,
    title: "Modular Operation Rooms & Critical Care Areas",
    description: "",
  },

  {
    icon: Labour,
    title: "Modular Labor Rooms",
    description: "",
  },

  {
    icon: Neonatal,
    title: "Neonatal Intensive Care ",
    description: "",
  },

  {
    icon: Dialysis,
    title: "Dialysis Center",
    description: "",
  },

  {
    icon: Endoscopy,
    title: "Endoscopy & ERCP",
    description: "",
  },

  {
    icon: Suites,
    title: "Private Suites",
    description: "",
  },

  {
    icon: Trauma,
    title: "Customized 24/7 Trauma & Emergency Services under one roof",
    description: "",
  },
  {
    icon: CTSCAN,
    title: "CT Scan, MRI & Interventional Radiology",
    description: "",
  },
  {
    icon: PathologyV,
    title: "Pathology Services in collaboration with our partners at IDC",
    description: "",
  },
  {
    icon: Pharmacy,
    title: "Comprehensive Pharmacy Services with our partners MedAsk",
    description: "",
  },
  {
    icon: Culinary,
    title:
      "Patient culinary services and Cafe under supervision of professional nutritionists",
    description: "",
  },
  {
    icon: Mosque,
    title: "Comfortable Parking Areas & Mosque",
    description: "",
  },
];

// Enhanced unified structure for all departments and services
const MEDICAL_SERVICES = [
  {
    id: "surgery-allied",
    label: "Surgery & Allied",
    slug: "surgery-allied",
    title: "Surgery & Allied",
    description:
      "Comprehensive Surgical Care Across Multiple Specialties, Delivered By Experienced Surgeons Using Advanced Techniques And Equipment.",
    icon: Zoom,
    items: [
      {
        icon: GeneralSurgeryIcon,
        title: "General Surgery",
        slug: "general-surgery",
      },
      {
        icon: NeuroSurgeryIcon,
        title: "Neuro Surgery",
        slug: "neuro-surgery",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Spinal Surgery",
        slug: "spinal-surgery",
      },
      {
        icon: Orhtopedics,
        title: "Orthopedics",
        slug: "orthopedics",
      },
      {
        icon: Cardiothorcic,
        title: "Cardiothoracic Surgery",
        slug: "cardiothoracic-surgery",
      },
      {
        icon: Pediatric,
        title: "Pediatric Surgery",
        slug: "pediatric-surgery",
      },
      {
        icon: Pediatric,
        title: "Plastic Surgery",
        slug: "plastic-surgery",
      },
      {
        icon: Vascular,
        title: "Vascular Surgery",
        slug: "vascular-surgery",
      },
      {
        icon: Gynae,
        title: "Gynae & Obs",
        slug: "gynae-obs",
      },
      {
        icon: Ent,
        title: "ENT",
        slug: "ent",
      },
      {
        icon: Anesthesia,
        title: "Anesthesia",
        slug: "anesthesia",
      },
      {
        icon: Ophalmology,
        title: "Ophthalmology",
        slug: "ophthalmology",
      },
      {
        icon: Dental,
        title: "Dental Surgery",
        slug: "dental-surgery",
      },
    ],
  },

  {
    id: "medicine-allied",
    label: "Medicine & Allied",
    slug: "medicine-allied",
    title: "Medicine & Allied",
    description:
      "Expert Medical Care For Chronic And Acute Conditions, Supported By A Team Of Skilled Physicians Across Various Internal Medicine Fields.",
    icon: Heart,
    items: [
      {
        icon: Medicine,
        title: "Internal Medicine",
        slug: "internal-medicine",
      },
      {
        icon: Cardiology,
        title: "Cardiology & EP",
        slug: "cardiology-ep",
      },
      {
        icon: Gastentrology,
        title: "Gastronenterology",
        slug: "gastronenterology",
      },
      {
        icon: Pulomonology,
        title: "Pulmonology",
        slug: "pulmonology",
      },
      {
        icon: Neurology,
        title: "Neurology",
        slug: "neurology",
      },
      {
        icon: Nephrology,
        title: "Nephrology",
        slug: "nephrology",
      },
      {
        icon: Rheumatologt,
        title: "Rheumatology",
        slug: "rheumatology",
      },
      {
        icon: Endocronology,
        title: "Endocrinology",
        slug: "endocrinology",
      },
      {
        icon: Physciatrist,
        title: "Pyschiatry",
        slug: "psychiatry",
      },
      {
        icon: Dermatology,
        title: "Dermatology / Cosmotology",
        slug: "dermatology-cosmotology",
      },
      {
        icon: Pediatrics,
        title: "Pediatrics",
        slug: "pediatrics",
      },
      {
        icon: Neonotology,
        title: "Neonatology",
        slug: "neonatology",
      },
      {
        icon: Phstiotherapy,
        title: "Physiotherapy",
        slug: "physiotherapy",
      },
    ],
  },

  {
    id: "diagnostics-allied",
    label: "Diagnostics Allied",
    slug: "diagnostics-allied",
    title: "Diagnostics Allied",
    description:
      "Accurate And Timely Diagnostics Including Imaging, Lab Tests, And Screenings To Support Effective Diagnosis And Treatment Planning.",
    icon: Book,
    items: [
      {
        icon: Pathology,
        title: "Pathology Services",
        slug: "pathology-services",
      },
      {
        icon: BloodBank,
        title: "Blood Bank",
        slug: "blood-bank",
      },
      {
        icon: RadioDiagnosis,
        title: "Radio Diagnostics",
        slug: "radio-diagnostics",
      },
    ],
  },
];

// Support Services (Non-Medical)
const SUPPORT_SERVICES = [
  {
    slug: "emergency-services-trauma",
    title: "Emergency Services And Trauma Capabilities",
    description: "24/7 critical care for emergencies and trauma cases.",
    icon: Safety,
    items: [],
  },
  {
    slug: "diagnostic-imaging",
    title: "Diagnostic Imaging Services",
    subtitle: "(MRI, CT, X-Ray, Etc.)",
    description: "Advanced MRI, CT, X-ray, and more for accurate diagnostics.",
    icon: Modular,
    items: [],
  },
  {
    slug: "laboratory-services",
    title: "Laboratory Services And Testing Capabilities",
    description: "Fast, reliable testing for precise diagnosis.",
    icon: Signal,
    items: [],
  },
  {
    slug: "pharmacy-services",
    title: "Pharmacy Services",
    description: "On-site pharmacy with timely medication support.",
    icon: Mosque,
    items: [],
  },
];

// Patient Services
const PATIENT_SERVICES = [
  {
    slug: "admission-discharge",
    title: "Admission And Discharge Processes",
    description:
      "Streamlined processes ensuring smooth patient entry and timely discharge.",
    icon: Safety,
    items: [],
  },
  {
    slug: "visitor-policies",
    title: "Visitor Policies And Guidelines",
    description:
      "Visitors allowed during set hours. Maintain hygiene and respect privacy.",
    icon: Modular,
    items: [],
  },
  {
    slug: "patient-rights-responsibilities",
    title: "Patient Rights & Responsibilities",
    description:
      "Empowering patients with clear rights and shared responsibilities for their care.",
    icon: Signal,
    items: [],
  },
  {
    slug: "language-interpretation",
    title: "Language interpretation services",
    subtitle: "(If applicable)",
    description:
      "Interpretation support for effective communication (if needed).",
    icon: Modular,
    items: [],
  },
  {
    slug: "special-populations",
    title: "Special patient populations served (pediatric, geriatric, etc.)",
    description:
      "Care tailored for pediatric, geriatric, and other specific patient groups.",
    icon: Signal,
    items: [],
  },
];

const CONTACT_CARDS = [
  {
    icon: Marker,
    title: "Our Address",
    lines: "Foundation Medical Complex, Jhelum Road, Rawalpindi",
    type: "address",
    link: "https://maps.app.goo.gl/cKVxohzwMEUxqd6bA",
  },
  /*  {
    icon: Email,
    title: "Email Us",
    lines: "admin@eastridge.com.pk",
    type: "email",
  },
*/
  {
    icon: Call,
    title: "Call Us",
    lines: "(051) 884-4800",
    type: "phone",
  },
];

const MANAGEMENT_TEAM = [
  {
    name: "Dr. Naima Nawaz",
    title: "Chief Operating Officer",
    image: COO,
    bio: "",
  },
  {
    name: "Dr. Adeel Nawaz",
    title: "Head of Patient Affairs",
    image: SMStaff,
    bio: "",
  },
  {
    name: "Saeeda Naweed",
    title: "Chief Nursing Officer",
    image: CNO,
    bio: "",
  },
  {
    name: "Dr. Raheel Chishti ",
    title: "Head of Hospital Administration",
    image: HCAdmin,
    bio: "",
  },
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    hoverIcon: InstagramHover,
    id: "instagram",
    href: "https://www.instagram.com/eastridge.primecare/",
  },
  {
    icon: Facebook,
    hoverIcon: FacebookHover,
    id: "facebook",
    href: "https://www.facebook.com/profile.php?id=61578321713871",
  },
  {
    icon: LinkedIn,
    hoverIcon: LinkedInHover,
    id: "linkedin",
    href: "https://www.linkedin.com/company/eastridgeprimecare/",
  },
  {
    icon: YouTube,
    hoverIcon: YouTubeHover,
    id: "youtube",
    href: "https://www.youtube.com/@Eastridge.Primecare",
  },
];

const FOOTER_CONTACTS = [
  {
    icon: MarkerBlack,
    value: "Foundation Medical Complex, Jhelum Road, Rawalpindi",
    type: "address",
    link: "https://maps.app.goo.gl/mg3YhrmrDtpduuFs8",
  },
  {
    icon: CallBlack,
    value: "(051) 884-4800",
    type: "phone",
    link: "tel:+92518844800",
  },
  /*{
    icon: Sms,
    value: "admin@eastridge.com.pk",
    type: "email",
    link: "mailto:admin@eastridge.com.pk",
  },
  */
];

const LEADERSHIP_TEAM = [
  {
    name: "Lt Gen Anwar Ali Hyder, HI(M), (Retd)",
    title: "MD & CEO Fauji Foundation",
    image: MDFF,
    bio: "During the discussion, each participant provided updates on their assigned tasks, highlighting completed milestones and identifying areas requiring further attention. Several challenges were raised, including delays due to external dependencies and resource constraints. The team collaboratively explored solutions, such as adjusting timelines, reallocating responsibilities, and escalating specific issues for quicker resolution. There was a strong focus on improving internal coordination and ensuring that deliverables remain on track.",
    experience: "20 years",
    certificates: "Robert L. Nobel Price, Edison Awards",
    skills: "Working with both children and adults",
    location: "380 Albert ST, Melbourne",
    phone: "+1 (230)-369-155-23",
    email: "garrison@joan.com",
  },
  {
    name: "Lt Gen Mohsin Qureshi, HI(M), (Retd)",
    title: "MD Medical Fauji Foundation",
    image: MDMedical,
    bio: "Adrianna specializes in digital marketing and team leadership.",
    experience: "15 years",
    certificates: "Digital Marketing Pro, Edison Awards",
    skills: "Digital strategy, team leadership",
    location: "380 Albert ST, Melbourne",
    phone: "+1 (230)-369-155-24",
    email: "adrianna@joan.com",
  },
  {
    name: "Dr. Zafar Yousaf",
    title: "CEO Eastridge Primecare",
    image: CEO,
    bio: "Adrianna specializes in digital marketing and team leadership.",
    experience: "15 years",
    certificates: "Digital Marketing Pro, Edison Awards",
    skills: "Digital strategy, team leadership",
    location: "380 Albert ST, Melbourne",
    phone: "+1 (230)-369-155-24",
    email: "adrianna@joan.com",
  },
];

// Utility Functions for unified department access
export const getAllServices = () => {
  return [...MEDICAL_SERVICES, ...SUPPORT_SERVICES, ...PATIENT_SERVICES];
};

export const getServiceBySlug = (slug: string) => {
  // Search through all services at once using getAllServices
  return getAllServices().find((service) => service?.slug === slug);
};

export const getServicesByCategory = (
  category: "medical" | "support" | "patient",
) => {
  switch (category) {
    case "medical":
      return MEDICAL_SERVICES; // Medical services are in SERVICES_OFFERED
    case "support":
      return SUPPORT_SERVICES;
    case "patient":
      return PATIENT_SERVICES;
    default:
      return [];
  }
};

// export const getDepartmentItems = (slug: string) => {
//   const service = getServiceBySlug(slug);
//   return service;
// };

// Backward compatibility - alias for medical services
// export { SERVICES_OFFERED as MEDICAL_SERVICES };

export {
  MENU,
  HERO_SLIDER_IMAGES,
  MEDICAL_SERVICES,
  SUPPORT_SERVICES,
  PATIENT_SERVICES,
  VALUE_ADDITIONS,
  MAP_KEY,
  CONTACT_CARDS,
  MANAGEMENT_TEAM,
  SOCIAL_LINKS,
  FOOTER_CONTACTS,
  LEADERSHIP_TEAM,
};
