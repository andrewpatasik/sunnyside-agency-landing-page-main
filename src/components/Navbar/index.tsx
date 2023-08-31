import { SunnySideLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-50 fixed w-full flex justify-between items-center p-7">
      <SunnySideLogo />
      <button className="md:hidden">
        <Image
          src="/images/icon-hamburger.svg"
          alt=""
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      </button>
      <ul className="hidden text-sm md:flex flex-row white tracking-tight items-center space-x-4">
        <li className="px-4 py-3 hover:rounded-full hover:bg-white hover:very-dark-desaturated-blue hover:nav-accent hover:uppercase">
          <Link href="/">About</Link>
        </li>
        <li className="px-4 py-3 hover:rounded-full  hover:bg-white hover:very-dark-desaturated-blue hover:nav-accent hover:uppercase">
          <Link href="/">Services</Link>
        </li>
        <li className="px-4 py-3 hover:rounded-full  hover:bg-white hover:very-dark-desaturated-blue hover:nav-accent hover:uppercase">
          <Link href="/">Projects</Link>
        </li>
        <li className="px-6 py-3 hover:rounded-full  hover:bg-white hover:very-dark-desaturated-blue hover:nav-accent hover:uppercase">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
