import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { PageHero } from '@/components/landing/hero/PageHero';
import { ServiceContent } from './ServiceContent';
import { CTASection } from '@/components/landing/cta/CTASection';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        badge="Our Services"
        title={service.title}
        subtitle={service.shortDescription}
      />
      <ServiceContent service={service} />
      <CTASection
        title={`Ready to Get Started with ${service.title}?`}
        subtitle="Schedule a consultation to learn how we can help your business."
      />
    </>
  );
}
