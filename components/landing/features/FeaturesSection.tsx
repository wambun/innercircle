'use client';

import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp, Clock, Award, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Expertise',
    description:
      'Over 50 years of industry experience with credentials you can rely on.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description:
      'Every client receives tailored solutions that fit their unique needs.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description:
      'Strategic guidance designed to help your business thrive and scale.',
  },
  {
    icon: Clock,
    title: 'Proactive Approach',
    description:
      'We anticipate challenges and opportunities before they arise.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description:
      'Thousands of satisfied clients across the US and Canada.',
  },
  {
    icon: HeartHandshake,
    title: 'Family Values',
    description:
      'We treat every client like family, with care and dedication.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4"
          >
            The Inner Circle Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We combine decades of expertise with a genuine commitment to your
            success.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
