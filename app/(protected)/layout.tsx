"use client"

import type React from "react"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-black" style={{ isolation: "isolate" }}>
      {/* Hide grain overlay and decorative metadata for protected pages */}
      <style jsx global>{`
        body .grain,
        body > div > div:last-child {
          display: none !important;
        }
      `}</style>
      {children}
    </div>
  )
}
