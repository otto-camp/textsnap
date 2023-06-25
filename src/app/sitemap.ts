import { allBlogs } from 'contentlayer/generated';

export default function sitemap() {
  const blogs = allBlogs.map((blog) => ({
    url: `https://ismailyarar.vercel.app/${blog._id
      .replace('.mdx', '')
      .replace('posts', 'blog')}`,
    lastModified: new Date(),
  }));

  const routes = ['', 'image-text-converter', 'blog'].map((url) => ({
    url: `https://textsnap.vercel.app/${url}`,
    lastModified: new Date(),
  }));

  return [...blogs, ...routes];
}
