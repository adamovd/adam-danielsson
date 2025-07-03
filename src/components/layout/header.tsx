import Navigation from './navigation';

interface HeaderProps {
  mainNavRef?: string;
}

const Header = ({ mainNavRef }: HeaderProps) => {
  return (
    <header className="relative mt-4 flex items-center justify-center">
      <Navigation mainNavRef={mainNavRef} />
    </header>
  );
};

export default Header;
