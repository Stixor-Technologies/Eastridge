import DoctorDetailSection from "@/src/components/doctor-detail/doctor-detail-section";

interface DoctorDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DoctorDetail = async ({ params }: DoctorDetailPageProps) => {
  const { id } = await params;

  return (
    <div>
      <DoctorDetailSection doctorId={id} />
    </div>
  );
};

export default DoctorDetail;
