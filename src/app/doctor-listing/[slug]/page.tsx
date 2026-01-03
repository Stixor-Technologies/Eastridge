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

  const doctorData = await getDoctorsById(slug);

  if (
    "error" in doctorData ||
    !doctorData.data ||
    !Array.isArray(doctorData.data) ||
    doctorData.data.length === 0
  ) {
    notFound();
  }

  const doctor = doctorData.data[0];

  return (
    <div>
      <DoctorDetailSection doctor={doctor} />
    </div>
  );
};

export default DoctorDetail;
