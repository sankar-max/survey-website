import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Open_Sans, Roboto_Flex, Work_Sans } from "next/font/google";

//const ZettaFont = Work_Sans({ subsets: ["latin"], variable: "--zetta-font" });
const ZettaFont = Roboto_Flex({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: "--zetta-font"
})


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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
