import Container from "../Container";

const ProjectHeader = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 justify-center items-center relative mb-[246px]">
        {/* Accent Element */}
        <div
          className="absolute w-full h-full md:w-[417.14px] md:h-[253.03px] top-[-80px] right-[220px] bg-[rgba(255,255,255,0.14)] rounded-full blur-3xl"
          style={{ transform: "rotate(198.32deg)" }}
        ></div>

        <h2 className="text-center max-w-[891px] mx-0 px-4 md:mx-auto md:px-28 font-syne">
          My Projects Highlight
        </h2>
        <button className="bg-brandOrange w-[242px] h-[65px] font-rubik text-xs rounded-full">
          EXPORE WORKS
        </button>
      </div>
    </Container>
  );
};

export default ProjectHeader;
