import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';

export default function BlogPage() {
  const posts = allBlogs.sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  );
  return (
    <div>
      {posts.map((p) => (
        <Link href={`/blog/${p.slug}`} key={p.slug}>{
          <div>
            {p.title}
          </div>
        }</Link>
      ))}
    </div>
  );
}
