import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dr. Info",
  description: "A simple landing page for Dr. Info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geist.variable} antialiased`}>
        {children}
        {/* <Footer/>  */}
      </body>
    </html>
  );
}
