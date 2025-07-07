import React, { useRef } from "react";
import MapComponent from "@/src/components/map";
import { CONTACT_CARDS } from "@/src/core/constants";
import IconBadge from "../../icon-badge";
import useSectionInView from "@/src/hooks/useSectionInView";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  const { ref } = useSectionInView("#contact-us");
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);
  const textContainer = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const createTimeline = (
        trigger: Element | null | undefined | string,
        sectionSelector: string,
        itemsSelector?: string,
        start: string = "top 75%",
        sectionAnimationOverrides: gsap.TweenVars = {},
        itemsAnimationOverrides: gsap.TweenVars = {},
      ) => {
        if (!trigger) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger,
            start,
          },
          defaults: {
            duration: 0.7,
            ease: "power1",
          },
        });

        timeline.from(sectionSelector, {
          opacity: 0,
          y: "2.5rem",
          stagger: 0.1,
          ...sectionAnimationOverrides,
        });

        if (itemsSelector) {
          timeline.from(
            itemsSelector,
            {
              opacity: 0,
              y: "2.5rem",
              stagger: 0.1,
              ...itemsAnimationOverrides,
            },
            "<0.2",
          );
        }

        return timeline;
      };

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
        },
        (context) => {
          if (!context.conditions) return;

          const { isDesktop, isMobile } = context.conditions;

          createTimeline(container.current, ".map-section", undefined);

          createTimeline(
            isDesktop ? container.current : ".address-cards",
            ".address-card",
            undefined,
            isMobile ? "top 85%" : "top 75%",
          );
        },
      );
    },
    { scope: container },
  );

  return (
    <section className="container py-10" id="contact-us" ref={ref}>
      <div ref={container}>
        <h2 ref={textContainer}>Contact Us</h2>

        <div className="mt-10 flex flex-col gap-8 md:mt-[3.75rem] md:flex-row">
          <MapComponent />

          <div className="address-cards grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-9 md:max-w-[22.4375rem] md:grid-cols-1">
            {CONTACT_CARDS?.map((cardInfo, index) => (
              <div
                key={index}
                className="address-card bg-card-bg border-card-border text-body-primary rounded-lg border p-[1.375rem] text-xl"
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
      </div>
    </section>
  );
};

export default ContactSection;
