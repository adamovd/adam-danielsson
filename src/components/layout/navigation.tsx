import { draftMode } from 'next/headers';

import { client } from '@/lib/sanity';
import { Navigation, NavigationItem } from '@/types/sanity.types';

import ResolvedLink from '../common/resolved-link';

const NAVIGATION_QUERY = `
*[_type == "navigation"]{
  isMain,
  items[]{
    _key,
    text,
    navigationItemUrl{
      ...,
      _type == "link" => {
        "page": page->slug.current,
        "post": post->slug.current
      }
    }
  }
}
`;
const options = { next: { revalidate: 30 } };

interface NavigationProps {
  mainNavRef?: string;
}

const MainNavigation = async ({ mainNavRef }: NavigationProps) => {
  const { isEnabled } = await draftMode();

  let mainNavigation: Navigation | undefined;
  if (mainNavRef) {
    mainNavigation = await client.fetch<Navigation>(
      `*[_type == "navigation" && _id == $id][0]`,
      { id: mainNavRef },
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
  } else {
    const navigation: Navigation[] = await client.fetch<Navigation[]>(
      NAVIGATION_QUERY,
      {},
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
    mainNavigation = navigation.find((nav) => nav.isMain);
  }

  const items: NavigationItem[] = mainNavigation?.items || [];

  return (
    <nav className="bg-primary text-light fixed top-5 z-50 inline-flex items-center justify-start gap-20 overflow-hidden rounded-[50px] px-12 py-2 font-sans-medium">
      {items.map((item: NavigationItem, index) => (
        <ResolvedLink key={index} link={item.navigationItemUrl}>
          {item.text}
        </ResolvedLink>
      ))}
    </nav>
  );
};

export default MainNavigation;
