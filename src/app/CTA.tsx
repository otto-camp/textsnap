"use client";

import CTADropzone from "@/components/CTADropzone";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex gap-4">
        <CTADropzone />
        {/* <div className="bg-gray-900 rounded-lg flex justify-end flex-col">
          <Link href="/ocr" className="px-8 py-2 rounded-lg bg-blue-800">
            Ocr
          </Link>
        </div> */}
      </div>
    </section>
  );
}
