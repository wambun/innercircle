'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We maintain the highest standards in everything we do, ensuring exceptional service for every client.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We work alongside our clients as trusted partners, invested in their long-term success.',
  },
  {
    icon: Target,
    title: 'Proactive',
    description:
      'We anticipate challenges and opportunities, providing guidance before issues arise.',
  },
  {
    icon: Heart,
    title: 'Family Values',
    description:
      'We treat every client like family, with genuine care and dedication to their wellbeing.',
  },
];

const timeline = [
  {
    year: '1970',
    title: 'The Beginning',
    description:
      "Greg's father opens the accounting firm on April 16, 1970, originally focusing on the healthcare industry.",
  },
  {
    year: '1980s',
    title: 'Growing Expertise',
    description:
      'Gregory D. Hostelley joins the firm and becomes one of the youngest accountants in Northeast Ohio.',
  },
  {
    year: '2000s',
    title: 'Expanding Services',
    description:
      'The firm evolves to offer comprehensive tax planning and business advisory services.',
  },
  {
    year: 'Today',
    title: 'Trusted Advisors',
    description:
      'Serving thousands of clients across Northern Ohio, the United States, and Canada.',
  },
];

export function AboutContent() {
  return (
    <>
      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-6">
                From Adding Machine Tapes to Trusted Advisors
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Inner Circle Advisors story began on April 16, 1970, when
                  Greg&apos;s father opened his own accounting firm with a focus on
                  the healthcare industry. What started as a small practice has
                  grown into a comprehensive business advisory serving clients
                  across the nation.
                </p>
                <p>
                  Today, under the leadership of Gregory D. Hostelley, CPA, CGMA,
                  we continue that legacy of dedication and excellence. With over
                  40 years of personal experience in the accounting field, Greg
                  brings unparalleled expertise to every client relationship.
                </p>
                <p>
                  A lifetime Cleveland resident and St. Ignatius alumnus, Greg
                  attended Baldwin-Wallace University and became one of the
                  youngest accountants in Northeast Ohio. His passion for helping
                  businesses succeed drives everything we do at Inner Circle
                  Advisors.
                </p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-5xl lg:text-6xl font-bold mb-2">GDH</div>
                    <div className="text-lg font-medium opacity-90">
                      Gregory D. Hostelley
                    </div>
                    <div className="text-sm opacity-75 mt-2">CPA, CGMA</div>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="text-3xl font-bold">40+</div>
                      <div className="text-sm opacity-75">Years of Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Over five decades of growth, evolution, and commitment to excellence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  {item.year}
                </div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4"
            >
              What We Stand For
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              The principles that guide everything we do at Inner Circle Advisors.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
