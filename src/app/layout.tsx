
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/Navbar/page";
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

const manrope = Manrope({
  subsets: ['latin'], // Faqat latin subsetini qo'shadi
  variable: '--font-manrope', // O'zgaruvchi nomi bilan belgilash
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-[#21212E]`}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
