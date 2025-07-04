import HeroSection from "@/src/components/home-page/hero-section";
import AboutSection from "@/src/components/home-page/about-section";
import ServicesSection from "@/src/components/home-page/services";
import Banner from "@/src/components/home-page/banner";
import DepartmentsSection from "../components/home-page/departments";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <ServicesSection />
      <Banner />
    </div>
  );
}
