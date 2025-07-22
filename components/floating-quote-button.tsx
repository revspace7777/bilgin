"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/components/ui/use-mobile"

export default function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) return
    
    const handleScroll = () => {
      const accolades = document.querySelector("[data-accolades-section]")
      
      if (!accolades) return
      
      const accoladesRect = accolades.getBoundingClientRect()
      
      // Show when accolades section is in view OR when past it
      const accoladesInView = accoladesRect.top < window.innerHeight && accoladesRect.bottom > 0
      const pastAccolades = accoladesRect.bottom < window.innerHeight
      
      setIsVisible(accoladesInView || pastAccolades)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  const handleClick = () => {
    const event = new CustomEvent("openQuoteForm")
    window.dispatchEvent(event)
  }

  if (!isMobile || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-full h-12 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-none border-t-3 border-gray-400 shadow-[0_-3px_6px_rgba(0,0,0,0.1)] transform translate-y-0"
        style={{
          borderTopWidth: '3px',
          borderTopColor: '#9CA3AF',
          boxShadow: '0 -3px 6px rgba(0,0,0,0.1)'
        }}
      >
        Get Free Quote
      </Button>
    </div>
  )
}
