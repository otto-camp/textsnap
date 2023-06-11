export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://textsnap.vercel.app/sitemap.xml',
  };
}
