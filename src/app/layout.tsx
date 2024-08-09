import { Inter, Manrope } from 'next/font/google';

// Inter shriftini sozlash
const manrope = Manrope({
  subsets: ['latin'], // Faqat latin subsetini qo'shadi
  variable: '--font-manrope', // O'zgaruvchi nomi bilan belgilash
});

export const metadata = {
  title: 'My Next.js App',
  description: 'A clean and modern web app using Inter font.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
