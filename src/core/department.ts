import { StrapiImage } from "../api/departmentApi";

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
  documentId: string;
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
  timings: Array<{
    day: string;
    start: string;
    end: string;
  }>;
  doctors: Doctor[];
  staffedTitle?: string;
  staffedGroup?: StaffedGroupBlock[];
}

// Strapi rich text structures
export interface StrapiRichTextChild {
  type?: string;
  text?: string;
  children?: Array<{ text?: string; type?: string }>;
}

export interface StrapiRichTextBlock {
  type: "paragraph" | "list";
  children: StrapiRichTextChild[];
  format?: string;
}

export interface StrapiTiming {
  day: string;
  startTime: string;
  endTime: string;
}

export interface ApiResponse {
  data: StrapiDepartment[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface DepartmentSidebarItem {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface StrapiDepartment {
  id: string | number;
  documentId?: string;
  supportTitle: string;
  supportGroup: StrapiRichTextBlock[];
  facilityImages: StrapiImage[];
  timing: StrapiTiming[];
  departmentName: string;
  slug: string;
  departmentDescription: string;
  icon: StrapiImage;
  hoverIcon?: StrapiImage;
  bannerImage: StrapiImage;
  staffedTitle?: string;
  staffedGroup?: StrapiRichTextBlock[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
