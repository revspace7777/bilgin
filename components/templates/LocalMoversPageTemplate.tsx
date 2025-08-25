// /components/templates/LocalMoversPageTemplate.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin, Star, Shield, Clock, CheckCircle, Users, ArrowRight, Quote, Award, Calendar, Package, Home, Building, Zap, FileText, Wrench, ThumbsUp, Lock, Boxes, Heart, DollarSign, MapPinIcon } from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"
import { LocalPageData } from "@/lib/types"

// A helper to map string identifiers to Lucide icon components
const iconMap: { [key: string]: React.ElementType } = {
  Home, Building, Package, Boxes, Users, ThumbsUp, Shield,
};

interface Props {
  data: LocalPageData;
}

export default function LocalMoversPageTemplate({ data }: Props) {
  const openQuoteForm = () => {
    window.dispatchEvent(new CustomEvent("openQuoteForm"));
  };
  
  return (
    <div className="min-h-screen bg-white relative">
      <FloatingQuoteButton />
      <QuoteFormSlideout />

      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-4">
              <Image src="/images/logo-main.png" alt="T&E Movers Logo" width={50} height={50} className="rounded-md" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">T&E Movers</h1>
                <p className="text-sm text-gray-500">{data.header.subtitle}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:904-999-9999" className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                <Phone className="h-4 w-4" />
                <span>(904) 999-9999</span>
              </a>
              <Button onClick={openQuoteForm} className="bg-red-500 hover:bg-red-600 text-white quote-trigger">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative bg-gray-800 text-white py-20 md:py-32">
          <div className="absolute inset-0">
            <Image src="/images/highwaybanner.jpg" alt="Moving truck on a highway" layout="fill" objectFit="cover" className="opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">{data.hero.badgeText}</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">{data.hero.headline}</h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">{data.hero.subheadline}</p>
            <Button onClick={openQuoteForm} size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-6 quote-trigger">
              Get My Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
              <div className="bg-white rounded-lg shadow-xl p-4 flex items-center justify-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2 text-red-500" />
                <span>{data.hero.imageBannerText}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-10 w-10 text-red-500 mb-3" />
                <div className="text-3xl font-bold text-gray-800">{data.hero.stat1.value}</div>
                <div className="text-gray-500">{data.hero.stat1.label}</div>
              </div>
              <div className="flex flex-col items-center">
                <Boxes className="h-10 w-10 text-red-500 mb-3" />
                <div className="text-3xl font-bold text-gray-800">{data.hero.stat2.value}</div>
                <div className="text-gray-500">{data.hero.stat2.label}</div>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="h-10 w-10 text-red-500 mb-3" />
                <div className="text-3xl font-bold text-gray-800">{data.hero.stat3.value}</div>
                <div className="text-gray-500">{data.hero.stat3.label}</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-gray-500">
            <div className="font-semibold">Licensed & Insured</div>
            <div className="font-semibold">BBB A+ Rated</div>
            <div className="font-semibold">5-Star Reviews</div>
            <div className="font-semibold">Locally Owned & Operated</div>
          </div>
        </section>

        {data.pricing.isEnabled && data.pricing.price && data.pricing.details && (
          <section id="pricing" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Transparent & Affordable {data.cityDetails.cityName} Moving Rates</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">No hidden fees, no surprises. Just honest, upfront pricing for your move in the {data.cityDetails.cityName} area.</p>
              <div className="max-w-md mx-auto">
                <Card className="shadow-2xl border-red-500 border-2">
                  <CardHeader><CardTitle className="text-2xl">Local Moving Special</CardTitle></CardHeader>
                  <CardContent>
                    <div className="text-6xl font-bold text-red-500 mb-2">{data.pricing.price}</div>
                    <p className="text-gray-600 mb-6">{data.pricing.details}</p>
                    <Button onClick={openQuoteForm} size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white quote-trigger">Claim This Offer</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.whyChooseUs.headline}</h2>
                <p className="text-lg text-gray-600 mb-8">{data.whyChooseUs.subheadline}</p>
                <ul className="space-y-6">
                  {data.whyChooseUs.points.map((point) => {
                    const Icon = iconMap[point.icon] || CheckCircle;
                    return (
                      <li key={point.title} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 bg-red-100 rounded-full p-2"><Icon className="h-6 w-6 text-red-500" /></div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">{point.title}</h3>
                          <p className="text-gray-600">{point.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div><Image src="/images/alltrucks.png" alt="Fleet of moving trucks" width={600} height={400} className="rounded-lg shadow-xl" /></div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{data.hyperlocalSection.headline}</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">{data.hyperlocalSection.subheadline}</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {data.hyperlocalSection.areaList.map(area => <Badge key={area} variant="secondary" className="text-lg bg-white/10 text-white border-white/20">{area}</Badge>)}
            </div>
            <Button onClick={openQuoteForm} size="lg" className="bg-red-500 hover:bg-red-600 text-white quote-trigger">{data.hyperlocalSection.buttonText}</Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.services.headline}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">{data.services.subheadline}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.services.cards.map((card) => {
                const Icon = iconMap[card.icon] || Package;
                return (
                  <Card key={card.title} className="text-left shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="bg-red-100 rounded-lg p-3 w-max mb-4"><Icon className="h-8 w-8 text-red-500" /></div>
                      <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-gray-600">{card.description}</p></CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.testimonials.headline}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.testimonials.subheadline}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {data.testimonials.reviews.map((review) => (
                <Card key={review.customerName} className="bg-white shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold mr-4">{review.initials}</div>
                      <div>
                        <div className="font-semibold text-gray-800">{review.customerName}</div>
                        <div className="text-sm text-gray-500">{review.moveRoute}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{review.testimonialText}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button onClick={openQuoteForm} size="lg" className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white quote-trigger">{data.testimonials.buttonText}</Button>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{data.faq.headline}</h2>
            <Accordion type="single" collapsible className="w-full">
              {data.faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-red-600 text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">{data.prefooter.headline}</h2>
            {data.pricing.isEnabled && data.pricing.price ? (
              <>
                <Button onClick={openQuoteForm} size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 mb-4 quote-trigger">Get Your {data.pricing.price} Quote Now</Button>
                <p className="text-red-100">Starting at {data.pricing.price} for our 2-man, 3-hour moving special!</p>
              </>
            ) : (
              <>
                <Button onClick={openQuoteForm} size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 mb-4 quote-trigger">Get Your Free Quote Now</Button>
                <p className="text-red-100">Fast, free, and no-obligation quotes available.</p>
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">{data.cityDetails.cityName} Service Areas</h3>
              <ul className="space-y-2 text-sm">
                {data.cityDetails.neighborhoods.map((area) => (
                  <li key={area}><a href="#" className="hover:text-white transition-colors">{area}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Residential Moving</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Commercial Moving</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Packing Services</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Storage Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> (904) 999-9999</li>
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> contact@temovers.com</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> 123 Moving Lane, Jacksonville, FL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Business Hours</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Mon-Sat: 8AM - 5PM</li>
                <li className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} T&E Movers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
