'use client';

import { motion } from 'framer-motion';

const clients = [
  'Family Businesses',
  'Healthcare',
  'Manufacturing',
  'Real Estate',
  'Professional Services',
  'Retail',
  'Construction',
  'Technology',
];

export function ClientLogos() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8"
        >
          Trusted by businesses across industries
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="text-gray-400 font-semibold text-lg hover:text-primary-500 transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
