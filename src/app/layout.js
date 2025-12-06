import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const baseUrl = 'https://joannakappele.com' // Update with actual domain

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2E7D32',
}

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Joanna Kappele | Certified Wholistic Health Coach & Functional Nutrition Counselor',
    template: '%s | Joanna Kappele - Wholistic Health Coach',
  },
  description: 'Restore your health by cleaning your personal ecosystem. Joanna Kappele, CWHC & CFNC, helps you minimize toxic load and maximize vitality. Address the 3 causes of cellular distress: starvation, toxification, and suffocation.',
  keywords: [
    'Certified Wholistic Health Coach',
    'Functional Nutrition Counselor', 
    'Environmental Detox',
    '90 Essential Nutrients',
    'Holistic Health Evaluation',
    'Natural Healing',
    'Autoimmune Support',
    'Cellular Health',
    'Toxin Removal',
    'Endocrine Disruptors',
    'Reverse Osmosis Water',
    'Indoor Air Quality',
    'Glyphosate Removal',
    'Epigenetics',
    'WELL AP',
    'Health Coach Chicago',
  ],
  authors: [{ name: 'Joanna Kappele', url: baseUrl }],
  creator: 'Joanna Kappele',
  publisher: 'Joanna Kappele Wellness',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Joanna Kappele - Wholistic Health Coach',
    title: 'Joanna Kappele | Clean Your Ecosystem, Heal Your Body',
    description: 'Certified Wholistic Health Coach & Functional Nutrition Counselor helping you address the root causes of cellular distress through environmental detox and targeted nutrition.',
    images: [
      {
        url: '/joanna-kappele-og.png',
        width: 1200,
        height: 630,
        alt: 'Joanna Kappele - Wholistic Health Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joanna Kappele | Wholistic Health Coach',
    description: 'Clean your ecosystem. Heal your body. Certified CWHC & CFNC helping you minimize toxic load and maximize vitality.',
    images: ['/joanna-kappele-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: baseUrl,
  },
}

// Structured Data for SEO and LLM optimization
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Joanna Kappele',
      jobTitle: 'Certified Wholistic Health Coach & Functional Nutrition Counselor',
      description: 'Ecologist, Educator, and Functional Nutrition Counselor with 30+ years experience helping people restore health by cleaning their personal ecosystem.',
      url: baseUrl,
      telephone: '+1-312-772-4984',
      knowsAbout: [
        'Wholistic Health Coaching',
        'Functional Nutrition',
        'Environmental Toxins',
        'Cellular Health',
        '90 Essential Nutrients',
        'Endocrine Disruptors',
        'Indoor Air Quality',
        'Water Filtration',
        'Autoimmune Support',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CWHC - Certified Wholistic Health Coach' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CFNC - Certified Functional Nutrition Counselor' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'WELL AP - WELL Accredited Professional' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'M.Ed - Master of Education' },
      ],
    },
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': `${baseUrl}/#business`,
      name: 'Joanna Kappele Wellness',
      description: 'Wholistic health coaching and functional nutrition counseling. We help you clean your personal ecosystem by addressing the 3 causes of cellular distress: starvation, toxification, and suffocation.',
      url: baseUrl,
      telephone: '+1-312-772-4984',
      priceRange: '$$',
      founder: { '@id': `${baseUrl}/#person` },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      serviceType: [
        'Health Coaching',
        'Nutrition Counseling',
        'Environmental Health Consulting',
        'Detoxification Programs',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Joanna Kappele - Wholistic Health Coach',
      description: 'Your body is an ecosystem. Let\'s clean the tank so it can heal.',
      publisher: { '@id': `${baseUrl}/#person` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the 3 causes of cellular distress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 3 causes of cellular distress are: 1) Starvation - cells not getting the 90 essential nutrients they need, 2) Toxification - cells being bombarded by toxins from food, water, air, and environment, and 3) Suffocation - cells not getting enough oxygen due to poor air quality or circulation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Wholistic Health Coach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Certified Wholistic Health Coach (CWHC) takes a comprehensive approach to health, addressing the whole person including nutrition, environment, lifestyle, and emotional wellbeing. Unlike conventional approaches that treat symptoms, wholistic coaching identifies and addresses root causes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the 90 essential nutrients?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 90 essential nutrients are nutrients your body cannot manufacture and must obtain from diet or supplementation. They include 60 minerals, 16 vitamins, 12 amino acids, and 2 essential fatty acids. Modern depleted soil makes it difficult to get these nutrients from food alone.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
