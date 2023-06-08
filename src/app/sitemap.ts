export default function sitemap() {
  const routes = ["", "ocr", "how-to-use"].map((url) => ({
    url: `https://textsnap.vercel.app/${url}`,
    lastModified: new Date(),
  }));

  return [...routes];
}
