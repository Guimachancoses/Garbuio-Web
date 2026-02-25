import HeroSection from "@/src/components/hero-section";
import Features from "@/src/components/features-1";
import Integrations from "@/src/components/integrations-3";
import StatsSection from "@/src/components/stats-3";
import TeamSection from "@/src/components/team";
import FAQsThree from "@/src/components/faqs-3";
import FooterSection from "@/src/components/footer";
import ContentSection from "@/src/components/content-1";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ContentSection/>
      <Features />
      <Integrations />
      <StatsSection />
      <TeamSection />
      <FAQsThree />
      <FooterSection />
    </div>
  );
}
