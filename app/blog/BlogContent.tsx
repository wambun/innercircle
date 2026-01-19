'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    slug: 'from-adding-machine-tapes-to-trusted-advisors',
    title: 'From Adding Machine Tapes to Trusted Business Advisor: The Inner Circle Advisors Story',
    excerpt:
      'Learn about the journey that started in 1970 and evolved into the trusted business advisory firm we are today.',
    category: 'Company News',
    date: 'January 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
  },
  {
    slug: 'tax-planning-strategies-for-family-businesses',
    title: 'Essential Tax Planning Strategies for Family Businesses',
    excerpt:
      'Discover key tax planning strategies that can help your family business minimize liability and maximize growth potential.',
    category: 'Tax Planning',
    date: 'January 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
  },
  {
    slug: 'when-to-hire-virtual-cfo',
    title: 'When Is It Time to Hire a Virtual CFO?',
    excerpt:
      'Signs that your business could benefit from strategic financial leadership without the full-time commitment.',
    category: 'Virtual CFO',
    date: 'January 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
  },
  {
    slug: 'business-succession-planning-guide',
    title: 'A Complete Guide to Business Succession Planning',
    excerpt:
      'How to prepare your business for a successful transition, whether to family members or outside buyers.',
    category: 'Business Advisory',
    date: 'December 28, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800',
  },
  {
    slug: 'year-end-tax-checklist',
    title: 'Year-End Tax Checklist for Small Businesses',
    excerpt:
      'Essential steps to take before year-end to optimize your tax position and prepare for the upcoming tax season.',
    category: 'Tax Planning',
    date: 'December 15, 2023',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800',
  },
  {
    slug: 'cash-flow-management-best-practices',
    title: 'Cash Flow Management Best Practices for Growing Businesses',
    excerpt:
      'Learn how to effectively manage cash flow to support sustainable business growth and avoid common pitfalls.',
    category: 'Virtual CFO',
    date: 'December 10, 2023',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
  },
];

export function BlogContent() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                  Featured • {blogPosts[0].category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:underline">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 text-primary-700 text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary-500 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-primary-500 font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
