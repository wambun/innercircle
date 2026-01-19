'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Over 50 years of trusted experience',
  'Personalized approach for every client',
  'Comprehensive tax and business solutions',
  'Serving clients across the US and Canada',
];

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[url('/static/images/pattern.svg')] opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl lg:text-7xl font-bold mb-4">ICA</div>
                  <div className="text-lg font-medium opacity-90">
                    Inner Circle Advisors
                  </div>
                  <div className="text-sm opacity-75 mt-2">Est. 1970</div>
                </div>
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6 hidden lg:block"
            >
              <div className="text-4xl font-bold text-primary-500 mb-1">
                1970
              </div>
              <div className="text-sm text-gray-600">Year Founded</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-6">
              A Legacy of Trust Since 1970
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded by Greg&apos;s father in 1970, Inner Circle Advisors has evolved
              from a healthcare-focused accounting firm to a comprehensive
              business advisory serving thousands of clients across Northern
              Ohio and beyond.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Led by Gregory D. Hostelley, CPA, CGMA, with over 40 years of
              experience, we provide the expertise and dedication your business
              deserves.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Button href="/about">Meet Our Team</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
