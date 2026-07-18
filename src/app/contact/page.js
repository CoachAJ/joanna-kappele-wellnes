'use client'

import { Phone, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-vitality-yellow font-medium">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">Contact Joanna</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your journey to better health? Reach out for a discovery 
              session or to ask any questions about the coaching process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-soil-brown mb-8">
                Let&apos;s Connect
              </h2>
              
              <div className="space-y-6 mb-12">
                <a href="tel:312-772-4984" className="flex items-start gap-4 p-6 bg-warm-cream rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-vitality-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-soil-brown text-lg">Call or Text</h3>
                    <p className="text-2xl font-bold text-forest-green">312.772.4984</p>
                    <p className="text-warm-gray text-sm mt-1">Best for quick questions or scheduling</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4 p-6 bg-warm-cream rounded-2xl">
                  <div className="w-14 h-14 bg-forest-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-soil-brown text-lg">Discovery Session</h3>
                    <p className="text-warm-gray">
                      A free 15-minute call to discuss your health concerns and see if 
                      Joanna&apos;s approach is right for you.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-warm-cream rounded-2xl">
                  <div className="w-14 h-14 bg-vitality-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-soil-brown text-lg">Response Time</h3>
                    <p className="text-warm-gray">
                      Joanna typically responds within 24-48 hours. For urgent matters, 
                      please call or text directly.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-forest-green/10 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-soil-brown mb-3">Before You Reach Out</h3>
                <p className="text-warm-gray mb-4">
                  The best way to start is by completing the free Health Evaluation. This gives 
                  Joanna valuable information about your situation before your first conversation.
                </p>
                <a href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Take Health Evaluation First <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-warm-cream rounded-3xl p-8">
                <h2 className="text-2xl font-heading font-bold text-soil-brown mb-6">
                  Send a Message
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-soil-brown font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray/30 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-soil-brown font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray/30 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-soil-brown font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray/30 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-soil-brown font-medium mb-2">
                      What brings you here? *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray/30 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-colors bg-white"
                    >
                      <option value="">Select an option...</option>
                      <option value="discovery">Schedule a Discovery Session</option>
                      <option value="coaching">Health Coaching Inquiry</option>
                      <option value="supplements">Questions About Supplements</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-soil-brown font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray/30 focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-colors resize-none"
                      placeholder="Tell Joanna about your health concerns or questions..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="evaluation"
                      name="evaluation"
                      className="mt-1"
                    />
                    <label htmlFor="evaluation" className="text-warm-gray text-sm">
                      I have already completed the Health Evaluation
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                  
                  <p className="text-warm-gray text-xs text-center">
                    By submitting this form, you agree to be contacted regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soil-brown text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Prefer to Start with the Evaluation?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            The Health Evaluation gives Joanna a complete picture of your health ecosystem 
            before you even speak. It&apos;s the best way to make your first conversation productive.
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
