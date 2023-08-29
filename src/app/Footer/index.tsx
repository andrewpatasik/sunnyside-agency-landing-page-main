import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  SunnySideLogo,
  TwitterIcon,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="w-full flex flex-row flex-wrap sm:flex-nowrap">
        <div className="basis-1/2 sm:basis-1/4">
          <picture>
            <source
              media="(min-width: 768px)"
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
              media="(min-width: 768px)"
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
              media="(min-width: 768px)"
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
              media="(min-width: 768px)"
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
        <SunnySideLogo />
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

        <ul className="w-full flex justify-evenly items-center">
          <li>
            <Link href="/">
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link href="/">
              <PinterestIcon />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
