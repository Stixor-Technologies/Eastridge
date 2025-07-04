import HeroSection from "@/src/components/home-page/hero-section";
import AboutSection from "@/src/components/home-page/about-section";
import ServicesSection from "@/src/components/home-page/services";
import Banner from "@/src/components/home-page/banner";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Banner />
    </div>
  );
}
