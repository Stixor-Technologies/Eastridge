export interface Doctor {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface StaffedGroupBlock {
  type: "paragraph" | "list";
  children: Array<{
    type?: string;
    text?: string;
    children?: Array<{ text?: string }>;
  }>;
  format?: string;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  hoverIcon?: string;
  slug: string;
  description: string;
  bannerImage: string;
  supportGroup: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
  facilityImages: string[];
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
  doctors: Doctor[];
  staffedTitle?: string;
  staffedGroup?: StaffedGroupBlock[];
}
