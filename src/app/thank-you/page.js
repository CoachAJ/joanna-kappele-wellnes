import Link from 'next/link'
import { CheckCircle, ArrowRight, Phone, Mail, Heart } from 'lucide-react'

export const metadata = {
  title: 'Thank You for Your Order | Joanna Kappele',
  description: 'Thank you for your Youngevity order. Joanna Kappele appreciates your trust in her recommended supplements.',
}

export default function ThankYouPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
              <CheckCircle size={48} className="text-vitality-yellow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Thank You for Your Order!
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your order has been placed successfully. You&apos;re taking an important step 
              toward giving your cells the nutrients they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Order Info */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-warm-cream rounded-3xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-soil-brown mb-6 text-center">
                What Happens Next?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vitality-orange text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-soil-brown">Order Confirmation</h3>
                    <p className="text-warm-gray">
                      You&apos;ll receive an email confirmation from Youngevity with your order details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vitality-orange text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-soil-brown">Shipping Notification</h3>
                    <p className="text-warm-gray">
                      Once your order ships, you&apos;ll receive tracking information via email.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-vitality-orange text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-soil-brown">Start Your Journey</h3>
                    <p className="text-warm-gray">
                      When your products arrive, follow the recommended usage instructions for best results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-forest-green/10 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-soil-brown text-lg mb-4">
                  Questions About Your Order?
                </h3>
                <p className="text-warm-gray mb-4">
                  If you have any questions about your order or need help with your products, 
                  Joanna is here to help.
                </p>
                <a href="tel:312-772-4984" className="flex items-center gap-2 text-forest-green font-bold hover:text-forest-green-dark transition-colors">
                  <Phone size={18} />
                  312.772.4984
                </a>
              </div>
              <div className="bg-vitality-orange/10 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-soil-brown text-lg mb-4">
                  Ready for the Next Step?
                </h3>
                <p className="text-warm-gray mb-4">
                  Supplements are just one piece of the puzzle. Consider a full health evaluation 
                  to address all 3 causes of cellular distress.
                </p>
                <a 
                  href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-vitality-orange font-bold hover:text-vitality-red transition-colors"
                >
                  Take Health Evaluation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Personal Note */}
            <div className="text-center bg-warm-cream rounded-3xl p-8">
              <Heart className="mx-auto text-vitality-pink mb-4" size={32} />
              <h3 className="font-heading font-bold text-soil-brown text-xl mb-4">
                A Note from Joanna
              </h3>
              <p className="text-warm-gray leading-relaxed max-w-xl mx-auto mb-6">
                Thank you for trusting me with your health journey. Remember, healing is a process—be 
                patient with your body as it begins to receive the nutrients it&apos;s been missing. 
                I&apos;m here to support you every step of the way.
              </p>
              <p className="font-heading text-forest-green font-bold">
                — Joanna Kappele, CWHC, CFNC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Exploring */}
      <section className="bg-soil-brown text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Continue Exploring
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/education" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Educational Resources
            </Link>
            <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors">
              Health Coaching Services
            </Link>
            <Link href="/shop" className="bg-vitality-orange hover:bg-vitality-red text-white font-bold py-3 px-6 rounded-xl transition-colors">
              Shop More Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
