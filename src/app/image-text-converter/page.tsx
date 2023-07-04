'use client';

import { OcrProvider } from '@/context/OcrContext';
import OcrSection from './OcrSection';

export default function Page() {
  return (
    <main>
      <OcrProvider>
        <OcrSection />
      </OcrProvider>
      <section className='container mx-auto mb-24 space-y-8 p-4'>
        <h2 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-8xl'>
          Unleash the Power of Image-to-Text Conversion
        </h2>
        <p className='text-lg md:text-xl'>
          No wizardry required! Our spectacular Image-to-Text Converter turns
          your images into text with just a few clicks. Say goodbye to outdated,
          time-consuming manual transcription and welcome new possibilities with
          open arms.
        </p>
      </section>
    </main>
  );
}
