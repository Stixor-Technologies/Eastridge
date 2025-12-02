import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/src/core/department";
import DetailSection from "@/src/components/department/detail-section";
import HeroSection from "@/src/components/reusable-sections/HeroSection";

interface DepartmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <HeroSection>
        <div className="text-center">
          <div className="mb-2 text-4xl font-bold md:text-5xl">
            {service.title}
          </div>
          {service.subtitle && (
            <div className="text-2xl font-normal opacity-90">
              {service.subtitle}
            </div>
          )}
        </div>
      </HeroSection>
      <DetailSection />
    </main>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  const { SERVICES } = await import("@/src/core/department");

  return SERVICES.map((service: { slug: string }) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - Eastridge Prime Care`,
    description: service.description,
  };
}
