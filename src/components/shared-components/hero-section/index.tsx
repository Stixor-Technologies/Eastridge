import Image from "next/image";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <section className="relative h-[447px] w-full">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Hero Content */}
      <div className="relative flex h-full items-center justify-center">
        <h1 className="text-center text-4xl leading-[130%] font-medium tracking-[-0.02em] text-white md:text-8xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
