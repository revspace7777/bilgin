import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Step {
  number: string
  title: string
  description: string
}

interface TimelineSectionProps {
  title: string
  subtitle?: string
  steps: Step[]
}

export function TimelineSection({
  title,
  subtitle,
  steps
}: TimelineSectionProps) {
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

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-blue-500 rounded-full"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {step.number}
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 