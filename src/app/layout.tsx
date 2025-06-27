import { draftMode } from 'next/headers';

import { VisualEditing } from 'next-sanity';

import { DisableDraftMode } from '@/components/disable-draft-mode';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
