"use client";
import HeroSection from "@/src/components/home-page/hero-section";
import AboutSection from "@/src/components/home-page/about-section";
import ServicesSection from "@/src/components/home-page/services";
// import Banner from "@/src/components/home-page/banner";
import DepartmentsSection from "@/src/components/home-page/departments";
// import ContactSection from "@/src/components/home-page/contact-section";
import Team from "@/src/components/home-page/team";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <ServicesSection />
      <Team />
      {/* <ContactSection /> */}
      {/* <Banner /> */}
    </div>
  );
}
