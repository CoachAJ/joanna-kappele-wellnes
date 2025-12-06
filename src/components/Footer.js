import Link from 'next/link'
import { Leaf, Phone, Mail, ExternalLink, Heart, BookOpen, PenLine } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-soil-brown text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/Joanna logo.png" 
                alt="Joanna Kappele" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-warm-cream text-sm leading-relaxed mb-4">
              Certified Wholistic Health Coach & Functional Nutrition Counselor helping you 
              restore health by cleaning your personal ecosystem.
            </p>
            <div className="flex flex-col gap-2">
              <a 
                href="https://wecologist.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-cream hover:text-vitality-yellow transition-colors text-sm flex items-center gap-2"
              >
                <PenLine size={14} />
                Read the Blog
              </a>
              <a 
                href="http://www.adoreyourplanet.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-cream hover:text-vitality-yellow transition-colors text-sm flex items-center gap-2"
              >
                <Heart size={14} />
                Adore Your Planet (Non-Profit)
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-vitality-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-warm-cream hover:text-vitality-yellow transition-colors">About Joanna</Link></li>
              <li><Link href="/services" className="text-warm-cream hover:text-vitality-yellow transition-colors">Health Coaching</Link></li>
              <li><Link href="/shop" className="text-warm-cream hover:text-vitality-yellow transition-colors">Shop Supplements</Link></li>
              <li><Link href="/toolbox" className="text-warm-cream hover:text-vitality-yellow transition-colors">Toolbox & Resources</Link></li>
              <li><Link href="/education" className="text-warm-cream hover:text-vitality-yellow transition-colors">Educational Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-vitality-yellow">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.hippocrateas.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-cream hover:text-vitality-yellow transition-colors flex items-center gap-1"
                >
                  Hippocrateas Teas <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.amazon.com/stores/Joanna-Kappele/author/B07T5DRGQ9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-cream hover:text-vitality-yellow transition-colors flex items-center gap-1"
                >
                  Books on Amazon <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://wecologist.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-cream hover:text-vitality-yellow transition-colors flex items-center gap-1"
                >
                  Wecologist Blog <ExternalLink size={12} />
                </a>
              </li>
            </ul>
            
            <h4 className="font-heading text-lg font-bold mb-3 mt-6 text-vitality-yellow">Contact</h4>
            <a href="tel:312-772-4984" className="flex items-center gap-2 text-warm-cream hover:text-vitality-yellow transition-colors">
              <Phone size={16} />
              312.772.4984
            </a>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-vitality-yellow">Start Your Journey</h4>
            <p className="text-warm-cream text-sm mb-4">
              Ready to discover what&apos;s affecting your health?
            </p>
            <a
              href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Free Health Evaluation
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-soil-brown-light">
        <div className="container-custom py-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-cream">
            <p>&copy; {new Date().getFullYear()} Joanna Kappele. All rights reserved.</p>
            <p className="text-xs">
              Youngevity Independent Distributor ID: 102844221
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
