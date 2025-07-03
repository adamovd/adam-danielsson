import { PortableText } from 'next-sanity';

import { Hero } from '@/types/sanity.types';

const HeroComponent = ({ title, body, image }: Hero) => {
  return (
    <section>
      <h1>{title}</h1>
      <PortableText value={body || []} />
    </section>
  );
};

export default HeroComponent;
// This component is a placeholder for the Hero block.
