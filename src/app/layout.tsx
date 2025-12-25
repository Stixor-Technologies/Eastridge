import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { SectionProvider } from "../context/section-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Eastridge Primecare",
  description: "Best hospital in Rawalpindi and Islamabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <>
          <SectionProvider>
            <Header />
            {children}
            <Footer />
          </SectionProvider>
        </>
      </body>
    </html>
  );
}
