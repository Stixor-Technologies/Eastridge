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

  if (doctorData.error || doctorData.doctors.length === 0) {
    notFound();
  }

  const doctor = doctorData.doctors[0];

  return (
    <div>
      <DoctorDetailSection doctor={doctor} />
    </div>
  );
};

export default DoctorDetail;
