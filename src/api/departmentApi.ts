// src/lib/departmentApi.ts

// Import hardcoded doctors
import { doctors as hardcodedDoctors } from "@/src/core/doctor";
import { Department } from "../core/department";

// Helper to get full image URL from Strapi media object
type StrapiImage = { url?: string };
const getImageUrl = (img: StrapiImage | undefined): string => {
  if (!img) return "";
  if (img.url?.startsWith("http")) return img.url;
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return img.url ? `${API_URL}${img.url}` : "";
};

// Strapi rich text structures
interface StrapiRichTextChild {
  type?: string;
  text?: string;
  children?: Array<{ text?: string; type?: string }>;
}

interface StrapiRichTextBlock {
  type: "paragraph" | "list";
  children: StrapiRichTextChild[];
  format?: string;
}

interface StrapiTiming {
  day: string;
  startTime: string;
  endTime: string;
}

interface ApiResponse {
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

// Helper function to filter doctors by department
const filterDoctorsByDepartment = (departmentName: string) => {
  const normalizeName = (name: string) =>
    name
      .toLowerCase()
      .trim()
      .replace(/[\/\s-]+/g, "");

  const normalizedDeptName = normalizeName(departmentName);

  const filteredDoctors = hardcodedDoctors
    .filter((doctor) => {
      const doctorDepartments = doctor.department
        .split(",")
        .map((d) => d.trim());

      return doctorDepartments.some((dept) => {
        const normalizedDocDept = normalizeName(dept);

        if (normalizedDocDept === normalizedDeptName) {
          return true;
        }

        if (
          normalizedDocDept.includes(normalizedDeptName) ||
          normalizedDeptName.includes(normalizedDocDept)
        ) {
          return true;
        }

        const specialCases: { [key: string]: string[] } = {
          obstetrics: ["obsgyn", "gynecology", "gynaecology", "obs", "gyn"],
          gynecology: ["obsgyn", "obstetrics", "gynaecology", "obs", "gyn"],
          pediatrics: ["paeds", "paediatrics", "pediatric"],
          paediatrics: ["paeds", "pediatrics", "pediatric"],
          surgery: ["surgeon", "surgical"],
          neurology: ["neuro", "neurological"],
          cardiology: ["cardiac", "heart"],
          orthopedic: ["orthopaedic", "ortho"],
        };

        for (const [key, variations] of Object.entries(specialCases)) {
          if (normalizedDeptName.includes(key)) {
            if (variations.some((v) => normalizedDocDept.includes(v))) {
              return true;
            }
          }
        }

        return false;
      });
    })
    .map((doctor) => ({
      id: doctor.id,
      name: doctor.name,
      image: typeof doctor.image === "string" ? doctor.image : doctor.image.src,
      description: doctor.description,
    }));

  return filteredDoctors;
};

// Map Strapi API department to UI department structure
interface StrapiDepartment {
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
const mapDepartment = (item: StrapiDepartment): Department => {
  // Safe access for supportGroup array
  const supportGroupArray: StrapiRichTextBlock[] = Array.isArray(
    item.supportGroup,
  )
    ? item.supportGroup
    : [];

  const supportDescription = supportGroupArray[0]?.children?.[0]?.text || "";

  const bulletPoints =
    supportGroupArray[1]?.children?.map((c) => c.children?.[0]?.text || "") ||
    [];

  // Safe facilityImages
  const facilityImages = Array.isArray(item.facilityImages)
    ? item.facilityImages.map(getImageUrl)
    : [];

  // Safe timings
  const timings = Array.isArray(item.timing)
    ? item.timing.map((t) => ({
        day: t.day || "",
        start: t.startTime || "",
        end: t.endTime || "",
      }))
    : [];

  // Filtered doctors
  const filteredDoctors = filterDoctorsByDepartment(item.departmentName || "");

  return {
    id: item.id?.toString() || "",
    documentId: item.documentId || item.id?.toString() || "",
    name: item.departmentName,
    slug: item.slug,
    description: item.departmentDescription,
    icon: getImageUrl(item.icon),
    hoverIcon: item.hoverIcon ? getImageUrl(item.hoverIcon) : undefined,
    bannerImage: getImageUrl(item.bannerImage),
    supportGroup: {
      title: item.supportTitle,
      description: supportDescription,
      bulletPoints: bulletPoints,
    },
    facilityImages,
    emergencyStaffing: {
      title: "",
      description: "",
      bulletPoints: [],
    },
    timings,
    doctors: filteredDoctors,
    staffedTitle: item.staffedTitle || "",
    staffedGroup: item.staffedGroup || [],
  };
};

export const getDepartments = async (): Promise<
  { data: Department[] } | { error: string }
> => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
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
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
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

export interface DepartmentSidebarItem {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export const getDepartmentsForSidebar = async (): Promise<
  { data: DepartmentSidebarItem[] } | { error: string }
> => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
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
