import "./globals.scss";

import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";

import Header from "@/components/header/header";
import type { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space Tourism Website",
};

const barlow = Barlow_Condensed({
  weight: ["300", "400"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});
const barlowReg = Barlow({
  weight: ["300", "400"],
  variable: "--font-barlow-reg",
  subsets: ["latin"],
  display: "swap",
});
const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${bellefair.variable}  ${barlowReg.variable}`}
    >
      <body>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
