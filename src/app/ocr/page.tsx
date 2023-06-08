"use client";

import { OcrProvider } from "@/context/OcrContext";
import OCR from "../../components/sections/ocr/OcrSection";

export default function Page() {
  return (
    <OcrProvider>
      <OCR />
    </OcrProvider>
  );
}
