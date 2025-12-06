'use client'

import { ShoppingCart, X, ShoppingBag } from 'lucide-react'
import { useState, useEffect } from 'react'
import { createMultiCheckoutUrl } from '@/lib/products'

export default function FloatingCart({ items, onRemove, onClear }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    setIsVisible(items.length > 0)
    if (items.length > 0) {
      setJustAdded(true)
      const timer = setTimeout(() => setJustAdded(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [items.length])

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = () => {
    if (items.length === 0) return
    const checkoutUrl = createMultiCheckoutUrl(items)
    window.open(checkoutUrl, '_blank')
  }

  if (!isVisible && items.length === 0) return null

  return (
    <>
      {/* Floating Cart Button - Large and Clear */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        {/* Expanded view when items in cart */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-vitality-orange hover:bg-vitality-red text-white rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-3 ${
            justAdded ? 'animate-pulse ring-4 ring-vitality-yellow' : ''
          } ${itemCount > 0 ? 'px-6 py-4' : 'p-4'}`}
          aria-label="Open cart"
        >
          <ShoppingCart size={28} />
          {itemCount > 0 && (
            <>
              <div className="text-left">
                <p className="font-bold text-lg">{itemCount} Item{itemCount > 1 ? 's' : ''}</p>
                <p className="text-white/90 text-sm">${total.toFixed(2)}</p>
              </div>
              <span className="bg-white text-vitality-orange font-bold px-3 py-1 rounded-lg text-sm">
                View Cart
              </span>
            </>
          )}
        </button>
      </div>

      {/* Cart Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Cart Panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-warm-cream">
              <h2 className="font-heading font-bold text-xl text-soil-brown">Your Cart</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-warm-cream rounded-lg transition-colors"
              >
                <X size={24} className="text-warm-gray" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart size={48} className="mx-auto text-warm-gray/50 mb-4" />
                  <p className="text-warm-gray">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-warm-cream rounded-xl p-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-contain bg-white rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-soil-brown text-sm">{item.name}</h3>
                        <p className="text-warm-gray text-xs">{item.subtitle}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-forest-green">${item.price.toFixed(2)}</span>
                          <span className="text-warm-gray text-sm">Qty: {item.quantity}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-warm-gray hover:text-vitality-red transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-warm-cream p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-warm-gray">Subtotal:</span>
                  <span className="font-heading font-bold text-xl text-soil-brown">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-vitality-orange hover:bg-vitality-red text-white font-bold py-4 rounded-xl transition-colors"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClear}
                  className="w-full text-warm-gray hover:text-vitality-red text-sm transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
