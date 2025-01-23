import Container from "../Container";
import AccentElement from "./AccentElement";

const ProjectHeader = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 justify-center items-center relative mb-[246px]">
        {/* Accent Element */}
        <AccentElement
          className="absolute top-[-80%] right-[13%]"
          width={550}
          height={379}
        />

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
