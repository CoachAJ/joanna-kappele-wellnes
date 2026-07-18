import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const baseUrl = 'https://www.protectyourcells.com'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2E7D32',
}

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Protect Your Cells | Joanna Kappele – Wholistic Health Coach & Functional Nutrition Counselor',
    template: '%s | Protect Your Cells – Joanna Kappele',
  },
  description: 'Toxins in your water, food, and outdoor air are silently damaging your cells. Joanna Kappele, CWHC & CFNC, helps you identify and eliminate toxic load from all sources—water, food, indoor air, and outdoor air quality—so your body can heal itself.',
  keywords: [
    'Protect Your Cells',
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
    'Water Toxins',
    'Food Toxins',
    'Outdoor Air Quality',
    'Indoor Air Quality',
    'Air Pollution Health Effects',
    'Glyphosate in Food and Water',
    'Heavy Metals in Water',
    'Particulate Matter Health',
    'Epigenetics',
    'WELL AP',
    'Health Coach Chicago',
    'protectyourcells.com',
  ],
  authors: [{ name: 'Joanna Kappele', url: baseUrl }],
  creator: 'Joanna Kappele',
  publisher: 'Protect Your Cells – Joanna Kappele Wellness',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Protect Your Cells – Joanna Kappele',
    title: 'Protect Your Cells | Toxins in Water, Food & Air Are Harming You',
    description: 'Joanna Kappele, CWHC & CFNC, helps you eliminate toxins from water, food, indoor air, and outdoor air so your cells can heal. Discover the 3 root causes of cellular distress.',
    images: [
      {
        url: '/joanna-kappele-og.png',
        width: 1200,
        height: 630,
        alt: 'Protect Your Cells – Joanna Kappele Wholistic Health Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protect Your Cells | Joanna Kappele – Wholistic Health Coach',
    description: 'Toxins in water, food, and air are harming your cells. Certified CWHC & CFNC Joanna Kappele helps you clean your ecosystem and restore vitality.',
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

// Structured Data for SEO and AEO (Answer Engine Optimization)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Joanna Kappele',
      jobTitle: 'Certified Wholistic Health Coach & Functional Nutrition Counselor',
      description: 'Ecologist, Educator, and Functional Nutrition Counselor with 30+ years experience helping people protect their cells by eliminating toxins from water, food, indoor air, and outdoor air.',
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
        'Outdoor Air Quality',
        'Air Pollution Health Effects',
        'Particulate Matter (PM2.5)',
        'Water Filtration',
        'Heavy Metals in Drinking Water',
        'Glyphosate in Food and Water',
        'Food Toxins and Pesticides',
        'Autoimmune Support',
        'Epigenetics',
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
      name: 'Protect Your Cells – Joanna Kappele Wellness',
      description: 'Wholistic health coaching and functional nutrition counseling. We help you protect your cells by identifying and eliminating toxins from water, food, indoor air, and outdoor air—addressing the 3 root causes of cellular distress: starvation, toxification, and suffocation.',
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
        'Outdoor Air Quality Consulting',
        'Water Toxin Assessment',
        'Food Toxin Reduction Programs',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Protect Your Cells – Joanna Kappele Wholistic Health Coach',
      description: 'Toxins in your water, food, and air—both indoor and outdoor—are silently damaging your cells. Learn how to protect them.',
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
            text: 'The 3 causes of cellular distress are: 1) Starvation — cells not getting the 90 essential nutrients they need because modern soil is depleted; 2) Toxification — cells being bombarded by toxins from drinking water, processed food, pesticides, indoor air pollutants, and outdoor air pollution including particulate matter and chemical exposure; and 3) Suffocation — cells not getting enough oxygen due to poor air quality, shallow breathing, or circulation issues.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does outdoor air quality affect your health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Outdoor air quality significantly impacts cellular health. Pollutants like particulate matter (PM2.5), ground-level ozone, nitrogen dioxide, and volatile organic compounds (VOCs) from traffic, industry, and wildfires enter the body and cause oxidative stress, inflammation, and cellular damage. Long-term exposure is linked to respiratory disease, cardiovascular issues, neurological effects, and endocrine disruption. Reducing exposure and supporting the body\'s detox pathways is essential.',
          },
        },
        {
          '@type': 'Question',
          name: 'What toxins are commonly found in drinking water?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common toxins found in tap and municipal water include chlorine and chloramines, fluoride, heavy metals (lead, arsenic, mercury), PFAS (forever chemicals), glyphosate and herbicide runoff, nitrates from agriculture, pharmaceuticals, and microplastics. Reverse osmosis filtration is one of the most effective methods for removing the broadest range of contaminants.',
          },
        },
        {
          '@type': 'Question',
          name: 'What toxins in food are most harmful to cells?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Key food toxins that harm cells include glyphosate (sprayed on most non-organic crops), pesticide and herbicide residues, heavy metals in certain fish and foods, artificial additives and preservatives, trans fats, refined sugars that feed inflammatory pathways, and bio-accumulative toxins stored in animal fat. Choosing organic, whole foods and filtered water significantly reduces your cellular toxic load.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a Wholistic Health Coach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Certified Wholistic Health Coach (CWHC) takes a comprehensive approach to health, addressing the whole person including nutrition, environment, lifestyle, and emotional wellbeing. Unlike conventional approaches that treat symptoms, wholistic coaching identifies and addresses root causes such as toxin exposure from water, food, and air.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the 90 essential nutrients?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The 90 essential nutrients are nutrients your body cannot manufacture and must obtain from diet or supplementation. They include 60 minerals, 16 vitamins, 12 amino acids, and 2 essential fatty acids. Modern depleted soil and food processing make it extremely difficult to obtain all 90 from food alone, contributing to cellular starvation.',
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
