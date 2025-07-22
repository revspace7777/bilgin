"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useIsMobile } from "@/components/ui/use-mobile"

export default function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  const lastScrollY = useRef(0)
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    if (!isMobile) return
    const accolades = document.querySelector("[data-accolades-section]")
    if (!accolades) return
    let ticking = false
    let lastDirection = "down"

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = accolades.getBoundingClientRect()
          const inView = rect.top < window.innerHeight && rect.bottom > 0
          setIsVisible(inView)

          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY.current) {
            lastDirection = "down"
          } else {
            lastDirection = "up"
          }
          setShouldShow(inView && lastDirection === "down")
          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  const handleClick = () => {
    const event = new CustomEvent("openQuoteForm")
    window.dispatchEvent(event)
  }

  if (!isMobile || !shouldShow) return null

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center transition-transform duration-300">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-full max-w-md m-2 bg-red-500 hover:bg-red-600 text-white shadow-2xl rounded-full px-6 py-4 text-lg"
      >
        Get Free Quote
      </Button>
    </div>
  )
}
