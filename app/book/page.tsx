"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [service, setService] = useState("")
  const [time, setTime] = useState("")
  const { toast } = useToast()

  const handleBooking = () => {
    if (!date || !service || !time) {
      toast({
        title: "Booking Error",
        description: "Please select a date, service, and time.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send this data to your backend
    console.log("Booking:", { date, service, time })

    toast({
      title: "Booking Confirmed",
      description: `Your ${service} appointment is booked for ${date.toDateString()} at ${time}.`,
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Book Your Appointment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
            <CardDescription>Choose your preferred appointment date</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select Service</CardTitle>
              <CardDescription>Choose the service you want to book</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="classic-shaping">Classic Eyebrow Shaping</SelectItem>
                  <SelectItem value="precision-waxing">Precision Waxing</SelectItem>
                  <SelectItem value="threading">Threading</SelectItem>
                  <SelectItem value="tinting">Eyebrow Tinting</SelectItem>
                  <SelectItem value="henna">Henna Brows</SelectItem>
                  <SelectItem value="lamination">Brow Lamination</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select Time</CardTitle>
              <CardDescription>Choose your preferred appointment time</CardDescription>
            </CardHeader>
            <CardContent>
              <Select onValueChange={setTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="13:00">1:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Button onClick={handleBooking} className="w-full">Book Appointment</Button>
        </div>
      </div>
    </div>
  )
}