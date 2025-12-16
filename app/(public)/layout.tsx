import type React from "react"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains-mono",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} relative min-h-screen font-mono overflow-x-hidden`}
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Film grain overlay */}
      <div
        className="grain fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {children}

      {/* Decorative floating metadata */}
      <div className="fixed bottom-6 right-6 font-mono text-[10px] text-[#EBEBEB]/20 pointer-events-none hidden lg:block z-40">
        SYS_READY <br />
        V2.0.4 <br />
        ANTI-AI KERNEL
      </div>
    </div>
  )
}
