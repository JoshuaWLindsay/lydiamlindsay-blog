import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_TITLE } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: "Joshua W Lindsay's Engineering Blog & Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
