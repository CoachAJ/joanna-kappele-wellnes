// Product codes and cart utilities for Youngevity products

export const SPONSOR_ID = '102844221'
export const THANK_YOU_URL = '/thank-you'

// 90 For Life Products - Foundation Packs
export const NINETY_FOR_LIFE_PRODUCTS = [
  {
    id: 'KT0001',
    name: 'Basic Mighty 90',
    subtitle: 'The Foundational System',
    price: 70.95,
    image: '/images/basic-mighty-90.png',
    description: 'The essential foundation - all 90 nutrients your body needs in one convenient system.',
    badge: 'Best Value'
  },
  {
    id: '10245',
    name: 'Healthy Body Start Pak™',
    subtitle: 'Original Formula',
    price: 142.95,
    image: '/images/healthy-body-pak-original.png',
    description: 'Complete nutrition system with Beyond Tangy Tangerine, EFA Plus, and Beyond Osteo-fx.',
    badge: 'Most Popular'
  },
  {
    id: '10282',
    name: 'Healthy Body Start Pak™ 2.0',
    subtitle: 'With Osteo-Fx Liquid',
    price: 146.95,
    image: '/images/healthy-body-pak-2.0.png',
    description: 'Enhanced formula with liquid Osteo-fx for better absorption.',
    badge: null
  },
  {
    id: '10282Q',
    name: 'Healthy Body Start Pak™ 2.5',
    subtitle: 'With BTT 2.5 & Osteo-Fx Liquid',
    price: 146.95,
    image: '/images/healthy-body-pak-2.5.png',
    description: 'Our most advanced pak with Beyond Tangy Tangerine 2.5 and liquid Osteo-fx.',
    badge: 'Premium'
  }
]

// Featured Products - Joanna's Picks (Individual Supplements)
export const FEATURED_PRODUCTS = [
  {
    id: 'USLL005030',
    name: 'i26 Hyperimmune Egg Powder',
    subtitle: '31 Day Supply - Canister',
    price: 51.95,
    image: '/images/I-26 hyperimmune.png',
    description: 'Supports immune system health with hyperimmune egg protein.'
  },
  {
    id: 'USYG100074',
    name: 'Beyond Tangy Tangerine® 2.5',
    subtitle: 'Multi-vitamin Mineral Complex',
    price: 69.95,
    image: '/images/Tangy Tangerine 2.5.png',
    description: 'Our most advanced multi-vitamin mineral complex with synergizing cofactors.'
  },
  {
    id: '65002',
    name: 'Ultimate Nightly Essense™',
    subtitle: '62 Capsules',
    price: 76.95,
    image: '/images/nightly essence.png',
    description: 'Supports restful sleep and nighttime cellular regeneration.'
  },
  {
    id: 'USYG300007',
    name: 'Collagen Peptides',
    subtitle: 'Hair, Skin & Nail Support',
    price: 63.95,
    image: '/images/Collagen Hair Skin Nails.png',
    description: 'Premium collagen peptides for healthy hair, skin, and nails.'
  },
  {
    id: 'USYG400401',
    name: 'Majestic Earth® Mineral STX™',
    subtitle: 'Liquid Minerals',
    price: 44.95,
    image: '/images/Mineral stix.png',
    description: 'Plant-derived colloidal minerals in convenient stick packs.'
  }
]

// Create checkout URL for a single product
export function createCheckoutUrl(productId, quantity = 1) {
  const baseUrl = 'https://ygy1.com/customer-checkout/v1.3/'
  const redirectUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${THANK_YOU_URL}`
    : THANK_YOU_URL
  
  let url = `${baseUrl}?sponsorid=${SPONSOR_ID}`
  url += `&item-1=${productId}|${quantity}`
  url += `&destroy=1`
  url += `&redirect=${encodeURIComponent(redirectUrl)}`
  
  return url
}

// Create checkout URL for multiple products
export function createMultiCheckoutUrl(items) {
  const baseUrl = 'https://ygy1.com/customer-checkout/v1.3/'
  const redirectUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${THANK_YOU_URL}`
    : THANK_YOU_URL
  
  let url = `${baseUrl}?sponsorid=${SPONSOR_ID}`
  
  items.forEach((item, index) => {
    url += `&item-${index + 1}=${item.id}|${item.quantity}`
  })
  
  url += `&destroy=1`
  url += `&redirect=${encodeURIComponent(redirectUrl)}`
  
  return url
}
