'use client';

import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  router.push('/tasks');

  return <main className='flex min-h-screen flex-col items-center justify-between p-24' />;
};

export default Home;
