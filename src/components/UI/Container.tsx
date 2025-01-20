export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-6xl px-0 flex-grow">{children}</div>
  );
}
