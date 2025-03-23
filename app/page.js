"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return <p>You need to <a href="/login">log in</a> to view this page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.email}!</h1>
      <button onClick={() => signOut()}>Logout</button>
      <LandingSection />
    </div>
  );
}

export function LandingSection() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
              app/page.js
            </code>
          </li>
        </ol>
      </main>
    </div>
  );
}