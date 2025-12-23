import Image from "next/image";
import doctorHero from "@/public/images/doctor-hero.png";

import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <div className="relative h-[447px] w-full">
      <Image
        src={doctorHero}
        alt="Doctor Hero Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="translate-y-12 text-[2.5rem] font-medium tracking-[-0.02em] text-white sm:text-[4.5rem] md:translate-y-20 md:text-[6rem] md:leading-snug xl:text-[7.625rem]">
          {children}
        </h1>
      </div>
    </div>
  );
};
export default HeroSection;
