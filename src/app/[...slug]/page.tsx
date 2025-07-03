import { draftMode } from 'next/headers';

import { SanityDocument } from 'next-sanity';

import { client } from '@/lib/sanity';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const PAGE_QUERY = `*[_type == "page" && slug.current == $slug && _type != "blog" && _type != "project"][0]`;
const options = { next: { revalidate: 30 } };

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || 'home';
  const { isEnabled } = await draftMode();
  const page = await client.fetch<SanityDocument>(
    PAGE_QUERY,
    { slug },
    {
      ...options,
      ...(isEnabled
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : {}),
    }
  );

  if (!page) {
    return <div className="container mx-auto p-8">Page not found</div>;
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="mb-4 text-4xl font-bold">{page.title}</h1>
      {/* Render more fields as needed, e.g. PortableText for body */}
      {page.body && (
        <div className="prose">
          <pre>{JSON.stringify(page.body, null, 2)}</pre>
        </div>
      )}
    </main>
  );
};

export default Page;
