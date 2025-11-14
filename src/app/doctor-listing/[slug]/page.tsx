import DoctorDetailSection from "@/src/components/doctor-detail/doctor-detail-section";

interface DoctorDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const DoctorDetail = async ({ params }: DoctorDetailPageProps) => {
  const { slug } = await params;
  return (
    <div>
      <DoctorDetailSection doctorName={slug} />
    </div>
  );
};

export default DoctorDetail;
