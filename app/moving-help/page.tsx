import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Phone,
  Star,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
  Award,
  Globe,
  Heart,
  Target,
  Zap,
  Home,
  Package,
  Calendar,
  Building,
  Wrench,
  Boxes,
  MapPin,
  HelpCircle,
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function MovingHelpPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating Quote Button */}
      <FloatingQuoteButton />

      {/* Quote Form Slideout */}
      <QuoteFormSlideout />

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo-main.png" alt="T&E Movers" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">T&E Movers</h1>
              <p className="text-sm text-gray-600">Moving Help & Resources</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <a href="tel:9049971884" className="font-semibold mobile-lander-click-to-call">(904) 997-1884</a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600" id="header-quote-btn">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium opacity-0 animate-fade-in">
                  🏆 Expert Moving Advice & Resources
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Complete <span className="text-red-400">Moving Help</span> & Resources
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Moving doesn't have to be stressful. Get expert advice, helpful tips, and comprehensive resources to make your move smooth and successful. From packing guides to moving checklists, we've got you covered.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg quote-trigger">
                  Get Your Free Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="tel:9049971884" className="mobile-lander-click-to-call">Call (904) 997-1884</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">25+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">15K+</div>
                  <div className="text-sm text-blue-100">Moves Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">100%</div>
                  <div className="text-sm text-blue-100">Free Advice</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/truck-fleet.png"
                alt="T&E Movers Fleet"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold">Expert Advice</div>
                    <div className="text-sm text-gray-600">Free Resources</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b" data-accolades-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm font-medium">BBB A+ Rated</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-2 text-green-500" />
              <p className="text-sm font-medium">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm font-medium">5-Star Reviews</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-medium">Family Owned</p>
            </div>
            <div className="text-center">
              <HelpCircle className="h-12 w-12 mx-auto mb-2 text-purple-500" />
              <p className="text-sm font-medium">Expert Advice</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-2 text-orange-500" />
              <p className="text-sm font-medium">Always Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert Moving Help & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're not just a moving company - we're your moving partners. Get expert advice, helpful tips, and comprehensive resources to make your move successful and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <HelpCircle className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-xl text-center">Expert Advice</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Get professional advice from our experienced moving team. We've helped thousands of families move successfully and we're here to help you too.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Free Resources</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Access our comprehensive moving guides, checklists, and tips - all completely free. We want your move to be as smooth as possible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Have questions about your move? Our team is always available to provide guidance and support throughout your entire moving process.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The T&E Moving Help Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Expert Advice</h4>
                      <p className="text-gray-600">Get professional moving advice from our experienced team at no cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Resources</h4>
                      <p className="text-gray-600">Access our complete library of moving guides, checklists, and tips.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                      <p className="text-gray-600">
                        We're here to help before, during, and after your move with continuous support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/facility-aerial.png"
                  alt="T&E Movers Facility"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Moving Help & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From packing guides to moving checklists - we provide comprehensive help and resources for every aspect of your move.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Package className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Packing Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert packing tips and guides for every room in your home.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Room-by-room packing tips</li>
                  <li>• Fragile item protection</li>
                  <li>• Box labeling systems</li>
                  <li>• Packing timeline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Calendar className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle>Moving Checklists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive checklists to keep your move organized and on track.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pre-move checklist</li>
                  <li>• Moving day checklist</li>
                  <li>• Post-move checklist</li>
                  <li>• Timeline planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Home className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle>Moving Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional tips and tricks to make your move easier and more efficient.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Time-saving tips</li>
                  <li>• Cost-saving strategies</li>
                  <li>• Stress reduction</li>
                  <li>• Organization methods</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Wrench className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>DIY Moving Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete guide for those who want to handle their own move.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Equipment rental guide</li>
                  <li>• Safety considerations</li>
                  <li>• Cost comparison</li>
                  <li>• When to hire pros</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle>Insurance Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Understanding moving insurance and protecting your belongings.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Insurance types</li>
                  <li>• Coverage options</li>
                  <li>• Claim process</li>
                  <li>• Protection tips</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Boxes className="h-12 w-12 text-teal-500 mb-4" />
                <CardTitle>Storage Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Guide to storage options and solutions for your moving needs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Storage types</li>
                  <li>• Climate control</li>
                  <li>• Security features</li>
                  <li>• Cost considerations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50" data-reviews-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Stories from Real Customers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about our moving help and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The packing guides were a lifesaver! T&E's tips made our move so much more organized and stress-free."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah M.</div>
                    <div className="text-sm text-gray-600">Jacksonville Beach</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Their moving checklist kept us on track and nothing was forgotten. The expert advice was invaluable!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Robert K.</div>
                    <div className="text-sm text-gray-600">Orange Park</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The insurance guide helped us understand our options and the storage solutions guide was perfect for our needs."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    DL
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">David L.</div>
                    <div className="text-sm text-gray-600">Ponte Vedra Beach</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Every Question Answered</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We've compiled answers to the most common questions about moving help and resources. Can't find what you're
              looking for? Contact us directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Are your moving guides and resources free?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all our moving guides, checklists, and resources are completely free. We want to help make your move as smooth as possible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How far in advance should I start planning my move?
                </AccordionTrigger>
                <AccordionContent>
                  We recommend starting your move planning 6-8 weeks in advance for a stress-free experience. Our checklists will help you stay organized throughout the process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do you provide advice for DIY moves?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we provide comprehensive guides for DIY moves, including equipment rental advice, safety tips, and when it's best to hire professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What should I do with items I don't want to move?
                </AccordionTrigger>
                <AccordionContent>
                  We provide guidance on decluttering, selling items, donating to charity, and storage solutions for items you want to keep but don't need immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  How do I choose the right moving insurance?
                </AccordionTrigger>
                <AccordionContent>
                  Our insurance guide covers different types of coverage, what's typically included, additional options, and how to file claims if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Can I get personalized moving advice?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our team is always available to provide personalized advice for your specific moving situation. Just give us a call or request a consultation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Moving Help?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your free quote today and access our comprehensive moving help and resources. 
            Join thousands of satisfied customers who trusted T&E Movers for their moving needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg quote-trigger">
              Get Your Free Quote in 60 Seconds
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:9049971884" className="mobile-lander-click-to-call">Call (904) 997-1884</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">Expert Advice</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">5-Star Service</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm">BBB A+ Rated</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 