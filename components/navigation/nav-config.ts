import {
    LayoutDashboard,
    ArrowLeftRight,
    Wallet,
    Brain,
    Settings,
  } from "lucide-react"
  
  export type NavItem = {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }
  
  export const NAV_ITEMS: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Transactions",
      href: "/dashboard/transactions",
      icon: ArrowLeftRight,
    },
    {
      title: "Budgets",
      href: "/dashboard/budgets",
      icon: Wallet,
    },
    {
      title: "Insights",
      href: "/dashboard/insights",
      icon: Brain,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]
  