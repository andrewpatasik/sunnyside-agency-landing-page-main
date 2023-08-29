import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ weight: "900", subsets: ["latin"] });

export const Features = () => {
  return (
    <section className="grid grid-col-1 sm:grid-col-2">
      <div className="flex flex-col sm:flex-row-reverse">
        <div className="image-container md:basis-1/2">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/desktop/image-transform.jpg"
            />
            <Image
              src="/images/mobile/image-transform.jpg"
              alt="transform_illustration"
              width={375}
              height={304}
              className="w-full h-auto"
            />
          </picture>
        </div>
        <div className="md:basis-1/2 flex flex-col justify-center items-center space-y-8 py-16 px-8 text-center md:py-0 md:items-start md:text-left lg:px-24 ">
          <h2
            className={`${fraunces.className} very-dark-desaturated-blue text-4xl md:text-3xl md:self-start`}
          >
            Transform your<span className="md:block">brand</span>
          </h2>
          <p className="dark-grayish-blue md:text-sm md:-tracking-[0.5px] md:leading-relaxed">
            We are a full-service agency specializing in helping brands grow
            fast. Engage your clients through compelling visuals that do most of
            the marketing for you.
          </p>
          <Link href="/" className="relative">
            <p
              className={`${fraunces.className} uppercase very-dark-desaturated-blue text-md`}
            >
              learn more
            </p>
            <div className="-z-10 block absolute inset-x-0 -bottom-[0.075rem] bg-yellow opacity-30 w-full h-2 rounded-full hover:opacity-100 active:opacity-100"></div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="image-container md:basis-1/2">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/desktop/image-stand-out.jpg"
            />
            <Image
              src="/images/mobile/image-stand-out.jpg"
              alt="transform_illustration"
              width={375}
              height={304}
              className="w-full h-auto"
            />
          </picture>
        </div>
        <div className="md:basis-1/2 flex flex-col justify-center items-center space-y-8 py-16 px-8 text-center md:py-0 md:items-start md:text-left lg:px-24 ">
          <h2
            className={`${fraunces.className} very-dark-desaturated-blue text-4xl md:text-3xl`}
          >
            Stand out to the right audience
          </h2>
          <p className="dark-grayish-blue md:text-sm md:-tracking-[0.5px] md:leading-relaxed">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <Link href="/" className="relative">
            <p
              className={`${fraunces.className} uppercase very-dark-desaturated-blue text-md`}
            >
              learn more
            </p>
            <div className="-z-10 block absolute inset-x-0 -bottom-[0.075rem] bg-soft-red opacity-30 w-full h-2 rounded-full hover:opacity-100 active:opacity-100"></div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="relative min-h-max">
          <div className="image-container">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/images/desktop/image-graphic-design.jpg"
              />
              <Image
                src="/images/mobile/image-graphic-design.jpg"
                alt=""
                width={375}
                height={610}
                className="w-full h-auto"
              />
            </picture>
          </div>

          <div className="absolute inset-x-0 inset-y-3/4 flex flex-col justify-center items-center px-5 space-y-6 text-center md:space-y-3">
            <h2
              className={`${fraunces.className} text-3xl dark-desaturated-cyan md:text-2xl`}
            >
              Graphic Design
            </h2>
            <p className="dark-blue text-lg tracking-tighter md:text-sm md:w-3/4">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>

        <div className="relative min-h-max">
          <div className="image-container">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/images/desktop/image-photography.jpg"
              />
              <Image
                src="/images/mobile/image-photography.jpg"
                alt=""
                width={375}
                height={610}
                className="w-full h-auto"
              />
            </picture>
          </div>

          <div className="absolute inset-x-0 inset-y-3/4 flex flex-col justify-center items-center px-5 space-y-6 text-center tracking-tighter md:space-y-3">
            <h2
              className={`${fraunces.className} text-3xl dark-desaturated-cyan md:text-2xl`}
            >
              Photography
            </h2>
            <p className="dark-blue text-lg -tracking-[1px] md:text-sm md:w-3/4">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
