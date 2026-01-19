'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  image: string;
  bio: string;
  linkedin?: string;
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
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
  );
}

const teamMembers: TeamMember[] = [
  {
    name: 'Gregory D. Hostelley',
    title: 'Managing Principal & Chief Executive Advisor',
    credentials: 'CPA, CGMA, Certified Value Builder™',
    image: '/team/greg.webp',
    bio: 'An entrepreneurial-minded CPA known as the "King of Referrals" in Northeast Ohio, Greg has over 40 years in the accounting field. A lifetime Cleveland resident and St. Ignatius alumnus, he attended Baldwin-Wallace University and became one of the youngest accountants in the region. His career began at age 12 in his father\'s company, and he built Inner Circle Advisors one satisfied client at a time.',
    linkedin: 'https://www.linkedin.com/in/greghostelley/',
  },
  {
    name: 'Cheryl A. Hostelley',
    title: 'Accountant',
    credentials: '',
    image: '/team/cheryl-hostelley.webp',
    bio: 'Cheryl brings meticulous attention to detail and extensive accounting expertise to Inner Circle Advisors. A University of Akron graduate, she ensures accurate financial reporting and compliance for our diverse client base, maintaining the highest standards of accounting excellence.',
    linkedin: 'https://www.linkedin.com/in/cheryl-a-hostelley-b5492278/',
  },
  {
    name: 'Kim Hostelley',
    title: 'Client Services Manager',
    credentials: '',
    image: '/team/kim.webp',
    bio: 'Kim plays a vital role in client relations at Inner Circle Advisors, ensuring seamless communication and exceptional service delivery. Her dedication to client satisfaction helps maintain the trusted relationships that define our firm.',
  },
  {
    name: 'Andrew Lesak',
    title: 'Director of Business Operations',
    credentials: 'BSA',
    image: '/team/andrew.webp',
    bio: 'A results-driven business leader with 33 years of experience, Andrew holds a BSA from the University of Akron and brings expertise in project management, business analysis, and IT. He manages human resources, information technology, facilities, financial reporting, product development, and workflow optimization for the firm.',
    linkedin: 'https://www.linkedin.com/in/andrewlesak/',
  },
  {
    name: 'Hina Arora',
    title: 'Tax Manager',
    credentials: 'CPA',
    image: '/team/hina.webp',
    bio: 'Hina brings deep expertise in tax preparation and planning, working closely with clients to ensure compliance and maximize tax efficiency. She specializes in helping businesses and individuals navigate complex tax situations with precision and care.',
    linkedin: 'https://www.linkedin.com/in/hina-arora-cpa-55534b8b/',
  },
  {
    name: 'Cheryl Barnes',
    title: 'Office Manager',
    credentials: '',
    image: '/team/cheryl.webp',
    bio: 'Cheryl is the heart of our office operations, ensuring exceptional client experiences from first contact through ongoing service. Her dedication to client satisfaction and smooth office management helps maintain the strong relationships that define Inner Circle Advisors.',
  },
  {
    name: 'Conor Sullivan',
    title: 'Staff Accountant',
    credentials: '',
    image: '/team/connor.webp',
    bio: 'Conor supports our accounting team with dedication and precision, assisting with financial statements, tax preparation, and client reporting. His commitment to accuracy and professional growth makes him a valuable member of the Inner Circle team.',
  },
  {
    name: 'Joe Madigan',
    title: 'Senior Accountant',
    credentials: '',
    image: '/team/joe.webp',
    bio: 'Joe brings years of accounting experience to Inner Circle Advisors, providing reliable financial guidance and comprehensive accounting services. His expertise spans tax planning, financial reporting, and business advisory services.',
  },
  {
    name: 'Lisa Bergstrom',
    title: 'Bookkeeping Specialist',
    credentials: '',
    image: '/team/lisa.webp',
    bio: 'Lisa manages bookkeeping services with precision and care, ensuring our clients\' financial records are accurate and up-to-date. Her attention to detail and organizational skills help businesses maintain clear financial visibility.',
  },
  {
    name: 'Marcus Weatherbee',
    title: 'Tax Specialist',
    credentials: '',
    image: '/team/marcus.webp',
    bio: 'Marcus specializes in tax preparation and compliance, helping clients navigate complex tax regulations with confidence. His thorough approach and dedication to client service ensure optimal tax outcomes for individuals and businesses alike.',
  },
  {
    name: 'Suzanne Freeman',
    title: 'Administrative Coordinator',
    credentials: '',
    image: '/team/suzanne.webp',
    bio: 'Suzanne coordinates administrative functions and client communications, ensuring smooth day-to-day operations at Inner Circle Advisors. Her organizational expertise and friendly demeanor help create a welcoming environment for all our clients.',
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
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
