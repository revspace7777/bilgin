"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { getTrackingInputs, getTrackingDataForSubmission } from "@/lib/form-tracking"

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
  const [customId, setCustomId] = useState("")
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

  // Generate random 4-character alphanumeric ID
  const generateCustomId = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  // Generate ID on component mount
  useEffect(() => {
    setCustomId(generateCustomId())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      e.preventDefault()
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and phone number.",
        variant: "destructive",
      })
      return
    }

    if (!formData.movingFromCity || !formData.movingToCity) {
      e.preventDefault()
      toast({
        title: "Missing Location Information",
        description: "Please provide both moving from and moving to cities.",
        variant: "destructive",
      })
      return
    }

    // If validation passes, let Netlify handle the submission
    // The action="/thank-you" will redirect after successful submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="quote-request" action="/thank-you">
      {/* Hidden input for Netlify */}
      <input type="hidden" name="form-name" value="quote-request" />
      
      {/* Add all tracking inputs */}
      {getTrackingInputs()}
      
      {/* Custom subject line with generated ID */}
      <input 
        type="hidden" 
        name="subject" 
        value={`New Moving Quote Request for ${formData.name || 'Customer'} | T&E Moving and Storage LLC | (id:${customId})`}
      />
      
      {/* Basic Information Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          required
        />
        <Input
          name="email"
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
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          required
        />
        <Select 
          name="typeOfMove"
          value={formData.typeOfMove} 
          onValueChange={(value) => handleInputChange("typeOfMove", value)}
        >
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
        {/* Hidden input for typeOfMove to ensure Netlify captures it */}
        <input type="hidden" name="typeOfMove" value={formData.typeOfMove} />
      </div>

      {/* FROM Section */}
      <div className="space-y-4">
        <div className="text-gray-400 text-sm font-semibold tracking-wider uppercase">FROM</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="movingFromStreet"
            type="text"
            placeholder="Moving From Street"
            value={formData.movingFromStreet}
            onChange={(e) => handleInputChange("movingFromStreet", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          />
          <Input
            name="movingFromCity"
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
            name="movingFromState"
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
          {/* Hidden input for movingFromState */}
          <input type="hidden" name="movingFromState" value={formData.movingFromState} />

          <Input
            name="movingFromZip"
            type="text"
            placeholder="Zip"
            value={formData.movingFromZip}
            onChange={(e) => handleInputChange("movingFromZip", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
            maxLength={5}
          />

          <Select
            name="movingFromBedrooms"
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
          {/* Hidden input for movingFromBedrooms */}
          <input type="hidden" name="movingFromBedrooms" value={formData.movingFromBedrooms} />

          <Select 
            name="movingFromFloor"
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
          {/* Hidden input for movingFromFloor */}
          <input type="hidden" name="movingFromFloor" value={formData.movingFromFloor} />
        </div>
      </div>

      {/* TO Section */}
      <div className="space-y-4">
        <div className="text-gray-400 text-sm font-semibold tracking-wider uppercase">TO</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="movingToStreet"
            type="text"
            placeholder="Moving To Street"
            value={formData.movingToStreet}
            onChange={(e) => handleInputChange("movingToStreet", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
          />
          <Input
            name="movingToCity"
            type="text"
            placeholder="City"
            value={formData.movingToCity}
            onChange={(e) => handleInputChange("movingToCity", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Select
            name="movingToState"
            value={formData.movingToState}
            onValueChange={(value) => handleInputChange("movingToState", value)}
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
          {/* Hidden input for movingToState */}
          <input type="hidden" name="movingToState" value={formData.movingToState} />

          <Input
            name="movingToZip"
            type="text"
            placeholder="Zip"
            value={formData.movingToZip}
            onChange={(e) => handleInputChange("movingToZip", e.target.value)}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-red-500"
            maxLength={5}
          />

          <Select
            name="movingToBedrooms"
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
          {/* Hidden input for movingToBedrooms */}
          <input type="hidden" name="movingToBedrooms" value={formData.movingToBedrooms} />

          <Select 
            name="movingToFloor"
            value={formData.movingToFloor} 
            onValueChange={(value) => handleInputChange("movingToFloor", value)}
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
          {/* Hidden input for movingToFloor */}
          <input type="hidden" name="movingToFloor" value={formData.movingToFloor} />
        </div>
      </div>

      {/* Description */}
      <div>
        <Textarea
          name="description"
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
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 text-lg"
      >
        SEND
      </Button>
    </form>
  )
}
