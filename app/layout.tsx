"use client"

import "@/lib/styles/globals.css"
import { cn, fontSans } from "@/lib"
import { ThemeProvider } from "next-themes"

import { SiteHeader } from "./home/_comps"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-secondary font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <SiteHeader />
              {children}
            </div>
          </div>

          {/* <TailwindIndicator /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
