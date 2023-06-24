const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true
  },
  images: {
    domains:[
      "raw.githubusercontent.com"
    ]
  }
}

module.exports = withContentlayer(nextConfig)
