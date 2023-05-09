import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TextSnap - Convert Images to Text",
  description:
    "TextSnap is a free online tool that allows you to easily convert images to editable text. Simply upload your image and we'll do the rest!",
  verification: { google: "qTg1GnJ7TKpojUr1jO5HHEGOSvc6aVrBFzv2cdFwEvM" },
  keywords:
    "OCR, text recognition, image to text, convert image to text, free OCR tool",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TextSnap - Convert Images to Text",
    description:
      "TextSnap is a free online tool that allows you to easily convert images to editable text. Simply upload your image and we'll do the rest!",
    url: "https://textsnap.vercel.app",
    siteName: "TextSnap",
    locale: "en-US",
    type: "website",
    images: [{ url: "/website.webp", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TextSnap - Convert Images to Text",
    description:
      "TextSnap is a free online tool that allows you to easily convert images to editable text. Simply upload your image and we'll do the rest!",
    images: {
      url: "/website.webp",
      alt: "Convert Images to Text",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6279613441736847"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className + " bg-gray-950 text-white"}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
