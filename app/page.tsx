import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center py-10 gap-10">
      <ModeToggle />
      <h1 className="text-2xl font-bold">Home</h1>
      <Link href='/private'>
        <Button variant='default'>
          Private Page
        </Button>
      </Link>
    </main>
  );
}
