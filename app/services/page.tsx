import { Metadata } from 'next';
import { PageHero } from '@/components/landing/hero/PageHero';
import { ServicesGrid } from '@/components/landing/services/ServicesGrid';
import { CTASection } from '@/components/landing/cta/CTASection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive tax planning, virtual CFO services, and business advisory from Inner Circle Advisors.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Comprehensive Financial Solutions"
        subtitle="We provide personalized services tailored to help your business thrive at every stage of growth."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070"
      />
      <div className="py-12">
        <ServicesGrid />
      </div>
      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Schedule a free consultation and we'll help you identify the right solutions for your business."
      />
    </>
  );
}
