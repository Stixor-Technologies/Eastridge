import Image from "next/image";

type Physician = {
  image: string;
  alt: string;
  name: string;
  designation: string;
};

const PHYSICIANS: Physician[] = [
  {
    image: "/images/gallery-1.png",
    alt: "Doctor 1",
    name: "Dr. Sarah Johnson",
    designation: "Chief of Cardiology",
  },
  {
    image: "/images/gallery-2.png",
    alt: "Doctor 2",
    name: "Dr. Michael Chen",
    designation: "Head of Neurology",
  },
  {
    image: "/images/gallery-3.png",
    alt: "Doctor 3",
    name: "Dr. Emily Rodriguez",
    designation: "Chief Surgeon",
  },
  {
    image: "/images/gallery-4.png",
    alt: "Doctor 4",
    name: "Dr. James Williams",
    designation: "Head of Pediatrics",
  },
  {
    image: "/images/gallery-5.png",
    alt: "Doctor 5",
    name: "Dr. Lisa Anderson",
    designation: "Chief of Oncology",
  },
  {
    image: "/images/gallery-6.png",
    alt: "Doctor 6",
    name: "Dr. David Kim",
    designation: "Head of Orthopedics",
  },
  {
    image: "/images/gallery-7.png",
    alt: "Doctor 7",
    name: "Dr. Maria Garcia",
    designation: "Chief of Radiology",
  },
  {
    image: "/images/gallery-8.png",
    alt: "Doctor 8",
    name: "Dr. Robert Taylor",
    designation: "Head of Emergency",
  },
];

const PRIMARY_COLOR = "#D82519";

const KeyPhysicians = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-medium text-gray-800 md:text-6xl">
          Department Heads & Key Physicians
        </h2>
      </div>

      {/* Physicians Grid */}
      <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {PHYSICIANS.map((physician, index) => {
          const isEvenMobile = index % 2 === 0;
          const isOffsetDesktop = index % 4 === 0 || index % 4 === 2;
          // Load first row immediately (indices 0-3 on desktop, 0-1 on mobile)
          const shouldPrioritize = index < 4;

          return (
            <article
              key={`${physician.name}-${index}`}
              className={`${isEvenMobile ? "mt-20 md:mt-0" : ""} ${isOffsetDesktop ? "md:mt-20" : ""}`}
            >
              {/* Image */}
              <div className="group relative aspect-[313.85/387.22] overflow-hidden rounded-2xl">
                <Image
                  src={physician.image}
                  alt={physician.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={shouldPrioritize}
                  quality={85}
                />
              </div>

              {/* Info */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">
                  {physician.name}
                </h3>
                <p className="text-sm text-gray-600">{physician.designation}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          className="inline-flex cursor-pointer items-center justify-between rounded-full px-4 py-3 text-xl leading-none font-semibold text-white capitalize shadow-lg transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: PRIMARY_COLOR }}
          aria-label="View all physicians"
        >
          <span>View All</span>
          <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <Image
              src="/icons/right-arrow.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default KeyPhysicians;
