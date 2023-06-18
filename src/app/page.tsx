import HowToUseSection from '../components/sections/home/HowToUseSection';
import FeaturesSection from '../components/sections/home/FeaturesSection';
import Link from 'next/link';
import Badge from '../components/ui/Badge';

export default function Home() {
  return (
    <>
      <div className='mx-auto w-fit'>
        <Badge variant='outline'>Only Works in Browser</Badge>
      </div>
      <header className='md:space-y-18 container mx-auto space-y-6 bg-gradient-radial px-4 text-center'>
        <div className='my-12 space-y-4 sm:space-y-8 md:my-16 md:space-y-16'>
          <h1 className='text-3xl font-black sm:text-4xl md:text-5xl lg:text-8xl'>
            Convert Images to Text within seconds
          </h1>
          <p className='sm:text-lg md:text-xl'>
            Effortlessly extract editable text from images using our advanced
            OCR technology.
          </p>
        </div>
        <Link
          href='/image-text-converter'
          className='rounded-lg bg-primary-300 px-8 py-4 font-semibold transition-all duration-200 hover:bg-primary-400 sm:text-lg lg:text-xl'
        >
          Start Converting
        </Link>
      </header>
      <main className='container mx-auto py-6 mt-12'>
        <FeaturesSection />
        <HowToUseSection />
      </main>
    </>
  );
}
