"use client";

import { motion, useScroll } from "framer-motion";

export default function HowToUse() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.section
      style={{ scaleX: scrollYProgress }}
      className="container mx-auto mt-16"
    >
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold">How It Works</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs mx-4 mb-8">
          <div className="flex justify-center">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">Step 1: Upload</h3>
          <p className="text-gray-600 mt-2">
            Use the dropzone or click the &quot;Upload Image&quot; button to
            select and upload an image you want to convert.
          </p>
        </div>
        <div className="max-w-xs mx-4 mb-8">
          <div className="flex justify-center">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">Step 2: Convert</h3>
          <p className="text-gray-600 mt-2">
            Our advanced OCR technology will process the image and extract the
            text with high accuracy.
          </p>
        </div>
        <div className="max-w-xs mx-4 mb-8">
          <div className="flex justify-center">
            <svg
              className="w-12 h-12 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h12l-3-9m0 0L3 12m3-9v18"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">
            Step 3: Download or Copy
          </h3>
          <p className="text-gray-600 mt-2">
            Once the conversion is complete, you can download the extracted text
            or copy it to your clipboard for further use.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
