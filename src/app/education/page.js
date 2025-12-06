import Link from 'next/link'
import { BookOpen, Droplets, Wind, Home, Brain, Leaf, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Educational Hub | Joanna Kappele',
  description: 'Learn about environmental toxins, water quality, indoor air quality, and natural healing strategies from Certified Wholistic Health Coach Joanna Kappele.',
}

const topics = [
  {
    category: 'Water & Toxins',
    icon: Droplets,
    color: 'vitality-orange',
    articles: [
      { title: 'Why Tap Water Needs Reverse Osmosis', desc: 'Understanding what\'s really in your municipal water supply.' },
      { title: 'Glyphosate in Water and Food', desc: 'How to reduce your exposure to this common herbicide.' },
      { title: 'The Hidden Dangers of Bottled Water', desc: 'Why plastic bottles may not be the solution you think.' },
    ]
  },
  {
    category: 'Home & Indoor Air Quality',
    icon: Home,
    color: 'forest-green',
    articles: [
      { title: 'Hidden Toxins in Your Home', desc: 'Common household products that may be harming your health.' },
      { title: 'Understanding Indoor Air Quality (IAQ)', desc: 'Why the air inside your home matters for autoimmune support.' },
      { title: 'Choosing Non-Toxic Cleaning Products', desc: 'Simple swaps for a cleaner home environment.' },
    ]
  },
  {
    category: 'Body Systems & Epigenetics',
    icon: Brain,
    color: 'vitality-pink',
    articles: [
      { title: 'Endocrine Disruptors and Hormone Chaos', desc: 'How environmental chemicals affect your hormonal balance.' },
      { title: 'Epigenetics: Your Genes Are Not Your Destiny', desc: 'How environment and nutrition influence gene expression.' },
      { title: 'The 90 Essential Nutrients Explained', desc: 'Why your body needs what modern diets can\'t provide.' },
    ]
  },
  {
    category: 'Modern Toxins',
    icon: Wind,
    color: 'vitality-red',
    articles: [
      { title: 'The Danger of Nano-particles', desc: 'Emerging concerns about microscopic particles in everyday products.' },
      { title: 'Understanding Bio-solids in Agriculture', desc: 'What\'s really being used to grow your food.' },
      { title: 'EMFs and Your Health', desc: 'Navigating electromagnetic fields in a connected world.' },
    ]
  },
]

export default function EducationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-vitality-yellow font-medium">Learn & Grow</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Educational Hub</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Knowledge is the first step to healing. Explore articles and resources on 
              environmental health, toxin reduction, and natural healing strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-4">
              Topics We Cover
            </h2>
            <p className="text-warm-gray text-lg">
              Each topic connects ecosystem thinking to practical health solutions.
            </p>
          </div>
          
          <div className="space-y-12">
            {topics.map((topic, index) => (
              <div key={index} className="bg-warm-cream rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-${topic.color}/20 rounded-xl flex items-center justify-center`}>
                    <topic.icon className={`text-${topic.color}`} size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-soil-brown">{topic.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {topic.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h4 className="font-heading font-bold text-soil-brown mb-2">{article.title}</h4>
                      <p className="text-warm-gray text-sm mb-4">{article.desc}</p>
                      <span className="text-forest-green text-sm font-medium">Coming Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-cream section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-forest-green/10 text-forest-green px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Leaf size={16} />
              Key Concepts
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-8">
              Understanding the Ecosystem Approach
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-soil-brown text-lg mb-4">The 3 Causes of Cellular Distress</h3>
                <ul className="space-y-3 text-warm-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-vitality-yellow font-bold">1.</span>
                    <span><strong>Starvation</strong> — Cells not getting the 90 essential nutrients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vitality-orange font-bold">2.</span>
                    <span><strong>Toxification</strong> — Cells bombarded by environmental toxins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vitality-red font-bold">3.</span>
                    <span><strong>Suffocation</strong> — Cells not getting enough oxygen</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-bold text-soil-brown text-lg mb-4">The 4 Groups of Toxins</h3>
                <ul className="space-y-3 text-warm-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-vitality-orange font-bold">•</span>
                    <span><strong>Carcinogens</strong> — Cancer-causing agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vitality-red font-bold">•</span>
                    <span><strong>Neurotoxins</strong> — Nervous system disruptors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vitality-pink font-bold">•</span>
                    <span><strong>Reproductive Toxins</strong> — Fertility and development harm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-vitality-yellow font-bold">•</span>
                    <span><strong>Endocrine Disruptors</strong> — Hormone system interference</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-warm-gray text-lg mb-8">
              Understanding these concepts is the foundation for taking control of your health. 
              Each article in our educational hub connects back to these core principles.
            </p>
          </div>
        </div>
      </section>

      <section className="gradient-vitality text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Apply What You&apos;ve Learned?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Knowledge is powerful, but action creates change. Take the health evaluation 
            to see how these concepts apply to your specific situation.
          </p>
          <a href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" target="_blank" rel="noopener noreferrer" 
             className="inline-flex items-center justify-center px-8 py-4 bg-white text-vitality-orange font-bold rounded-lg hover:bg-warm-cream transition-colors shadow-lg">
            Take Your Free Health Evaluation <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </>
  )
}
