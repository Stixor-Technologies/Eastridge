import Building from "@/public/images/building.png";
import BuildingMobile from "@/public/images/building-mobile.png";

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
import Pediactric from "@/public/icons/services/pediatric-surgery.svg";

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
import Email from "@/public/icons/email.svg";
import Call from "@/public/icons/call.svg";

import MDFF from "@/public/images/team/md.jpeg";
import MDMedical from "@/public/images/team/md-medical.jpg";

import Instagram from "@/public/icons/instagram.svg";
import Facebook from "@/public/icons/facebook.svg";
import X from "@/public/icons/x.svg";
import YouTube from "@/public/icons/youtube.svg";

import MarkerBlack from "@/public/icons/marker-black.svg";
import CallBlack from "@/public/icons/call-black.svg";
import Sms from "@/public/icons/sms.svg";

import CEO from "@/public/images/team/ceo.png";
import COO from "@/public/images/team/coo.png";
import CNO from "@/public/images/team/cno.png";
import HCAdmin from "@/public/images/team/hc-admin.png";

const MAP_KEY = process.env["MAP_API"];

const MENU = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#services", label: "Services" },
  { id: "#team", label: "Team" },
  { id: "#contact-us", label: "Contact Us" },
];

const HERO_SLIDER_IMAGES = [
  {
    id: "building-front",
    src: Building,
    mobileSrc: Building,
    alt: "Building Front",
  },
  {
    id: "building-side",
    src: Building,
    mobileSrc: Building,
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
      "Patient culinary services and Cafe under supervision of professional nutritionist",
    description: "",
  },
  {
    icon: Mosque,
    title: "Comfortable Parking Areas & Mosque",
    description: "",
  },
];

const SERVICES_OFFERED = [
  {
    id: "surgery-allied",
    label: "Surgery & Allied",
    items: [
      {
        icon: GeneralSurgeryIcon,
        title: "General Surgery",
      },
      {
        icon: NeuroSurgeryIcon,
        title: "Neuro Surgery",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Spinal Surgery",
      },
      {
        icon: Orhtopedics,
        title: "Orthopedics",
      },
      {
        icon: Cardiothorcic,
        title: "Cardiothoracic Surgery",
      },
      {
        icon: Pediactric,
        title: "Pediactric Surgery",
      },
      {
        icon: Pediactric,
        title: "Plastic Surgery",
      },
      {
        icon: Vascular,
        title: "Vascular Surgery",
      },
      {
        icon: Gynae,
        title: "Gynae & Obs",
      },
      {
        icon: Ent,
        title: "ENT",
      },
      {
        icon: Anesthesia,
        title: "Anesthesia",
      },
      {
        icon: Ophalmology,
        title: "Opthalmology",
      },
      {
        icon: Dental,
        title: "Dental Surgery",
      },
    ],
  },

  {
    id: "medicine-allied",
    label: "Medicine & Allied",
    items: [
      {
        icon: Medicine,
        title: "Internal Medicine",
      },
      {
        icon: Cardiology,
        title: "Cardiology & EP",
      },
      {
        icon: Gastentrology,
        title: "Gastronenterology",
      },
      {
        icon: Pulomonology,
        title: "Pulmonology",
      },
      {
        icon: Neurology,
        title: "Neurology",
      },
      {
        icon: Nephrology,
        title: "Nephrology",
      },
      {
        icon: Rheumatologt,
        title: "Rheumatology",
      },
      {
        icon: Endocronology,
        title: "Endocrinology",
      },
      {
        icon: Physciatrist,
        title: "Pyschiatry",
      },
      {
        icon: Dermatology,
        title: "Dermatology / Cosmotology",
      },
      {
        icon: Pediatrics,
        title: "Pediatrics",
      },
      {
        icon: Neonotology,
        title: "Neonatology",
      },
      {
        icon: Phstiotherapy,
        title: "Physiotherapy",
      },
    ],
  },

  {
    id: "diagnostics-allied",
    label: "Diagnostics",
    items: [
      {
        icon: Pathology,
        title: "Pathology Services",
      },
      {
        icon: BloodBank,
        title: "Blood Bank",
      },
      {
        icon: RadioDiagnosis,
        title: "Radio Diagnostics",
      },
    ],
  },
];

const CONTACT_CARDS = [
  {
    icon: Marker,
    title: "Our Address",
    lines: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    type: "address",
  },
  {
    icon: Email,
    title: "Email Us",
    lines: "Info@eastridge.com.pk",
    type: "email",
  },
  {
    icon: Call,
    title: "Call Us",
    lines: "0314 1234567",
    type: "phone",
  },
];

const MANAGEMENT_TEAM = [
  {
    title: "CEO",
    image: CEO,
  },
  {
    title: "COO",
    image: COO,
  },
  {
    title: "CNO",
    image: CNO,
  },

  {
    title: "HC Admin",
    image: HCAdmin,
  },
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    id: "instagram",
    href: "https://www.instagram.com/eastridgehospital/",
  },
  {
    icon: Facebook,
    id: "facebook",
    href: "https://www.facebook.com/eastridgehospital/",
  },
  {
    icon: X,
    id: "x",
    href: "https://www.x.com/eastridgehospital/",
  },
  {
    icon: YouTube,
    id: "youtube",
    href: "https://www.youtube.com/eastridgehospital/",
  },
];

const FOOTER_CONTACTS = [
  {
    icon: MarkerBlack,
    value: "125 Harmony Blvd, Los Angeles, CA 90001",
    type: "address",
    link: "https://maps.app.goo.gl/cKVxohzwMEUxqd6bA",
  },
  {
    icon: CallBlack,
    value: "+1 (888) 123-4567",
    type: "phone",
    link: "tel:+18881234567",
  },
  {
    icon: Sms,
    value: "hello@healthcore.com",
    type: "email",
    link: "mailto:hello@healthcore.com",
  },
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
    title: "CEO Eastridge Prime Care",
    image: MDMedical,
    bio: "Adrianna specializes in digital marketing and team leadership.",
    experience: "15 years",
    certificates: "Digital Marketing Pro, Edison Awards",
    skills: "Digital strategy, team leadership",
    location: "380 Albert ST, Melbourne",
    phone: "+1 (230)-369-155-24",
    email: "adrianna@joan.com",
  },
];

export {
  MENU,
  HERO_SLIDER_IMAGES,
  SERVICES_OFFERED,
  VALUE_ADDITIONS,
  MAP_KEY,
  CONTACT_CARDS,
  MANAGEMENT_TEAM,
  SOCIAL_LINKS,
  FOOTER_CONTACTS,
  LEADERSHIP_TEAM,
};
