export default function robots() {
  const baseUrl = 'https://joannakappele.com' // Update with actual domain
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
