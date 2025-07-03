import { draftMode } from 'next/headers';

import { VisualEditing } from 'next-sanity';

import '@/app/globals.css';
import { DisableDraftMode } from '@/components/disable-draft-mode';
import Header from '@/components/layout/header';
import getSiteConfig from '@/lib/get-site-config';
import { SanityProvider } from '@/providers/sanity-provider';
import { SiteConfig } from '@/types/sanity.types';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = (await getSiteConfig()) as SiteConfig;
  return (
    <html lang="en">
      <body className="bg-light text-dark font-sans antialiased">
        <SanityProvider siteConfig={siteConfig}>
          <Header siteConfig={siteConfig} />
          {children}
          {(await draftMode()).isEnabled && (
            <>
              <VisualEditing />
              <DisableDraftMode />
            </>
          )}
        </SanityProvider>
      </body>
    </html>
  );
}
