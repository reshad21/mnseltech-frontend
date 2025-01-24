import DashboardContainer from "@/components/UI/DashboardContainer";
import { Navbar } from "@/components/UI/Navber";
import Footer from "@/components/UI/Portfolio/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <DashboardContainer>{children}</DashboardContainer>
      <Footer />
    </>
  );
}
