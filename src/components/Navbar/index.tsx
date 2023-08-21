import Image from "next/image";

export default () => {
  return (
    <nav className="fixed w-full flex justify-between">
      <Image
        src="/images/logo.svg"
        alt=""
        width={0}
        height={0}
        className="w-24 h-auto"
      />
    </nav>
  );
};
