import React from "react";
import { SERVICES } from "@/src/core/constants";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="container my-10">
      <h2>Services</h2>
      <h4 className="text-body-primary mt-[1.625rem] text-center text-[1.625rem] leading-tight md:mt-5 md:text-[2.5rem]">
        Our Support & Emergency Services
      </h4>

      {/* services list */}
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-[clamp(00.5rem,10vw,8.875rem)] gap-y-[1.9375rem] md:mt-[3.75rem] md:gap-y-10">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="border-body-secondary bg-card-bg border-card-border rounded-lg border p-[1.4375rem]"
          >
            <div className="border-card-border flex size-[3.375rem] items-center justify-center rounded-full border bg-white md:size-16">
              <Image
                src={service?.icon}
                width={31}
                height={31}
                alt={`${service?.title} - icon`}
              />
            </div>
            <div>
              <h5 className="text-body-primary mt-9 text-2xl leading-tight font-semibold md:text-[1.6875rem]">
                {service.title}
              </h5>
              <p className="text-body-main mt-3 leading-tight md:text-lg">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
