'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Shop', href: '/shop' },
  { name: 'Toolbox', href: '/toolbox' },
  { name: 'Education', href: '/education' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-forest-green text-white py-2 px-4 text-center text-sm">
        <a href="tel:312-772-4984" className="inline-flex items-center gap-2 hover:text-vitality-yellow transition-colors">
          <Phone size={14} />
          Call or Text: 312.772.4984
        </a>
      </div>
      
      <nav className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/Joanna logo.png" 
            alt="Joanna Kappele - Wholistic Health Coach" 
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-soil-brown hover:text-forest-green font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Free Health Evaluation
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-soil-brown"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-soil-brown hover:text-forest-green font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center mt-4"
            >
              Free Health Evaluation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
