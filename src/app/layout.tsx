import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/lib/lenis-provider';

export const metadata: Metadata = {
  title: 'SAMAD® — Creative Web & Motion Engineer',
  description: 'Portfolio of Samad, creative web developer and motion engineer crafting high-performance interactive web builds.',
  openGraph: {
    title: 'SAMAD® — Creative Web & Motion Engineer',
    description: 'Portfolio of Samad, creative web developer and motion engineer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-white selection:bg-[#FFFF23] selection:text-black">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
