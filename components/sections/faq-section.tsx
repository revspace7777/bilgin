import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  subtitle?: string
  faqs: FAQ[]
}

export function FAQSection({
  title,
  subtitle,
  faqs
}: FAQSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-gray-100 rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 