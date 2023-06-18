'use client';

import { OcrProvider } from '@/context/OcrContext';
import OcrSection from '../../components/sections/ocr/OcrSection';

export default function Page() {
  return (
    <OcrProvider>
      <OcrSection />
    </OcrProvider>
  );
}
