'use client';

import { ReactNode } from 'react';

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  return <>{children}</>;
}
