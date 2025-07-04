import Head from 'next/head';
import { draftMode } from 'next/headers';

import { SanityDocument } from 'next-sanity';

import { PageOnboarding } from '@/components/common/onboarding';
import PageBuilder from '@/components/common/page-builder';
import { client } from '@/lib/sanity';
import { Page as PageType } from '@/types/sanity.types';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const PAGE_QUERY = `*[_type == "page" && slug.current == $slug && _type != "blog" && _type != "work"][0]{
  ...,
  content[]{
    ...,
    _type == "hero" => {
      _type,
      _key,
      title,
      body,
      image
    }
    // add other block projections as needed
  }
}`;
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

  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    );
  }

  return (
    <div className="my-12 lg:my-24">
      <Head>
        <title>{page.heading}</title>
      </Head>
      <div className="">
        <div className="container">
          <div className="border-b border-gray-100 pb-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                {page.heading}
              </h2>
              <p className="mt-4 text-base font-light uppercase leading-relaxed text-gray-600 lg:text-lg">
                {page.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PageBuilder page={page as PageType} />
    </div>
  );
};

export default Page;
