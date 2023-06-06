"use client";

import { OcrProvider } from "@/context/OcrContext";
import OCR from "./OCR";

export default function Page() {
  return (
    <OcrProvider>
      <OCR />
    </OcrProvider>
  );
}
