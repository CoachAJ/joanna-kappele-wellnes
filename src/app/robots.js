export default function robots() {
  const baseUrl = 'https://www.protectyourcells.com'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
