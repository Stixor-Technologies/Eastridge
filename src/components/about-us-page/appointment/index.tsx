import Image from "next/image";

const Appointment = () => {
  return (
    <section
      className="relative overflow-hidden rounded-2xl lg:m-6"
      style={{ backgroundColor: "#FFF6F5" }}
    >
      {/* Background Color Layer */}
      <div className="absolute inset-0 z-0"></div>

      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-10 lg:hidden">
        <Image
          src="/images/appointment-mobile-bg.png"
          alt="Appointment Mobile Background"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
      </div>

      {/* Background Image - Desktop */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        <Image
          src="/images/appointment-bg.png"
          alt="Appointment Background"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
      </div>

      {/* Grid Layout */}
      <div className="relative z-20 grid h-full w-full grid-cols-1 grid-rows-3 gap-6 p-4 sm:p-6 md:p-8 lg:grid-cols-2 lg:grid-rows-1">
        {/* Text Section */}
        <div className="row-start-1 flex flex-col items-start justify-center text-center lg:col-start-1 lg:row-start-1 lg:pl-12 lg:text-left">
          <h2 className="mb-4 text-2xl leading-tight font-medium text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Take the Next Step <br /> Toward Better Health
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
            Book an appointment, get a second opinion, or simply talk to someone
            who cares. We're here to support your health journey.
          </p>
          {/*Button */}
          <div className="text-center">
            <button
              className="inline-flex items-center justify-between rounded-full px-4 py-3 text-xl leading-none font-semibold text-white capitalize shadow-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#D82519" }}
            >
              <span>Get Started</span>
              <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <img
                  src="images/arrow-right.png"
                  alt="Arrow right"
                  className="h-5 w-5"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Placeholder for Image Section (to align with design) */}
        <div className="hidden lg:col-start-2 lg:row-start-1 lg:flex lg:items-center lg:justify-end lg:pr-12">
          {/* Image can be added here if needed, or left empty to match design */}
        </div>
      </div>
    </section>
  );
};

export default Appointment;
