import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const useScrollToSection = () => {
  const { contextSafe } = useGSAP();

  const scrollToSection = contextSafe((targetSection: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: targetSection, offsetY: 0 },
      ease: "power2",
    });
  });

  return { scrollToSection };
};
