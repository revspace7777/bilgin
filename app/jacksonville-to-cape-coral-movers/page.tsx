import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Users,
  ArrowRight,
  Quote,
  Award,
  Calendar,
  Package,
  Home,
  Building,
  Plane,
  Car,
  TreePine,
  Zap,
  Target,
  FileText,
  Wrench,
  AlertTriangle,
  ThumbsUp,
  Globe,
  Lock,
  Clipboard,
  Calculator,
  Timer,
  Boxes,
  PiggyBank,
  Lightbulb,
  Heart,
  Route,
  Weight,
  Settings,
  CalendarDays,
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function JacksonvilleToCapeCoralMovers() {
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
              <p className="text-sm text-gray-600">Your Jacksonville to Cape Coral Moving Experts</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-red-500" />
              <a href="tel:9049971884" className="font-semibold mobile-lander-click-to-call">(904) 997-1884</a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 quote-trigger">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image with Filter for Dark Footer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/highwaybanner.jpg)',
            filter: 'grayscale(100%) brightness(40%) contrast(120%) saturate(0%)',
            opacity: '0.85'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" style={{backgroundColor: '#16212a', opacity: '0.5'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium opacity-0 animate-fade-in">
                  🏆 #1 Rated Jacksonville to Cape Coral Moving Company
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Moving from Jacksonville to Cape Coral? <span className="text-red-400">T&E Movers</span> Gets You There With Ease.
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Your seamless move from <strong>Jacksonville to Cape Coral</strong> starts here. We have decades of experience moving families and businesses to <strong>Cape Coral</strong> and Southwest Florida...
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
                  <div className="text-3xl font-bold text-red-400">10K+</div>
                  <div className="text-sm text-blue-100">Successful Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">99.8%</div>
                  <div className="text-sm text-blue-100">Satisfaction Rate</div>
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
                    <div className="font-semibold">Fully Licensed & Insured</div>
                    <div className="text-sm text-gray-600">$1M+ Coverage Protection</div>
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
              <Globe className="h-12 w-12 mx-auto mb-2 text-purple-500" />
              <p className="text-sm font-medium">Nationwide Service</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-2 text-orange-500" />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why 10,000+ Families Choose T&E Movers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're not just another moving company. We're your neighbors in Jacksonville, and we know the route to <strong>Cape Coral</strong> like the back of our hand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-xl text-center">Family-Owned Since 1998</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Three generations of the same family have built T&E Movers on trust, integrity, and genuine care for
                  every customer. When you choose us, you're choosing family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center">Zero Damage Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We're so confident in our packing and handling that we guarantee zero damage to your belongings. If
                  something breaks, we fix it or replace it - no questions asked.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-center">Same-Day Emergency Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Life happens. Job transfers, family emergencies, sudden opportunities. We offer same-day emergency
                  moving services because we understand that sometimes you can't wait.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The T&E Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Price Lock Guarantee</h4>
                      <p className="text-gray-600">Your quote is your final price. No surprise fees, ever.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">On-Time Delivery Promise</h4>
                      <p className="text-gray-600">We arrive when we say we will, or your move is 50% off.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">White Glove Treatment</h4>
                      <p className="text-gray-600">
                        Every item treated like a family heirloom, every customer like family.
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
              Complete Moving Solutions Under One Roof
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From a single box to an entire estate, from across town to across the country - we handle it all with the
              same level of care and professionalism.
            </p>
          </div>

          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="w-full mb-12 flex overflow-x-auto md:grid md:grid-cols-4">
              <TabsTrigger value="residential" className="text-sm">
                Residential
              </TabsTrigger>
              <TabsTrigger value="commercial" className="text-sm">
                Commercial
              </TabsTrigger>
              <TabsTrigger value="specialty" className="text-sm">
                Specialty
              </TabsTrigger>
              <TabsTrigger value="storage" className="text-sm">
                Storage
              </TabsTrigger>
            </TabsList>

            <TabsContent value="residential" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Home className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Jacksonville to Cape Coral Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Direct service from anywhere in the Jacksonville area to your new home in <strong>Cape Coral</strong>. No transfers, no delays.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Door-to-door service</li>
                      <li>• Real-time tracking</li>
                      <li>• Guaranteed delivery dates</li>
                      <li>• Full-service packing available</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Package className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Packing Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Professional packing with premium materials. We pack it like it's our own.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Custom crating for valuables</li>
                      <li>• Fragile item specialists</li>
                      <li>• Unpacking services</li>
                      <li>• Eco-friendly materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Calendar className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Flexible Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Move on your timeline with options from same-day to scheduled months ahead.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Same-day emergency moves</li>
                      <li>• Weekend availability</li>
                      <li>• Holiday service</li>
                      <li>• Flexible delivery windows</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Building className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>Office Relocations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Minimize downtime with our efficient office moving services.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• After-hours moving</li>
                      <li>• IT equipment handling</li>
                      <li>• Furniture disassembly/assembly</li>
                      <li>• Minimal business disruption</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Wrench className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle>Industrial Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Heavy machinery and industrial equipment moving specialists.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Crane services</li>
                      <li>• Rigging specialists</li>
                      <li>• Custom equipment handling</li>
                      <li>• Safety certified team</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Records Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Secure handling of sensitive documents and records.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Chain of custody protocols</li>
                      <li>• Secure transportation</li>
                      <li>• Document scanning services</li>
                      <li>• Compliance certified</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialty" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Car className="h-12 w-12 text-red-500 mb-4" />
                    <CardTitle>Vehicle Transport</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Cars, motorcycles, boats, and RVs transported safely nationwide.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Enclosed transport available</li>
                      <li>• Classic car specialists</li>
                      <li>• Motorcycle transport</li>
                      <li>• Full insurance coverage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <TreePine className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Piano & Fine Art</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Specialized handling for pianos, artwork, and precious collectibles.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Climate-controlled transport</li>
                      <li>• Custom crating</li>
                      <li>• Fine art insurance</li>
                      <li>• White glove service</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Plane className="h-12 w-12 text-blue-500 mb-4" />
                    <CardTitle>International Moving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Global relocations with customs clearance and international partnerships.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Customs documentation</li>
                      <li>• International partnerships</li>
                      <li>• Ocean and air freight</li>
                      <li>• Destination services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Lock className="h-12 w-12 text-purple-500 mb-4" />
                    <CardTitle>Secure Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Climate-controlled, 24/7 monitored storage facilities.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Climate controlled</li>
                      <li>• 24/7 security monitoring</li>
                      <li>• Individual unit access</li>
                      <li>• Inventory management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Boxes className="h-12 w-12 text-orange-500 mb-4" />
                    <CardTitle>Warehouse Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Full-service warehousing with inventory management and distribution.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Inventory tracking</li>
                      <li>• Pick and pack services</li>
                      <li>• Distribution services</li>
                      <li>• Flexible terms</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Timer className="h-12 w-12 text-green-500 mb-4" />
                    <CardTitle>Temporary Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Short-term storage solutions for timing mismatches in your move.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Flexible duration</li>
                      <li>• Easy access</li>
                      <li>• Competitive rates</li>
                      <li>• Seamless integration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Transparent Pricing, No Surprises</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We believe in honest, upfront pricing. Here's exactly how we calculate your moving costs and what factors
              influence your final price.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Calculator className="h-6 w-6 text-blue-500" />
                    <span>How We Calculate Your Quote</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        <Route className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Distance & Route</h4>
                        <p className="text-gray-600 text-sm">
                          Mileage between pickup and delivery locations, including any special routing requirements.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        <Weight className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Weight & Volume</h4>
                        <p className="text-gray-600 text-sm">
                          Total weight of your belongings and space required in our truck.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        <Settings className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Special Services</h4>
                        <p className="text-gray-600 text-sm">
                          Additional services like packing, storage, or specialty item handling.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        <CalendarDays className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Timing & Season</h4>
                        <p className="text-gray-600 text-sm">
                          Peak season rates and preferred dates may affect pricing.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Starting at $1,000</CardTitle>
                  <p className="text-blue-100">Get your exact quote in 60 seconds!</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <p className="text-lg text-blue-100 mb-4">
                      *Prices vary based on specific requirements. Contact us for a personalized quote.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg quote-trigger">
                Get My Exact Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                What Makes Our Process Different
              </h3>

              <div className="space-y-8">
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Virtual Survey</h4>
                        <p className="text-sm text-gray-600">
                          In-home or video assessment for accuracy
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Detailed Planning</h4>
                        <p className="text-sm text-gray-600">
                          Once you approve the quote, we begin detailed planning and preparation for your move.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Seamless Move</h4>
                        <p className="text-sm text-gray-600">
                          Professional execution with real-time updates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50" data-reviews-section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Real Stories from Real Customers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here are detailed stories from families who trusted us with their most
              important possessions and biggest life transitions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 2 weeks ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Moving our family from Jacksonville to Cape Coral was a big decision, but T&E Movers made it feel easy. The crew was professional and took great care of our belongings, especially our kids' outdoor play equipment. It was a relief to have everything arrive safely and on time."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    TF
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">The Thompson Family</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → Cape Coral, FL</div>
                    <div className="text-xs text-gray-500">Family Relocation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 1 month ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "We retired and moved from Jacksonville to our dream home in Cape Coral. The T&E team was outstanding. They were so patient and careful with our fragile items and antiques. Their respectful and gentle approach made a potentially stressful day completely worry-free. A truly wonderful service."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    LM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Linda and George Miller</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → Cape Coral, FL</div>
                    <div className="text-xs text-gray-500">Retirement Move</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0 • 3 weeks ago</span>
                </div>
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "I had to relocate for a new construction management job in Cape Coral. The T&E Movers team was incredibly efficient, which was crucial for my tight schedule. They handled all of my tools and equipment with care and precision. Their professionalism made the entire process seamless."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    KG
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kevin Garcia</div>
                    <div className="text-sm text-gray-600">Jacksonville, FL → Cape Coral, FL</div>
                    <div className="text-xs text-gray-500">Job Relocation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="text-lg font-semibold text-gray-700">Become our next success story!</div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Every Question Answered</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We've been in business for 25 years and have heard every question imaginable. Here are the answers to
              everything you need to know about long-distance moving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Planning & Preparation */}
            <div className="bg-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Planning & Preparation</h3>
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="planning-1" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How far in advance should I book my long-distance move?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We recommend booking 6-8 weeks in advance for optimal scheduling and pricing. However, we
                      understand life doesn't always allow for perfect planning:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        • <strong>6-8 weeks ahead:</strong> Best rates and full availability
                      </li>
                      <li>
                        • <strong>4-6 weeks ahead:</strong> Good availability, standard rates
                      </li>
                      <li>
                        • <strong>2-4 weeks ahead:</strong> Limited availability, slight premium
                      </li>
                      <li>
                        • <strong>Emergency moves:</strong> We can often accommodate same-day requests for urgent
                        situations
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planning-2" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    What should I expect during the in-home estimate?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Our certified moving specialist will visit your home to provide an accurate, binding estimate. The
                      process typically takes 30-45 minutes and includes:
                    </p>
                    <ul className="space-y-2">
                      <li>• Show all items being moved (including garage, attic, basement)</li>
                      <li>• Discuss special handling needs</li>
                      <li>• Ask about insurance options</li>
                      <li>• Clarify what's included in the quote</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planning-3" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How do you handle fragile or valuable items?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We're specialists in handling your most precious belongings. Our process includes:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        • <strong>Custom crating:</strong> Built on-site for pianos, artwork, mirrors, and electronics
                      </li>
                      <li>
                        • <strong>Specialized packing:</strong> Museum-quality materials for antiques and collectibles
                      </li>
                      <li>
                        • <strong>Separate handling:</strong> High-value items travel separately when needed
                      </li>
                      <li>
                        • <strong>Extra insurance:</strong> Full-value protection options available
                      </li>
                      <li>
                        • <strong>Photo documentation:</strong> Before and after photos for valuable items
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="planning-4" className="bg-gray-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    Can I pack some items myself?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Absolutely! Many customers choose a hybrid approach to save money. Here's what you should know:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        • <strong>What you can pack:</strong> Books, clothes, linens, and non-fragile items
                      </li>
                      <li>
                        • <strong>What we should pack:</strong> Electronics, dishes, artwork, and valuables
                      </li>
                      <li>
                        • <strong>Our packing guarantee:</strong> Only applies to items we pack professionally
                      </li>
                      <li>
                        • <strong>Packing supplies:</strong> We provide boxes, tape, and materials at cost
                      </li>
                      <li>
                        • <strong>Labeling:</strong> Use our room-by-room labeling system
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Moving Day & Logistics */}
            <div className="bg-blue-100 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Moving Day & Logistics</h3>
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="moving-1" className="bg-blue-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    What happens if there are delays?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      We understand delays can be incredibly stressful. Here's our commitment to you:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        • <strong>Real-time updates:</strong> You'll know about any delays immediately
                      </li>
                      <li>
                        • <strong>Compensation:</strong> We provide compensation for delays we cause
                      </li>
                      <li>
                        • <strong>Alternative solutions:</strong> Temporary storage, hotel assistance when needed
                      </li>
                      <li>
                        • <strong>24/7 communication:</strong> Dedicated coordinator throughout your move
                      </li>
                      <li>
                        • <strong>Guaranteed delivery:</strong> We provide delivery windows, not just dates
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="moving-2" className="bg-blue-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    How do you protect my home during the move?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Your home's protection is as important as your belongings. We use:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>Floor protection:</strong> Runners and mats on all walkways</li>
                      <li>• <strong>Wall protection:</strong> Corner guards and padding in tight spaces</li>
                      <li>• <strong>Door frame protection:</strong> Foam padding on all door frames</li>
                      <li>• <strong>Stairway protection:</strong> Banister wrapping and non-slip mats</li>
                      <li>• <strong>Clean-up:</strong> We clean up after ourselves completely</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="moving-3" className="bg-blue-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    Can I track my belongings during transport?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      Yes! We provide multiple ways to stay connected with your move:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>GPS tracking:</strong> Real-time truck location via our mobile app</li>
                      <li>• <strong>Photo updates:</strong> Loading and unloading documentation</li>
                      <li>• <strong>Regular check-ins:</strong> Your coordinator contacts you with updates</li>
                      <li>• <strong>Direct driver contact:</strong> Ability to reach the driver when needed</li>
                      <li>
                        • <strong>Estimated arrival:</strong> Updated delivery windows based on current location
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="moving-4" className="bg-blue-200 rounded-lg shadow-sm my-4">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    What if something gets damaged?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    <p className="mb-4">
                      While damage is rare, we're prepared with a comprehensive claims process:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>Immediate documentation:</strong> Note damages on delivery receipt</li>
                      <li>• <strong>Fast claims process:</strong> Submit claims online within 9 months</li>
                      <li>• <strong>Multiple protection levels:</strong> Basic coverage to full replacement value</li>
                      <li>• <strong>Quick resolution:</strong> Most claims settled within 30 days</li>
                      <li>• <strong>Direct repair:</strong> We work with preferred repair services nationwide</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Checklist Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Your Complete Moving Checklist</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Moving doesn't have to be overwhelming. Our comprehensive checklist breaks down everything you need to do,
              when you need to do it. Download it, print it, check it off!
            </p>
          </div>

          <Tabs defaultValue="8weeks" className="w-full">
            <TabsList className="w-full mb-12 flex overflow-x-auto md:grid md:grid-cols-5">
              <TabsTrigger value="8weeks" className="text-sm">
                8 Weeks Before
              </TabsTrigger>
              <TabsTrigger value="4weeks" className="text-sm">
                4 Weeks Before
              </TabsTrigger>
              <TabsTrigger value="2weeks" className="text-sm">
                2 Weeks Before
              </TabsTrigger>
              <TabsTrigger value="1week" className="text-sm">
                1 Week Before
              </TabsTrigger>
              <TabsTrigger value="movingday" className="text-sm">
                Moving Day
              </TabsTrigger>
            </TabsList>

            <TabsContent value="8weeks" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Clipboard className="h-6 w-6 text-blue-500" />
                      <span>Research & Planning</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Research moving companies and get quotes</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Create a moving binder/folder</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Set your moving budget</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Check moving insurance options</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Research your new area</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <PiggyBank className="h-6 w-6 text-green-500" />
                      <span>Budget & Bookings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Book your moving company</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Reserve time off work for moving day</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Book travel arrangements if needed</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Arrange temporary accommodations if needed</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Start decluttering and donating</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="4weeks" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-purple-500" />
                      <span>Paperwork & Services</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Submit change of address forms</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Update voter registration</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Register children for new schools</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Transfer prescriptions</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Find new healthcare providers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-yellow-500" />
                      <span>Utilities & Services</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Schedule utility disconnections</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Arrange new utility connections</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Transfer cable/internet service</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Update insurance policies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Schedule cable/internet installation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="2weeks" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Boxes className="h-6 w-6 text-orange-500" />
                      <span>Packing Preparation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Order packing supplies</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Start packing non-essential items</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Label boxes clearly by room</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Create inventory lists</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Pack a "first day" box</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-blue-500" />
                      <span>Final Arrangements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Confirm moving day details</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Arrange childcare/pet care for moving day</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Plan travel to new home</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Book temporary accommodation if needed</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Prepare cash for moving day tips</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="1week" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-500" />
                      <span>Last-Minute Tasks</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Confirm all arrangements</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Pack a survival kit</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Use up perishable food</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Clean out refrigerator</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Defrost freezer if needed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Lightbulb className="h-6 w-6 text-green-500" />
                      <span>Final Preparations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Pack essential items separately</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Charge all electronic devices</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Backup computer files</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Get good night's sleep</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Prepare snacks and drinks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="movingday" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Truck className="h-6 w-6 text-red-500" />
                      <span>Moving Day Essentials</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Be ready when movers arrive</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Do final walkthrough</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Keep important documents with you</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Take photos of valuable items</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Stay hydrated and take breaks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <ThumbsUp className="h-6 w-6 text-blue-500" />
                      <span>At Your New Home</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Check utilities are working</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Direct movers on furniture placement</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Check inventory against delivery</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Tip your moving crew</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">Celebrate your successful move!</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 text-white relative overflow-hidden">
        {/* Background Image with Filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/alltrucks.png)',
            filter: 'grayscale(100%) brightness(40%) contrast(120%) saturate(0%)',
            opacity: '0.85'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" style={{backgroundColor: '#16212a', opacity: '0.5'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Make Your Move?</h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join over 10,000 satisfied customers who chose T&E Movers for their long-distance relocation. Your new
              life is waiting - let's get you there safely, efficiently, and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-white text-red-500 hover:bg-gray-100 px-12 py-6 text-xl font-semibold quote-trigger"
              >
                Get Your Free Quote in 60 Seconds
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-3 text-xl">
                <Phone className="h-6 w-6" />
                <span>
                  Or call <a href="tel:9049971884" className="mobile-lander-click-to-call"><strong>(904) 997-1884</strong></a>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-blue-100 text-sm">Fully licensed and insured for your complete protection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <h3 className="font-semibold mb-2">Price Guarantee</h3>
                <p className="text-blue-100 text-sm">No hidden fees, your quote is your final price</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="font-semibold mb-2">5-Star Service</h3>
                <p className="text-blue-100 text-sm">99.8% customer satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="font-semibold mb-2">On-Time Promise</h3>
                <p className="text-blue-100 text-sm">We arrive when promised or your move is 50% off</p>
              </div>
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
                  <p className="text-sm text-gray-400">Your Moving Experts Since 1998</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Three generations of the same family have built T&E Movers on trust, integrity, and genuine care for
                every customer. We're not just your movers - we're your neighbors.
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
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Long Distance Moving</li>
                <li className="hover:text-white transition-colors">Residential Moving</li>
                <li className="hover:text-white transition-colors">Commercial Moving</li>
                <li className="hover:text-white transition-colors">Packing Services</li>
                <li className="hover:text-white transition-colors">Storage Solutions</li>
                <li className="hover:text-white transition-colors">Specialty Moving</li>
                <li className="hover:text-white transition-colors">Emergency Moving</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Jacksonville, FL</li>
                <li className="hover:text-white transition-colors">Tampa, FL</li>
                <li className="hover:text-white transition-colors">Orlando, FL</li>
                <li className="hover:text-white transition-colors">Miami, FL</li>
                <li className="hover:text-white transition-colors">Jacksonville to Cape Coral Moves</li>
                <li className="hover:text-white transition-colors">State-to-State Moves</li>
                <li className="hover:text-white transition-colors">Cross-Country Moves</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="font-semibold text-white">
                      <a href="tel:9049971884" className="mobile-lander-click-to-call text-white">(904) 997-1884</a>
                    </div>
                    <div className="text-sm">24/7 Customer Service</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-white">info@tandemovers.com</div>
                    <div className="text-sm">Email us anytime</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-semibold text-white">Jacksonville, FL</div>
                    <div className="text-sm">Serving nationwide</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-white">Mon-Sun: 6AM-10PM</div>
                    <div className="text-sm">Emergency service 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-400">
                <p>&copy; 2025 T&E Movers. All rights reserved.</p>
                <p className="text-sm mt-2">
                  Licensed and Insured Moving Company | DOT License #123456 | MC License #789012
                </p>
              </div>
              <div className="text-right">
                <div className="flex justify-end space-x-6 text-sm text-gray-400">
                  <a href="/sitemap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                  <a href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Hidden form for Netlify detection */}
      <form name="quote-request" method="POST" data-netlify="true" style={{ display: 'none' }}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="typeOfMove" />
        <input type="text" name="movingFromStreet" />
        <input type="text" name="movingFromCity" />
        <input type="text" name="movingFromState" />
        <input type="text" name="movingFromZip" />
        <input type="text" name="movingFromBedrooms" />
        <input type="text" name="movingFromFloor" />
        <input type="text" name="movingToStreet" />
        <input type="text" name="movingToCity" />
        <input type="text" name="movingToState" />
        <input type="text" name="movingToZip" />
        <input type="text" name="movingToBedrooms" />
        <input type="text" name="movingToFloor" />
        <textarea name="description"></textarea>
        
        {/* Custom subject line field */}
        <input type="text" name="subject" />
        
        {/* Add all tracking fields */}
        <input type="text" name="campaignid" />
        <input type="text" name="adgroupid" />
        <input type="text" name="keyword" />
        <input type="text" name="matchtype" />
        <input type="text" name="targetid" />
        <input type="text" name="creative" />
        <input type="text" name="feeditemid" />
        <input type="text" name="device" />
        <input type="text" name="network" />
        <input type="text" name="loc_physical_ms" />
        <input type="text" name="loc_interest_ms" />
        <input type="text" name="gclid" />
        <input type="text" name="utm_source" />
        <input type="text" name="utm_medium" />
        <input type="text" name="utm_campaign" />
        <input type="text" name="utm_adgroup" />
        <input type="text" name="utm_term" />
        <input type="text" name="utm_content" />
        <input type="text" name="extensionid" />
        <input type="text" name="ip_address" />
        <input type="text" name="page_url" />
        <input type="text" name="form_url" />
        <input type="text" name="referrer" />
        <input type="text" name="user_agent" />
        <input type="text" name="timestamp" />
        <input type="text" name="date" />
        <input type="text" name="time" />
      </form>
    </div>
  )
}
