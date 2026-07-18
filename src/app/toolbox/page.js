import Link from 'next/link'
import { Pill, Leaf, BookOpen, ArrowRight, ExternalLink, ShoppingBag } from 'lucide-react'

export const metadata = {
  title: 'Toolbox & Resources | Joanna Kappele',
  description: 'Explore Joanna Kappele\'s recommended tools for health: nutritional supplements, organic medicinal teas, and educational books.',
}

export default function ToolboxPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-vitality-yellow font-medium">Resources for Healing</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">The Toolbox</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              The right tools make all the difference. Here are Joanna&apos;s recommended 
              resources for cleaning your ecosystem and rebuilding your health.
            </p>
          </div>
        </div>
      </section>

      {/* Nutritional Supplements */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-vitality-orange/10 text-vitality-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Pill size={16} />
                Nutritional Supplements
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-6">
                Fill the Nutrient Gap
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Modern soil is depleted. Even the healthiest diet can&apos;t provide all 90 essential 
                nutrients your body needs. That&apos;s where targeted supplementation comes in.
              </p>
              <p className="text-warm-gray leading-relaxed mb-6">
                Joanna recommends Youngevity&apos;s science-based nutritional products, including:
              </p>
              <ul className="space-y-3 text-warm-gray mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-vitality-orange font-bold">•</span>
                  <span><strong>90 Essential Nutrients Packs</strong> — The foundation for cellular health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vitality-orange font-bold">•</span>
                  <span><strong>Osteo Support</strong> — Bone and joint health formulas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vitality-orange font-bold">•</span>
                  <span><strong>Clean Beauty Products</strong> — Toxin-free personal care</span>
                </li>
              </ul>
              
              <div className="bg-warm-cream rounded-xl p-6 mb-6">
                <p className="text-soil-brown font-medium mb-2">Shop with Joanna&apos;s Distributor ID:</p>
                <p className="text-2xl font-heading font-bold text-forest-green">102844221</p>
              </div>
              
              <Link href="/shop" className="btn-primary inline-flex items-center">
                <ShoppingBag className="mr-2" size={18} />
                Shop Featured Products
              </Link>
            </div>
            
            <div className="bg-warm-cream rounded-3xl p-8">
              <h3 className="font-heading text-xl font-bold text-soil-brown mb-6">Why 90 Essential Nutrients?</h3>
              <p className="text-warm-gray leading-relaxed mb-4">
                Your body requires 90 essential nutrients it cannot manufacture on its own:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-3xl font-heading font-bold text-vitality-orange">60</p>
                  <p className="text-sm text-warm-gray">Minerals</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-3xl font-heading font-bold text-vitality-yellow">16</p>
                  <p className="text-sm text-warm-gray">Vitamins</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-3xl font-heading font-bold text-forest-green">12</p>
                  <p className="text-sm text-warm-gray">Amino Acids</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-3xl font-heading font-bold text-vitality-pink">2</p>
                  <p className="text-sm text-warm-gray">Essential Fatty Acids</p>
                </div>
              </div>
              <p className="text-warm-gray text-sm">
                Without these nutrients, cells starve—one of the 3 causes of cellular distress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hippocrateas */}
      <section className="bg-warm-cream section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-heading text-xl font-bold text-soil-brown mb-6">Featured Tea Blends</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-vitality-yellow/10 rounded-xl">
                    <Leaf className="text-vitality-yellow" size={24} />
                    <div>
                      <p className="font-bold text-soil-brown">Gut Health Blend</p>
                      <p className="text-sm text-warm-gray">Support your microbiome naturally</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-forest-green/10 rounded-xl">
                    <Leaf className="text-forest-green" size={24} />
                    <div>
                      <p className="font-bold text-soil-brown">Detox Blend</p>
                      <p className="text-sm text-warm-gray">Gentle cleansing support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-vitality-orange/10 rounded-xl">
                    <Leaf className="text-vitality-orange" size={24} />
                    <div>
                      <p className="font-bold text-soil-brown">Memory & Focus</p>
                      <p className="text-sm text-warm-gray">Cognitive support herbs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-vitality-pink/10 rounded-xl">
                    <Leaf className="text-vitality-pink" size={24} />
                    <div>
                      <p className="font-bold text-soil-brown">Hormone Balance</p>
                      <p className="text-sm text-warm-gray">Natural endocrine support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-forest-green/10 text-forest-green px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Leaf size={16} />
                Herbal Support
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-6">
                Hippocrateas Organic Medicinal Teas
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Inspired by the Hippocrates quote that launched Joanna&apos;s journey, these organic 
                medicinal teas provide gentle, natural support for various health concerns.
              </p>
              <div className="bg-vitality-yellow/20 rounded-xl p-4 mb-6">
                <p className="text-soil-brown font-medium flex items-center gap-2">
                  <span className="text-forest-green">✓</span> 100% Organic — No Pesticides
                </p>
              </div>
              <p className="text-warm-gray leading-relaxed mb-8">
                Hippocrateas products are available through an external website. Click below to 
                explore the full collection and place your order.
              </p>
              <a 
                href="https://www.hippocrateas.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                Visit Hippocrateas Website
                <ExternalLink className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-soil-brown/10 text-soil-brown px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen size={16} />
              Educational Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-4">
              Books & Guides
            </h2>
            <p className="text-warm-gray text-lg">
              Deepen your understanding with these essential reads on environmental health and detoxification.
            </p>
          </div>
          
          <div className="text-center mb-8">
            <a 
              href="https://www.amazon.com/stores/Joanna-Kappele/author/B07T5DRGQ9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <BookOpen className="mr-2" size={18} />
              Shop Joanna&apos;s Books on Amazon
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card border-l-4 border-vitality-orange">
              <div className="flex items-start gap-4">
                <div className="w-16 h-20 bg-vitality-orange/20 rounded flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-vitality-orange" size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">Filter Your Water Now</h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    A comprehensive guide to understanding what&apos;s in your tap water and why 
                    reverse osmosis filtration is essential for your health.
                  </p>
                  <a href="https://www.amazon.com/stores/Joanna-Kappele/author/B07T5DRGQ9" target="_blank" rel="noopener noreferrer" className="text-forest-green text-sm font-medium hover:text-vitality-orange transition-colors">Available on Amazon →</a>
                </div>
              </div>
            </div>
            
            <div className="card border-l-4 border-forest-green">
              <div className="flex items-start gap-4">
                <div className="w-16 h-20 bg-forest-green/20 rounded flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-forest-green" size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">The Green Handbook</h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    Your practical guide to reducing environmental toxins in your home, 
                    from cleaning products to building materials.
                  </p>
                  <a href="https://www.amazon.com/stores/Joanna-Kappele/author/B07T5DRGQ9" target="_blank" rel="noopener noreferrer" className="text-forest-green text-sm font-medium hover:text-vitality-orange transition-colors">Available on Amazon →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            The best first step is understanding your current health status. 
            Take the free evaluation and Joanna will help you identify the right tools for your journey.
          </p>
          <a href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center justify-center px-8 py-4 bg-vitality-orange text-white font-bold rounded-lg hover:bg-vitality-red transition-colors shadow-lg">
            Take Your Free Health Evaluation <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </>
  )
}
