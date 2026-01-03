import { getDoctorsById } from "@/src/api/doctorApi";
import DoctorDetailSection from "@/src/components/doctor-detail/doctor-detail-section";
import { notFound } from "next/navigation";

interface DoctorDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const DoctorDetail = async ({ params }: DoctorDetailPageProps) => {
  const { slug } = await params;

  // Fetch doctors filtered by slug
  const doctorData = await getDoctorsById(slug);

  // If API returned nothing or empty array, show 404
  if (!doctorData || doctorData.data.length === 0) {
    notFound();
  }

  // Use the first doctor from the array
  const doctor = doctorData.data[0];

  return (
    <div>
      <DoctorDetailSection doctor={doctor} />
    </div>
  );
};

export default DoctorDetail;
