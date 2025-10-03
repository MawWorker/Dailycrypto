import * as React from "react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-bold text-xl", className)}>
      DailyCrypto
    </div>
  )
}
