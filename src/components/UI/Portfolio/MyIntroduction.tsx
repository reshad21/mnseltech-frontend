import Image from "next/image";
import myimage from "../../../../public/images/944eff94db883c7f58e710c7af01f099.png";
import Container from "../Container";

const MyIntroduction = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center h-fit px-4 md:px-4">
        {/* Left Part */}
        <div className="flex flex-col gap-6 md:gap-10 relative w-full md:w-1/2 text-center md:text-left">
          {/* Accent Element */}
          <div
            className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[317.14px] md:h-[353.03px] top-[-50px] left-[-60px] md:top-[-90px] md:left-[-160px] bg-[rgba(255,255,255,0.14)] rounded-full blur-3xl"
            style={{ transform: "rotate(198.32deg)" }}
          ></div>

          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl">
            Let’s get to know about me closer
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters, and web design.
          </p>

          <button className="bg-brandOrange w-[200px] sm:w-[220px] md:w-[242px] h-[50px] sm:h-[55px] md:h-[65px] font-rubik text-sm sm:text-base md:text-xs rounded-full mx-auto md:mx-0">
            Discover More About Me
          </button>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0">
          {/* Top Right Border Element */}
          <div className="absolute w-[80px] h-[25px] sm:w-[100px] sm:h-[30px] md:w-[110px] md:h-[34px] border border-brandOrange rounded-full top-[0%] right-[10%] translate-x-[50%] translate-y-[-50%]"></div>

          <Image
            src={myimage}
            width={454}
            height={506}
            alt="portfolio-image"
            className="w-full sm:w-full md:w-[454px] h-auto"
          />

          {/* Bottom Left Border Element */}
          <div className="absolute w-[40px] h-[120px] sm:w-[50px] sm:h-[150px] md:w-[55px] md:h-[178px] border border-brandOrange rounded-full bottom-[10%] left-[10%] translate-x-[50%] translate-y-[-50%]"></div>
        </div>
      </div>
    </Container>
  );
};

export default MyIntroduction;
