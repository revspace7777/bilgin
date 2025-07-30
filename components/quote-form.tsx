"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  typeOfMove: string
  movingFromStreet: string
  movingFromCity: string
  movingFromState: string
  movingFromZip: string
  movingFromBedrooms: string
  movingFromFloor: string
  movingToStreet: string
  movingToCity: string
  movingToState: string
  movingToZip: string
  movingToBedrooms: string
  movingToFloor: string
  description: string
}

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
]

const bedroomOptions = ["Studio", "1", "2", "3", "4", "5", "6+"]
const floorOptions = ["1st", "2nd", "3rd", "4th", "5th", "6th+"]
const moveTypes = ["Residential", "Commercial", "Long Distance", "Local", "Storage", "Packing Only"]

export default function QuoteForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    typeOfMove: "",
    movingFromStreet: "",
    movingFromCity: "",
    movingFromState: "",
    movingFromZip: "",
    movingFromBedrooms: "",
    movingFromFloor: "",
    movingToStreet: "",
    movingToCity: "",
    movingToState: "",
    movingToZip: "",
    movingToBedrooms: "",
    movingToFloor: "",
    description: "",
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and phone number.",
        variant: "destructive",
      })
      return
    }

    if (!formData.movingFromCity || !formData.movingToCity) {
      toast({
        title: "Missing Location Information",
        description: "Please provide both moving from and moving to cities.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 24 hours with your free quote.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        typeOfMove: "",
        movingFromStreet: "",
        movingFromCity: "",
        movingFromState: "",
        movingFromZip: "",
        movingFromBedrooms: "",
        movingFromFloor: "",
        movingToStreet: "",
        movingToCity: "",
        movingToState: "",
        movingToZip: "",
        movingToBedrooms: "",
        movingToFloor: "",
        description: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          required
        />
        <Select value={formData.typeOfMove} onValueChange={(value) => handleInputChange("typeOfMove", value)}>
          <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-red-500">
            <SelectValue placeholder="Type Of Move" />
          </SelectTrigger>
          <SelectContent className="bg-slate-700 border-slate-600">
            {moveTypes.map((type) => (
              <SelectItem key={type} value={type} className="text-white hover:bg-slate-600">
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* FROM Section */}
      <div className="space-y-4">
        <div className="text-gray-400 text-sm font-semibold tracking-wider uppercase">FROM</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Moving From Street"
            value={formData.movingFromStreet}
            onChange={(e) => handleInputChange("movingFromStreet", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          />
          <Input
            type="text"
            placeholder="City"
            value={formData.movingFromCity}
            onChange={(e) => handleInputChange("movingFromCity", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Select
            value={formData.movingFromState}
            onValueChange={(value) => handleInputChange("movingFromState", value)}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-red-500">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600 max-h-60">
              {states.map((state) => (
                <SelectItem key={state} value={state} className="text-white hover:bg-slate-600">
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Zip"
            value={formData.movingFromZip}
            onChange={(e) => handleInputChange("movingFromZip", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
            maxLength={5}
          />

          <Select
            value={formData.movingFromBedrooms}
            onValueChange={(value) => handleInputChange("movingFromBedrooms", value)}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-red-500">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {bedroomOptions.map((bedroom) => (
                <SelectItem key={bedroom} value={bedroom} className="text-white hover:bg-slate-600">
                  {bedroom}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={formData.movingFromFloor}
            onValueChange={(value) => handleInputChange("movingFromFloor", value)}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-red-500">
              <SelectValue placeholder="Floor" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {floorOptions.map((floor) => (
                <SelectItem key={floor} value={floor} className="text-white hover:bg-slate-600">
                  {floor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* TO Section */}
      <div className="space-y-4">
        <div className="text-gray-400 text-sm font-semibold tracking-wider uppercase">TO</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Moving To Street"
            value={formData.movingToStreet}
            onChange={(e) => handleInputChange("movingToStreet", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          />
          <Input
            type="text"
            placeholder="City"
            value={formData.movingToCity}
            onChange={(e) => handleInputChange("movingToCity", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Select value={formData.movingToState} onValueChange={(value) => handleInputChange("movingToState", value)}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-red-500">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600 max-h-60">
              {states.map((state) => (
                <SelectItem key={state} value={state} className="text-white hover:bg-slate-600">
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Zip"
            value={formData.movingToZip}
            onChange={(e) => handleInputChange("movingToZip", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
            maxLength={5}
          />

          <Select
            value={formData.movingToBedrooms}
            onValueChange={(value) => handleInputChange("movingToBedrooms", value)}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-red-500">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {bedroomOptions.map((bedroom) => (
                <SelectItem key={bedroom} value={bedroom} className="text-white hover:bg-slate-600">
                  {bedroom}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={formData.movingToFloor} onValueChange={(value) => handleInputChange("movingToFloor", value)}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-red-500">
              <SelectValue placeholder="Floor" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {floorOptions.map((floor) => (
                <SelectItem key={floor} value={floor} className="text-white hover:bg-slate-600">
                  {floor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Description */}
      <div>
        <Textarea
          placeholder="Description of major items or details we should know"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500 min-h-[100px]"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg"
      >
        {isSubmitting ? "SENDING..." : "SEND"}
      </Button>
    </form>
  )
}
