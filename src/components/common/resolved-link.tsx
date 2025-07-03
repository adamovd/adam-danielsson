import Link from 'next/link';

import { Link as SanityLink } from '@/types/sanity.types';

interface ResolvedLinkProps {
  link: SanityLink | undefined;
  children: React.ReactNode;
}

export default function ResolvedLink({ link, children }: ResolvedLinkProps) {
  return (
    <Link
      //@ts-expect-error
      href={
        link?.linkType === 'page'
          ? link.page
          : `blog/${link?.post}` || link?.href
      }
    >
      {children}
    </Link>
  );
}
