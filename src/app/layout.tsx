import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TextSnap - Convert Images to Text',
  description:
    "TextSnap is a free online tool that allows you to easily convert images to editable text. Simply upload your image and we'll do the rest!",
  verification: { google: 'qTg1GnJ7TKpojUr1jO5HHEGOSvc6aVrBFzv2cdFwEvM' },
  keywords: [
    'OCR',
    'text recognition',
    'image to text',
    'convert image to text',
    'free OCR tool',
    'image to text converter',
    'online ocr',
    'picture text',
    'image to word converter',
    'photo to text',
    'copy text from image',
    'jpg to text',
    'image to text converter online',
    'photo to text converter',
    'ocr converter',
    'picture to text converter',
    'free online ocr',
    'text scanner',
    'jpg to text converter',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'TextSnap - Convert Images to Text',
    description:
      "TextSnap is a free online tool that allows you to easily convert images to editable text. Simply upload your image and we'll do the rest!",
    url: 'https://textsnap.vercel.app',
    siteName: 'TextSnap',
    locale: 'en-US',
    type: 'website',
    images: [{ url: '/website.webp', width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TextSnap - Convert Images to Text',
    description:
      "TextSnap is a free online tool that allows you to easily convert images to editable text. Simply upload your image and we'll do the rest!",
    images: {
      url: '/website.webp',
      alt: 'Convert Images to Text',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className + ' scroll-smooth bg-background-100 text-text-100'
        }
      >
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <Script
          async
          strategy='afterInteractive'
          src='https://www.googletagmanager.com/gtag/js?id=G-NRXG6RMYXN'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRXG6RMYXN');
            `}
        </Script>
      </body>
    </html>
  );
}
