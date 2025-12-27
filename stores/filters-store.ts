import { create } from "zustand"

type FiltersState = {
  selectedMonth: number
  selectedYear: number
  setMonth: (month: number) => void
  setYear: (year: number) => void
}

const now = new Date()

export const useFiltersStore = create<FiltersState>((set) => ({
  selectedMonth: now.getMonth(), // 0-based
  selectedYear: now.getFullYear(),
  setMonth: (month) => set({ selectedMonth: month }),
  setYear: (year) => set({ selectedYear: year }),
}))
