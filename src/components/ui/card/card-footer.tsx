import Link from 'next/link';

interface CardFooterProps {
  link: string;
}

const CardFooter = ({ link }: CardFooterProps) => {
  return (
    <footer className="p-4">
      <Link href={link as any}>Read more</Link>
    </footer>
  );
};

export default CardFooter;
