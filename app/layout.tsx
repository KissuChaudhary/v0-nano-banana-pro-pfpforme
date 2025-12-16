import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

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

export const metadata: Metadata = {
  title: "PfpFor.Me: The Anti-AI Profile Picture Generator (Candid & Real)",
  description:
    "Generate hyper-realistic AI profile pictures that look 100% authentic. The only AI photo generator for candid, aesthetic, and non-studio headshots. Perfect for Hinge, Instagram, and LinkedIn.",
  keywords: [
    "pfpforme",
    "pfp for me",
    "AI profile picture generator",
    "AI image generation",
    "AI image editor",
    "Google AI",
    "text to image",
    "AI art generator",
    "image editing AI",
    "Google image generation",
    "pfpforme",
    "pfp for me",
    "AI profile picture generator",
  ],
  authors: [{ name: "v0" }],
  creator: "v0",
  publisher: "v0",
  generator: "v0.app",
  metadataBase: new URL("https://pfpfor.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pfpfor.me",
    title: "PfpFor.Me: The Anti-AI Profile Picture Generator (Candid & Real)",
    description:
      "Generate hyper-realistic AI profile pictures that look 100% authentic. The only AI photo generator for candid, aesthetic, and non-studio headshots. Perfect for Hinge, Instagram, and LinkedIn.",
    siteName: "PfpFor.Me",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PfpFor.Me: The Anti-AI Profile Picture Generator (Candid & Real)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PfpFor.Me: The Anti-AI Profile Picture Generator (Candid & Real)",
    description:
      "Generate hyper-realistic AI profile pictures that look 100% authentic. The only AI photo generator for candid, aesthetic, and non-studio headshots. Perfect for Hinge, Instagram, and LinkedIn.",
    creator: "Harvansh Chaudhary",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
}

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-mono antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Film grain overlay for public pages */}
          <div
            className="grain fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <ErrorBoundary>
            <Suspense fallback={null}>{children}</Suspense>
          </ErrorBoundary>

          {/* Decorative floating metadata for public pages */}
          <div className="fixed bottom-6 right-6 font-mono text-[10px] text-[#EBEBEB]/20 pointer-events-none hidden lg:block z-40">
            SYS_READY <br />
            V2.0.4 <br />
            ANTI-AI KERNEL
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
