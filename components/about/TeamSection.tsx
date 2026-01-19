'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Gregory D. Hostelley',
    title: 'Managing Principal',
    credentials: 'CPA, CGMA, Certified Value Builder™',
    image: '/team/greg.webp',
    bio: 'A lifetime Cleveland resident and St. Ignatius alumnus, Greg has been passionate about entrepreneurship for over 40 years. He began working in his father\'s company at age 12 and became one of the youngest CPAs in Northeast Ohio history. Greg built Inner Circle Advisors one satisfied client at a time, focusing on helping owners implement strategic plans to take their businesses to the next level.',
    linkedin: 'https://www.linkedin.com/in/greghostelley/',
  },
  {
    name: 'Diane Harbour',
    title: 'Tax Services Manager',
    credentials: 'EA',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    bio: 'Since 1980, Diane has developed extensive expertise in Tax & Accounting, specializing in Business & Individuals, Estate and Trust Taxes, and Nonprofit Organizations. She manages tax preparers and a portfolio of individual tax clients.',
    linkedin: 'https://www.linkedin.com/in/diane-harbour-ea-a7a0002a/',
  },
  {
    name: 'Andrew Lesak',
    title: 'Director of Business Operations',
    credentials: 'BSA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
    bio: 'A seasoned professional with 21 years of experience, Andrew manages all support activities for the firm including human resources, information technology, facilities, financial reporting, product development, and workflow optimization.',
    linkedin: 'https://www.linkedin.com/in/andrewlesak/',
  },
  {
    name: 'Hina Arora',
    title: 'Tax Manager',
    credentials: '',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
    bio: 'Hina brings expertise in tax preparation and planning, working closely with clients to ensure compliance and maximize tax efficiency for businesses and individuals alike.',
  },
  {
    name: 'Cheryl Barnes',
    title: 'Office Manager & Client Satisfaction Manager',
    credentials: '',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
    bio: 'Cheryl ensures smooth office operations and exceptional client experiences. She is dedicated to maintaining the strong relationships that define Inner Circle Advisors.',
  },
  {
    name: 'Dumesha Udeshini',
    title: 'Training Manager',
    credentials: '',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400',
    bio: 'Dumesha leads training initiatives to ensure the team stays current with the latest industry practices, technologies, and regulatory requirements.',
  },
];

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
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
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4"
          >
            Meet the Experts Behind Your Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Our dedicated team brings decades of combined experience to help your business thrive.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay with social links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-500/90 via-secondary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href="mailto:info@innercircle.cpa"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-500 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium text-sm mb-1">
                    {member.title}
                  </p>
                  {member.credentials && (
                    <p className="text-gray-500 text-xs mb-3">
                      {member.credentials}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
