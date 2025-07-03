import { SanityDocument } from 'next-sanity';

import { client } from '@/lib/sanity';

const SITE_CONFIG_QUERY = `*[_type == "siteConfig"][0]{
  title,
  url,
  frontpage->{_id, title, slug},
  mainNav->,
  socialNav->
}`;

const getSiteConfig = (): Promise<SanityDocument> => {
  return client.fetch(SITE_CONFIG_QUERY, {}, { perspective: 'drafts' });
};

export default getSiteConfig;
