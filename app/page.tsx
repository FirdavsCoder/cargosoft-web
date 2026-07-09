import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrackingShowcase } from "@/components/sections/tracking-showcase";
import { AdminShowcase } from "@/components/sections/admin-showcase";
import { TelegramShowcase } from "@/components/sections/telegram-showcase";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SocialProof } from "@/components/sections/social-proof";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <TrackingShowcase />
        <AdminShowcase />
        <TelegramShowcase />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
