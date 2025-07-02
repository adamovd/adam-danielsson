import { draftMode } from 'next/headers';

import { VisualEditing } from 'next-sanity';

import '@/app/globals.css';
import { DisableDraftMode } from '@/components/disable-draft-mode';
import Header from '@/components/layout/header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-100 text-light-100">
        <Header />
        {children}
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
