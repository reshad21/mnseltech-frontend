import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import imgLeft from "../../../../public/images/944eff94db883c7f58e710c7af01f099.png";
import imgRight from "../../../../public/images/e9e450fedae340b20cab3e46851bac21.jpeg";
const page = () => {
  return (
    <Container>
      <div className="px-4 my-24">
        {/* Section Header */}
        <div className="pb-20 mb-20 border-b-2 border-slate-400">
          <h1 className="font-syne text-4xl">About Me</h1>
          <span className="font-rubik bodyMedium text-[#949494]">
            Little Brief About Myself
          </span>
        </div>

        {/* Section content */}
        <div className="my-16">
          <div className="flex flex-col md:flex-row justify-between items-center px-5">
            <h1 className="font-syne font-bold w-full md:w-1/2">
              My mission <br /> is to make <br /> design <br /> easier.
            </h1>
            <p className="text-[21px] leading-10 w-full md:w-1/2">
              Create custom Designs with AARONN that converts more visitors than
              any website. With lots of unique design, you can easily select a
              logo without hassle. Create custom landing logos with AARONN that
              converts more visitors than any website. With lots of revisions,
              you can easily build a logo without porbolem.
            </p>
          </div>
        </div>
        {/* professional images */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative w-fit">
            {/* Bottom Left Border Element */}
            <div className="absolute w-[40px] h-[120px] sm:w-[50px] sm:h-[150px] md:w-[55px] md:h-[178px] border border-brandOrange rounded-full top-[0%] left-[0%] translate-x-[-50%]"></div>
            <Image
              src={imgLeft}
              width={454}
              height={506}
              alt="portfolio-image"
              className="w-full sm:w-full md:w-[454px] h-auto"
            />
          </div>
          <div className="relative w-fit">
            {/* Bottom Left Border Element */}
            <div className="absolute w-[80px] h-[25px] sm:w-[100px] sm:h-[30px] md:w-[110px] md:h-[34px] border border-brandOrange rounded-full bottom-[0%] right-[0%] translate-y-[50%]"></div>
            <Image
              src={imgRight}
              width={750}
              height={515}
              alt="portfolio-image"
              className="w-full sm:w-full md:w-[750px] h-full rounded-xl"
            />
          </div>
        </div>
        {/* Follow Section */}
        <div className="my-36">
          <p className="font-syne font-bold text-5xl mb-10">Follow me on:</p>
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-4 justify-between items-center">
            <li>
              <Link
                href="#"
                className="font-inter font-bold text-3xl text-[#949494]"
              >
                Dribble
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-inter font-bold text-3xl text-[#949494]"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-inter font-bold text-3xl text-[#949494]"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-inter font-bold text-3xl text-[#949494]"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default page;
