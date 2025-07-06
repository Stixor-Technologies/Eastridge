import Building from "@/public/images/building.png";
import BuildingFront from "@/public/images/building-front.png";
import BuildingSide from "@/public/images/building-side.png";

import BuildingMobile from "@/public/images/building-mobile.png";
import BuildingFrontMobile from "@/public/images/building-front-mobile.png";
import BuildingSideMobile from "@/public/images/building-side-mobile.png";

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

const SERVICES = [
  {
    icon: EmergencyIcon,
    title: "Emergency & Trauma Care",
    description:
      "Security testing is a type of software testing that is focused determining if an information.",
  },
  {
    icon: ScienceIcon,
    title: "24/7 ER availability",
    description:
      "Security testing is a type of software testing that is focused determining if an information.",
  },
  {
    icon: DataIcon,
    title: "Trauma response capabilities",
    description:
      "Security testing is a type of software testing that is focused determining if an information.",
  },
  {
    icon: SpeakerIcon,
    title: "Radiology: MRI, CT, X-ray, Ultrasound",
    description:
      "Security testing is a type of software testing that is focused determining if an information.",
  },
  {
    icon: CodeIcon,
    title: "Diagnostic Services",
    description:
      "Security testing is a type of software testing that is focused determining if an information.",
  },
  {
    icon: LifebuoyIcon,
    title: "Pathology: Lab services, blood tests",
    description:
      "Security testing is a type of software testing that is focused determining if an information.",
  },
];

const DEPARTMENTS = [
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
    ],
  },
  {
    id: "diagnostics-allied",
    label: "Diagnostics Allied",
    items: [
      // Add diagnostics items here
      // { icon: SomeIcon, title: "Radiology" },
    ],
  },
  {
    id: "medicine-allied",
    label: "Medicine & Allied",
    items: [
      // Add medicine items here
      // { icon: SomeIcon, title: "Cardiology" },
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
    link: "https://www.google.com/maps/search/?api=1&query=125+Harmony+Blvd,+Los+Angeles,+CA+90001",
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

export {
  MENU,
  HERO_SLIDER_IMAGES,
  SERVICES,
  DEPARTMENTS,
  MAP_KEY,
  CONTACT_CARDS,
  MANAGEMENT_TEAM,
  SOCIAL_LINKS,
  FOOTER_CONTACTS,
};
