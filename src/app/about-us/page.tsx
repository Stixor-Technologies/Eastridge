"use client";
import AboutEastridgeSection from "@/src/components/about-us-page/section-1";
import AboutExpertCareSection from "@/src/components/about-us-page/section-2";
import AboutVisionSection from "@/src/components/about-us-page/section-3";

export default function AboutUsPage() {
  return (
    <div>
      <div className="bg-gray-100 p-52"></div>
      <AboutEastridgeSection />
      <AboutExpertCareSection />
      <AboutVisionSection />
    </div>
  );
}
