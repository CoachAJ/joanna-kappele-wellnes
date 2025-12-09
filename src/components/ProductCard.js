'use client'

import { ShoppingCart, Plus, Check, Info } from 'lucide-react'
import { useState } from 'react'
import { createCheckoutUrl } from '@/lib/products'

export default function ProductCard({ product, onAddToCart, showAddToCart = true, onYoungevityClick }) {
  const [added, setAdded] = useState(false)

  const handleBuyNow = () => {
    const checkoutUrl = createCheckoutUrl(product.id, 1)
    window.open(checkoutUrl, '_blank')
  }

  const handleAddToCart = () => {
    onAddToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group relative">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 bg-vitality-orange text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative bg-warm-cream p-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-lg text-soil-brown mb-1">
          {product.name}
        </h3>
        <p className="text-warm-gray text-sm mb-2">{product.subtitle}</p>
        <p className="text-warm-gray text-xs mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-heading font-bold text-forest-green">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        {/* Action Buttons - Clear and Senior-Friendly */}
        <div className="space-y-3">
          {/* Primary Buy Now Button - Large and Clear */}
          <button
            onClick={handleBuyNow}
            className="w-full bg-vitality-orange hover:bg-vitality-red text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3 text-lg shadow-md"
          >
            <ShoppingCart size={22} />
            Buy Now — ${product.price.toFixed(2)}
          </button>
          
          {/* Secondary Add to Cart Button */}
          {showAddToCart && (
            <button
              onClick={handleAddToCart}
              className={`w-full font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 border-2 ${
                added 
                  ? 'bg-forest-green text-white border-forest-green' 
                  : 'bg-white text-forest-green border-forest-green hover:bg-forest-green/10'
              }`}
            >
              {added ? (
                <>
                  <Check size={20} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <Plus size={20} />
                  Add to Cart
                </>
              )}
            </button>
          )}
          
          {/* More Information Button */}
          {product.moreInfoUrl && (
            <a
              href={product.moreInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => onYoungevityClick && onYoungevityClick(e, product.moreInfoUrl)}
              className="w-full bg-forest-green/10 hover:bg-forest-green/20 text-forest-green font-semibold py-2 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Info size={16} />
              More Information
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
