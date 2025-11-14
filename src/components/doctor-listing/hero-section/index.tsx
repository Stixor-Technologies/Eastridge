import Image from 'next/image';
import doctorHero from '@/public/images/doctor-hero.png';

const DoctorHeroSection =()=> {
  return (
    <div className="relative w-full h-[447px]">
      <Image
        src={doctorHero}
        alt="Doctor Hero Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[2.5rem] sm:text-[4.5rem] md:text-[6rem] xl:text-[7.625rem] tracking-[-0.02em] md:leading-snug font-medium translate-y-12 md:translate-y-20">Doctor Listing</h1>
      </div>
    </div>
  );
}
export default DoctorHeroSection;