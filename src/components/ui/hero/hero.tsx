import CustomPortableText from '@/components/common/portable-text';
import urlFor from '@/lib/sanity-image';
import { Hero } from '@/types/sanity.types';

const HeroComponent = ({
  body,
  image,
  horizontalPosition,
  verticalPosition,
}: Hero) => {
  const heroImageUrl = image
    ? urlFor(image)?.width(550).height(310).url()
    : undefined;

  const horizontalPositionMap = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    left: 'items-start', // legacy/typo support
    right: 'items-end', // legacy/typo support
  };

  const verticalPositionMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    top: 'justify-start', // legacy/typo support
    bottom: 'justify-end', // legacy/typo support
    middle: 'justify-center', // legacy/typo support
  };

  // Normalize and map positions
  const safeHorizontal = (horizontalPosition || 'center')
    .toString()
    .trim()
    .toLowerCase();
  const safeVertical = (verticalPosition || 'center')
    .toString()
    .trim()
    .toLowerCase();

  const horizontalClass =
    horizontalPositionMap[
      safeHorizontal as keyof typeof horizontalPositionMap
    ] || 'items-center';
  const verticalClass =
    verticalPositionMap[safeVertical as keyof typeof verticalPositionMap] ||
    'justify-center';

  console.log(
    'Raw:',
    horizontalPosition,
    verticalPosition,
    '| Normalized:',
    safeHorizontal,
    safeVertical
  );
  console.log('Mapped:', horizontalClass, verticalClass);

  return (
    <section className="relative h-screen w-full">
      <article
        className={`absolute inset-0 flex flex-col ${horizontalClass} ${verticalClass} pointer-events-none h-full w-full`}
      >
        <CustomPortableText value={body || []} />
      </article>
      {heroImageUrl && (
        <figure
          className="absolute inset-0 -z-10 flex h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        />
      )}
    </section>
  );
};

export default HeroComponent;
