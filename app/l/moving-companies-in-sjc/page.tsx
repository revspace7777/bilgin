"use client"

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
  Zap,
  FileText,
  Wrench,
  ThumbsUp,
  Lock,
  Boxes,
  Heart,
  DollarSign,
  MapPinIcon,
} from "lucide-react"
import Image from "next/image"
import FloatingQuoteButton from "@/components/floating-quote-button"
import QuoteFormSlideout from "@/components/quote-form-slideout"

export default function SjcMovers() {
  const checkZipCode = () => {
    const startingZip = document.getElementById('startingZip')?.value;
    const destinationZip = document.getElementById('destinationZip')?.value;
    const resultDiv = document.getElementById('zipResult');
    const successDiv = document.getElementById('zipSuccess');
    const errorDiv = document.getElementById('zipError');
    
    // SJC 100-mile radius service area zip codes
    const sjcDMACodes = [29401, 29402, 29403, 29404, 29405, 29406, 29407, 29408, 29409, 29410, 29412, 29413, 29414, 29415, 29416, 29417, 29418, 29419, 29420, 29421, 29422, 29423, 29424, 29425, 29426, 29429, 29430, 29431, 29432, 29433, 29434, 29435, 29436, 29437, 29438, 29439, 29440, 29442, 29445, 29446, 29447, 29448, 29449, 29450, 29451, 29452, 29453, 29455, 29456, 29457, 29458, 29461, 29464, 29465, 29466, 29468, 29469, 29470, 29471, 29472, 29474, 29475, 29476, 29477, 29479, 29481, 29482, 29483, 29484, 29485, 29486, 29487, 29488, 29492, 29493, 30101, 30102, 30103, 30104, 30105, 30106, 30107, 30108, 30109, 30110, 30111, 30112, 30113, 30114, 30115, 30116, 30117, 30118, 30119, 30120, 30121, 30122, 30123, 30124, 30125, 30126, 30127, 30128, 30129, 30130, 30131, 30132, 30133, 30134, 30135, 30136, 30137, 30138, 30139, 30140, 30141, 30142, 30143, 30144, 30145, 30146, 30147, 30148, 30149, 30150, 30151, 30152, 30153, 30154, 30155, 30156, 30157, 30158, 30159, 30160, 30161, 30162, 30163, 30164, 30165, 30166, 30167, 30168, 30169, 30170, 30171, 30172, 30173, 30174, 30175, 30176, 30177, 30178, 30179, 30180, 30181, 30182, 30183, 30184, 30185, 30186, 30187, 30188, 30189, 30190, 30191, 30192, 30193, 30194, 30195, 30196, 30197, 30198, 30199, 32003, 32004, 32006, 32007, 32008, 32009, 32011, 32013, 32024, 32025, 32026, 32030, 32033, 32034, 32035, 32038, 32040, 32041, 32042, 32043, 32044, 32046, 32050, 32052, 32053, 32054, 32055, 32056, 32058, 32059, 32060, 32061, 32062, 32063, 32064, 32065, 32066, 32067, 32068, 32071, 32072, 32073, 32076, 32079, 32080, 32081, 32082, 32083, 32084, 32085, 32086, 32087, 32091, 32092, 32094, 32095, 32096, 32097, 32099, 32102, 32105, 32110, 32111, 32112, 32113, 32114, 32115, 32116, 32117, 32118, 32119, 32120, 32121, 32122, 32123, 32124, 32125, 32126, 32127, 32128, 32129, 32130, 32131, 32132, 32133, 32134, 32135, 32136, 32137, 32138, 32139, 32140, 32141, 32142, 32143, 32145, 32147, 32148, 32149, 32157, 32158, 32159, 32160, 32162, 32163, 32164, 32168, 32169, 32170, 32173, 32174, 32175, 32176, 32177, 32178, 32179, 32180, 32181, 32182, 32183, 32185, 32187, 32189, 32190, 32192, 32193, 32195, 32198, 32202, 32203, 32204, 32205, 32206, 32207, 32208, 32209, 32210, 32211, 32212, 32214, 32216, 32217, 32218, 32219, 32220, 32221, 32222, 32223, 32224, 32225, 32226, 32227, 32228, 32229, 32230, 32231, 32232, 32233, 32234, 32235, 32236, 32237, 32238, 32239, 32240, 32241, 32244, 32245, 32246, 32247, 32250, 32254, 32255, 32256, 32257, 32258, 32259, 32260, 32266, 32267, 32277];
    
    if (startingZip && destinationZip) {
      if (resultDiv) resultDiv.classList.remove('hidden');
      
      // Check if starting zip is in SJC DMA
      if (sjcDMACodes.includes(startingZip)) {
        if (successDiv) successDiv.classList.remove('hidden');
        if (errorDiv) errorDiv.classList.add('hidden');
      } else {
        if (successDiv) successDiv.classList.add('hidden');
        if (errorDiv) errorDiv.classList.remove('hidden');
      }
    } else {
      alert('Please enter both zip codes.');
    }
  };

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
            <Image src="/images/logo-main.png" alt="T&E Movers - SJC Movers" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">SJC Movers</h1>
              <p className="text-sm text-gray-600">SJC Movers</p>
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
                <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-medium animate-pulse">
                  🏆 #1 Rated SJC Moving Company
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  SJC's <span className="text-red-400">Premier Local Movers</span> Since 1998
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Your trusted neighbors for seamless local moves throughout SJC and surrounding areas. We've successfully completed over 15,000 local moves with a 99.8% customer satisfaction rate.
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
                  Call (904) 997-1884
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">25+</div>
                  <div className="text-sm text-blue-100">Years serving SJC</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">15K+</div>
                  <div className="text-sm text-blue-100">Local Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400">99.8%</div>
                  <div className="text-sm text-blue-100">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/facility-overview.png"
                alt="T&E Movers SJC Fleet - Professional Moving Trucks"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Serving All of SJC & Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From SJC to the surrounding communities, from St. Johns County to Clay County - we know every
              neighborhood and provide expert local moving services throughout Northeast Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card key="SJC Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">SJC Beach</span>
              </div>
            </Card>
            <Card key="Atlantic Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Atlantic Beach</span>
              </div>
            </Card>
            <Card key="Neptune Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Neptune Beach</span>
              </div>
            </Card>
            <Card key="Ponte Vedra Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Ponte Vedra Beach</span>
              </div>
            </Card>
            <Card key="St. Augustine" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">St. Augustine</span>
              </div>
            </Card>
            <Card key="Orange Park" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Orange Park</span>
              </div>
            </Card>
            <Card key="Fleming Island" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Fleming Island</span>
              </div>
            </Card>
            <Card key="Middleburg" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Middleburg</span>
              </div>
            </Card>
            <Card key="Green Cove Springs" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Green Cove Springs</span>
              </div>
            </Card>
            <Card key="Fernandina Beach" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Fernandina Beach</span>
              </div>
            </Card>
            <Card key="Amelia Island" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Amelia Island</span>
              </div>
            </Card>
            <Card key="Nocatee" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Nocatee</span>
              </div>
            </Card>
            <Card key="St. Johns County" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">St. Johns County</span>
              </div>
            </Card>
            <Card key="Mandarin" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Mandarin</span>
              </div>
            </Card>
            <Card key="Riverside" className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center p-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-gray-900">Riverside</span>
              </div>
            </Card>
          </div>

          {/* Zip Code Checker */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Check If We Serve Your Area</h3>
              <p className="text-gray-600 mb-6">
                Enter your starting and destination zip codes to see if we can help with your move.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Starting Zip Code</label>
                  <input 
                    type="text" 
                    id="startingZip" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 32250"
                    maxLength="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination Zip Code</label>
                  <input 
                    type="text" 
                    id="destinationZip" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                    placeholder="e.g., 32082"
                    maxLength="5"
                  />
                </div>
              </div>
              
              <Button 
                onClick={checkZipCode} 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg mb-4"
              >
                Check Service Area
              </Button>
              
              <div id="zipResult" className="hidden">
                <div id="zipSuccess" className="hidden">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      <span className="text-green-800 font-semibold">Great news! We serve your area.</span>
                    </div>
                    <p className="text-green-700 mt-2">Get your free quote today!</p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg quote-trigger">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div id="zipError" className="hidden">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Shield className="h-6 w-6 text-red-500 mr-2" />
                      <span className="text-red-800 font-semibold">We don't currently serve this area.</span>
                    </div>
                    <p className="text-red-700 mt-2">Please contact us to discuss options or check back later as we expand our service area.</p>
                  </div>
                </div>
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
                <Image src="/images/logo-main.png" alt="T&E Movers - SJC Movers" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">T&E Movers</h3>
                  <p className="text-sm text-gray-400">SJC's Local Moving Experts</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Family-owned and operated since 1998, we've been SJC's trusted local moving company for over 25
                years. We're not just your movers - we're your neighbors.
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
                <li className="hover:text-white transition-colors">Apartment Moving</li>
                <li className="hover:text-white transition-colors">House Moving</li>
                <li className="hover:text-white transition-colors">Senior Moving</li>
                <li className="hover:text-white transition-colors">Commercial Moving</li>
                <li className="hover:text-white transition-colors">Piano Moving</li>
                <li className="hover:text-white transition-colors">Packing Services</li>
                <li className="hover:text-white transition-colors">Storage Solutions</li>
                <li className="hover:text-white transition-colors">Junk Removal</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">SJC Service Areas</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">Downtown SJC</li>
                <li className="hover:text-white transition-colors">SJC Beach</li>
                <li className="hover:text-white transition-colors">Riverside/Avondale</li>
                <li className="hover:text-white transition-colors">Mandarin</li>
                <li className="hover:text-white transition-colors">Orange Park</li>
                <li className="hover:text-white transition-colors">St. Augustine</li>
                <li className="hover:text-white transition-colors">Ponte Vedra Beach</li>
                <li className="hover:text-white transition-colors">Nocatee</li>
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
                    <div className="text-sm">SJC, FL 32216</div>
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
                <p>&copy; 2025 T&E Movers. All rights reserved.</p>
                <p className="text-sm mt-2">Licensed and Insured SJC Moving Company | FL License #IM123456</p>
              </div>
              <div className="text-right">
                <div className="flex justify-end space-x-6 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
