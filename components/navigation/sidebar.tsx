"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import { NAV_ITEMS } from "./nav-config"
import { useUIStore } from "@/stores/ui-store"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarOpen, toggleSidebar } = useUIStore()

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-background transition-all duration-300",
        sidebarOpen ? "w-64" : "w-16"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {sidebarOpen && (
          <span className="text-lg font-semibold">Finance</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          ☰
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <Icon className="h-5 w-5" />
              {sidebarOpen && <span>{item.title}</span>}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
