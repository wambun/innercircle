import { Metadata } from 'next';
import { PageHero } from '@/components/landing/hero/PageHero';
import { BlogContent } from './BlogContent';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, tips, and news from Inner Circle Advisors on tax planning, business strategy, and financial management.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Insights & News"
        title="The Inner Circle Blog"
        subtitle="Stay informed with the latest insights on tax planning, business strategy, and financial management."
      />
      <BlogContent />
    </>
  );
}
