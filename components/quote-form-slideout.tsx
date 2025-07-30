"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import QuoteForm from "./quote-form"

export default function QuoteFormSlideout() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleOpenQuoteForm = () => {
      setIsOpen(true)
    }

    const handleQuoteTrigger = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains("quote-trigger") || target.closest(".quote-trigger")) {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    // Listen for custom event
    window.addEventListener("openQuoteForm", handleOpenQuoteForm)

    // Listen for clicks on quote trigger elements
    document.addEventListener("click", handleQuoteTrigger)

    return () => {
      window.removeEventListener("openQuoteForm", handleOpenQuoteForm)
      document.removeEventListener("click", handleQuoteTrigger)
    }
  }, [])

  if (!mounted) {
    return null // Don't render anything on the server or until mounted on the client
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slideout Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-slate-800 text-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2">
                REACH OUT FOR A FREE QUOTE
              </p>
              <h2 className="text-3xl font-bold">Effortless Moves, Every Time</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-slate-700"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            Whether you're organizing a local move or gearing up for a cross-country relocation, seeking expert packing
            assistance, or reliable storage solutions, T&E Moving is here with professionalism, expertise, and care to
            handle it all. Contact us today to schedule your move!
          </p>

          {/* Quote Form */}
          <QuoteForm />
        </div>
      </div>
    </>
  )
}
