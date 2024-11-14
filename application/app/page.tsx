import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Unlock Your Potential
        </h1>
        <p className="text-slate-600 text-lg sm:text-xl max-w-md">
          Rise transforms personal development into an engaging journey where
          every action contributes to measurable growth.
        </p>
        <Link href={"/activity"}>
          <Button className="text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-200">
            Join the Rise Community
          </Button>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center">
        <span>Made with ❤️ by</span>
        <a
          href="https://samylayaida.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--rise-primary)] font-medium hover:underline"
        >
          Samy Layaida
        </a>
      </footer>
    </div>
  );
}
