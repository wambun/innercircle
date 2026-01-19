'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/shared/Button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export function HeroSection({
  badge = 'Trusted Business Advisors',
  title = 'Expert Financial Guidance for Your Business Success',
  subtitle = 'Inner Circle Advisors provides comprehensive tax planning and business advisory services that help family businesses thrive.',
  primaryCTA = { text: 'Get Started', href: '/contact' },
  secondaryCTA = { text: 'Learn More', href: '/about' },
  backgroundImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Professional business environment"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/95 via-secondary-500/80 to-secondary-500/60" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm border border-primary-500/30">
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href={primaryCTA.href} size="lg">
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href={secondaryCTA.href}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              {secondaryCTA.text}
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl"
        >
          {[
            { value: '54+', label: 'Years of Experience' },
            { value: '1,000+', label: 'Clients Served' },
            { value: '40+', label: 'Years of Expertise' },
            { value: '100%', label: 'Client Focused' },
          ].map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
