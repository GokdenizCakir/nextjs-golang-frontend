import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    return redirect('/register');
  }

  return (
    <section className='flex min-h-screen flex-col items-center p-24'>
      <div className='bg-customGold w-52 aspect-square'></div>
    </section>
  );
}
