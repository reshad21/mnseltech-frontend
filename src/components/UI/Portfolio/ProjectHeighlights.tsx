import Image from "next/image";
import img1 from "../../../../public/images/1.jpeg";
import Container from "../Container";
const ProjectHeighlights = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4">
        <div>
          <div className="">
            <Image src={img1} width={560} height={620} alt="image one" />
          </div>
          <div className="">
            <div className="relative my-7">
              <p className="text-2xl font-syne font-semibold">
                Brand Journey Improvements
              </p>
              <div className="w-14 h-[1px] bg-brandOrange absolute top-[50%] right-[28%] z-10"></div>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <span className="mr-3 text-slate-400">Client:</span>Organc
              </li>
              <li>
                <span className="mr-3 text-slate-400">Work:</span>Branding
                Logodesign
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectHeighlights;
