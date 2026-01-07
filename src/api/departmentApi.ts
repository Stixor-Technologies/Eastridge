// src/api/departmentApi.ts

import {
  Department,
  StrapiDepartment,
  ApiResponse,
  DepartmentSidebarItem,
  smallDepartment,
} from "../core/department";

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export type StrapiImage = { url?: string };

export const getImageUrl = (img?: StrapiImage): string => {
  if (!img?.url) return "";

  // absolute URL already
  if (img.url.startsWith("http")) return img.url;

  if (!API_URL) {
    return img.url; // fallback, no crash
  }

  return `${API_URL}${img.url}`;
};

const mapDepartment = (item: StrapiDepartment): Department => {
  return {
    id: item.id?.toString() || "",
    documentId: item.documentId || item.id?.toString() || "",
    name: item.departmentName,
    slug: item.slug,
    description: item.departmentDescription,
    icon: getImageUrl(item.icon),
    hoverIcon: item.hoverIcon ? getImageUrl(item.hoverIcon) : undefined,
    bannerImage: getImageUrl(item.bannerImage),
    supportTitle: item.supportTitle,
    supportDescription: item.supportDescription,
    facilityImages: item.facilityImages?.map(getImageUrl) ?? [],
    timings: item.timings,
    staffedTitle: item.staffedTitle,
    staffedDescription: item.staffedDescription,
    supportBulletPoints: item.supportBulletPoints,
    staffedBulletPoints: item.staffedBulletPoints,
  };
};

export const getDepartments = async (): Promise<
  { data: Department[] } | { error: string }
> => {
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }
  try {
    const res = await fetch(`${API_URL}/api/departments?populate=*`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return { error: `Failed to fetch departments: ${res.status}` };
    }
    const json: ApiResponse = await res.json();
    if (!json.data || !Array.isArray(json.data)) {
      return { error: "Invalid departments API response" };
    }
    return { data: json.data.map(mapDepartment) };
  } catch {
    return { error: "Error fetching departments" };
  }
};

export const getDepartmentByDocumentId = async (
  documentId: string,
): Promise<{ data: Department | undefined } | { error: string }> => {
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }
  try {
    const res = await fetch(
      `${API_URL}/api/departments/${documentId}?populate=*`,
      {
        cache: "no-store",
      },
    );
    if (!res.ok) {
      return { error: `Failed to fetch department: ${res.status}` };
    }
    const json: { data: StrapiDepartment } = await res.json();
    if (!json.data) {
      return { data: undefined };
    }
    const dept = mapDepartment(json.data);
    return { data: dept };
  } catch {
    return { error: "Error fetching department by documentId" };
  }
};

export const getDepartmentsForSidebar = async (): Promise<
  { data: DepartmentSidebarItem[] } | { error: string }
> => {
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }

  try {
    const res = await fetch(
      `${API_URL}/api/departments?fields[]=departmentName&fields[]=slug&fields[]=documentId`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      return { error: `Failed to fetch departments: ${res.status}` };
    }

    const json: {
      data: {
        id: number;
        documentId: string;
        departmentName: string;
        slug: string;
      }[];
    } = await res.json();

    if (!Array.isArray(json.data)) {
      return { error: "Invalid departments API response" };
    }

    return {
      data: json.data.map((item) => ({
        id: item.id,
        documentId: item.documentId,
        name: item.departmentName,
        slug: item.slug,
      })),
    };
  } catch {
    return { error: "Error fetching departments for sidebar" };
  }
};

export const getDoctorByDepartment = async (
  documentId: string,
): Promise<{ data: smallDepartment } | { error: string }> => {
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }
  try {
    const res = await fetch(
      `${API_URL}/api/departments/${documentId}?fields[0]=documentId&populate[doctors][fields][0]=name&populate[doctors][fields][1]=designation&populate[doctors][populate][image]=true`,
      {
        cache: "no-store",
      },
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch doctors: ${res.status}`);
    }
    const json: { data: smallDepartment } = await res.json();
    return { data: json.data };
  } catch {
    return { error: "Error fetching doctors by department" };
  }
};
