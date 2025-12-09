'use client'

import { useEffect } from 'react'
import { Lightbulb, X } from 'lucide-react'

export default function ProTipToast({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-forest-green text-white rounded-xl shadow-2xl p-4 max-w-md flex items-start gap-3">
        <Lightbulb className="text-vitality-yellow flex-shrink-0 mt-0.5" size={24} />
        <div className="flex-1">
          <p className="font-bold text-lg mb-1">Pro Tip!</p>
          <p className="text-white/90 text-sm leading-relaxed">
            When you reach the Youngevity website, remember to hit <strong>&quot;Join Us&quot;</strong> and sign up for free as a <strong>Preferred Customer</strong> to get wholesale pricing!
          </p>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white">
          <X size={20} />
        </button>
      </div>
    </div>
  )
}
