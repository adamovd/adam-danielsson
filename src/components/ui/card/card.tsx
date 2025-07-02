import CardBody from './card-body';
import CardFooter from './card-footer';
import CardHeader from './card-header';

interface CardProps {
  title: string;
  content?: string;
  link?: string;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
}

const Card = ({
  title,
  content,
  link,
  image,
  backgroundColor,
  textColor,
}: CardProps) => {
  return (
    <article className="max-w-sm overflow-hidden rounded-xl bg-yellow-300">
      <CardHeader title={title} />
      <CardBody content={content ?? ''} image={image ?? ''} />
      <CardFooter link={link ?? ''} />
    </article>
  );
};

export default Card;
