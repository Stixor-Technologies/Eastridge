import Zoom from "@/public/icons/services/zoom-in.svg";
import Book from "@/public/icons/services/book.svg";
import Heart from "@/public/icons/services/heart.svg";
import Microscope from "@/public/images/microscope.png";

import Emergency from "@/public/images/departments/emergency.png";
import Neurology from "@/public/images/departments/neurology.png";
import Cardiology from "@/public/images/departments/cardiology.png";

import { doctors } from "./doctor";

import { StaticImageData } from "next/image";

// Department type and dummy data
export type Department = {
  id: string;
  name: string;
  icon: StaticImageData;
  slug: string;
  description: string;
  bannerImage: StaticImageData;
  supportGroup: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
  facilityImages: StaticImageData[];
  appointment: {
    title: string;
    description: string;
    ctaText: string;
  };
  emergencyStaffing: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
  timings: Array<{
    day: string;
    start: string;
    end: string;
  }>;
  // doctors: Array<{
  //   name: string;
  //   title: string;
  //   image: string;
  // }>;
  doctors: any;
};

export const departments: Department[] = [
  {
    id: "emergency",
    name: "Emergency Department",
    icon: Zoom,
    slug: "emergency-department",
    description:
      "Get practical tips and personalized care from professionals who are here to help at every step.",
    bannerImage: Microscope,
    supportGroup: {
      title: "Support Groups for Depression",
      description:
        "Every team has a role in medical treatment, and we want to support each and every step. Here’s why we offer a mix of support groups for mental health and medical needs.",
      bulletPoints: [
        "Helps to focus on intelligence, channel common factors.",
        "Share confidential topics in groups.",
        "Tailor offerings open to unique stages, and support individual follow-ups.",
      ],
    },
    facilityImages: [Emergency, Neurology, Cardiology],
    appointment: {
      title: "Online simple step for appointment",
      description:
        "Let everyone know it’s simple, reliable, and accessible to connect and plan your care.",
      ctaText: "Make Appointment",
    },
    emergencyStaffing: {
      title: "How is the Emergency Department staffed?",
      description:
        "Services are available at all times for urgent medical needs. Each team is a mix of doctors, nurses, and other professionals who collaborate to deliver the best care.",
      bulletPoints: [
        "Helps to focus on intelligence, channel common factors.",
        "Share confidential topics in groups.",
        "Tailor offerings open to unique stages, and support individual follow-ups.",
      ],
    },
    timings: [
      { day: "Monday", start: "5:00 AM", end: "7:00 PM" },
      { day: "Tuesday", start: "5:00 AM", end: "7:00 PM" },
      { day: "Wednesday", start: "5:00 AM", end: "7:00 PM" },
      { day: "Friday", start: "5:00 AM", end: "7:00 PM" },
    ],
    doctors: [doctors[0], doctors[1], doctors[2], doctors[3]],
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: Book,
    slug: "cardiology",
    description:
      "Expert heart care and advanced cardiac treatments for all ages.",
    bannerImage: Microscope,
    supportGroup: {
      title: "Heart Health Support",
      description:
        "Join our community for heart health tips and emotional support.",
      bulletPoints: [
        "Diet and lifestyle guidance.",
        "Peer support for cardiac patients.",
        "Regular health workshops.",
      ],
    },
    facilityImages: [Emergency, Neurology, Cardiology],

    appointment: {
      title: "Book a Cardiology Appointment",
      description: "Schedule your heart checkup with our specialists.",
      ctaText: "Book Now",
    },
    emergencyStaffing: {
      title: "Cardiology Team",
      description: "Our team is available for emergencies and routine care.",
      bulletPoints: [
        "24/7 emergency response.",
        "Specialized cardiac nurses.",
        "On-call cardiologists.",
      ],
    },
    timings: [
      { day: "Monday", start: "8:00 AM", end: "6:00 PM" },
      { day: "Thursday", start: "8:00 AM", end: "6:00 PM" },
    ],
    doctors: [doctors[0], doctors[1], doctors[2], doctors[3]],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: Heart,
    slug: "pediatrics",
    description: "Comprehensive care for infants, children, and adolescents.",
    bannerImage: Microscope,
    supportGroup: {
      title: "Parent Support Group",
      description: "Resources and support for parents and caregivers.",
      bulletPoints: [
        "Parenting workshops.",
        "Vaccination awareness.",
        "Growth and nutrition tips.",
      ],
    },
    facilityImages: [Emergency, Neurology, Cardiology],

    appointment: {
      title: "Schedule Pediatric Visit",
      description: "Easy online booking for your child’s health needs.",
      ctaText: "Schedule Visit",
    },
    emergencyStaffing: {
      title: "Pediatrics Team",
      description:
        "Our pediatricians and nurses are here for your child’s well-being.",
      bulletPoints: [
        "Child-friendly emergency care.",
        "Certified pediatric nurses.",
        "On-call pediatricians.",
      ],
    },
    timings: [
      { day: "Tuesday", start: "9:00 AM", end: "5:00 PM" },
      { day: "Friday", start: "9:00 AM", end: "5:00 PM" },
    ],
    doctors: [doctors[0], doctors[1], doctors[2], doctors[3]],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: Zoom,
    slug: "orthopedics",
    description: "Bone, joint, and muscle care for all ages.",
    bannerImage: Microscope,
    supportGroup: {
      title: "Support Groups for Depression",
      description:
        "Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
      bulletPoints: [
        "Vivamus eu lacus scelerisque, placerat commodo lectus.",
        "Etiam etanteatex porta fringilla.",
        "Nullam dignissim sem eu magna aliquet, sit amet volutpat tellus",
      ],
    },
    facilityImages: [Emergency, Neurology, Cardiology],

    appointment: {
      title: "Book Orthopedic Consultation",
      description: "Get expert advice for bone and joint health.",
      ctaText: "Book Consultation",
    },
    emergencyStaffing: {
      title: "How is the Emergency Department staffed?",
      description:
        "Sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free",
      bulletPoints: [
        "Trauma care specialists.",
        "Physical therapy support.",
        "On-call orthopedic surgeons.",
      ],
    },
    timings: [
      { day: "Wednesday", start: "10:00 AM", end: "4:00 PM" },
      { day: "Saturday", start: "10:00 AM", end: "2:00 PM" },
    ],
    // doctors: [
    //   {
    //     name: "Dr. Sunil Rao",
    //     title: "Orthopedic Surgeon",
    //     image: "/images/team/doctors/doctor9.png",
    //   },
    //   {
    //     name: "Dr. Emily Carter",
    //     title: "Orthopedic Specialist",
    //     image: "/images/team/doctors/doctor10.png",
    //   },
    // ],
    doctors: [doctors[0], doctors[1], doctors[2], doctors[3]],
  },
];

export const getDepartment = (slug: string) => {
  return departments?.find((dept) => dept?.slug === slug);
  //   const service = getServiceBySlug(slug);
  //   return service;
};
