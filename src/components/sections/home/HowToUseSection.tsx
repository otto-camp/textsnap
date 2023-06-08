import { ClipboardCopy, PilcrowSquare, UploadCloud } from "lucide-react";
import Link from "next/link";

const data = [
  {
    title: "Upload",
    description:
      " Use the dropzone or click the 'Upload Image' button to select and upload an image you want to convert.",
    icon: <UploadCloud size={42} />,
    href: "/how-to-use#upload",
  },
  {
    title: "Convert",
    description:
      "Our advanced OCR technology will process the image and extract the text with high accuracy.",
    icon: <PilcrowSquare size={42} />,
    href: "/how-to-use#convert",
  },
  {
    title: "Download or Copy",
    description:
      "Once the conversion is complete, you can download the extracted text or copy it to your clipboard for further use.",
    icon: <ClipboardCopy size={42} />,
    href: "/how-to-use#download-or-copy",
  },
];

export default function HowToUseSection() {
  return (
    <section className="container mx-auto mt-16 space-y-8">
      <div className="text-center space-y-4 md:space-y-8">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-sm">Click a card to see full explanation.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((step) => (
          <Link
            href={step.href}
            key={step.title}
            className="max-w-xs mx-4 mb-8 p-4 bg-background-200 rounded-lg space-y-4 text-center hover:bg-opacity-70 duration-200"
          >
            <div className="flex justify-center">
              <div className="border rounded-full p-2 ">{step.icon}</div>
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p>{step.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
