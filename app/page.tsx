import type { Metadata } from "next"
import { Cursor } from "@/components/ui/Cursor"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { MoatSection } from "@/components/MoatSection"
import { ConsistencySection } from "@/components/ConsistenceySection"
import { LightingLabSection } from "@/components/LightingLabSection"
import { ProductSection } from "@/components/ProductSection"
import { TextureLabSection } from "@/components/TextureLab"
import { FullFrameSection } from "@/components/FullFrameSection"
import { HowItWorks } from "@/components/HowItWorks"
import { SocialProof } from "@/components/SocialProof"
import { Pricing } from "@/components/Pricing"
import { FAQ } from "@/components/FAQ"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "PfpFor.Me | The Anti-AI Profile Picture",
  description: "Create authentic, AI-resistant profile pictures that stand out in a world of synthetic content.",
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Navbar />

      <main className="pt-16">
        <Hero />
        <MoatSection />
        <ConsistencySection />
        <LightingLabSection />
        <ProductSection />
        <TextureLabSection />
        <FullFrameSection />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
