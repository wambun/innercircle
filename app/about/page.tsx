import { Metadata } from 'next';
import { PageHero } from '@/components/landing/hero/PageHero';
import { AboutContent } from './AboutContent';
import { CTASection } from '@/components/landing/cta/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Inner Circle Advisors, led by Gregory D. Hostelley, CPA, CGMA, with over 40 years of experience helping businesses succeed.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="A Legacy of Trust Since 1970"
        subtitle="Founded with a commitment to excellence, Inner Circle Advisors has been helping businesses thrive for over five decades."
      />
      <AboutContent />
      <CTASection
        title="Ready to Join the Inner Circle?"
        subtitle="Let's discuss how we can help your business reach its full potential."
      />
    </>
  );
}
