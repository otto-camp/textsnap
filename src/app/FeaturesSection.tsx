import Image from 'next/image';

const data = [
  {
    title: 'High Speed and Accuracy',
    description:
      'TextSnap combines advanced OCR technology with the power of Tesseract OCR to deliver fast and efficient image-to-text conversion. Extract text from images quickly and accurately, ensuring reliable and precise results for all your conversion needs. Experience the convenience of TextSnap as it maximizes speed and accuracy, revolutionizing your text extraction process.',
    image: '/f-spd.webp',
  },
  {
    title: 'Multilingual Support and Versatile Image Format Compatibility',
    description:
      "TextSnap empowers your workflow with comprehensive language support, recognizing over 70+ different languages. Effortlessly convert images containing text in various languages, enhancing your productivity. Additionally, TextSnap supports a diverse range of image formats such as BMP, JPG, PNG, PBM, WebP, base64, and buffer, allowing you to convert images in the format that best suits your needs. Streamline your text extraction process with TextSnap's versatile language recognition and flexible image format support.",
    image: '/f-img.webp',
  },
  {
    title: 'Flexible Output Options',
    description:
      'After the conversion process, TextSnap provides two convenient options. You can either download the extracted text as a file, making it accessible offline, or simply copy the text to your clipboard for quick and easy usage.',
    image: '/f-prnt.webp',
  },
];

export default function FeaturesSection() {
  return (
    <section className='container mx-auto space-y-10 px-4'>
      <div className='grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 lg:gap-8'>
        <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
          Specially created for <span className='text-primary-100'>you</span>
        </h2>
        <p className='leading-8'>
          Unlock the power of TextSnap&apos;s unique features, specially created
          for you. Experience lightning-fast image-to-text conversion, high
          accuracy results, support for multiple image formats, flexible output
          options, and multilingual support for over 70 languages. Elevate your
          text extraction process with ease and efficiency.
        </p>
      </div>

      <div className='grid gap-8 px-4 sm:px-0'>
        {data.map((d, i) => (
          <div
            key={i}
            className={`flex flex-col gap-4 ${
              i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            <Image
              src={d.image}
              alt={d.title}
              width={576}
              height={576}
              className='mx-auto rounded-xl object-cover'
            />
            <div className='flex flex-col justify-evenly gap-6'>
              <h3 className='text-xl font-bold md:text-2xl'>{d.title}</h3>
              <p className='leading-7'>{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
