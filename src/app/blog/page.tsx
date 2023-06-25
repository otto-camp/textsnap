import Article from '@/components/Article';
import { allBlogs } from 'contentlayer/generated';

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
