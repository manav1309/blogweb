import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ManavInVerses - Personal Blog',
  description: 'A personal blogging site combining articles, blogs, and poetry by Manav Puri',
  keywords: 'blog, articles, poetry, writing, personal blog',
  authors: [{ name: 'Manav Puri' }],
  openGraph: {
    title: 'ManavInVerses - Personal Blog',
    description: 'A personal blogging site combining articles, blogs, and poetry',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}