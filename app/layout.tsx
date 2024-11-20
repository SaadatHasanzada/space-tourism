import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper";
import { Barlow_Condensed, Bellefair, Barlow } from "next/font/google";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space Tourism Website",
};

export const barlow = Barlow_Condensed({
  weight: ["300", "400"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});
export const barlowReg = Barlow({
  weight: ["300", "400"],
  variable: "--font-barlow-reg",
  subsets: ["latin"],
  display: "swap",
});
export const bellefair = Bellefair({
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
