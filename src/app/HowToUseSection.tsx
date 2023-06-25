import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { ClipboardCopy, PilcrowSquare, UploadCloud } from 'lucide-react';

const data = [
  {
    title: 'Upload',
    description:
      " Use the dropzone or click the 'Upload Image' button to select and upload an image you want to convert.",
    icon: <UploadCloud />,
    content: (
      <ul className='list-disc space-y-2 pl-4 sm:pl-12'>
        <li>
          Click the &quot;Upload Image&quot; button or drag and drop an image
          file into the designated drop zone.
        </li>
        <li>
          If you clicked the &quot;Upload Image&quot; button, a file explorer
          window will open. Select the image file you want to convert and click
          &quot;Open.&quot;
        </li>
        <li>
          If you dragged and dropped the image file, TextSnap will automatically
          detect and process the image.
        </li>
        <li>
          Wait for the image to be uploaded and processed. This may take a few
          seconds depending on the size of the image and your internet
          connection.
        </li>
      </ul>
    ),
  },
  {
    title: 'Convert',
    description:
      'Our advanced OCR technology will process the image and extract the text with high accuracy.',
    icon: <PilcrowSquare />,
    content: (
      <ul className='list-disc space-y-2 pl-4 sm:pl-12'>
        <li>
          Once the image has been processed, scroll down to the bottom of the
          page or if you are in bigger screen check right side of page.
        </li>
        <li>The extracted text will be displayed in a text box.</li>
      </ul>
    ),
  },
  {
    title: 'Download or Copy',
    description:
      'Once the conversion is complete, you can download the extracted text or copy it to your clipboard for further use.',
    icon: <ClipboardCopy />,
    content: (
      <ul className='list-disc space-y-2 pl-4 sm:pl-12'>
        <li>
          If you want to save the extracted text to your device, click the
          &quot;Download&quot; button to download the text as a file.
        </li>
        <li>
          If you prefer to copy the text to your clipboard for easy pasting,
          click the &quot;Copy&quot; button.
        </li>
      </ul>
    ),
  },
];

export default function HowToUseSection() {
  return (
    <section className='container mx-auto space-y-8 px-4 text-center'>
      <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
        How To Use
      </h2>
      <p className='mx-auto max-w-5xl'>
        Convert images to editable text with TextSnap. Upload an image, process
        it with OCR technology, view the extracted text, and download or copy
        it. Experience seamless image-to-text conversion and boost your
        productivity with TextSnap.
      </p>
      <Accordion type='multiple' className='mx-auto max-w-5xl'>
        {data.map((d, index) => (
          <AccordionItem value={index.toString()} key={index}>
            <AccordionTrigger>
              <div className='flex gap-4'>
                <span>{d.icon}</span>
                {d.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className='space-y-4 text-left'>
              <p className='text-base'>{d.description}</p>
              {d.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
