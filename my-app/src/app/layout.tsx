import { Inter } from 'next/font/google';

// Inter shriftini sozlash
const inter = Inter({
  subsets: ['latin'], // Faqat latin subsetini qo'shadi
  variable: '--font-inter', // O'zgaruvchi nomi bilan belgilash
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
