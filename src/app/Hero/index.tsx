import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ weight: "900", subsets: ["latin"] });

export const Hero = () => {
  return (
    <div className="relative min-h-max">
      <div className="image-container">
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="/images/desktop/image-header.jpg"
          />
          <Image
            src="/images/mobile/image-header.jpg"
            alt=""
            width={375}
            height={614}
            className="w-full h-auto"
          />
        </picture>
      </div>

      <div className="absolute inset-x-0 inset-y-1/2  flex flex-col justify-center items-center space-y-12 text-center">
        <h1 className={`${fraunces.className} white text-[2.7rem] tracking-[0.275rem] leading-tight`}>WE ARE CREATIVES</h1>
        <Image
          src="/images/icon-arrow-down.svg"
          alt=""
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};
