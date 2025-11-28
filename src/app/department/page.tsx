import Appointments from "@/src/components/department/appointment";
import KeyPhysicians from "@/src/components/department/key-physicians";
import Services from "@/src/components/department/services";
import HeroSection from "../../components/reusable-sections/HeroSection";

const Department = () => {
  return (
    <div>
      <HeroSection>Departments</HeroSection>
      <Services />
      <KeyPhysicians />
      <Appointments />
    </div>
  );
};

export default Department;
