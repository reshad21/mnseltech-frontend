import Sidebar from "@/components/UI/Sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="my-3 flex flex-col md:flex-row justify-between w-full gap-4 bg-slate-900">
      <div className="w-full md:w-[15%]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[85%] px-8">{children}</div>
    </div>
  );
}
