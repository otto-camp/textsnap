import { allBlogs } from 'contentlayer/generated';

export default function sitemap() {
  const blogs = allBlogs.map((blog) => ({
    url: `https://ismailyarar.vercel.app/${blog._id.replace('.mdx', '').replace('posts','blog')}`,
    lastModified: new Date(),
  }));

  const routes = ['', 'ocr', 'how-to-use',"blog"].map((url) => ({
    url: `https://textsnap.vercel.app/${url}`,
    lastModified: new Date(),
  }));

  return [...blogs, ...routes];
}
