import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "../components/theme-provider"
import { QueryClientProviderWrapper } from "../components/providers/query-client-provider"
import { Toaster } from "../components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Finance App",
  description: "Personal financial management dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <QueryClientProviderWrapper>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster richColors />
            </ThemeProvider>
          </QueryClientProviderWrapper>
        </body>
      </html>
    </ClerkProvider>
  )
}
