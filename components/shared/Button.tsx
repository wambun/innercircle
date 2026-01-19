'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]';

    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-[1.02] shadow-sm',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 hover:scale-[1.02]',
      outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
      ghost: 'text-secondary-500 hover:text-primary-500 hover:bg-primary-100/50',
      light: 'bg-white text-primary-500 hover:bg-gray-100 hover:scale-[1.02] shadow-sm',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
