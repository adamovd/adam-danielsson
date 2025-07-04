'use client';

import { useSiteConfig } from '@/providers/sanity-provider';

const Home = () => {
  const siteConfig = useSiteConfig();

  return (
    <main className="container min-h-screen p-8">
      <h1 className="mb-8 font-serif text-4xl text-dark">Adam Danielsson</h1>
    </main>
  );
};

export default Home;
