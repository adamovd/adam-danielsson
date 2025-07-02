import { draftMode } from 'next/headers';
import Link from 'next/link';

import { type SanityDocument } from 'next-sanity';

import { client } from '@/lib/sanity';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const { isEnabled } = await draftMode();
  const posts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      ...options,
      ...(isEnabled
        ? {
            perspective: 'previewDrafts',
            useCdn: false,
            stega: true,
          }
        : {}),
    }
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl bg-dark-100 p-8">
      <h1 className="mb-8 text-4xl font-bold text-orange">Adam Danielsson</h1>
      <Link href="/blog" className="mb-4 inline-block text-lg hover:underline">
        View all posts
      </Link>
    </main>
  );
}
