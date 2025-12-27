import { usePathname } from "next/navigation"

const TITLE_MAP: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/transactions": "Transactions",
  "/dashboard/budgets": "Budgets",
  "/dashboard/insights": "Insights",
  "/dashboard/settings": "Settings",
}

export function usePageTitle() {
  const pathname = usePathname()
  return TITLE_MAP[pathname] ?? "Dashboard"
}
