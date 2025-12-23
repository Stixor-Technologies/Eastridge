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
  console.log("🔍 Filtering for department:", departmentName);
  console.log("📋 Total hardcoded doctors:", hardcodedDoctors.length);

  // Normalize department name for comparison
  const normalizeName = (name: string) =>
    name
      .toLowerCase()
      .trim()
      .replace(/[\/\s-]+/g, "");

  const normalizedDeptName = normalizeName(departmentName);
  console.log("🎯 Normalized dept name:", normalizedDeptName);

  const filteredDoctors = hardcodedDoctors
    .filter((doctor) => {
      // Doctor can have multiple departments separated by comma
      const doctorDepartments = doctor.department
        .split(",")
        .map((d) => d.trim());
      console.log(
        `  👨‍⚕️ Doctor: ${doctor.name}, Departments:`,
        doctorDepartments,
      );

      // Check if any of doctor's departments match
      return doctorDepartments.some((dept) => {
        const normalizedDocDept = normalizeName(dept);
        console.log(
          `    🔄 Comparing: "${normalizedDocDept}" with "${normalizedDeptName}"`,
        );

        // Exact match
        if (normalizedDocDept === normalizedDeptName) {
          console.log(`    ✅ Exact match found!`);
          return true;
        }

        // Partial match (e.g., "Cardiology" matches "Cardiac")
        if (
          normalizedDocDept.includes(normalizedDeptName) ||
          normalizedDeptName.includes(normalizedDocDept)
        ) {
          console.log(`    ✅ Partial match found!`);
          return true;
        }

        // Special cases for common variations
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
              console.log(`    ✅ Special case match found!`);
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

  console.log("✅ Filtered doctors count:", filteredDoctors.length);
  console.log("✅ Filtered doctors:", filteredDoctors);
  return filteredDoctors;
};

// Map Strapi API department to UI department structure
type StrapiDepartment = any;
const mapDepartment = (item: StrapiDepartment) => {
  // Get filtered doctors for this department
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
      title: item.departmentTitlte || "",
      description:
        Array.isArray(item.supportGroup) &&
        item.supportGroup[0]?.children?.[0]?.text
          ? item.supportGroup[0].children[0].text
          : "",
      bulletPoints:
        Array.isArray(item.supportGroup) && item.supportGroup[1]?.children
          ? item.supportGroup[1].children.map(
              (c: any) => c.children[0]?.text || "",
            )
          : [],
    },
    facilityImages: Array.isArray(item.facilityImages)
      ? item.facilityImages.map(getImageUrl)
      : [],
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
    timings: Array.isArray(item.timing)
      ? item.timing.map((t: any) => ({
          day: t.day || "",
          start: t.startTime || "",
          end: t.endTime || "",
        }))
      : [],
    doctors: filteredDoctors, // ✅ Filtered doctors added here
    staffedTitle: item.staffedTitle || "",
    staffedGroup: item.staffedGroup || [],
  };
};

export const getDepartments = async () => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (!API_URL) {
    console.error("Departments API URL is missing");
    return [];
  }
  try {
    const res = await fetch(`${API_URL}/api/departments?populate=*`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Failed to fetch departments: ${res.status}`);
      return [];
    }
    const json = await res.json();
    if (!json.data || !Array.isArray(json.data)) {
      console.error("Invalid departments API response", json);
      return [];
    }
    return json.data.map(mapDepartment);
  } catch (error) {
    console.error("Error fetching departments:", error);
    return [];
  }
};

export const getDepartmentBySlug = async (slug: string) => {
  try {
    const departments = await getDepartments();
    return departments.find((dept: any) => dept.slug === slug);
  } catch (error) {
    console.error("Error fetching department by slug:", error);
    return undefined;
  }
};
