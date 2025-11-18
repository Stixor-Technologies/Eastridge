import DoctorDetailSection from "@/src/components/doctor-detail/doctor-detail-section";
import { doctors } from "@/src/core/doctor";
import { notFound } from "next/navigation";

interface DoctorDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to create URL-friendly slugs from doctor names
const createSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const DoctorDetail = async ({ params }: DoctorDetailPageProps) => {
  const { slug } = await params;

  // Find doctor by matching slug to their name
  const doctor = doctors.find((d) => createSlug(d.name) === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div>
      <DoctorDetailSection doctor={doctor} />
    </div>
  );
};

export default DoctorDetail;
