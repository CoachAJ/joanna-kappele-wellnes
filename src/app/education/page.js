import Link from 'next/link'
import { BookOpen, Droplets, Wind, Home, Brain, Leaf, ArrowRight, Sun, ShoppingBag } from 'lucide-react'

export const metadata = {
  title: 'Educational Hub | Protect Your Cells – Joanna Kappele',
  description: 'Learn how toxins in your water, food, outdoor air, and indoor air affect your cells—and what you can do about it. Expert guidance from Certified Wholistic Health Coach Joanna Kappele.',
}

const topics = [
  {
    category: 'Water Toxins',
    icon: Droplets,
    color: 'vitality-orange',
    description: 'Most tap water contains dozens of contaminants that accumulate in your cells over time. Understanding what\'s in your water is a critical first step to protecting your health.',
    articles: [
      { title: 'Why Tap Water Needs Reverse Osmosis', desc: 'Understanding chlorine, chloramines, fluoride, and other chemicals in your municipal water supply—and how to remove them.' },
      { title: 'PFAS "Forever Chemicals" in Drinking Water', desc: 'How these industrial pollutants end up in water supplies and why they accumulate in the body.' },
      { title: 'Glyphosate in Water and Food', desc: 'How to recognize and reduce your exposure to this widespread herbicide found in tap water, rain water, and non-organic food.' },
      { title: 'Heavy Metals: Lead, Arsenic & Mercury in Water', desc: 'Sources, health effects, and the most effective filtration methods for removing heavy metals.' },
      { title: 'Microplastics in Water and Food', desc: 'Emerging evidence on microscopic plastic particles entering our food chain through water, packaging, and sea life.' },
      { title: 'The Hidden Dangers of Bottled Water', desc: 'Why plastic bottles leach chemicals and may not be the solution you think.' },
    ]
  },
  {
    category: 'Food Toxins',
    icon: Leaf,
    color: 'forest-green',
    description: 'Modern food production introduces a wide range of chemical toxins directly into what we eat. Knowing which foods carry the highest toxic load helps you make powerful protective choices.',
    articles: [
      { title: 'Pesticides & Herbicides on Your Plate', desc: 'Which conventional crops carry the highest pesticide residues and how to reduce exposure with simple swaps.' },
      { title: 'Glyphosate in Food: The Invisible Threat', desc: 'How glyphosate disrupts gut bacteria, mineral absorption, and cellular function—and where it hides in everyday foods.' },
      { title: 'Bio-solids in Agriculture: What\'s Really Feeding Your Food', desc: 'The controversial practice of spreading sewage sludge on farmland and its impact on produce safety.' },
      { title: 'Artificial Additives, Preservatives & Dyes', desc: 'Common food additives linked to inflammation, hormone disruption, and neurological effects.' },
      { title: 'Heavy Metals in Fish, Rice & Leafy Greens', desc: 'Which foods accumulate heavy metals and safer alternatives to consider.' },
      { title: 'Ultra-Processed Foods and Cellular Stress', desc: 'How industrial seed oils, refined sugars, and food processing strip nutrients and introduce harmful compounds.' },
    ]
  },
  {
    category: 'Outdoor Air Quality',
    icon: Wind,
    color: 'vitality-red',
    description: 'Most people think of air pollution as a city problem—but outdoor air quality affects everyone, everywhere. From traffic exhaust to wildfire smoke to agricultural chemical drift, what\'s in the air outside directly impacts your cellular health.',
    articles: [
      { title: 'How Outdoor Air Pollution Damages Your Cells', desc: 'Particulate matter (PM2.5), ozone, and nitrogen dioxide cause oxidative stress and inflammation deep in your tissues.' },
      { title: 'Wildfire Smoke and Your Health', desc: 'Why smoke from wildfires is particularly dangerous—and practical steps to reduce your exposure during smoke events.' },
      { title: 'Traffic & Industrial Pollution: The Everyday Invisible Threat', desc: 'Living or working near highways or industrial zones raises your toxic load significantly. Here\'s what to know.' },
      { title: 'Agricultural Chemical Drift', desc: 'How pesticide and herbicide spraying from nearby farms affects surrounding communities\' air quality.' },
      { title: 'Checking and Acting on Your Local Air Quality Index (AQI)', desc: 'How to read AQI data, understand what\'s in your air today, and take practical steps to minimize exposure.' },
      { title: 'Outdoor Air Pollutants & Endocrine Disruption', desc: 'Many airborne chemicals act as endocrine disruptors, interfering with hormone signaling even at low concentrations.' },
    ]
  },
  {
    category: 'Indoor Air Quality',
    icon: Home,
    color: 'vitality-yellow',
    description: 'Indoor air is often 2–5x more polluted than outdoor air. Since most people spend 90% of their time indoors, improving your home\'s air quality is one of the highest-impact changes you can make.',
    articles: [
      { title: 'Hidden Toxins in Your Home', desc: 'Common household products—from cookware to furniture to cleaning sprays—that may be continuously off-gassing harmful chemicals.' },
      { title: 'Understanding Indoor Air Quality (IAQ)', desc: 'Why the air inside your home matters for autoimmune support, sleep quality, and long-term cellular health.' },
      { title: 'VOCs: What They Are and How to Reduce Them', desc: 'Volatile Organic Compounds from paints, carpets, adhesives, and personal care products—and how to minimize them.' },
      { title: 'Mold, Mycotoxins & Cellular Damage', desc: 'How hidden mold produces toxins that suppress the immune system and harm mitochondrial function.' },
      { title: 'Choosing Non-Toxic Cleaning Products', desc: 'Simple, effective swaps for a cleaner home environment that doesn\'t trade dirt for chemicals.' },
      { title: 'Air Filtration: What Actually Works', desc: 'A guide to HEPA filters, air purifiers, and ventilation strategies to reduce your indoor toxic load.' },
    ]
  },
  {
    category: 'Body Systems & Epigenetics',
    icon: Brain,
    color: 'vitality-pink',
    articles: [
      { title: 'Endocrine Disruptors and Hormone Chaos', desc: 'How environmental chemicals in water, food, and air affect your hormonal balance and what you can do about it.' },
      { title: 'Epigenetics: Your Genes Are Not Your Destiny', desc: 'How environment and nutrition influence gene expression—and how reducing toxic load can shift your health trajectory.' },
      { title: 'The 90 Essential Nutrients Explained', desc: 'Why your body needs what modern depleted diets can\'t provide—and how nutrient deficiency accelerates cellular damage.' },
    ]
  },
  {
    category: 'Modern & Emerging Toxins',
    icon: BookOpen,
    color: 'soil-brown',
    articles: [
      { title: 'The Danger of Nano-particles', desc: 'Emerging concerns about microscopic particles in everyday products, food packaging, and even the air we breathe.' },
      { title: 'EMFs and Your Health', desc: 'Navigating electromagnetic fields in a connected world—what the research says and practical protective steps.' },
      { title: 'Understanding the Toxic Burden Concept', desc: 'How cumulative, low-level exposures across water, food, and air add up to a total toxic load that overwhelms your cells.' },
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
              Each topic connects ecosystem thinking to practical health solutions. Toxins enter 
              your body through <strong className="text-soil-brown">water, food, outdoor air, and indoor air</strong>—all four pathways matter.
            </p>
          </div>

          {/* Source callout banner */}
          <div className="bg-forest-green/8 border border-forest-green/20 rounded-2xl p-6 mb-12 grid sm:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Droplets className="text-vitality-orange" size={28} />
              <span className="font-heading font-bold text-soil-brown text-sm">Water</span>
              <p className="text-warm-gray text-xs">Tap water, bottled water, rain water — all carry contaminants</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Leaf className="text-forest-green" size={28} />
              <span className="font-heading font-bold text-soil-brown text-sm">Food</span>
              <p className="text-warm-gray text-xs">Pesticides, herbicides, heavy metals & additives on your plate</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wind className="text-vitality-red" size={28} />
              <span className="font-heading font-bold text-soil-brown text-sm">Outdoor Air</span>
              <p className="text-warm-gray text-xs">Traffic, industry, wildfires & agricultural drift affect everyone</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Home className="text-vitality-yellow" size={28} />
              <span className="font-heading font-bold text-soil-brown text-sm">Indoor Air</span>
              <p className="text-warm-gray text-xs">Indoor air is often 2–5× more polluted than outdoor air</p>
            </div>
          </div>
          
          <div className="space-y-12">
            {topics.map((topic, index) => (
              <div key={index} className="bg-warm-cream rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-14 h-14 bg-${topic.color}/20 rounded-xl flex items-center justify-center`}>
                    <topic.icon className={`text-${topic.color}`} size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-soil-brown">{topic.category}</h3>
                </div>
                {topic.description && (
                  <p className="text-warm-gray text-sm mb-6 max-w-3xl">{topic.description}</p>
                )}
                
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
