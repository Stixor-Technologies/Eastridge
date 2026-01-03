import { StrapiImage } from "@/src/api/departmentApi";

export interface Doctor {
  id: number;
  documentId: string;
  name: string;
  Designation: string;
  biography: string;
  department: string;
  experience: string;
  location: string;
  DepartmentPhone: string;
  image: StrapiImage;
  qualifications: Qualification[];
  youtubeVideoUrl: string;
  occupation: string;
}

export interface DoctorsApiResponse {
  data: Doctor[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Qualification {
  id: number;
  qualificationsText: string;
}
