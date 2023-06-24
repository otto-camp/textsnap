'use client';

import { OcrProvider } from '@/context/OcrContext';
import OcrSection from './OcrSection';

export default function Page() {
  return (
    <OcrProvider>
      <OcrSection />
    </OcrProvider>
  );
}
