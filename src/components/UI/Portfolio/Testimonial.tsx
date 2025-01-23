import Image from "next/image";
import quotes from "../../../../public/images/quoets.png";
import Container from "../Container";
import AccentElement from "./AccentElement";

const Testimonial = () => {
  return (
    <Container>
      <div className="px-4 relative mb-16">
        {/* Accent Element positioned with Tailwind */}
        <AccentElement className="absolute w-full md:w-[417.14px] md:h-[253.03px] top-[-110%] left-[-30%]" />
        {/* Quote Icon */}
        <div className="absolute top-[-3%] right-3 md:top-[-30%] md:right-10">
          <Image
            src={quotes}
            width={199}
            height={183}
            alt="quotes"
            className="w-16 sm:w-24 md:w-48" // Adjust size for responsiveness
          />
        </div>

        {/* Heading */}
        <h2 className="max-w-full md:max-w-[891px] font-syne mb-8 text-2xl sm:text-3xl md:text-4xl md:text-left">
          Testimonial
        </h2>

        {/* Testimonial Card */}
        <div className="">
          <p className="text-sm sm:text-base md:text-lg">
            “Aaronn was fantastic to work with from start to finish. We were
            looking for a simple, stand-out logo and he delivered. I tried
            designing the logo myself thinking I wouldn’t need to pay the money
            for a professional graphic designer but I was very wrong. Working
            with Aaronn was worth every penny and was surprisingly affordable! I
            remember him saying simplicity is key to a successful logo and boy
            he was right. I can’t thank Aaronn enough for his effort and
            professionalism. I would recommend him to anyone looking for a
            design!”
          </p>

          {/* Author Section */}
          <div className="relative mt-6">
            <p className="text-base sm:text-lg md:text-2xl font-syne md:text-left">
              - Martin Lee
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
