import { Mdx } from '@/components/MDX';
import { extractKeywords } from '@/utils/extractKeywords';
import { readingTime } from '@/utils/readingTime';
import { allBlogs } from 'contentlayer/generated';
import { BookOpen } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: Params['params']['slug']) {
  const post = allBlogs.find((post) => post.slug === slug);
  if (!post) notFound();
  return post;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.description,
    keywords: extractKeywords(post.body.raw),
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://textsnap.vercel.app/blog/${params.slug}`,
      type: 'article',
      siteName: 'TextSnap',
      locale: 'en-US',
      publishedTime: post.date,
      section: 'Technology',
      images: {
        url: '/convert-images-to-text.webp',
        width: 1024,
        height: 1024,
        alt: post.title,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: {
        url: '/convert-images-to-text.webp',
        alt: post.title,
        width: 1024,
        height: 1024,
      },
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const post = await getPost(params.slug);

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
          <div className='mx-auto flex max-w-lg flex-wrap items-end justify-evenly sm:flex-nowrap'>
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
