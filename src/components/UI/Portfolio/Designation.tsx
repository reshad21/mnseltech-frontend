import Container from "../Container";
import AccentElement from "./AccentElement";

const Designation = () => {
  return (
    <Container>
      <div className="flex flex-col gap-[115px] justify-center items-center relative my-[246px]">
        {/* Accent Element positioned with Tailwind */}
        <AccentElement className="absolute w-full md:w-[417.14px] md:h-[253.03px] top-[-70%] right-[40%]" />

        <h2 className="text-center max-w-[891px] mx-0 px-4 md:mx-auto md:px-28 font-syne">
          Adaptive Logo Design for Your Brand
        </h2>
        <button className="bg-brandOrange w-[242px] h-[65px] font-rubik text-xs rounded-full">
          EXPORE WORKS
        </button>
      </div>
    </Container>
  );
};

export default Designation;
