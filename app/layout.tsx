import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css'; // Global styles

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Investas Pro Ghana | Visionary Growth. Local Intelligence.',
  description: 'Diversified investment and venture building ecosystem in recruitment (Staflinc), agribusiness (iLLa Farms), real estate, and financial literacy in Ghana.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-[#FDFCFB] text-[#1A1A1A] selection:bg-[#F4B41A] selection:text-[#1A1A1A] antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
