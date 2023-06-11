import Link from 'next/link';

export default function Navigation() {
  return (
    <div className='border-b'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <Link
          href='/'
          className='rounded-lg bg-transparent px-4 py-2 text-xl transition-all hover:bg-accent-700/20 sm:text-2xl md:text-3xl'
        >
          TextSnap
        </Link>
        <div className='divide-x-2 rounded-lg bg-accent-700/10 py-2'>
          <Link
            href='/ocr'
            className='rounded-l-lg px-6 py-2 text-xl duration-200 hover:bg-accent-700/30'
          >
            OCR
          </Link>
          <Link
            href='/how-to-use'
            className='rounded-r-lg px-6 py-2 text-xl duration-200 hover:bg-accent-700/30'
          >
            How To Use
          </Link>
        </div>
      </nav>
    </div>
  );
}
