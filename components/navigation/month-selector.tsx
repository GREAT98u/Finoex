"use client"

import { useFiltersStore } from "@/stores/filters-store"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
]

export function MonthSelector() {
  const { selectedMonth, setMonth } = useFiltersStore()

  return (
    <Select
      value={String(selectedMonth)}
      onValueChange={(value) => setMonth(Number(value))}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {MONTHS.map((month, index) => (
          <SelectItem key={month} value={String(index)}>
            {month}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
