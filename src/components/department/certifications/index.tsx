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
    <section className="mt-20 py-20">
      <div className="container mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:gap-6 lg:mb-16">
        <h2 className="text-body-primary md:font-4xl text-left text-4xl font-normal lg:text-5xl">
          Our Certifications{" "}
        </h2>
        <p className="text-body-main text-lg md:max-w-[35.75rem] md:text-justify">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </p>
      </div>

      {/* Certificates marquee section */}
      <div className="mt-10">
        <Marquee speed={50} gradient={false} loop={0} pauseOnHover={false}>
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
