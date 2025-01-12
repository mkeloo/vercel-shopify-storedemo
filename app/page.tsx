import HomeContent from "@/components/home/HomeContent";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HomeContent />
    </main>
  );
}
