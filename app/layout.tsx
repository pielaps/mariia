import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mariia Priakhina - Business Analyst & Market Researcher",
  description:
    "Professional resume website showcasing business analysis, market research, and data analysis expertise in international economics and business.",
  keywords:
    "business analyst, market researcher, data analyst, international economics, business, Czech Republic, Russia",
  authors: [{ name: "Mariia Priakhina" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
