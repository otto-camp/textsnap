import Article from '@/components/Article';
import { allBlogs } from 'contentlayer/generated';

export default function BlogPage() {
  const posts = allBlogs.sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  );
  return (
    <main className='min-h-screen p-4 space-y-8 container mx-auto'>
      <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
        Blog
      </h1>
      <hr/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((p) => (
          <Article key={p.title} post={p} />
        ))}
      </div>
    </main>
  );
}
