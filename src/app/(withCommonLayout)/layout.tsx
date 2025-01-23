import Container from "@/components/UI/Container";
import { Navbar } from "@/components/UI/Navber";
import Footer from "@/components/UI/Portfolio/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  );
}
