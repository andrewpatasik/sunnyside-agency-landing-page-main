import Image from "next/image";

export const Hero = () => {
  return (
    <div className="min-h-max">
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
    </div>
  );
};
