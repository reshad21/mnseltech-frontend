import Footer from "@/components/UI/Portfolio/Footer";
import Topber from "@/components/UI/Portfolio/TopBer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Topber />
      {children}
      <Footer />
    </div>
  );
}
