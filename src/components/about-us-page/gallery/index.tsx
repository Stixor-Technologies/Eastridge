import Image from "next/image";
import { galleryItems } from "@/src/core/constants";

const Gallery = () => {
  const socialLinks = {
    twitter: "https://www.twitter.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
  };

  return (
    <div className="container mx-auto space-y-20 px-4 py-16">
      {/* Department Heads & Key Physicians Section */}
      <section>
        {/* Heading Section */}
        <div className="mb-12 text-left md:text-center">
          <h2 className="mb-4 text-3xl font-medium text-[#333333] md:text-6xl">
            Department Heads & Key Physicians
          </h2>
        </div>

        {/* Image Grid for Doctors */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative ${index % 2 === 0 ? "mt-20 md:mt-0" : ""} ${
                index % 4 === 0 || index % 4 === 2 ? "md:mt-20" : ""
              }`}
            >
              {/* Image Container with Group Hover */}
              <div className="group relative aspect-[313.8461608886719/387.21588134765625] overflow-hidden rounded-[14.06px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300"
                />
                {/* Hover Overlay with Pop-up Images */}
                <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center space-x-3 rounded-lg bg-white p-2 shadow-lg">
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/Vector-2.png"
                        alt="Twitter"
                        width={30}
                        height={30}
                        className="rounded-none"
                      />
                    </a>
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/Vector-3.png"
                        alt="Facebook"
                        width={30}
                        height={30}
                        className="rounded-none"
                      />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/Vector-4.png"
                        alt="LinkedIn"
                        width={30}
                        height={30}
                        className="rounded-none"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Doctor Information */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            className="inline-flex items-center justify-between rounded-full px-4 py-3 text-xl leading-none font-semibold text-white capitalize shadow-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#D82519" }}
          >
            <span>View All</span>
            <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <img
                src="images/arrow-right.png"
                alt="Arrow right"
                className="h-5 w-5"
              />
            </div>
          </button>
        </div>
      </section>

      {/* Achievements & Recognition Section */}
      <section>
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Achievements & Recognition
          </h2>
        </div>

        {/* Achievement Images Grid - 5 Images Total with Responsive Layout */}
        <div className="space-y-4">
          {/* Top Row - 60% width for first image, 40% width for stacked images */}
          <div className="grid grid-cols-5 gap-4">
            {/* First Image - Takes 60% width (3 out of 5 columns) */}
            <div className="relative col-span-3 overflow-hidden rounded-lg">
              {/* Using aspect ratio for responsive height that scales with width */}
              <div className="aspect-[3/2] w-full">
                <Image
                  src="/images/gallery-9.png"
                  alt="Achievement Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side container - Takes 40% width (2 out of 5 columns) */}
            <div className="col-span-2 grid grid-rows-2 gap-4">
              {/* Second Image - Top right with same aspect ratio as other images */}
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[3/2] w-full">
                  <Image
                    src="/images/gallery-10.png"
                    alt="Achievement Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Third Image - Bottom right with same aspect ratio as other images */}
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-[3/2] w-full">
                  <Image
                    src="/images/gallery-11.jpg"
                    alt="Achievement Image 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Two equal images (50% width each) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Fourth Image - 50% width with consistent aspect ratio */}
            <div className="relative overflow-hidden rounded-lg">
              {/* Same aspect ratio as images 2, 3, and 5 for visual consistency */}
              <div className="aspect-[3/2] w-full">
                <Image
                  src="/images/gallery-12.jpg"
                  alt="Achievement Image 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Fifth Image - 50% width with consistent aspect ratio */}
            <div className="relative overflow-hidden rounded-lg">
              {/* Same aspect ratio as images 2, 3, and 4 for visual consistency */}
              <div className="aspect-[3/2] w-full">
                <Image
                  src="/images/gallery-13.jpg"
                  alt="Achievement Image 5"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
