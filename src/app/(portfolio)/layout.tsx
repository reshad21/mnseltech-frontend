import Container from "@/components/UI/Container";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Container>{children}</Container>
    </div>
  );
}
