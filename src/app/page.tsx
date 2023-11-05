import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Home Page</h1>
      <p>Selam Kelam gggggggssssssssss </p>
      <h3>Selam</h3>
      <div className="flex gap-1 text-blue-600">
        <Link href="/login" className="underline">
          Login
        </Link>
        <Link href="/register" className="underline">
          Register
        </Link>
        <Link href="/profile" className="underline">
          Profile
        </Link>
      </div>
    </main>
  );
}
