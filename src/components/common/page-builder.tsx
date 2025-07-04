import Link from 'next/link';

import { Page } from '@/types/sanity.types';

import BlockRenderer from './block-renderer';

type PageBuilderPageProps = {
  page: Page;
};

/**
 * The PageBuilder component is used to render the blocks from the `pageBuilder` field in the Page type in your Sanity Studio.
 */
const PageBuilder = ({ page }: PageBuilderPageProps) => {
  if (page?.content && page.content.length > 0) {
    return (
      /* eslint-disable */
      <>
        {page.content.map((block: any, index: number) => (
          <BlockRenderer key={block._key} index={index} block={block} />
        ))}
      </>
      /* eslint-enable */
    );
  }

  // If there are no blocks in the page builder.
  return (
    <>
      <div className="container">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          This page has no content!
        </h1>
        <p className="mt-2 text-base text-gray-500">
          Open the page in Sanity Studio to add content.
        </p>
        <div className="mt-10 flex">
          <Link
            className="mr-6 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-colors duration-200 hover:bg-red-500 focus:bg-cyan-500"
            //@ts-expect-error
            href={`${process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333'}/structure/intent/edit/template=page;type=page;path=pageBuilder;id=${page._id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Add content to this page
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageBuilder;
