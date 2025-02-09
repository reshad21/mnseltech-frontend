import Link from "next/link";

type LinkItem = {
  href: string;
  label: string;
};

export const SidebarOptions = ({ links }: { links: LinkItem[] }) => {
  return (
    <div className="flex flex-col gap-5">
      {links?.map((link) => (
        <Link
          key={link.href}
          className="block w-full rounded-md px-3 py-2 hover:bg-white hover:text-black border-2 border-slate-50"
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
