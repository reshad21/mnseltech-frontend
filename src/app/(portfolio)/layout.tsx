import Container from "@/components/UI/Container";
import { Navbar } from "@/components/UI/Navber";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gradient-to-br from-[#05021d] to-[#5e0a99]">
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}
