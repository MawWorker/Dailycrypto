"use client"

import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"

export function ClientRelativeTime({ date }: { date: string | Date }) {
  const [timeAgo, setTimeAgo] = useState<string>("")

  useEffect(() => {
    const dateObj = typeof date === "string" ? new Date(date) : date
    setTimeAgo(formatDistanceToNow(dateObj, { addSuffix: true }))
  }, [date])

  if (!timeAgo) return null

  return <>{timeAgo}</>
}
