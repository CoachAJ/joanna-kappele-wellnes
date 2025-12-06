import Link from 'next/link'
import { 
  Leaf, 
  Droplets, 
  Wind, 
  Apple, 
  ArrowRight, 
  Shield, 
  Brain, 
  Heart,
  Sparkles,
  CheckCircle,
  Phone
} from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-cream to-white overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-forest-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-vitality-orange/10 rounded-full blur-2xl"></div>
        
        <div className="container-custom py-12 md:py-16 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-forest-green/10 text-forest-green px-4 py-2 rounded-full text-sm font-medium">
                <Leaf size={16} />
                Certified Wholistic Health Coach
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-soil-brown leading-tight">
                Your Body Is an Ecosystem.{' '}
                <span className="text-forest-green">Let&apos;s Clean the Tank</span>{' '}
                So It Can Heal.
              </h1>
              
              <p className="text-base md:text-lg text-warm-gray leading-relaxed">
                Certified Wholistic Health Coach & Functional Nutrition Counselor{' '}
                <strong className="text-soil-brown">Joanna Kappele</strong> helps you minimize 
                toxic load and maximize vitality—so your body can do what it was designed to do: heal itself.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Take Your Free Health Evaluation
                  <ArrowRight className="ml-2" size={18} />
                </a>
                <Link href="/services" className="btn-outline">
                  Learn How It Works
                </Link>
              </div>
              
              <div className="flex items-center gap-4 pt-2">
                <a href="tel:312-772-4984" className="flex items-center gap-2 text-soil-brown hover:text-forest-green transition-colors">
                  <Phone size={18} />
                  <span className="font-medium">312.772.4984</span>
                </a>
                <span className="text-warm-gray hidden sm:inline">|</span>
                <span className="text-warm-gray text-sm hidden sm:inline">Call or Text for a Discovery Session</span>
              </div>
            </div>
            
            {/* Hero Image Section - Place joanna.jpg in /public/images/ */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Image container with gradient overlay */}
                <div className="aspect-[4/5] md:aspect-square bg-gradient-to-br from-forest-green to-forest-green-dark relative">
                  <img 
                    src="/images/joanna.JPG" 
                    alt="Joanna Kappele - Certified Wholistic Health Coach and Functional Nutrition Counselor" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green-dark/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <p className="font-heading text-lg md:text-xl font-bold">The We-cologist Approach</p>
                    <p className="text-white/80 text-sm">Ecology + Nutrition = Healing</p>
                  </div>
                </div>
              </div>
              
              {/* Credential badges */}
              <div className="absolute -top-3 -right-3 bg-vitality-orange text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                CWHC • CFNC
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white text-soil-brown px-3 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg border border-warm-cream">
                WELL AP • M.Ed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Causes of Cellular Distress */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-4">
              The 3 Reasons Your Cells Are Struggling
            </h2>
            <p className="text-warm-gray text-lg">
              Most health approaches treat symptoms. Joanna addresses the three root causes of cellular distress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card border-t-4 border-vitality-yellow">
              <div className="w-16 h-16 bg-vitality-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                <Apple className="text-vitality-yellow" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-soil-brown mb-3">1. Starvation</h3>
              <p className="text-warm-gray leading-relaxed">
                Your cells aren&apos;t getting the <strong>90 essential nutrients</strong> they need—because 
                modern soil is depleted and diets fall short. Without proper fuel, cells can&apos;t function.
              </p>
            </div>
            
            <div className="card border-t-4 border-vitality-orange">
              <div className="w-16 h-16 bg-vitality-orange/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-vitality-orange" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-soil-brown mb-3">2. Toxification</h3>
              <p className="text-warm-gray leading-relaxed">
                Your cells are under constant assault from toxins in food, water, air, medications, 
                injections, and everyday products. The tank needs cleaning.
              </p>
            </div>
            
            <div className="card border-t-4 border-vitality-red">
              <div className="w-16 h-16 bg-vitality-red/20 rounded-2xl flex items-center justify-center mb-6">
                <Wind className="text-vitality-red" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-soil-brown mb-3">3. Suffocation</h3>
              <p className="text-warm-gray leading-relaxed">
                Your cells aren&apos;t getting enough oxygen—due to poor air quality, shallow breathing, 
                or circulation issues. Cells need to breathe to thrive.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-soil-brown font-medium mb-6">
              When cells are starved, poisoned, and suffocated, the body can&apos;t heal.
              <br />
              <span className="text-forest-green">Joanna&apos;s approach addresses all three.</span>
            </p>
            <a
              href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Find Out Which Is Affecting You Most
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* The Methodology */}
      <section className="bg-warm-cream section-padding leaf-pattern">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-6">
                Toxicity Comes From Two Directions
              </h2>
              <p className="text-warm-gray text-lg mb-8">
                Most plans add more—more meds, more supplements. Joanna first asks: 
                <em className="text-soil-brown font-medium"> &quot;What&apos;s poisoning the tank?&quot;</em>
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-forest-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Apple className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-soil-brown mb-1">What You Put In</h4>
                    <p className="text-warm-gray text-sm">
                      Food, water, medications, personal care products, supplements—conscious consumption choices.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-vitality-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wind className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-soil-brown mb-1">What Surrounds You</h4>
                    <p className="text-warm-gray text-sm">
                      Air quality, water quality, home chemicals, plastics, EMFs—environmental exposures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-soil-brown mb-6">
                The 4 Groups of Toxins We Target
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-vitality-red/10 rounded-xl p-4 text-center">
                  <Brain className="mx-auto text-vitality-red mb-2" size={28} />
                  <span className="text-sm font-medium text-soil-brown">Neurotoxins</span>
                </div>
                <div className="bg-vitality-orange/10 rounded-xl p-4 text-center">
                  <Shield className="mx-auto text-vitality-orange mb-2" size={28} />
                  <span className="text-sm font-medium text-soil-brown">Carcinogens</span>
                </div>
                <div className="bg-vitality-pink/10 rounded-xl p-4 text-center">
                  <Heart className="mx-auto text-vitality-pink mb-2" size={28} />
                  <span className="text-sm font-medium text-soil-brown">Reproductive Toxins</span>
                </div>
                <div className="bg-vitality-yellow/10 rounded-xl p-4 text-center">
                  <Sparkles className="mx-auto text-vitality-yellow" size={28} />
                  <span className="text-sm font-medium text-soil-brown">Endocrine Disruptors</span>
                </div>
              </div>
              <p className="text-warm-gray text-sm mt-6 text-center">
                These toxins are everywhere—in your water, food, air, and products. 
                Identifying and removing them is the first step to healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The We-cologist Difference */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-vitality-yellow font-medium">Meet Your We-cologist</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
                Joanna Kappele
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                After losing both parents to cancer in 1990-1991, Joanna dedicated her life to 
                understanding why people get sick—and how to help them heal. Her unique background 
                combines ecology, education, and functional nutrition into a powerful approach.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-vitality-yellow" size={20} />
                  <span>Ecologist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-vitality-yellow" size={20} />
                  <span>CWHC Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-vitality-yellow" size={20} />
                  <span>CFNC Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-vitality-yellow" size={20} />
                  <span>WELL AP</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-vitality-yellow" size={20} />
                  <span>M.Ed Educator</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-vitality-yellow" size={20} />
                  <span>30+ Years Experience</span>
                </div>
              </div>
              
              <Link href="/about" className="inline-flex items-center gap-2 text-vitality-yellow hover:text-white transition-colors font-medium">
                Read Joanna&apos;s Full Story
                <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <blockquote className="text-xl font-heading italic mb-4">
                &quot;Let food be thy medicine and medicine be thy food.&quot;
              </blockquote>
              <cite className="text-vitality-yellow">— Hippocrates</cite>
              <p className="text-white/80 mt-6 text-sm">
                This quote, discovered at Green Earth organic shop in 1991, launched Joanna&apos;s 
                lifelong quest to understand the connection between environment, nutrition, and health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Preview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-4">
              The Path to Restored Health
            </h2>
            <p className="text-warm-gray text-lg">
              A clear, systematic approach to identifying what&apos;s harming you and rebuilding your vitality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="text-6xl font-heading font-bold text-vitality-yellow/20 mb-2">01</div>
              <h3 className="text-xl font-heading font-bold text-soil-brown mb-2">Evaluate</h3>
              <p className="text-warm-gray text-sm">Complete the holistic health evaluation to identify symptoms and patterns.</p>
              <ArrowRight className="hidden md:block absolute top-8 -right-3 text-warm-gray/30" size={24} />
            </div>
            <div className="relative">
              <div className="text-6xl font-heading font-bold text-vitality-orange/20 mb-2">02</div>
              <h3 className="text-xl font-heading font-bold text-soil-brown mb-2">Isolate</h3>
              <p className="text-warm-gray text-sm">Identify the environmental irritants affecting your water, air, and food.</p>
              <ArrowRight className="hidden md:block absolute top-8 -right-3 text-warm-gray/30" size={24} />
            </div>
            <div className="relative">
              <div className="text-6xl font-heading font-bold text-vitality-red/20 mb-2">03</div>
              <h3 className="text-xl font-heading font-bold text-soil-brown mb-2">Eliminate</h3>
              <p className="text-warm-gray text-sm">Practical steps to remove toxins and reduce your overall toxic load.</p>
              <ArrowRight className="hidden md:block absolute top-8 -right-3 text-warm-gray/30" size={24} />
            </div>
            <div className="relative">
              <div className="text-6xl font-heading font-bold text-forest-green/20 mb-2">04</div>
              <h3 className="text-xl font-heading font-bold text-soil-brown mb-2">Regenerate</h3>
              <p className="text-warm-gray text-sm">Custom nutrition and supplementation protocols to rebuild cellular health.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              Learn More About the Process
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-vitality text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Clean Your Ecosystem?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Stop fighting symptoms. Start addressing the root causes. Take the first step 
            with a free holistic health evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-vitality-orange font-bold rounded-lg hover:bg-warm-cream transition-colors shadow-lg"
            >
              Take Your Free Health Evaluation
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:312-772-4984"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call 312.772.4984
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
