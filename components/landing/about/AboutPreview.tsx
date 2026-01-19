'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/shared/Button';
import { CheckCircle, Award, Users, Building } from 'lucide-react';

const highlights = [
  { icon: Award, text: 'Over 54 years of trusted experience' },
  { icon: Users, text: 'Personalized approach for every client' },
  { icon: Building, text: 'Serving businesses across the US & Canada' },
];

const credentials = ['CPA', 'CGMA', 'Tax Expert', 'Business Advisor'];

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/team/greg.webp"
                alt="Gregory D. Hostelley, CPA, CGMA"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/80 via-transparent to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Gregory D. Hostelley</h3>
                <p className="text-gray-200">CPA, CGMA • Founder & Principal</p>
              </div>
            </div>

            {/* Floating credentials card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block"
            >
              <div className="text-5xl font-bold text-primary-500 mb-2">
                40+
              </div>
              <div className="text-sm text-gray-600 font-medium">Years of Expertise</div>
              <div className="flex gap-2 mt-3">
                {credentials.map((cred) => (
                  <span
                    key={cred}
                    className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Floating year card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-4 bg-primary-500 text-white rounded-xl shadow-xl p-4 hidden lg:block"
            >
              <div className="text-sm font-medium opacity-80">Est.</div>
              <div className="text-3xl font-bold">1970</div>
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
              deserves. A Cleveland native and one of the youngest CPAs in
              Northeast Ohio history, Greg brings unparalleled insight to
              every client relationship.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <Button href="/about">Learn Our Story</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
