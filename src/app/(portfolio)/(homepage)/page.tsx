import Designation from "@/components/UI/Portfolio/Designation";
import Footer from "@/components/UI/Portfolio/Footer";
import MyIntroduction from "@/components/UI/Portfolio/MyIntroduction";
import ProjectHeader from "@/components/UI/Portfolio/ProjectHeader";
import ProjectHeighlights from "@/components/UI/Portfolio/ProjectHeighlights";
import Testimonial from "@/components/UI/Portfolio/Testimonial";
import Topber from "@/components/UI/Portfolio/TopBer";

const PortfolioPage = () => {
  return (
    <>
      <Topber />
      <Designation />
      <MyIntroduction />
      <ProjectHeader />
      <ProjectHeighlights />
      <Testimonial />
      {/* <Skills />
      <EducationalDescription />
      <Projects />
      <ContactUs />
      <Blog /> */}
      <Footer />
    </>
  );
};

export default PortfolioPage;
