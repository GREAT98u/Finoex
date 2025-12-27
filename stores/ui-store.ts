import { create } from "zustand"

type UIState = {
  sidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
}))
