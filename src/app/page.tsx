import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { MitmSection } from "@/components/mitm-section";
import { ResourcesSection } from "@/components/resources-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="home-page">
        <HeroSection />
        <FeaturesSection />
        <MitmSection />
        <ResourcesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
