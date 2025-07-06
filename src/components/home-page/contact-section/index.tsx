import React from "react";
import MapComponent from "@/src/components/map";
import { CONTACT_CARDS } from "@/src/core/constants";
import IconBadge from "../../icon-badge";

const ContactSection = () => {
  return (
    <section className="container my-10">
      <h2>Contact Us</h2>

      <div className="mt-10 flex flex-col gap-8 md:mt-[3.75rem] md:flex-row">
        <MapComponent />

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-9 md:max-w-[22.4375rem] md:grid-cols-1">
          {CONTACT_CARDS?.map((cardInfo, index) => (
            <div
              key={index}
              className="bg-card-bg border-card-border text-body-primary rounded-lg border p-[1.375rem] text-xl"
            >
              <IconBadge
                icon={cardInfo?.icon}
                altText={`${cardInfo?.title} - icon`}
              />
              <h4 className="mt-9 mb-3 font-semibold">{cardInfo?.title}</h4>

              {cardInfo.type === "email" ? (
                <a
                  href={`mailto:${cardInfo.lines}`}
                  className="hover:underline"
                >
                  {cardInfo.lines}
                </a>
              ) : cardInfo.type === "phone" ? (
                <a
                  href={`tel:${cardInfo.lines.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >
                  {cardInfo.lines}
                </a>
              ) : (
                <p>{cardInfo.lines}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
