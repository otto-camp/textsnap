import Article from '@/components/Article';
import { allBlogs } from 'contentlayer/generated';

const title = 'The Blog - TextSnap';
const description =
  'Stay updated with the latest articles and updates from the TextSnap blog. Discover tips, tutorials, and news related to image-to-text conversion, OCR technology, and productivity.';

export const metadata = {
  title: title,
  description: description,
  keywords: [
    'TextSnap blog',
    'blog articles',
    'latest updates',
    'image-to-text conversion',
    'OCR technology',
    'productivity tips',
    'tutorial guides',
    'technology news',
    'text recognition',
    'data extraction',
    'image analysis',
    'document processing',
    'text extraction tools',
    'data digitization',
    'efficient workflows',
    'text recognition software',
    'OCR advancements',
    'document automation',
    'text-to-speech',
    'image processing techniques',
  ],
  openGraph: {
    title: title,
    description: description,
  },
  twitter: {
    title: title,
    description,
  },
};

export default function BlogPage() {
  const posts = allBlogs.sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  );
  return (
    <main className='container mx-auto min-h-screen space-y-8 p-4'>
      <h1 className='box-border border-y border-white/50 py-8 text-center text-6xl font-bold sm:text-7xl md:text-8xl lg:text-9xl'>
        THE BLOG
      </h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map((p) => (
          <Article key={p.title} post={p} />
        ))}
      </div>
    </main>
  );
}
