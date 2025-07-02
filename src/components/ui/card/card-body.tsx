import urlFor from '@/lib/sanity-image';

interface CardBodyProps {
  content: string;
  image: string;
}

const CardBody = ({ content, image }: CardBodyProps) => {
  const postImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : undefined;
  return (
    <div>
      <img src={postImageUrl} alt={content} />
      <p>{content}</p>
    </div>
  );
};

export default CardBody;
