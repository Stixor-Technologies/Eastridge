import DeptServices from "@/src/components/department/dept-services";
import HeroSection from "../../components/reusable-sections/HeroSection";
// import Banner from "@/src/components/shared/banner";

const Department = () => {
  return (
    <div>
      <HeroSection>Departments</HeroSection>
      <DeptServices />
      {/* <Banner /> */}
    </div>
  );
};

export default Department;
