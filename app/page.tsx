import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { SocialProof } from "@/components/sections/social-proof";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
