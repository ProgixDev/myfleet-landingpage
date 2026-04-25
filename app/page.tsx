import { AppShowcaseSection } from "./components/AppShowcaseSection";
import { CtaSection } from "./components/CtaSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-sans overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppShowcaseSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
