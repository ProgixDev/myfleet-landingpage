import { AgencyAccessSection } from "./components/AgencyAccessSection";
import { AppShowcaseSection } from "./components/AppShowcaseSection";
import { CtaSection } from "./components/CtaSection";
import { FaqSection } from "./components/FaqSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";

export default function Home() {
  return (
    <div className="relative bg-background text-on-background font-sans overflow-x-hidden">
      <div className="site-aurora" />
      <div className="site-conic" />
      <div className="site-grid" />
      <div className="site-bokeh" />
      <div className="site-noise" />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppShowcaseSection />
        <HowItWorksSection />
        <AgencyAccessSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
