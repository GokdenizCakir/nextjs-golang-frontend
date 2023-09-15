import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session) {
    return redirect('/register');
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Hello
    </main>
  );
}
