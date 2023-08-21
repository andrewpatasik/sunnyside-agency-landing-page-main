import Image from "next/image";

export const Hero = () => {
  return (
    <div className="h-1/2">
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
            className="w-full h-auto lg:h-1/2"
          />
        </picture>
      </div>
    </div>
  );
};
