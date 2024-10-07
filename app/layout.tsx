import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Work_Sans } from "next/font/google";

const ZettaFont = Work_Sans({ subsets: ["latin"], variable: "--zetta-font" });

export const metadata: Metadata = {
  title: "Survey",
  description: "Survey site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${ZettaFont.variable} font-zetta-font`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
