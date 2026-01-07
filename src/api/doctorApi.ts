import { Doctor, DoctorsApiResponse } from "@/src/core/doctors";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getDoctors = async (): Promise<{
  doctors: Doctor[];
  error: string | null;
}> => {
  if (!API_URL) {
    return {
      doctors: [],
      error: "API base URL is missing. Please check environment configuration.",
    };
  }

  try {
    const res = await fetch(`${API_URL}/api/doctors?populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch doctors (Status: ${res.status})`);
    }

    const json: DoctorsApiResponse = await res.json();

    if (!json || !Array.isArray(json.data)) {
      throw new Error("Invalid response format from server");
    }

    const doctors: Doctor[] = json.data;

    return {
      doctors,
      error: null,
    };
  } catch (error) {
    return {
      doctors: [],
      error:
        error instanceof Error
          ? error.message
          : "Failed to load doctors. Please try again later.",
    };
  }
};

export const getDoctorsById = async (
  documentId: string,
): Promise<{ doctors: Doctor[]; error: string | null }> => {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  try {
    const res = await fetch(
      `${API_URL}/api/doctors?filters[documentId][$eq]=${documentId}&populate=*`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch doctors: ${res.status}`);
    }

    const json: DoctorsApiResponse = await res.json();

    if (!json || !Array.isArray(json.data)) {
      throw new Error("Invalid response format");
    }

    return { doctors: json.data, error: null };
  } catch (error) {
    return {
      doctors: [],
      error:
        error instanceof Error
          ? error.message
          : "Failed to load doctors. Please try again later.",
    };
  }
};
