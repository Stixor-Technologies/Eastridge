import Image from "next/image";
import JobImage from "@/public/images/Frame 132 (2).png";

const JobOpening = () => {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-[20px] bg-[#F6F6F6] lg:grid-cols-2">
        {/* Left side - Content */}
        <div className="order-2 flex flex-col justify-center p-8 lg:order-1 lg:pr-16">
          <h2 className="font-inter text-body-primary mb-6 text-left text-4xl leading-[140%] font-normal uppercase">
            JOIN A GLOBAL TEAM OF CHANGE-MAKERS.
          </h2>

          <p className="font-inter text-body-main mb-8 text-left text-lg leading-[150%] font-normal">
            Viverra ut potenti aliquam faucibus dui imperdiet lacoreet tempus
            sed. Elit cursus est lorem in est id nec. Quis diam posuere at nisl
            eget turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis
            erat nunc in parturient.
          </p>

          <button className="bg-accent font-inter hover:shadow-slider-btn w-fit rounded-lg px-6 py-3 text-base leading-[140%] font-semibold text-white transition-all duration-300">
            View Job Openings
          </button>
        </div>

        {/* Right side - Image */}
        <div className="order-1 h-64 lg:order-2 lg:h-auto">
          <div className="relative h-full w-full">
            <Image
              src={JobImage}
              alt="Join a global team of change-makers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpening;
