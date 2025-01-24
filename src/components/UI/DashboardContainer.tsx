export default function DashboardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container w-full text-white bg-slate-900 min-h-screen">
      {children}
    </div>
  );
}
