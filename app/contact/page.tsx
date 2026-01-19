import { Metadata } from 'next';
import { PageHero } from '@/components/landing/hero/PageHero';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Inner Circle Advisors. Schedule a consultation to discuss your tax planning and business advisory needs.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="Let's Start a Conversation"
        subtitle="Whether you have questions or are ready to get started, we're here to help."
      />
      <ContactContent />
    </>
  );
}
