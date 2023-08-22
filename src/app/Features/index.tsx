import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ weight: "900", subsets: ["latin"] });

export const Features = () => {
  return (
    <section className="grid grid-col-1 sm:grid-col-2">
      <div className="flex flex-col sm:flex-row-reverse">
        <div className="image-container">
          <picture>
            <source
              media="(min-width:1280px)"
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
        <div className="flex flex-col justify-center items-center space-y-8 py-16 px-8 text-center">
          <h2
            className={`${fraunces.className} very-dark-desaturated-blue text-4xl`}
          >
            Transform your brand
          </h2>
          <p className="dark-grayish-blue">
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

      <div className="flex flex-col sm:flex-row-reverse">
        <div className="image-container">
          <picture>
            <source
              media="(min-width:1280px)"
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
        <div className="flex flex-col justify-center items-center space-y-8 py-16 px-8 text-center">
          <h2
            className={`${fraunces.className} very-dark-desaturated-blue text-4xl`}
          >
            Stand out to the right audience
          </h2>
          <p className="dark-grayish-blue">
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
    </section>
  );
};