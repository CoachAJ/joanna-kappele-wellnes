import Link from 'next/link'
import { Leaf, Heart, BookOpen, Award, ArrowRight, CheckCircle, Quote } from 'lucide-react'

export const metadata = {
  title: 'About Joanna Kappele | The Quest for Wellness',
  description: 'Learn about Joanna Kappele\'s journey from losing her parents to cancer to becoming a Certified Wholistic Health Coach and Functional Nutrition Counselor.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="text-vitality-yellow font-medium">The Quest for Wellness</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">About Joanna Kappele</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Ecologist. Educator. Functional Nutrition Counselor. A peaceful warrior 
                who fights for your health by understanding the ecosystem of your body.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/images/Joanna Kappele.jpg" 
                  alt="Joanna Kappele - Certified Wholistic Health Coach" 
                  className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-vitality-yellow text-soil-brown px-6 py-3 rounded-xl font-heading font-bold shadow-lg">
                  30+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-vitality-orange font-medium">The Beginning</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mt-2 mb-6">
                1990-1991: A Quest Begins
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  In 1990 and 1991, Joanna lost both of her parents to cancer. The grief was 
                  overwhelming, but it sparked something deeper—a burning question that would 
                  shape the rest of her life:
                </p>
                <blockquote className="border-l-4 border-vitality-orange pl-6 py-2 text-soil-brown font-heading text-xl italic">
                  &quot;Why do people get sick?&quot;
                </blockquote>
                <p>This wasn&apos;t an academic question. It was personal. And finding the answer became her mission.</p>
              </div>
            </div>
            
            <div className="bg-warm-cream rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center">
                  <Leaf className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-soil-brown">Green Earth</h3>
                  <p className="text-warm-gray text-sm">Organic Shop, 1991</p>
                </div>
              </div>
              <p className="text-warm-gray leading-relaxed mb-4">
                Joanna&apos;s first &quot;laboratory&quot; was a small organic shop called Green Earth. 
                It was here, surrounded by herbs and whole foods, that she discovered a quote 
                that would become her guiding principle:
              </p>
              <div className="bg-white rounded-xl p-6">
                <Quote className="text-vitality-yellow mb-2" size={24} />
                <p className="font-heading text-lg text-soil-brown italic">
                  &quot;Let food be thy medicine and medicine be thy food.&quot;
                </p>
                <cite className="text-forest-green text-sm">— Hippocrates</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-cream section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-4">
              30+ Years of Learning & Helping
            </h2>
            <p className="text-warm-gray text-lg">What started as a personal quest became a professional calling.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-14 h-14 bg-forest-green/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="text-forest-green" size={28} />
              </div>
              <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">The Ecologist</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Trained to see systems, patterns, and interconnections. Understanding how 
                environments affect organisms—including the human body.
              </p>
            </div>
            
            <div className="card">
              <div className="w-14 h-14 bg-vitality-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-vitality-orange" size={28} />
              </div>
              <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">The Educator</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                With a Master&apos;s in Education, Joanna excels at breaking down complex health 
                concepts into actionable steps anyone can follow.
              </p>
            </div>
            
            <div className="card">
              <div className="w-14 h-14 bg-vitality-pink/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-vitality-pink" size={28} />
              </div>
              <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">The Healer</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Certified in Wholistic Health Coaching and Functional Nutrition, she combines 
                science with compassion to guide clients toward lasting health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soil-brown text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Credentials & Certifications</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Joanna&apos;s unique combination of credentials allows her to see health from 
                multiple angles—environmental, nutritional, and educational.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'CWHC', desc: 'Certified Wholistic Health Coach' },
                  { title: 'CFNC', desc: 'Certified Functional Nutrition Counselor' },
                  { title: 'WELL AP', desc: 'WELL Accredited Professional (Building Health)' },
                  { title: 'Ecologist', desc: 'Environmental Systems & Ecology Training' },
                  { title: 'M.Ed', desc: 'Master of Education' },
                ].map((cred, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-vitality-yellow flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-vitality-yellow">{cred.title}</span>
                      <span className="text-white/80"> — {cred.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <h3 className="font-heading text-xl font-bold text-vitality-yellow mb-4">The &quot;We-cologist&quot; Approach</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Most health practitioners focus on one thing—diet, or supplements, or exercise. 
                Joanna sees the <em>whole ecosystem</em>:
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2"><span className="text-vitality-yellow">•</span>What you&apos;re putting into your body</li>
                <li className="flex items-start gap-2"><span className="text-vitality-yellow">•</span>What&apos;s in your environment (water, air, home)</li>
                <li className="flex items-start gap-2"><span className="text-vitality-yellow">•</span>How these factors interact with your unique biology</li>
                <li className="flex items-start gap-2"><span className="text-vitality-yellow">•</span>The 3 causes of cellular distress: starvation, toxification, suffocation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-8">The Philosophy</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              <div className="bg-warm-cream rounded-2xl p-6">
                <h3 className="font-heading font-bold text-soil-brown mb-3">What Joanna Believes</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="text-forest-green flex-shrink-0 mt-1" size={16} />The body is designed to heal itself—when given the chance</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-forest-green flex-shrink-0 mt-1" size={16} />Most chronic illness stems from cellular distress</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-forest-green flex-shrink-0 mt-1" size={16} />Environment matters as much as diet</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-forest-green flex-shrink-0 mt-1" size={16} />Prevention is more powerful than treatment</li>
                </ul>
              </div>
              
              <div className="bg-warm-cream rounded-2xl p-6">
                <h3 className="font-heading font-bold text-soil-brown mb-3">How She Helps</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li className="flex items-start gap-2"><CheckCircle className="text-vitality-orange flex-shrink-0 mt-1" size={16} />Identifies hidden toxins in your life</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-vitality-orange flex-shrink-0 mt-1" size={16} />Creates practical elimination strategies</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-vitality-orange flex-shrink-0 mt-1" size={16} />Rebuilds nutrition with the 90 essential nutrients</li>
                  <li className="flex items-start gap-2"><CheckCircle className="text-vitality-orange flex-shrink-0 mt-1" size={16} />Educates so you can maintain health long-term</li>
                </ul>
              </div>
            </div>
            
            <blockquote className="text-2xl font-heading italic text-soil-brown mb-8">
              &quot;I don&apos;t just treat the symptoms. I clean the tank.&quot;
            </blockquote>
            
            <a href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start Your Health Evaluation <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
