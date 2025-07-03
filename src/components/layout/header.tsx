import { SiteConfig } from '@/types/sanity.types';

import Navigation from './navigation';

interface HeaderProps {
  siteConfig: SiteConfig;
}

const Header = ({ siteConfig }: HeaderProps) => {
  return (
    <header className="mt-4 flex items-center justify-center">
      <Navigation mainNavRef={siteConfig.mainNav?._ref} />
    </header>
  );
};

export default Header;
