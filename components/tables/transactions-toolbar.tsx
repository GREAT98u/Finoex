"use client"

import { Input } from "@/components/ui/input"

type Props = {
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

export function TransactionsToolbar({
  globalFilter,
  setGlobalFilter,
}: Props) {
  return (
    <div className="flex items-center justify-between py-2">
      <Input
        placeholder="Search transactions..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="max-w-sm"
      />
    </div>
  )
}
