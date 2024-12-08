import Blog from "@/components/UI/Portfolio/Blog";
import ContactUs from "@/components/UI/Portfolio/ContactUs";
import Designation from "@/components/UI/Portfolio/Designation";
import EducationalDescription from "@/components/UI/Portfolio/EducationalDescription";
import Footer from "@/components/UI/Portfolio/Footer";
import MyIntroduction from "@/components/UI/Portfolio/MyIntroduction";
import Projects from "@/components/UI/Portfolio/Projects";
import Skills from "@/components/UI/Portfolio/Skills";

const PortfolioPage = () => {
  return (
    <>
      <Designation />
      <MyIntroduction />
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
