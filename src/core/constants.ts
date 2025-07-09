import Building from "@/public/images/building.png";
// import BuildingFront from "@/public/images/building-front.png";
// import BuildingSide from "@/public/images/building-side.png";

import BuildingMobile from "@/public/images/building-mobile.png";
// import BuildingFrontMobile from "@/public/images/building-front-mobile.png";
// import BuildingSideMobile from "@/public/images/building-side-mobile.png";

import EmergencyIcon from "@/public/icons/emergency.svg";
import ScienceIcon from "@/public/icons/science.svg";
import DataIcon from "@/public/icons/data.svg";
import SpeakerIcon from "@/public/icons/speaker.svg";
import CodeIcon from "@/public/icons/code.svg";
import LifebuoyIcon from "@/public/icons/lifebuoy.svg";

import GeneralSurgeryIcon from "@/public/icons/general-surgery.svg";
import NeuroSurgeryIcon from "@/public/icons/neuro-surgery.svg";
import SpinalSurgeryIcon from "@/public/icons/spinal-surgery.svg";

import Marker from "@/public/icons/marker.svg";
import Email from "@/public/icons/email.svg";
import Call from "@/public/icons/call.svg";

import DummyMember from "@/public/images/team/member-dummy.png";
import MDFF from "@/public/images/team/md.jpeg";
import MDMedical from "@/public/images/team/md-medical.jpg";

import Instagram from "@/public/icons/instagram.svg";
import Facebook from "@/public/icons/facebook.svg";
import X from "@/public/icons/x.svg";
import YouTube from "@/public/icons/youtube.svg";

import MarkerBlack from "@/public/icons/marker-black.svg";
import CallBlack from "@/public/icons/call-black.svg";
import Sms from "@/public/icons/sms.svg";

const MAP_KEY = process.env["MAP_API"];

const MENU = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#department", label: "Department" },
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
    icon: EmergencyIcon,
    title: "Modular Operation Rooms & Critical Care Areas",
    description: "",
  },

  {
    icon: EmergencyIcon,
    title: "Modular Labor Rooms",
    description: "",
  },

  {
    icon: EmergencyIcon,
    title: "Neonatal Intensive Care ",
    description: "",
  },

  {
    icon: EmergencyIcon,
    title: "Dialysis Center",
    description: "",
  },

  {
    icon: EmergencyIcon,
    title: "Endoscopy & ERCP",
    description: "",
  },

  {
    icon: EmergencyIcon,
    title: "Private Suites",
    description: "",
  },

  {
    icon: ScienceIcon,
    title: "Customized 24/7 Trauma & Emergency Services under one roof",
    description: "",
  },
  {
    icon: DataIcon,
    title: "CT Scan, MRI & Interventional Radiology",
    description: "",
  },
  {
    icon: SpeakerIcon,
    title: "Pathology Services in collaboration with our partners at IDC",
    description: "",
  },
  {
    icon: CodeIcon,
    title: "Comprehensive Pharmacy Services with our partners MedAsk",
    description: "",
  },
  {
    icon: LifebuoyIcon,
    title:
      "Patient culinary services and Cafe under supervision of professional nutritionist",
    description: "",
  },
  {
    icon: LifebuoyIcon,
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
        icon: GeneralSurgeryIcon,
        title: "Orthopedics",
      },
      {
        icon: NeuroSurgeryIcon,
        title: "Cardiothoracic Surgery",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Pediactric Surgery",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Plastic Surgery",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Vascular Surgery",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Gynae & Obs",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "ENT",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Anesthesia",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Opthalmology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Dental Surgery",
      },
    ],
  },

  {
    id: "medicine-allied",
    label: "Medicine & Allied",
    items: [
      // Add medicine items here
      // { icon: SomeIcon, title: "Cardiology" },
      {
        icon: SpinalSurgeryIcon,
        title: "Internal Medicine",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Cardiology & EP",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Gastronenterology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Pulmonology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Neurology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Nephrology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Rheumatology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Endocrinology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Pyschiatry",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Dermatology / Cosmotology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Pediatrics",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Neonatology",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Physiotherapy",
      },
    ],
  },

  {
    id: "diagnostics-allied",
    label: "Diagnostics",
    items: [
      // Add diagnostics items here
      // { icon: SomeIcon, title: "Radiology" },

      {
        icon: SpinalSurgeryIcon,
        title: "Pathology Services",
      },
      {
        icon: SpinalSurgeryIcon,
        title: "Blood Bank",
      },
      {
        icon: SpinalSurgeryIcon,
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
    name: "Garrison Gardner",
    title: "Marketing Executive",
    image: DummyMember,
    bio: "During the discussion, each participant provided updates on their assigned tasks, highlighting completed milestones and identifying areas requiring further attention. Several challenges were raised, including delays due to external dependencies and resource constraints. The team collaboratively explored solutions, such as adjusting timelines, reallocating responsibilities, and escalating specific issues for quicker resolution. There was a strong focus on improving internal coordination and ensuring that deliverables remain on track.",
    experience: "20 years",
    certificates: "Robert L. Nobel Price, Edison Awards",
    skills: "Working with both children and adults",
    location: "380 Albert ST, Melbourne",
    phone: "+1 (230)-369-155-23",
    email: "garrison@joan.com",
  },
  {
    name: "Adrianna Rose",
    title: "Marketing Executive",
    image: DummyMember,
    bio: "Adrianna specializes in digital marketing and team leadership.",
    experience: "15 years",
    certificates: "Digital Marketing Pro, Edison Awards",
    skills: "Digital strategy, team leadership",
    location: "380 Albert ST, Melbourne",
    phone: "+1 (230)-369-155-24",
    email: "adrianna@joan.com",
  },
  {
    name: "Jessica Jonathon",
    title: "Marketing Executive",
    image: DummyMember,
    bio: "Jessica is known for her innovative approach to brand management.",
    experience: "12 years",
    certificates: "Brand Innovator, Edison Awards",
    skills: "Brand management, innovation",
    location: "380 Albert ST, Melbourne",
    phone: "+1 (230)-369-155-25",
    email: "jessica@joan.com",
  },

  {
    name: "Garrison Gardner",
    title: "Marketing Executive",
    image: DummyMember,
  },

  {
    name: "Adrianna Rose",
    title: "Marketing Executive",
    image: DummyMember,
  },

  {
    name: "Jessica Jonathon",
    title: "Marketing Executive",
    image: DummyMember,
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
