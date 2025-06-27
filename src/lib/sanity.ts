import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '4z0j34ys',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
