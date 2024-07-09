"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  return (
    <div className="flex flex-col sm:flex-row sm:flex gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date() }
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date == new Date()}
      />
      <div>
        <h1 className="text-3xl">Fecha</h1>
        <div className="border-b border-b-rose-300"></div>
        <span className="">{smallDate}</span>
      </div>
    </div>

  )
}
