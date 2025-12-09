import React from "react";
import Image from "next/image";
import Microscope from "@/public/images/microscope.png";
import Emergency from "@/public/images/departments/emergency.png";
import Neurology from "@/public/images/departments/neurology.png";
import Cardiology from "@/public/images/departments/cardiology.png";

const ServiceDetails = () => {
  return (
    <section className="py-40">
      <div className="container flex flex-col items-start gap-12 lg:flex-row">
        <div className="sticky top-24 h-40 min-w-[23.125rem] bg-gray-400"></div>
        <div>
          <Image src={Microscope} alt="Microscope" />

          <div className="mt-9">
            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              List of Medical Departments & Specialties
            </h3>

            <p className="text-body-main text-base">
              Lorem Ipsum as their default model text, and a search for lorem
              ipsum will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident
            </p>

            <h3 className="text-body-primary mb-4 text-2xl leading-tight font-bold md:text-[2.1875rem]">
              Our Department and Specialities
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.7fr]">
              <div className="relative row-span-2 overflow-hidden rounded-2xl">
                <Image
                  src={Emergency}
                  alt="Emergency"
                  className="inset-0 h-full w-full object-cover md:absolute"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 text-white">
                  <h3 className="text-xl leading-tight font-bold xl:text-[2.1875rem]">
                    Emergency Department
                  </h3>

                  <p className="text-sm leading-tight xl:text-base">
                    Lorem ipsum dolor sit amet consectetur. Diam id quis morbi
                    ac. Habitant sit auctor viverra quis et enim pellentesque
                    ornare sed. Laoreet ut lectus scelerisque dolor vitae urna.
                    Tempus nibh mattis non fames vitae.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <Image src={Cardiology} alt="Cardiology" />

                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 text-white">
                  <h3 className="text-xl leading-tight font-bold xl:text-[2.1875rem]">
                    Cardiology
                  </h3>

                  <p className="text-sm leading-tight xl:text-base">
                    Lorem ipsum dolor sit amet consectetur. Diam id quis morbi
                    ac. Habitant sit auctor viverra quis et enim pellentesque
                    ornare sed.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <Image src={Neurology} alt="Neurology" />

                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-6 text-white">
                  <h3 className="text-xl leading-tight font-bold xl:text-[2.1875rem]">
                    Neurology
                  </h3>

                  <p className="text-sm leading-tight xl:text-base">
                    Lorem ipsum dolor sit amet consectetur. Diam id quis morbi
                    ac. Habitant sit auctor viverra quis et enim pellentesque
                    ornare sed.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
