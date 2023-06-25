import Link from 'next/link';

export default function GetStartedSection() {
  return (
    <section className='container mx-auto mt-16 space-y-8 bg-gradient-radial px-4 py-32 text-center'>
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
    </section>
  );
}
