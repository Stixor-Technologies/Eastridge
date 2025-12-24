// src/lib/departmentApi.ts

// Import hardcoded doctors
import { doctors as hardcodedDoctors } from "@/src/core/doctor";

// Helper to get full image URL from Strapi media object
type StrapiImage = { url?: string };
const getImageUrl = (img: StrapiImage | undefined): string => {
  if (!img) return "";
  if (img.url?.startsWith("http")) return img.url;
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return img.url ? `${API_URL}${img.url}` : "";
};

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
type StrapiDepartment = any;
const mapDepartment = (item: StrapiDepartment) => {
  // Safe access for supportGroup array
  const supportGroupArray = Array.isArray(item.supportGroup)
    ? item.supportGroup
    : [];

  const supportTitle = item.departmentTitlte || "";
  const supportDescription = supportGroupArray[0]?.children?.[0]?.text || "";

  const bulletPoints =
    supportGroupArray[1]?.children?.map(
      (c: any) => c.children?.[0]?.text || "",
    ) || [];

  // Safe facilityImages
  const facilityImages = Array.isArray(item.facilityImages)
    ? item.facilityImages.map(getImageUrl)
    : [];

  // Safe timings
  const timings = Array.isArray(item.timing)
    ? item.timing.map((t: any) => ({
        day: t.day || "",
        start: t.startTime || "",
        end: t.endTime || "",
      }))
    : [];

  // Filtered doctors
  const filteredDoctors = filterDoctorsByDepartment(item.departmentName || "");

  return {
    id: item.id?.toString() || "",
    name: item.departmentName,
    slug: item.slug,
    description: item.departmentDescription,
    icon: getImageUrl(item.icon),
    hoverIcon: item.hoverIcon ? getImageUrl(item.hoverIcon) : undefined,
    bannerImage: getImageUrl(item.bannerImage),
    supportGroup: {
      title: supportTitle,
      description: supportDescription,
      bulletPoints,
    },
    facilityImages,
    appointment: {
      title: "",
      description: "",
      ctaText: "",
    },
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

export const getDepartments = async () => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (!API_URL) {
    return [];
  }
  try {
    const res = await fetch(`${API_URL}/api/departments?populate=*`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const json = await res.json();
    if (!json.data || !Array.isArray(json.data)) {
      return [];
    }
    return json.data.map(mapDepartment);
  } catch (error) {
    return { error: (error as Error).message || "Unknown error" };
  }
};

export const getDepartmentBySlug = async (slug: string) => {
  try {
    const departments = await getDepartments();
    return departments.find((dept: any) => dept.slug === slug);
  } catch (error) {
    return { error: (error as Error).message || "Unknown error" };
  }
};
