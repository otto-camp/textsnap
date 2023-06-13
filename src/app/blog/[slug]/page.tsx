import { Mdx } from '@/components/MDX';
import { readingTime } from '@/utils/readingTime';
import { allBlogs } from 'contentlayer/generated';
import { BookOpen } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const post = allBlogs.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  const date = new Date(post.date).toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className='min-h-screen '>
      <header className='relative inset-x-0 bg-background-900 py-24 text-text-900 sm:py-32'>
        <div className='mx-auto max-w-5xl items-center space-y-6 px-4 text-center sm:space-y-8'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
            {post.title}
          </h1>
          <p className='text-lg leading-8'>{post.description}</p>
          <div className='mx-auto flex max-w-lg items-end flex-wrap sm:flex-nowrap justify-evenly'>
            <div className='flex gap-1'>
              <BookOpen />
              <span className='font-bold'>
                {readingTime(post.body.code)}
              </span>{' '}
              minutes
            </div>
            <time>{date}</time>
            <span className='font-bold'>{post.author}</span>
          </div>
        </div>
      </header>
      <article className='prose prose-dark prose-quoteless mx-auto px-4 py-12'>
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
