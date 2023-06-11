import { Mdx } from '@/components/MDX';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-zinc-50'>
      <article className='prose prose-zinc prose-quoteless mx-auto px-4 py-12'>
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
