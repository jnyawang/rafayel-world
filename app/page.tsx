"use client"

import { StickyNav } from "@/components/sticky-nav"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { MethodsSection } from "@/components/methods-section"
import { EcosystemDiagram } from "@/components/ecosystem-diagram"
import { AndroidTutorial } from "@/components/android-tutorial"
import { IOSTutorial } from "@/components/ios-tutorial"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <StickyNav />
      <div className="max-w-lg mx-auto px-4">
        <HeroSection />
        <IntroSection />
        <MethodsSection />
        <EcosystemDiagram />
        <AndroidTutorial />
        <IOSTutorial />
        <FAQSection />
        <footer className="py-8 text-center text-xs text-muted-foreground">
          仅供学习交流使用
        </footer>
      </div>
    </main>
  )
}
