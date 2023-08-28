import { SunnySideLogo } from "@/assets";
import Image from "next/image";

export default () => {
  return (
    <nav className="z-50 fixed w-full flex justify-between p-7">
      <SunnySideLogo />
      <button>
        <Image
          src="/images/icon-hamburger.svg"
          alt=""
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      </button>
    </nav>
  );
};
