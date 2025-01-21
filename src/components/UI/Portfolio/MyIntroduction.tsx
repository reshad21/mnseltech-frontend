import Image from "next/image";
import myimage from "../../../../public/images/944eff94db883c7f58e710c7af01f099.png";
import Container from "../Container";

const MyIntroduction = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center h-fit">
        {/* Left Part */}
        <div className="flex flex-col gap-10 relative w-full md:w-1/2 text-center md:text-left">
          {/* Accent Element */}
          <div
            className="absolute w-full h-full md:w-[317.14px] md:h-[353.03px] top-[-90px] left-[-160px] bg-[rgba(255,255,255,0.14)] rounded-full blur-3xl"
            style={{ transform: "rotate(198.32deg)" }}
          ></div>

          <h2 className="font-syne">Let’s get to know about me closer</h2>

          <p>
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters, and web design.
          </p>

          <button className="bg-brandOrange w-[242px] h-[65px] font-rubik text-xs rounded-full">
            Discover More About Me
          </button>
        </div>

        {/* Right Part */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {/* Top Right Border Element */}
          <div className="absolute w-[110px] h-[34px] border border-brandOrange rounded-full top-0 right-0 translate-x-[-0%] translate-y-[-50%]"></div>

          <Image src={myimage} width={454} height={506} alt="portfolio-image" />

          {/* Top Left Border Element */}
          <div className="absolute w-[55px] h-[178px] border border-brandOrange rounded-full bottom-0 left-0 translate-x-[170%] translate-y-[-80%]"></div>
        </div>
      </div>
    </Container>
  );
};

export default MyIntroduction;
