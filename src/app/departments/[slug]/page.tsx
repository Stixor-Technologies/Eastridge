import { notFound } from "next/navigation";
// import {
//   getServiceBySlug,
//   MEDICAL_SERVICES,
//   ServiceDetail,
// } from "@/src/core/department";
import DetailSection from "@/src/components/department/detail-section";
import HeroSection from "@/src/components/reusable-sections/HeroSection";
import Link from "next/link";
import { FC } from "react";
import { getDepartmentItems } from "@/src/core/constants";
import Image from "next/image";
import Banner from "@/src/components/shared/banner";

interface ServiceCardProps {
  service?: any;
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => (
  <Link
    href={"/"}
    // href={`/departments/${service?.slug}`}
    className="bg-card-bg rounded-2xl p-5 transition-all duration-300 ease-in-out hover:!text-white md:px-6 md:py-10"
  >
    <Image src={service?.icon} alt={service?.title} width={64} height={64} />
    <h3
      className={
        "text-body-primary mt-6 mb-4 text-2xl leading-tight font-semibold transition-all md:text-[2rem]"
      }
    >
      {service?.title}
    </h3>
    <p className="text-body-main text-xl transition-all">
      {service?.description}
    </p>
  </Link>
);

interface DepartmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const service = getDepartmentItems(slug);

  console.log("slug", slug);
  console.log("service", service);

  if (!service) {
    notFound();
  }
  // Here is the slug page code
  return (
    <main>
      <HeroSection>{service?.title}</HeroSection>

      <section className="container mt-24">
        <h4 className="text-accent text-center text-2xl">
          Real words. Real impact.
        </h4>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
          {service?.items?.map((item: any) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </section>

      <DetailSection />
      <Banner />
    </main>
  );
}

// Generate static params for all services
// export async function generateStaticParams() {
//   const { SERVICES } = await import("@/src/core/department");

//   return SERVICES.map((service: { slug: string }) => ({
//     slug: service.slug,
//   }));
// }

// Generate metadata for each service
// export async function generateMetadata({ params }: DepartmentPageProps) {
//   const { slug } = await params;
//   const service = getServiceBySlug(slug);

//   if (!service) {
//     return {
//       title: "Service Not Found",
//     };
//   }

//   return {
//     title: `${service.title} - Eastridge Prime Care`,
//     description: service.description,
//   };
// }
