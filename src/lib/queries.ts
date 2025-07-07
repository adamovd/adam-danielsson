import { defineQuery } from 'next-sanity';

// --- Block Fragments ---
export const heroBlockFields = /* groq */ `
  _type,
  _key,
  body,
  image
`;

// --- Page Query ---
export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    name,
    slug,
    heading,
    subheading,
    content[]{
      ...,
      _type == "hero" => {
        ${heroBlockFields}
      }
      // Add more block types here as needed
    },
  }
`);

// --- Slugs Query ---
export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);

// --- Example: Add more block fragments and queries as needed ---
// export const callToActionBlockFields = /* groq */ `...`;
// export const getBlogQuery = defineQuery(`...`);
