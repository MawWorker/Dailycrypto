"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"

export function ClientStaticDateFormatter({
  date,
  format: formatStr = "PPP"
}: {
  date: string | Date
  format?: "time" | "date" | "full" | string
}) {
  const [formattedDate, setFormattedDate] = useState<string>("")

  useEffect(() => {
    const dateObj = typeof date === "string" ? new Date(date) : date

    let formatString = formatStr
    if (formatStr === "time") formatString = "p"
    if (formatStr === "date") formatString = "PP"
    if (formatStr === "full") formatString = "PPpp"

    setFormattedDate(format(dateObj, formatString))
  }, [date, formatStr])

  if (!formattedDate) return null

  return <>{formattedDate}</>
}
