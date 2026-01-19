import { Metadata } from 'next';
import { PageHero } from '@/components/landing/hero/PageHero';
import { CareersContent } from './CareersContent';
import { CTASection } from '@/components/landing/cta/CTASection';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Inner Circle Advisors team. We are always looking for talented CPAs, accountants, and administrative professionals.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Join Our Team"
        title="Build Your Career with Us"
        subtitle="We're always looking for talented professionals who share our passion for helping businesses succeed."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
      />
      <CareersContent />
      <CTASection
        title="Don't See the Right Position?"
        subtitle="We're always interested in meeting talented professionals. Send us your resume and let's talk."
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
