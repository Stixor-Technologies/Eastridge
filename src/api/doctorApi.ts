import { Doctor, DoctorsApiResponse } from "@/src/core/doctors";

export const getDoctors = async (): Promise<Doctor[]> => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }

  try {
    const res = await fetch(`${API_URL}/api/doctors?populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch doctors: ${res.status}`);
    }

    const json: DoctorsApiResponse = await res.json();

    // Extract only the array of doctors
    const doctors: Doctor[] = json.data;

    return doctors;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
};

export const getDoctorsById = async (
  documentId: string,
): Promise<{ data: Doctor[] } | undefined> => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables",
    );
  }
  try {
    const res = await fetch(
      `${API_URL}/api/doctors?filters[documentId][$eq]=${documentId}&populate=*`,
      {
        cache: "no-store",
      },
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch doctors: ${res.status}`);
    }
    const json: DoctorsApiResponse = await res.json();
    const doctors: Doctor[] = json.data;
    return { data: doctors };
  } catch (error) {
    console.log(error);
  }
};
