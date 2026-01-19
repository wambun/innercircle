'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, TrendingUp, Users, Coffee } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    description: 'Continuous learning opportunities and support for professional development.',
  },
  {
    icon: Users,
    title: 'Collaborative Team',
    description: 'Work alongside experienced professionals who support your success.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We value your wellbeing and support a healthy work-life balance.',
  },
  {
    icon: Coffee,
    title: 'Great Culture',
    description: 'A positive, family-oriented environment where your contributions matter.',
  },
];

const openings = [
  {
    title: 'Client Relations Specialist',
    department: 'Client Services',
    location: 'Independence, OH',
    type: 'Full-time',
    description:
      'We are looking for a Client Relations Specialist to join our team and help maintain exceptional client relationships.',
    slug: 'client-relations-specialist',
  },
  {
    title: 'Staff Accountant',
    department: 'Accounting',
    location: 'Independence, OH',
    type: 'Full-time',
    description:
      'Join our accounting team and work on diverse client engagements while developing your expertise.',
    slug: 'staff-accountant',
  },
  {
    title: 'Tax Manager',
    department: 'Tax Services',
    location: 'Independence, OH',
    type: 'Full-time',
    description:
      'Lead tax engagements and mentor junior staff while working with our diverse client base.',
    slug: 'tax-manager',
  },
];

export function CareersContent() {
  return (
    <>
      {/* Culture Gallery Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600', alt: 'Team collaboration' },
              { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600', alt: 'Office meeting' },
              { src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=600', alt: 'Professional environment' },
              { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600', alt: 'Modern workspace' },
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-xl ${index === 0 ? 'col-span-2 row-span-2 h-64 lg:h-80' : 'h-32 lg:h-40'}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4"
            >
              Why Work With Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              At Inner Circle Advisors, we believe in investing in our people.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-500 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
            >
              Open Positions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4"
            >
              Current Opportunities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Explore our current openings and find your next opportunity.
            </motion.p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/careers/${job.slug}`}
                  className="group block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary-500" />
                        <span className="text-sm text-gray-500">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-500 mb-2 group-hover:text-primary-500 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all">
                      View Details
                      <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
