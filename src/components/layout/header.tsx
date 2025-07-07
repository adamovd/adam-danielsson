import Navigation from './navigation';

interface HeaderProps {
  mainNavRef?: string;
}

const Header = ({ mainNavRef }: HeaderProps) => {
  return (
    <header className="relative flex items-center justify-center">
      <Navigation mainNavRef={mainNavRef} />
    </header>
  );
};

export default Header;
