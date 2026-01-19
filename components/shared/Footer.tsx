'use client';

import Link from 'next/link';
import { footerLinks } from '@/data/config/footerLinks';
import { siteConfig } from '@/data/config/site.settings';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-500 text-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold text-white">
                  Inner Circle
                </span>
                <span className="text-2xl font-light text-primary-500 ml-2">
                  Advisors
                </span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-6">
                A Business Advisor You Can Trust. Providing comprehensive tax
                planning and business advisory services since 1970.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>{siteConfig.address?.street}</p>
                <p>
                  {siteConfig.address?.city}, {siteConfig.address?.state}{' '}
                  {siteConfig.address?.zip}
                </p>
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block hover:text-primary-500 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                )}
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((column) => (
              <div key={column.columnName}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {column.columnName}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-primary-500 transition-colors duration-200"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
