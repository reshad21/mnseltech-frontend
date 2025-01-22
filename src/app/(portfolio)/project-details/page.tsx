import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../../../../public/images/3.jpeg";
import projectTwoDetails from "../../../../public/images/7ad4e30ce0605949e15e52452ee710e6.jpeg";
import projectOneDetails from "../../../../public/images/e29b240e589b27ee7dd6b91ab4c4993c.jpeg";
const page = () => {
  return (
    <Container>
      <div className="px-4 my-24">
        {/* Section Header */}
        <div className="pb-20 mb-20 border-b-2 border-slate-400">
          <h1 className="font-syne text-4xl">Project Detail</h1>
          <span className="font-rubik bodyMedium text-[#949494]">
            Details About The Porject
          </span>
        </div>

        {/* Section content */}
        <div className="my-16">
          <Image
            src={projectImage}
            alt="project details"
            layout="responsive"
            width={100}
            height={50}
            className="w-full h-auto"
          />
          {/* project story */}
          <div className="w-full md:w-[750px] mx-auto my-14">
            <p className="font-syne text-3xl font-bold mb-6">Project Story</p>
            <p className="font-rubik text-base">
              The fact that photography has different meanings to different
              people is one of the many components of its appeal. Photography is
              such an important part of our life that it is now very difficult
              to imagine the world without it. <br /> <br />
              We cannot imagine a wedding without the opportunity to capture it
              on film, we would not be able to remember the growing up of
              children or the holidays if we did not have pictures.
            </p>
          </div>

          {/* similar images */}
          <div className="flex flex-col md:flex-row gap-5 overflow-hidden my-14">
            <div className="w-full md:w-1/2">
              <Image
                src={projectOneDetails}
                alt="project details"
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={projectTwoDetails}
                alt="project details"
                layout="responsive"
                width={100}
                height={50}
                className="w-full !h-full rounded-xl"
              />
            </div>
          </div>

          {/* project story */}
          <div className="w-full md:w-[750px] mx-auto my-14">
            <p className="font-syne text-3xl font-bold mb-6">Day One</p>
            <p className="font-rubik text-base">
              Everywhere we are haunted by photography in newspapers, magazines,
              advertisements on television on the Internet, but we still crave
              even more. <br />
              <br />
              And what helps to achieve a good result? We will look at these
              issues and some of the possibilities of photography and explain
              that it is a combination of thought imagination, visual design,
              technical skills and organizational skills
            </p>
          </div>

          {/* pagination section */}
          <div className=""></div>

          {/* similar project */}
          <div className="my-8">
            <h2 className="font-syne font-bold text-center mb-8">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link href="#" className="w-full">
                <Image
                  src={projectTwoDetails}
                  alt="project details"
                  layout="responsive"
                  width={100}
                  height={50}
                  className="w-full !h-full rounded-xl"
                />
                <div className="text-center mt-2">
                  <span className="text-[13px] font-inter uppercase text-gray-500 font-bold">
                    blue
                  </span>
                  <p className="text-2xl font-inter font-bold">Orvillebury</p>
                </div>
              </Link>
              <Link href="#" className="w-full">
                <Image
                  src={projectTwoDetails}
                  alt="project details"
                  layout="responsive"
                  width={100}
                  height={50}
                  className="w-full !h-full rounded-xl"
                />
                <div className="text-center mt-2">
                  <span className="text-[13px] font-inter uppercase text-gray-500 font-bold">
                    blue
                  </span>
                  <p className="text-2xl font-inter font-bold">Orvillebury</p>
                </div>
              </Link>
              <Link href="#" className="w-full">
                <Image
                  src={projectTwoDetails}
                  alt="project details"
                  layout="responsive"
                  width={100}
                  height={50}
                  className="w-full !h-full rounded-xl"
                />
                <div className="text-center mt-2">
                  <span className="text-[13px] font-inter uppercase text-gray-500 font-bold">
                    blue
                  </span>
                  <p className="text-2xl font-inter font-bold">Orvillebury</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
