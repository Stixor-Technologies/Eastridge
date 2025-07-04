import React from "react";
import Image from "next/image";
import HospitalGallery from "@/public/images/hospital-gallery.png";
import HospitalReception from "@/public/images/hospital-reception.png";
import Equipment from "@/public/images/equipment.png";

const AboutSection = () => {
  return (
    <section className="container">
      <div className="my-10 lg:my-16">
        <h2>About Eastridge</h2>

        {/* about section */}
        <div className="mt-10 flex flex-col items-center gap-8 text-center lg:mt-20 lg:flex-row lg:gap-14 lg:text-left xl:gap-[5.625rem]">
          <div className="w-full lg:max-w-[22.125rem]">
            <h3 className="text-body-primary text-[2.5rem] leading-tight font-semibold md:text-6xl">
              Care You Can <span className="text-accent">Trust</span>
            </h3>
            <p className="text-body-main mt-8 text-[1.375rem]">
              Expert care. Genuine compassion. Always here for you.
            </p>
          </div>

          <p className="text-body-main flex-1 text-xl font-medium md:text-[1.375rem]">
            Eastridge Prime Care is a 173-bed, multi-specialty hospital by the
            Fauji Foundation, set to launch in August 2025. Built with advanced
            medical technology and expert staff, it aims to deliver ethical,
            high-quality care with empathy. Located in Rawalpindi, it will serve
            the twin cities and beyond, with plans for future expansion and
            medical tourism initiatives. Once fully completed in 2026, the
            facility will exceed 200,000 sq. ft., featuring a state-of-the-art
            Cardiac Centre and support infrastructure.
          </p>
        </div>
      </div>

      {/* visions section */}

      <div className="flex flex-col items-center justify-between gap-10 py-10 text-center md:flex-row md:text-left lg:gap-20 xl:gap-[8.8125rem]">
        <div className="md:max-w-[586px] 2xl:max-w-max">
          <h4 className="text-body-primary text-[40px] leading-tight">
            Our Vision
          </h4>
          <p className="text-body-main my-9 text-xl lg:text-2xl">
            To be the top choice in healthcare, known for exceptional care and
            community well-being, trusted locally and globally.
          </p>
          <Image
            src={HospitalGallery}
            width={656}
            height={383}
            alt="hospital-gallery"
          />
        </div>

        <div className="grid grid-cols-1 gap-9 md:max-w-[614px] 2xl:max-w-max">
          <h4 className="text-body-primary text-[40px] leading-tight md:row-start-2">
            Mission Statement
          </h4>
          <p className="text-body-main text-xl lg:text-2xl">
            Provide Best in Class Hospital-based Ethical Healthcare Services,
            acting as the Leading State of Art Center.
          </p>
          <Image
            src={HospitalReception}
            width={656}
            height={409}
            alt="hospital-reception"
            className="md:row-start-1"
          />
        </div>
      </div>

      {/* values section */}

      <div className="pt-10 md:pt-[3.9375rem]">
        <div className="flex flex-col gap-10 md:gap-20 lg:flex-row xl:gap-[6.75rem]">
          <div className="text-body-main w-full text-center text-xl md:text-[1.375rem] lg:max-w-[40.875rem] lg:text-left">
            <h4 className="text-body-primary text-[40px] leading-tight">
              Our Values
            </h4>
            <p className="my-9">
              From seamless appointment booking to advanced diagnostics and
              expert consultations, Eastridge Prime Care makes access to
              healthcare simple, efficient, and reassuring. Whether it&apos;s a
              routine visit or specialized treatment, we&apos;re here to provide
              trusted, patient-centered care — day or night.
            </p>
            <p>
              From seamless appointment booking to advanced diagnostics and
              expert consultations, Eastridge Prime Care makes access to
              healthcare simple, efficient, and reassuring. Whether it&apos;s a
              routine visit or specialized treatment, we&apos;re here to provide
              trusted, patient-centered care — day or night.
            </p>
          </div>

          <div className="w-full lg:max-w-[37.375rem] 2xl:max-w-max">
            <Image
              src={Equipment}
              width={1024}
              height={509}
              alt="equipment"
              className="lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
