'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTASection({
  title = 'Ready to Transform Your Business Finances?',
  subtitle = 'Schedule a consultation with our expert team and discover how Inner Circle Advisors can help your business thrive.',
  primaryCTA = { text: 'Get Started Today', href: '/contact' },
  secondaryCTA = { text: 'Call Us', href: 'tel:' },
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-secondary-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href={primaryCTA.href} size="lg">
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href={secondaryCTA.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary-500"
            >
              <Phone className="mr-2 h-5 w-5" />
              {secondaryCTA.text}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
