'use client'

import { useState } from 'react'
import { ShoppingBag, ArrowRight, Shield, Truck, Award, Play, Phone } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import FloatingCart from '@/components/FloatingCart'
import ProTipToast from '@/components/ProTipToast'
import { FEATURED_PRODUCTS, NINETY_FOR_LIFE_PRODUCTS, SPONSOR_ID } from '@/lib/products'

export default function ShopPage() {
  const [cartItems, setCartItems] = useState([])
  const [showProTip, setShowProTip] = useState(false)

  const handleYoungevityClick = () => {
    setShowProTip(true)
  }

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-forest-green-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <ShoppingBag size={16} />
              Youngevity Products
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
              Nutritional Supplements
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Premium supplements to help you get the 90 essential nutrients 
              your body needs. Click any <strong>&quot;Buy Now&quot;</strong> button to purchase directly.
            </p>
            <div className="bg-white/10 rounded-xl p-4 inline-block">
              <p className="text-white/80 text-sm">Shopping with Joanna&apos;s Distributor ID:</p>
              <p className="text-2xl font-heading font-bold text-vitality-yellow">{SPONSOR_ID}</p>
            </div>
            
            <div className="mt-6">
              <a
                href="https://adoreyourself.youngevity.com/us_en/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleYoungevityClick}
                className="inline-flex items-center gap-2 bg-vitality-orange hover:bg-vitality-red text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md"
              >
                <ShoppingBag size={20} />
                Shop Our Full Product Line
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-warm-cream py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 justify-center">
              <Shield className="text-forest-green flex-shrink-0" size={32} />
              <div>
                <p className="font-bold text-soil-brown">Quality Guaranteed</p>
                <p className="text-warm-gray text-sm">Science-based formulas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Truck className="text-forest-green flex-shrink-0" size={32} />
              <div>
                <p className="font-bold text-soil-brown">Fast Shipping</p>
                <p className="text-warm-gray text-sm">Direct from Youngevity</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Award className="text-forest-green flex-shrink-0" size={32} />
              <div>
                <p className="font-bold text-soil-brown">30+ Years Trusted</p>
                <p className="text-warm-gray text-sm">Industry-leading nutrition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Joanna's Top Picks - Featured Individual Products */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-soil-brown mb-4">
              Joanna&apos;s Top Picks
            </h2>
            <p className="text-warm-gray text-lg">
              Individual supplements Joanna recommends for targeted support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
                onYoungevityClick={handleYoungevityClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 90 FOR LIFE Section */}
      <section className="bg-warm-cream section-padding" id="90-for-life">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-forest-green">90</span>{' '}
              <span className="text-vitality-orange">FOR LIFE</span>
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              Your Foundation for Optimal Health — All 90 Essential Nutrients in One System
            </p>
          </div>

          {/* Problem/Solution + Video */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Video */}
            <div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-soil-brown">
                <iframe 
                  src="https://players.brightcove.net/5975371686001/epPd797Th_default/index.html?videoId=6280345049001" 
                  allowFullScreen 
                  className="w-full h-full"
                  title="90 For Life Video"
                ></iframe>
              </div>
              <p className="text-center text-warm-gray mt-4 text-sm">
                Watch: Why You Need the 90 Essential Nutrients
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-2xl font-heading font-bold text-soil-brown mb-3">The Problem</h3>
                <p className="text-lg font-bold text-vitality-orange mb-3">
                  You don&apos;t get the nutrition you need from food alone.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  The CDC shows 76% of adults don&apos;t meet fruit intake recommendations, and 87% don&apos;t 
                  meet vegetable recommendations. Depleted soil means even healthy foods have fewer nutrients 
                  than they did decades ago.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-2xl font-heading font-bold text-soil-brown mb-3">The Solution</h3>
                <p className="text-lg font-bold text-forest-green mb-3">
                  90 Essential Nutrients in One System
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Youngevity&apos;s 90 For Life system delivers 60 minerals, 16 vitamins, 12 amino acids, 
                  and essential fatty acids — everything your body needs but can&apos;t make on its own.
                </p>
              </div>
            </div>
          </div>

          {/* 90 For Life Products */}
          <div className="mb-8">
            <h3 className="text-2xl font-heading font-bold text-center text-soil-brown mb-8">
              Choose Your 90 For Life System
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {NINETY_FOR_LIFE_PRODUCTS.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                  onYoungevityClick={handleYoungevityClick}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center text-soil-brown mb-12">
              How to Order
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-vitality-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">Click &quot;Buy Now&quot;</h3>
                <p className="text-warm-gray">
                  Find a product you want and click the orange &quot;Buy Now&quot; button.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-vitality-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">Complete Checkout</h3>
                <p className="text-warm-gray">
                  You&apos;ll be taken to Youngevity&apos;s secure checkout to enter your information.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-vitality-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-heading font-bold text-soil-brown text-lg mb-2">Receive Your Order</h3>
                <p className="text-warm-gray">
                  Your supplements ship directly to your door from Youngevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Not Sure Which Products Are Right for You?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Joanna can help you choose the right supplements based on your health goals. 
              Take the free Health Evaluation or give her a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://iwhhealthhub.com/take-evaluation?am_id=joanna6889" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-vitality-orange hover:bg-vitality-red text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Take Health Evaluation <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="tel:312-772-4984" 
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                <Phone className="mr-2" size={20} />
                Call 312.772.4984
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Cart */}
      <FloatingCart 
        items={cartItems} 
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      {/* Pro Tip Toast */}
      <ProTipToast show={showProTip} onClose={() => setShowProTip(false)} />
    </>
  )
}
