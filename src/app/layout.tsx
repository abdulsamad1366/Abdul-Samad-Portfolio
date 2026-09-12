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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black text-white selection:bg-[#FFFF23] selection:text-black">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
