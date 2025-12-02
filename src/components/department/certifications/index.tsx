import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const OurCertificationSection = () => {
  const certificates = [
    {
      title: "Certification",
      description: "Clutch 1000 Service\nProviders, 2024 Global",
    },
    {
      title: "Certification",
      description: "Clutch 1000 Service\nProviders, 2024 Global",
    },
    {
      title: "Certification",
      description: "Clutch 1000 Service\nProviders, 2024 Global",
    },
    {
      title: "Certification",
      description: "Clutch 1000 Service\nProviders, 2024 Global",
    },
    {
      title: "Certification",
      description: "Clutch 1000 Service\nProviders, 2024 Global",
    },
    {
      title: "Certification",
      description: "Clutch 1000 Service\nProviders, 2024 Global",
    },
  ];

  return (
    <section className="py-20">
      {/* Header section with title and description */}
      <div className="flex flex-col px-8 md:flex-row md:items-start">
        {/* Main heading */}
        <h2 className="mb-4 text-left text-[2rem] leading-tight font-normal text-[#333333] md:w-1/2 md:text-[3rem] md:leading-tight lg:text-[4.375rem]">
          Our Certifications
        </h2>

        {/* Spacer for layout */}
        <div className="md:w-3/25"></div>

        {/* Description text */}
        <p className="text-[1rem] leading-normal font-normal text-[#A1A1A1] md:w-2/5 md:text-[1.25rem] md:leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </p>
      </div>

      {/* Certificates marquee section */}
      <div className="mt-10">
        <Marquee speed={50} gradient={false} pauseOnHover={false}>
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={index}
              className="mx-4 flex min-w-[11.5rem] flex-col items-center"
            >
              {/* Certificate image container */}
              <div className="flex h-[11.5rem] w-[11.5rem] items-center justify-center rounded-2xl bg-[#F6F6F6] p-6">
                <Image
                  src="/icons/Award.svg"
                  alt="Certification Badge"
                  width={152}
                  height={136}
                  className="h-[8.5rem] w-[9.5rem] object-contain"
                />
              </div>

              {/* Certificate details */}
              <div className="mt-4">
                {/* Certificate title */}
                <h3 className="text-center text-[1.125rem] font-semibold text-[#333333]">
                  {cert.title}
                </h3>

                {/* Certificate description */}
                <p className="text-center text-[0.875rem] whitespace-pre-line text-[#A1A1A1]">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurCertificationSection;
