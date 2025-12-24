import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="p-8">
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <a href="/dashboard">Go to Dashboard</a>
      </SignedIn>
    </main>
  );
}
