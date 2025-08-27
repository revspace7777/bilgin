// /components/templates/LocalMoversPageTemplate.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone, Mail, MapPin, Star, Shield, Clock, CheckCircle, Users, ArrowRight, Quote, Award, Calendar, Package, Home, Building, Zap, FileText, Wrench, ThumbsUp, Lock, Boxes, Heart, DollarSign, MapPinIcon
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"
import { LocalPageData } from "@/lib/types"

// Helper to map string identifiers to Lucide icon components
const iconMap: { [key: string]: React.ElementType } = {
  Phone, Mail, MapPin, Star, Shield, Clock, CheckCircle, Users, ArrowRight, Quote, Award, Calendar, Package, Home, Building, Zap, FileText, Wrench, ThumbsUp, Lock, Boxes, Heart, DollarSign, MapPinIcon
};

interface Props {
  data: LocalPageData;
}

export default function LocalMoversPageTemplate({ data }: Props) {
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingQuoteButton />
      <QuoteFormSlideout />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo-main.png" alt="T&E Movers" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">T&E Movers</h1>
              <p className="text-sm text-gray-600">{data.header.subtitle}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <span className="font-semibold">(904) 997-1884</span>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 quote-trigger">Get Free Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium animate-pulse" dangerouslySetInnerHTML={{ __html: data.hero.badgeText }} />
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: data.hero.headline }} />
                <p className="text-xl text-blue-100 leading-relaxed">{data.hero.subheadline}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg quote-trigger">
                  Get Your Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent">
                  <Phone className="mr-2 h-5 w-5" /> Call (904) 997-1884
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">{data.hero.stat1.value}</div>
                  <div className="text-sm text-blue-100">{data.hero.stat1.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">{data.hero.stat2.value}</div>
                  <div className="text-sm text-blue-100">{data.hero.stat2.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">{data.hero.stat3.value}</div>
                  <div className="text-sm text-blue-100">{data.hero.stat3.label}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image src={data.hero.image} alt={`T&E Movers ${data.cityDetails.cityName} Fleet`} width={600} height={400} className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-6 w-6 text-blue-500" />
                  <div>
                    <div className="font-semibold">{data.hero.imageBannerText}</div>
                    <div className="text-sm text-gray-600">Serving all local areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
                  {(() => {
                      const iconColors = ["text-yellow-500", "text-green-500", "text-yellow-500", "text-blue-500", "text-purple-500", "text-orange-500"];
                      return data.trustIndicators.map((indicator, index) => {
                          const Icon = iconMap[indicator.icon];
                          return (
                              <div key={index} className="text-center">
                                  {Icon && <Icon className={`h-12 w-12 mx-auto mb-2 ${iconColors[index]}`} />}
                                  <p className="text-sm font-medium text-gray-600">{indicator.label}</p>
                              </div>
                          );
                      });
                  })()}
              </div>
          </div>
      </section>

      {/* Pricing Hero */}
      {data.pricing.isEnabled && (
        <section className="py-16 bg-gradient-to-r from-red-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Local Moves Starting at Just <span className="text-red-500">{data.pricing.heroPrice}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">{data.pricing.heroSubtext}</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-red-500 to-blue-600 text-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-2">{data.pricing.heroPrice}</div>
                      <div className="text-blue-100 text-lg">Starting Price</div>
                      <div className="text-sm text-blue-200 mt-2">Perfect for 1-2 bedroom moves</div>
                    </div>
                    <div className="space-y-3">
                      {data.pricing.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-300" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 w-full quote-trigger">
                        Get Exact Quote <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <p className="text-xs text-blue-200 mt-2">Free estimates • No obligations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{data.whyChooseUs.headline}</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">{data.whyChooseUs.subheadline}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {data.whyChooseUs.cards.map((card, index) => {
                    const Icon = iconMap[card.icon];
                    return (
                        <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    {Icon && <Icon className="h-8 w-8 text-blue-500" />}
                                </div>
                                <CardTitle className="text-xl text-center">{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-600">{card.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">{data.whyChooseUs.promise.headline}</h3>
                        <div className="space-y-4">
                            {data.whyChooseUs.promise.points.map((point, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{point.title}</h4>
                                        <p className="text-gray-600">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={data.whyChooseUs.promise.image} alt={`T&E Movers ${data.cityDetails.cityName} Team`} width={500} height={300} className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Service Areas */}
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{data.hyperlocalSection.headline}</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">{data.hyperlocalSection.subheadline}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {data.hyperlocalSection.areaList.map((area) => (
                    <Card key={area} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
                        <div className="flex items-center justify-center space-x-2">
                            <MapPinIcon className="h-5 w-5 text-red-500" />
                            <span className="font-semibold text-gray-900">{area}</span>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="text-center">
                <p className="text-lg text-gray-600 mb-6">Don't see your area listed? We serve the entire Northeast Florida region!</p>
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white quote-trigger">
                    {data.hyperlocalSection.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>
    </section>

    {/* Comprehensive Services */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{data.services.headline}</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">{data.services.subheadline}</p>
            </div>
            <Tabs defaultValue={data.services.tabs[0].value} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
                    {data.services.tabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value} className="text-sm">{tab.triggerTitle}</TabsTrigger>
                    ))}
                </TabsList>
                {data.services.tabs.map(tab => (
                    <TabsContent key={tab.value} value={tab.value} className="space-y-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tab.cards.map((card, index) => {
                                const Icon = iconMap[card.icon];
                                return (
                                <Card key={index} className="border-0 shadow-lg">
                                    <CardHeader>
                                        {Icon && <Icon className="h-12 w-12 text-blue-500 mb-4" />}
                                        <CardTitle>{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4">{card.description}</p>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {card.details.map((detail, i) => (
                                                <li key={i}>• {detail}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                                );
                            })}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    </section>

    {/* Customer Success Stories */}
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{data.testimonials.headline}</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">{data.testimonials.subheadline}</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {data.testimonials.reviews.map((review, index) => (
                    <Card key={index} className="border-0 shadow-xl">
                        <CardContent className="p-8">
                            <div className="flex items-center mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">{review.rating}.0 • {review.date}</span>
                            </div>
                            <Quote className="h-8 w-8 text-gray-300 mb-4" />
                            <p className="text-gray-700 mb-6 leading-relaxed">"{review.testimonialText}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                    {review.initials}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{review.customerName}</div>
                                    <div className="text-sm text-gray-600">{review.moveRoute}</div>
                                    <div className="text-xs text-gray-500">{review.moveType}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                    {data.testimonials.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    </section>

    {/* Comprehensive FAQ */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{data.faq.headline}</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">{data.faq.subheadline}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                {data.faq.categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                        <Accordion type="single" collapsible className="space-y-4">
                            {category.items.map((item, i) => (
                                <AccordionItem key={i} value={`item-${index}-${i}`} className="bg-gray-50 rounded-lg shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 text-left font-semibold">{item.question}</AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 text-gray-600">{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* Moving Tips Section */}
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{data.movingTips.headline}</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">{data.movingTips.subheadline}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {data.movingTips.tips.map((tip, index) => {
                    const Icon = iconMap[tip.icon];
                    return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                    {tip.number}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="text-blue-500">{Icon && <Icon className="h-8 w-8" />}</div>
                                        <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    );
                })}
            </div>
            <div className="text-center mt-12">
                <Card className="border-0 shadow-xl bg-gradient-to-r from-red-500 to-blue-600 text-white max-w-2xl mx-auto">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-4">{data.movingTips.cta.headline}</h3>
                        <p className="text-blue-100 mb-6">{data.movingTips.cta.subheadline}</p>
                        <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 quote-trigger">
                            {data.movingTips.cta.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">{data.finalCta.headline}</h2>
                <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">{data.finalCta.subheadline}</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 px-12 py-6 text-xl font-semibold quote-trigger">
                        {data.finalCta.buttonText} <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                    <div className="flex items-center space-x-3 text-xl">
                        <Phone className="h-6 w-6" />
                        <span>Or call <strong>(904) 997-1884</strong></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {data.finalCta.features.map((feature, index) => {
                        const Icon = iconMap[feature.icon];
                        return (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                               {Icon && <Icon className="h-8 w-8 text-green-300" />}
                            </div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-blue-100 text-sm">{feature.description}</p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div>
                    <div className="flex items-center space-x-3 mb-6">
                        <Image src="/images/logo-main.png" alt="T&E Movers" width={50} height={50} className="rounded-full" />
                        <div>
                            <h3 className="text-2xl font-bold">T&E Movers</h3>
                            <p className="text-sm text-gray-400">{data.header.subtitle}</p>
                        </div>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Family-owned and operated since 1998, we've been {data.cityDetails.cityName}'s trusted local moving company for over 25 years. We're not just your movers - we're your neighbors.
                    </p>
                    <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">f</span>
                        </div>
                        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">t</span>
                        </div>
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">y</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6">Local Moving Services</h4>
                    <ul className="space-y-3 text-gray-400">
                        {data.services.tabs.flatMap(tab => tab.cards.map(card => card.title)).slice(0, 8).map((title, index) => (
                             <li key={index} className="hover:text-white transition-colors">{title}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-6">{data.cityDetails.cityName} Service Areas</h4>
                     <ul className="space-y-3 text-gray-400">
                        {data.cityDetails.neighborhoods.map((area, index) => (
                             <li key={index} className="hover:text-white transition-colors">{area}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
                    <div className="space-y-4 text-gray-400">
                        <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-red-500" />
                            <div>
                                <div className="font-semibold text-white">(904) 997-1884</div>
                                <div className="text-sm">Free quotes & same-day service</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-blue-500" />
                            <div>
                                <div className="font-semibold text-white">t-emoving@hotmail.com</div>
                                <div className="text-sm">Email us anytime</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="h-5 w-5 text-green-500" />
                            <div>
                                <div className="font-semibold text-white">6556 Beach Boulevard</div>
                                <div className="text-sm">{data.cityDetails.cityName}, FL 32216</div>
                            </div>
                        </div>
                         <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-purple-500" />
                            <div>
                                <div className="font-semibold text-white">Mon-Sat: 8AM-5PM</div>
                                <div className="text-sm">Emergency service available 24/7</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-gray-400">
                        <p>&copy; {new Date().getFullYear()} T&E Movers. All rights reserved.</p>
                        <p className="text-sm mt-2">{data.footer.licenseText}</p>
                    </div>
                    <div className="text-right">
                        <div className="flex justify-end space-x-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}