import FeaturesSection from './FeaturesSection';
import Link from 'next/link';
import Badge from '../components/ui/Badge';
import Image from 'next/image';
import GetStartedSection from './GetStartedSection';
import HowToUseSection from './HowToUseSection';

export default function Home() {
  return (
    <main className='container mx-auto mt-12 space-y-24 py-6 md:space-y-32'>
      <div className='bg-gradient-radial'>
        <div className='mx-auto w-fit'>
          <Badge variant='outline'>Only Works in Browser</Badge>
        </div>
        <header className='relative grid items-center justify-items-center gap-4 px-4 py-24 text-center sm:gap-8 md:gap-12'>
          <Image src='/shape1.svg' alt='' aria-hidden fill className='-z-10' />
          <h1 className='text-4xl font-black sm:text-5xl md:text-6xl lg:text-8xl'>
            Convert Images to Text within seconds
          </h1>
          <p className='sm:text-lg md:text-xl'>
            Effortlessly extract editable text from images using our advanced
            OCR technology.
          </p>
          <Link
            href='/image-text-converter'
            className='rounded-lg border border-secondary-900/30 bg-primary-300 px-8 py-2 font-semibold transition-all duration-200 hover:bg-primary-400 md:text-lg'
          >
            Start Converting
          </Link>
        </header>
      </div>

      <FeaturesSection />
      <GetStartedSection />
      <HowToUseSection />
    </main>
  );
}
