import { Blog } from 'contentlayer/generated';
import Link from 'next/link';

export default function Article({ post }: { post: Blog }) {
  const date = new Date(post.date).toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className='flex flex-col items-start justify-between gap-4 rounded-lg border p-4'>
        <div className='flex w-full justify-between text-sm text-text-400'>
          <span>{post.author}</span>
          <time dateTime={post.date}>{date}</time>
        </div>
        <h2 className='text-xl font-bold md:text-2xl'>{post.title}</h2>
        <p>{post.description}</p>
      </article>
    </Link>
  );
}
