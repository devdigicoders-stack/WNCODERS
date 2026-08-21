import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | WNCOder',
  description: 'Explore the premium services offered by WNCOder including Web Development, App Development, and SEO optimization.',
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-zinc-50 dark:bg-black text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-lg max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
        At WNCOder, we provide cutting-edge solutions for your business needs. 
      </p>
      <ul className="mt-8 list-disc text-left space-y-2 text-zinc-600 dark:text-zinc-400">
        <li>Web Development</li>
        <li>App Development</li>
        <li>Search Engine Optimization (SEO)</li>
      </ul>
    </main>
  );
}
