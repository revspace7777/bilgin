"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleClick = () => {
    // Trigger the slideout form
    const event = new CustomEvent("openQuoteForm")
    window.dispatchEvent(event)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="bg-red-500 hover:bg-red-600 text-white shadow-2xl rounded-full px-6 py-4 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Get Free Quote
      </Button>
    </div>
  )
}
