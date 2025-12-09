'use client'

import { useEffect } from 'react'
import { Lightbulb, X } from 'lucide-react'

export default function ProTipToast({ show, onClose, redirectUrl }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        handleClose()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [show])

  const handleClose = () => {
    onClose()
    if (redirectUrl) {
      window.open(redirectUrl, '_blank')
    }
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="bg-forest-green text-white rounded-xl shadow-2xl p-6 max-w-md mx-4 flex items-start gap-4">
        <Lightbulb className="text-vitality-yellow flex-shrink-0 mt-0.5" size={28} />
        <div className="flex-1">
          <p className="font-bold text-xl mb-2">Pro Tip!</p>
          <p className="text-white/90 text-base leading-relaxed">
            When you reach the Youngevity website, remember to hit <strong>&quot;Join Us&quot;</strong> and sign up for free as a <strong>Preferred Customer</strong> to get wholesale pricing!
          </p>
        </div>
        <button onClick={handleClose} className="text-white/70 hover:text-white">
          <X size={24} />
        </button>
      </div>
    </div>
  )
}
