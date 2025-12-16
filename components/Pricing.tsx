import type React from "react"
import { Button } from "./ui/button"

export const Pricing: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 border-b border-foreground/10">
      <div className="p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-foreground/10">
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
          Cheaper <br /> than a <br /> <span className="text-foreground/30">Pro.</span>
        </h2>
        <p className="font-mono text-accent text-sm md:text-base">// Better than a filter.</p>
      </div>

      <div className="p-8 md:p-20 bg-[#0a0a0a] flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#EBEBEB 1px, transparent 1px), linear-gradient(90deg, #EBEBEB 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10 max-w-md mx-auto w-full">
          <div className="border border-foreground py-1 px-4 mb-8 inline-block bg-background">
            <span className="font-mono text-xs uppercase tracking-widest">Single Payment</span>
          </div>

          <div className="flex items-baseline mb-8">
            <span className="font-display text-6xl font-bold text-white">$19.99</span>
            <span className="font-mono text-foreground/50 ml-2">/ pack</span>
          </div>

          <ul className="space-y-4 font-mono text-sm mb-12">
            {[
              "30 Credits (20-30 Photos)",
              "Hyper-Realistic Model Training",
              "Full Commercial Rights",
              "4K Resolution Downloads",
              "Couple & Solo Modes Included",
            ].map((feature, i) => (
              <li key={i} className="flex items-center text-foreground/80">
                <span className="w-1.5 h-1.5 bg-accent mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full group relative overflow-hidden">
            <span className="relative z-10">Start Your Roll Now ➔</span>
          </Button>
          <p className="text-center font-mono text-[10px] text-foreground/30 mt-4">SECURE PAYMENT VIA STRIPE</p>
        </div>
      </div>
    </section>
  )
}
