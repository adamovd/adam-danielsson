import { Metadata } from 'next';
import Head from 'next/head';
import { draftMode } from 'next/headers';

import { PageOnboarding } from '@/components/common/onboarding';
import PageBuilder from '@/components/common/page-builder';
import { sanityFetch } from '@/lib/live';
import { getPageQuery, pagesSlugs } from '@/lib/queries';
import { Page as PageType } from '@/types/sanity.types';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: 'published',
    stega: false,
  });
  return data.map((item: { slug: string | null }) => ({
    slug: !item.slug || item.slug === 'home' ? [] : item.slug.split('/'),
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
    stega: false,
  });

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata;
}

const options = { next: { revalidate: 30 } };

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || 'home';
  console.log('Resolved slug:', slug);
  const { isEnabled } = await draftMode();
  const [{ data: page }] = await Promise.all([
    sanityFetch({
      query: getPageQuery,
      params: { slug },
      ...options.next,
      ...(isEnabled
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : {}),
    }),
  ]);

  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{page.heading}</title>
      </Head>
      <PageBuilder page={page as unknown as PageType} />
    </>
  );
};

export default Page;
