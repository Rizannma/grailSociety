import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grail Society | Street Essentials",
  description: "Curated vintage and street essentials catalog.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-helvetica bg-white text-black">
        {children}
      </body>
    </html>
  );
}