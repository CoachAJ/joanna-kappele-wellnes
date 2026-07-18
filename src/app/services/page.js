import Link from 'next/link'
import { ClipboardCheck, Search, Trash2, Sparkles, ArrowRight, Phone, Apple, Shield, Wind, Droplets, Home, Leaf } from 'lucide-react'

export const metadata = {
  title: 'Health Coaching Services | Joanna Kappele',
  description: 'Discover Joanna Kappele\'s wholistic health coaching process: Evaluate, Isolate, Eliminate, and Regenerate. Address the root causes of cellular distress.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-vitality-yellow font-medium">Health Coaching Services</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Helping Your Body Heal Itself</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A systematic approach to identifying what&apos;s harming your cells and 
              rebuilding your body&apos;s natural capacity to heal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-6">
                Cellular Health Is the Foundation
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Every symptom you experience—fatigue, brain fog, inflammation, weight gain, 
                autoimmune flares—traces back to cells in distress.
              </p>
              <p className="text-warm-gray leading-relaxed mb-8">
                Joanna&apos;s coaching identifies and addresses the <strong className="text-soil-brown">3 causes of cellular distress</strong>:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-vitality-yellow/10 rounded-xl p-4">
                  <Apple className="text-vitality-yellow flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-soil-brown">Starvation</h4>
                    <p className="text-warm-gray text-sm">Replenishing the 90 essential nutrients your body can&apos;t make and isn&apos;t getting.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-vitality-orange/10 rounded-xl p-4">
                  <Shield className="text-vitality-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-soil-brown">Toxification</h4>
                    <p className="text-warm-gray text-sm">Removing the 4 major toxin groups from your inputs and environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-vitality-red/10 rounded-xl p-4">
                  <Wind className="text-vitality-red flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-soil-brown">Suffocation</h4>
                    <p className="text-warm-gray text-sm">Improving oxygen delivery through air quality, movement, and breathing.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-warm-cream rounded-3xl p-8">
              <h3 className="font-heading text-xl font-bold text-soil-brown mb-6">This Isn&apos;t Symptom Management</h3>
              <p className="text-warm-gray leading-relaxed mb-6">
                Most approaches add more—more medications, more supplements, more restrictions. 
                Joanna starts by asking a different question:
              </p>
              <blockquote className="text-2xl font-heading italic text-forest-green mb-6">
                &quot;What&apos;s poisoning the tank?&quot;
              </blockquote>
              <p className="text-warm-gray leading-relaxed">
                By identifying and removing the invisible irritants in your ecosystem, 
                your body can finally do what it was designed to do: <strong>heal itself</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-cream section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-4">The 4-Step Process</h2>
            <p className="text-warm-gray text-lg">A clear, systematic approach to restoring your health ecosystem.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="w-20 h-20 bg-vitality-yellow rounded-2xl flex items-center justify-center">
                    <ClipboardCheck className="text-white" size={40} />
                  </div>
                </div>
                <div className="md:col-span-7">
                  <span className="text-vitality-yellow font-bold">Step 01</span>
                  <h3 className="text-2xl font-heading font-bold text-soil-brown mt-1 mb-3">Evaluate</h3>
                  <p className="text-warm-gray leading-relaxed">
                    Complete the comprehensive Holistic Health Evaluation. This intake form 
                    captures your symptoms, health history, lifestyle factors, and environmental 
                    exposures—giving Joanna a complete picture of your ecosystem.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <a href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                    Start Evaluation <ArrowRight className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="w-20 h-20 bg-vitality-orange rounded-2xl flex items-center justify-center">
                    <Search className="text-white" size={40} />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <span className="text-vitality-orange font-bold">Step 02</span>
                  <h3 className="text-2xl font-heading font-bold text-soil-brown mt-1 mb-3">Isolate</h3>
                  <p className="text-warm-gray leading-relaxed mb-4">
                    Like a detective, Joanna identifies the &quot;invisible irritants&quot; affecting your health:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Droplets className="text-vitality-orange" size={18} />
                      <span className="text-soil-brown">Water Quality</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Wind className="text-vitality-orange" size={18} />
                      <span className="text-soil-brown">Indoor Air Quality</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Home className="text-vitality-orange" size={18} />
                      <span className="text-soil-brown">Home Environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="w-20 h-20 bg-vitality-red rounded-2xl flex items-center justify-center">
                    <Trash2 className="text-white" size={40} />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <span className="text-vitality-red font-bold">Step 03</span>
                  <h3 className="text-2xl font-heading font-bold text-soil-brown mt-1 mb-3">Eliminate</h3>
                  <p className="text-warm-gray leading-relaxed">
                    Practical, actionable steps to remove toxins from your life. This might include 
                    water filtration (reverse osmosis), air purification, switching personal care products, 
                    or adjusting your food sources. You don&apos;t have to live in a bubble—just make smarter choices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="w-20 h-20 bg-forest-green rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-white" size={40} />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <span className="text-forest-green font-bold">Step 04</span>
                  <h3 className="text-2xl font-heading font-bold text-soil-brown mt-1 mb-3">Regenerate</h3>
                  <p className="text-warm-gray leading-relaxed">
                    Custom nutrition and supplementation protocols to rebuild cellular health. 
                    This includes the 90 essential nutrients your body needs but can&apos;t produce, 
                    targeted support for specific systems, and ongoing guidance as your body heals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-vitality text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Start?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            The first step is understanding where you are. Take the free health evaluation 
            or schedule a discovery call to discuss your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center justify-center px-8 py-4 bg-white text-vitality-orange font-bold rounded-lg hover:bg-warm-cream transition-colors shadow-lg">
              Take Your Free Health Evaluation <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="tel:312-772-4984" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              <Phone className="mr-2" size={20} /> Call 312.772.4984
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
