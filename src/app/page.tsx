"use client";
import HeroSection from "@/src/components/home-page/hero-section";
import AboutSection from "@/src/components/home-page/about-section";
import ServicesSection from "@/src/components/home-page/services";
import DepartmentsSection from "@/src/components/home-page/departments";
import Team from "@/src/components/home-page/team";
import Banner from "@/src/components/home-page/banner";
import ContactSection from "@/src/components/home-page/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <ServicesSection />
      <Team />
      <ContactSection />
      <Banner />
    </>
  );
}
