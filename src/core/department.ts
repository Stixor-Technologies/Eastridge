import { StrapiImage } from "../api/departmentApi";

export interface Doctor {
  id: string;
  name: string;
  image: string;
  description: string;
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
  supportTitle: string;
  supportDescription: string;
  facilityImages: string[];
  doctors: Doctor[];
  staffedTitle?: string;
  staffedDescription: string;
  supportBulletPoints?: SupportBulletPoint[];
  staffedBulletPoints?: StaffedBulletPoints[];

  timings: StrapiTiming[];
}

export interface StrapiTiming {
  id: number;
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

export interface SupportBulletPoint {
  id: number;
  supportPoints: string;
}

export interface StaffedBulletPoints {
  id: number;
  staffedPoints: string;
}

export interface StrapiDepartment {
  id: string | number;
  documentId?: string;
  supportTitle: string;
  supportDescription: string;
  facilityImages: StrapiImage[];
  timings: StrapiTiming[]; // Updated to use timings instead of timing
  departmentName: string;
  slug: string;
  departmentDescription: string;
  icon: StrapiImage;
  hoverIcon?: StrapiImage;
  bannerImage: StrapiImage;
  staffedTitle?: string;
  staffedDescription: string;
  supportBulletPoints?: SupportBulletPoint[];
  staffedBulletPoints?: StaffedBulletPoints[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
