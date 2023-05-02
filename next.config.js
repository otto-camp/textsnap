/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async header() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ]
  }
}

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self vitals.vercel-insights.com';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`

module.exports = nextConfig
