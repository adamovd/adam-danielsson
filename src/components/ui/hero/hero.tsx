import { PortableText } from 'next-sanity';

import urlFor from '@/lib/sanity-image';
import { Hero } from '@/types/sanity.types';

const HeroComponent = ({ title, body, image }: Hero) => {
  const heroImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : undefined;
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-6 bg-secondary p-6">
      {heroImageUrl && (
        <div className="mb-6">
          <img
            src={heroImageUrl}
            alt={'Hero Image'}
            className="h-auto w-full rounded-lg"
          />
        </div>
      )}
      <h1 className="font-serif text-4xl">{title}</h1>
      <PortableText value={body || []} />
    </section>
  );
};

export default HeroComponent;
// This component is a placeholder for the Hero block.
