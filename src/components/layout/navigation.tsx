import { draftMode } from 'next/headers';

import { client } from '@/lib/sanity';
import { Navigation, NavigationItem } from '@/types/sanity.types';

import ResolvedLink from '../common/link';

const NAVIGATION_QUERY = `*[_type == "navigation"]{isMain, items}`;
const options = { next: { revalidate: 30 } };

const MainNavigation = async () => {
  const { isEnabled } = await draftMode();
  const navigation: Navigation[] = await client.fetch<Navigation[]>(
    NAVIGATION_QUERY,
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

  const mainNavigation = navigation.find((nav) => nav.isMain);

  const items: NavigationItem[] = mainNavigation?.items || [];

  console.log(items);

  return (
    <nav className="flex space-x-4">
      {items.map((item: NavigationItem, index) => (
        <ResolvedLink key={index} link={item.navigationItemUrl}>
          {item.text}
        </ResolvedLink>
      ))}
    </nav>
  );
};

export default MainNavigation;
