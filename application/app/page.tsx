import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import LandingPage from "@/components/landing-page";


export default async function Home() {
  return (
    <>
      <SignedOut >
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
