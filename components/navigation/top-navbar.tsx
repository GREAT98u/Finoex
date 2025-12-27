"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

import { usePageTitle } from "./page-title"
import { MonthSelector } from "./month-selector"

export function TopNavbar() {
  const title = usePageTitle()

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Left */}
      <h1 className="text-xl font-semibold">{title}</h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <MonthSelector />

        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>

        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
  )
}
