'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calculator, LineChart, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Tax Planning',
    description:
      'Comprehensive tax planning services that help family businesses minimize liability and maximize savings.',
    href: '/services/tax-planning',
  },
  {
    icon: LineChart,
    title: 'Virtual CFO',
    description:
      'Expert financial guidance and strategic insights to help you make smart business decisions.',
    href: '/services/virtual-cfo',
  },
  {
    icon: Briefcase,
    title: 'Business Advisory',
    description:
      'Growth-focused consulting services for small to large businesses ready to scale.',
    href: '/services/business-advisory',
  },
];

export function ServicesGrid() {
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
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4"
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We provide personalized services that safeguard what matters most -
            your growth, your family, and your legacy.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full bg-white rounded-lg p-8 shadow-[0_18px_30px_rgba(0,49,39,0.1)] hover:shadow-[0_22px_40px_rgba(0,49,39,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
