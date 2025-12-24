import Image from "next/image";
import Doctor from "@/public/images/doctor.png";
import { FC } from "react";

interface BannerProps {
  fromHome?: boolean;
}

const Banner: FC<BannerProps> = ({ fromHome = false }) => {
  return (
    <section className="container pt-10 pb-10 md:pt-16">
      <div className="rounded-3xl bg-[url(/images/banner-bg-mobile.png)] bg-cover bg-no-repeat pt-[1.875rem] md:bg-[url(/images/banner-bg.png)] md:bg-bottom md:px-6 lg:px-[3.5625rem] lg:pt-[2.8125rem]">
        <div className="flex flex-col justify-between gap-[3.9375rem] md:flex-row md:gap-0">
          {/* text section */}
          <div className="max-w-[40.3125rem] px-5 md:px-0 lg:my-10">
            <h3 className="text-body-primary text-[clamp(2rem,4.9vw,4.375rem)] leading-tight">
              Take the Next Step Toward Better Health
            </h3>
            <p className="text-body-main mt-6 tracking-tight md:text-xl">
              Book an appointment, get a second opinion, or simply talk to
              someone who cares we&apos;re here to support your health journey.
            </p>

            {!fromHome && (
              <button className="bg-accent mt-8 mb-8 inline-flex cursor-pointer items-center justify-between rounded-full px-4 py-3 text-xl leading-none font-semibold text-white capitalize shadow-lg transition-all duration-300 hover:scale-105">
                <span>Get Started</span>
                <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <Image
                    src="/icons/right-arrow.svg"
                    alt="Arrow right"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
              </button>
            )}
          </div>

          <div className="self-end">
            <Image
              src={Doctor}
              alt="doctor"
              width={532}
              height={532}
              className="md:min-h-[250px] md:min-w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
