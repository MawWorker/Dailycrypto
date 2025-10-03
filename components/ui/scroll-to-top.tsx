"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export function ScrollToTop({ className }: { className?: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn("fixed bottom-4 right-4 z-50", className)}
      size="icon"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}
