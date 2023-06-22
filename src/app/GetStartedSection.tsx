import { ClipboardCopy, PilcrowSquare, UploadCloud } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    title: 'Upload',
    description:
      " Use the dropzone or click the 'Upload Image' button to select and upload an image you want to convert.",
    icon: <UploadCloud size={42} />,
    href: '/how-to-use#upload',
  },
  {
    title: 'Convert',
    description:
      'Our advanced OCR technology will process the image and extract the text with high accuracy.',
    icon: <PilcrowSquare size={42} />,
    href: '/how-to-use#convert',
  },
  {
    title: 'Download or Copy',
    description:
      'Once the conversion is complete, you can download the extracted text or copy it to your clipboard for further use.',
    icon: <ClipboardCopy size={42} />,
    href: '/how-to-use#download-or-copy',
  },
];

export default function GetStartedSection() {
  return (
    <section className='container mx-auto mt-16 space-y-8 text-center px-4 bg-gradient-radial'>
      <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
        Get Started
      </h2>
      <p>
        Converting images to editable text is a breeze with TextSnap. Follow
        these simple steps to get started:
      </p>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Link
          href='/image-text-converter'
          className='rounded-lg border border-secondary-900/30 bg-primary-300 px-8 py-2 font-semibold transition-all duration-200 hover:bg-primary-400'
        >
          Start Converting
        </Link>
        <Link
          href='/image-text-converter'
          className='rounded-lg border border-primary-900/30 bg-secondary-100 px-8 py-2 font-semibold transition-all duration-200 hover:bg-secondary-200'
        >
          Learn More
        </Link>
      </div>
      
      <div className='flex gap-6 flex-wrap justify-center items-center'>
        {data.map(d=>(
          <Link href={d.href} key={d.title} className='p-4 border rounded-lg max-w-xs'>
            <div className='flex items-center justify-start gap-6'>{d.icon}
              <h3>{d.title}</h3>
            </div>
            <p className='text-left'>{d.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
