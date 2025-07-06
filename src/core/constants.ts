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

export {
  MENU,
  HERO_SLIDER_IMAGES,
  SERVICES,
  DEPARTMENTS,
  MAP_KEY,
  CONTACT_CARDS,
};
