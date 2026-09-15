import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/lib/lenis-provider';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'SAMAD® — Creative Web & Motion Engineer',
  description: 'Portfolio of Samad, creative web developer and motion engineer crafting high-performance interactive web builds.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
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
    <html lang="en" suppressHydrationWarning className={cn("dark", "font-sans", geist.variable)}>
      <body className="antialiased bg-black text-white selection:bg-[#FFFF23] selection:text-black">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
