'use client';

import { ReactNode, createContext, useContext } from 'react';

import { SiteConfig } from '@/types/sanity.types';

const SiteConfigContext = createContext<SiteConfig | undefined>(undefined);

interface SanityProviderProps {
  siteConfig: SiteConfig;
  children: ReactNode;
}

export const SanityProvider = ({
  siteConfig,
  children,
}: SanityProviderProps) => {
  return (
    <SiteConfigContext.Provider value={siteConfig}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error('useSiteConfig must be used within a SanityProvider');
  }
  return context;
};
