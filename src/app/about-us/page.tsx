"use client";
import AboutEastridgeSection from "@/src/components/about-us-page/about-eastridge";
import AboutExpertCareSection from "@/src/components/about-us-page/expert-care";
import AboutVisionSection from "@/src/components/about-us-page/about-vision";
import OurHistorySection from "@/src/components/about-us-page/our-history";
import OurCertificationSection from "@/src/components/about-us-page/our-certification";
import OurTeam from "@/src/components/about-us-page/our-team";
import Gallery from "@/src/components/about-us-page/gallery";
import Appointment from "@/src/components/about-us-page/appointment";
import Hero from "@/src/components/shared-components/hero-section";

export default function AboutUsPage() {
  return (
    <div className="overflow-hidden">
      <Hero title="About Us" />
      <AboutEastridgeSection />
      <AboutExpertCareSection />
      <AboutVisionSection />
      <OurHistorySection />
      <OurCertificationSection />
      <OurTeam />
      <Gallery />
      <Appointment />
    </div>
  );
}
