import { Fraunces } from "next/font/google";
import Image from "next/image";

const fraunces = Fraunces({ weight: ["900"], subsets: ["latin"] });

export const Testimonial = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:flex-wrap text-center mx-auto my-16 px-6 space-y-16">
      <h2
        className={`${fraunces.className} sm:basis-full uppercase grayish-blue tracking-[0.25rem]`}
      >
        client testimonials
      </h2>
      <div className="flex flex-col basis-full sm:basis-1/3 justify-center items-center space-y-10">
        <Image
          src="/images/image-emily.jpg"
          alt=""
          width={73}
          height={73}
          className="w-20 h-20 h-auto rounded-full"
        />

        <p className="dark-grayish-blue text-lg basis-3/4">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <div className="flex flex-col space-y-2">
          <h3 className={`${fraunces.className} very-dark-desaturated-blue`}>
            Emily R.
          </h3>
          <p className="text-sm grayish-blue">Marketing Director</p>
        </div>
      </div>

      <div className="flex flex-col basis-full sm:basis-1/3 justify-center items-center space-y-10">
        <Image
          src="/images/image-thomas.jpg"
          alt=""
          width={73}
          height={73}
          className="w-20 h-20 h-auto rounded-full"
        />

        <p className="dark-grayish-blue text-lg basis-3/4">
          Sunnyside's enthusiasm with their keen interest in our brand's success
          made it a satisfying and enjoyable experience.
        </p>
        <div className="flex flex-col space-y-2">
          <h3 className={`${fraunces.className} very-dark-desaturated-blue`}>
            Thomas S.
          </h3>
          <p className="text-sm grayish-blue">Chief Operating Officer</p>
        </div>
      </div>

      <div className="flex flex-col basis-full sm:basis-1/3 justify-center items-center space-y-10">
        <Image
          src="/images/image-jennie.jpg"
          alt=""
          width={73}
          height={73}
          className="w-20 h-20 h-auto rounded-full"
        />

        <p className="dark-grayish-blue text-lg basis-3/4">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <div className="flex flex-col space-y-2">
          <h3 className={`${fraunces.className} very-dark-desaturated-blue`}>
            Jennie F.
          </h3>
          <p className="text-sm grayish-blue">Business Owner</p>
        </div>
      </div>
    </section>
  );
};
