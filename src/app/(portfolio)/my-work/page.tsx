import Container from "@/components/UI/Container";
import AccentElement from "@/components/UI/Portfolio/AccentElement";
import Image from "next/image";
import Link from "next/link";
import myWork1 from "../../../../public/images/my-work-1.jpeg";

const page = () => {
  return (
    <Container>
      <div className="px-4 my-24">
        {/* Section Header */}
        <div className="pb-20 mb-20 border-b-2 border-slate-400 relative">
          {/* Accent Element positioned with Tailwind */}
          <AccentElement className="absolute w-full md:w-[417.14px] md:h-[253.03px] top-[-200%] left-[-40%]" />
          <h1 className="font-syne text-4xl">My Works</h1>
          <span className="font-rubik bodyMedium text-[#949494]">
            Showcase About Works
          </span>
        </div>

        {/* Flexbox Section */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Row 1: 3 Items (on large screens) */}
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 basis-full sm:basis-[calc(33.333%-1rem)] md:basis-[calc(33.333%-1rem)] w-full"
            >
              <Link href="/project-details" className="w-full">
                <Image
                  src={myWork1}
                  width={361}
                  height={439}
                  alt="my-work-images"
                  className="rounded-xl w-full"
                />
              </Link>
              <div className="text-center mt-2">
                <span className="text-[13px] font-inter uppercase text-gray-500 font-bold">
                  blue
                </span>
                <p className="text-2xl font-inter font-bold">Orvillebury</p>
              </div>
            </div>
          ))}

          {/* Row 2: 2 Items (on larger screens) */}
          {[1, 2].map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 basis-full sm:basis-[calc(50%-0.75rem)] md:basis-[calc(50%-0.75rem)] w-full"
            >
              <Link href="/project-details" className="w-full">
                <Image
                  src={myWork1}
                  width={361}
                  height={439}
                  alt="my-work-images"
                  className="rounded-xl w-full"
                />
              </Link>
              <div className="text-center mt-2">
                <span className="text-[13px] font-inter uppercase text-gray-500 font-bold">
                  blue
                </span>
                <p className="text-2xl font-inter font-bold">Orvillebury</p>
              </div>
            </div>
          ))}

          {/* Row 3: 3 Items (on large screens) */}
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 basis-full sm:basis-[calc(33.333%-1rem)] md:basis-[calc(33.333%-1rem)] w-full"
            >
              <Link href="/project-details" className="w-full">
                <Image
                  src={myWork1}
                  width={361}
                  height={439}
                  alt="my-work-images"
                  className="rounded-xl w-full"
                />
              </Link>
              <div className="text-center mt-2">
                <span className="text-[13px] font-inter uppercase text-gray-500 font-bold">
                  blue
                </span>
                <p className="text-2xl font-inter font-bold">Orvillebury</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center items-center my-16">
          <button className="rounded-full border border-brandOrange bg-black text-brandOrange px-6 py-3 hover:bg-gray-800 transition-all font-inter text-[13px] font-bold">
            LOAD MORE WORK
          </button>
        </div>
      </div>
    </Container>
  );
};

export default page;
