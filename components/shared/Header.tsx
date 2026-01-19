'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-secondary-500/80 backdrop-blur-sm'
      )}
    >
      <nav className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48">
              {/* Regular logo for scrolled state (white bg) */}
              <Image
                src="/logo.webp"
                alt="Inner Circle Advisors"
                fill
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isScrolled ? 'opacity-100' : 'opacity-0'
                )}
                priority
              />
              {/* White logo for dark header */}
              <Image
                src="/logo-white.webp"
                alt="Inner Circle Advisors"
                fill
                className={cn(
                  'object-contain object-left transition-opacity duration-300',
                  isScrolled ? 'opacity-0' : 'opacity-100'
                )}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {headerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  isScrolled
                    ? pathname === link.href
                      ? 'text-primary-500'
                      : 'text-secondary-500 hover:text-primary-500'
                    : pathname === link.href
                      ? 'text-primary-300'
                      : 'text-white hover:text-primary-300'
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              href="/contact"
              size="sm"
              variant={isScrolled ? 'primary' : 'light'}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 transition-colors',
              isScrolled ? 'text-secondary-500' : 'text-white'
            )}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-6 space-y-4">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary-500'
                      : 'text-secondary-500 hover:text-primary-500'
                  )}
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-4">
                <Button href="/contact" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
