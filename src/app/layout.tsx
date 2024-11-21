import { Providers } from "@/lib/Providers";
import type { Metadata } from "next";
import "react-quill/dist/quill.snow.css";
import "/src/styles/globals.css";

export const metadata: Metadata = {
  title: "RESHAD - PORTFOLIO",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
