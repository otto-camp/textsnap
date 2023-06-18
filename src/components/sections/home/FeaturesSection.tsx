import { Crosshair, Download, Files, Gauge, Languages } from 'lucide-react';
const data = [
  {
    title: 'High Speed',
    description:
      'TextSnap utilizes advanced OCR technology to deliver fast image-to-text conversion, allowing you to extract text from images quickly and efficiently.',
    icon: <Gauge className='text-primary-100' strokeWidth={2.5} />,
  },
  {
    title: 'High Accuracy',
    description:
      'With the power of Tesseract OCR, TextSnap ensures high accuracy in extracting text from images, providing reliable and precise results for your conversions.',
    icon: <Crosshair className='text-accent-100' strokeWidth={2.5} />,
  },
  {
    title: 'Support for Various Image Formats',
    description:
      'TextSnap supports a wide range of image formats, including BMP, JPG, PNG, PBM, WebP, base64, and buffer. You can convert images in the format that suits your needs.',
    icon: <Files className='text-primary-400' strokeWidth={2.5} />,
  },
  {
    title: 'Flexible Output Options',
    description:
      'After the conversion process, TextSnap provides two convenient options. You can either download the extracted text as a file, making it accessible offline, or simply copy the text to your clipboard for quick and easy usage.',
    icon: <Download className='text-secondary-100' strokeWidth={2.5} />,
  },
  {
    title: 'Multilingual Support',
    description:
      'TextSnap offers extensive language support, with recognition capabilities for up to 78 different languages. You can convert images containing text in various languages and enhance your workflow.',
    icon: <Languages className='text-primary-600' strokeWidth={2.5} />,
  },
];

export default function FeaturesSection() {
  return (
    <section className='container mx-auto space-y-8 text-center sm:space-y-14'>
      <h2 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl'>
        Specially created for <span className='text-primary-100'>you</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-8 px-4'>
        {data.map((d) => (
          <div
            key={d.title}
            className='flex w-full max-w-sm flex-col items-start justify-start rounded-lg border p-4'
          >
            <span className='relative -top-8 rounded-lg bg-background-900 p-4'>
              {d.icon}
            </span>
            <h3 className='-mt-2 w-full text-lg font-semibold md:text-xl'>
              {d.title}
            </h3>
            <hr className='my-2 w-full' />
            <p className='text-sm md:text-base'>{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
