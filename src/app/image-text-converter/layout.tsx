import { ReactNode } from 'react';

const title = 'TextSnap OCR - Extract Text from Images with Ease';
const description =
  'Unlock the text hidden within images using TextSnap OCR. Easily convert images to editable text with high accuracy and efficiency. Enhance your productivity and streamline your workflow with our advanced OCR technology.';

export const metadata = {
  title: title,
  description: description,
  keywords: [
    'TextSnap OCR',
    'image-to-text conversion',
    'OCR technology',
    'extract text from images',
    'text recognition',
    'image analysis',
    'data extraction',
    'document processing',
    'OCR software',
    'OCR tools',
    'image OCR',
    'OCR accuracy',
    'productivity',
    'efficiency',
    'text extraction',
    'digital transformation',
    'automated data entry',
    'document digitization',
    'streamlined workflow',
    'image processing techniques',
  ],
  openGraph: {
    title: title,
    description: description,
    url: 'https://textsnap.vercel.app/image-text-converter',
    siteName: 'TextSnap',
    locale: 'en-US',
    type: 'website',
    images: {
      url: '/convert-images-to-text.webp',
      alt: 'Convert Images to Text',
      width: 1024,
      height: 1024,
    },
  },
  twitter: {
    title: title,
    description,
    card: 'summary_large_image',
    images: {
      url: '/convert-images-to-text.webp',
      alt: 'Convert Images to Text',
      width: 1024,
      height: 1024,
    },
  },
};

export default function OcrLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
