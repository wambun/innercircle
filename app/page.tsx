import { HeroSection } from '@/components/landing/hero/HeroSection';
import { ClientLogos } from '@/components/landing/social-proof/ClientLogos';
import { ServicesGrid } from '@/components/landing/services/ServicesGrid';
import { AboutPreview } from '@/components/landing/about/AboutPreview';
import { FeaturesSection } from '@/components/landing/features/FeaturesSection';
import { TestimonialsSection } from '@/components/landing/testimonials/TestimonialsSection';
import { CTASection } from '@/components/landing/cta/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection
        badge="Trusted Business Advisors"
        title="Expert Financial Guidance for Your Business Success"
        subtitle="Inner Circle Advisors provides comprehensive tax planning and business advisory services that help family businesses thrive."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'Our Services', href: '/services' }}
      />
      <ClientLogos />
      <ServicesGrid />
      <AboutPreview />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
