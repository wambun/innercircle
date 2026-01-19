'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ badge, title, subtitle, backgroundImage }: PageHeroProps) {
  const hasImage = !!backgroundImage;

  return (
    <section className={`relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden ${hasImage ? 'min-h-[400px] flex items-center' : ''}`}>
      {/* Background image or gradient */}
      {hasImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover -z-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/90 via-secondary-500/70 to-secondary-500/50 -z-10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-white to-white -z-10" />
      )}

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                hasImage ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'
              }`}
            >
              {badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl sm:text-5xl font-bold leading-tight mb-4 ${
              hasImage ? 'text-white' : 'text-secondary-500'
            }`}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg leading-relaxed ${hasImage ? 'text-gray-200' : 'text-gray-600'}`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
