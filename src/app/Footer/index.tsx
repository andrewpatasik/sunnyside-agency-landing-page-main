import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="w-full flex flex-row flex-wrap sm:flex-nowrap">
        <div className="basis-1/2 sm:basis-1/4">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet="/images/desktop/image-gallery-milkbottles.jpg"
            />
            <Image
              src="/images/mobile/image-gallery-milkbottles.jpg"
              alt=""
              width={187}
              height={187}
              className="w-full h-auto"
            />
          </picture>
        </div>
        <div className="basis-1/2 sm:basis-1/4">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet="/images/desktop/image-gallery-orange.jpg"
            />
            <Image
              src="/images/mobile/image-gallery-orange.jpg"
              alt=""
              width={187}
              height={187}
              className="w-full h-auto"
            />
          </picture>
        </div>
        <div className="basis-1/2 sm:basis-1/4">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet="/images/desktop/image-gallery-cone.jpg"
            />
            <Image
              src="/images/mobile/image-gallery-cone.jpg"
              alt=""
              width={187}
              height={187}
              className="w-full h-auto"
            />
          </picture>
        </div>
        <div className="basis-1/2 sm:basis-1/4">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet="/images/desktop/image-gallery-sugar-cubes.jpg"
            />
            <Image
              src="/images/mobile/image-gallery-sugar-cubes.jpg"
              alt=""
              width={187}
              height={187}
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>

      <div className="bg-dark-moderate-cyan dark-desaturated-cyan flex flex-col justify-center items-center space-y-16 py-20">
        <Image
          src="/images/logo.svg"
          alt=""
          width={0}
          height={0}
          className="w-auto h-auto"
        />
        <ul className="w-full flex justify-around items-center">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
        </ul>

        <ul className="w-full flex justify-around items-center">
          <li>
            <Link href="/">Facebook</Link>
          </li>
          <li>
            <Link href="/">Instagram</Link>
          </li>
          <li>
            <Link href="/">Twitter</Link>
          </li>
          <li>
            <Link href="/">Pinterest</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
