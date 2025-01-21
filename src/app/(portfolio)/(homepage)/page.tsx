import Blog from "@/components/UI/Portfolio/Blog";
import ContactUs from "@/components/UI/Portfolio/ContactUs";
import Designation from "@/components/UI/Portfolio/Designation";
import EducationalDescription from "@/components/UI/Portfolio/EducationalDescription";
import Footer from "@/components/UI/Portfolio/Footer";
import MyIntroduction from "@/components/UI/Portfolio/MyIntroduction";
import ProjectHeader from "@/components/UI/Portfolio/ProjectHeader";
import ProjectHeighlights from "@/components/UI/Portfolio/ProjectHeighlights";
import Projects from "@/components/UI/Portfolio/Projects";
import Skills from "@/components/UI/Portfolio/Skills";
import Topber from "@/components/UI/Portfolio/TopBer";

const PortfolioPage = () => {
  return (
    <>
      <Topber />
      <Designation />
      <MyIntroduction />
      <ProjectHeader />
      <ProjectHeighlights />
      <Skills />
      <EducationalDescription />
      <Projects />
      <ContactUs />
      <Blog />
      <Footer />
    </>
  );
};

export default PortfolioPage;
