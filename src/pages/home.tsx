import Navbar from "@/components/ui/Navbar";
import { SEO } from "../components/global";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <>
      <SEO title="AccomX | Home" />
      <div className="  min-h-[100dvh] mx-auto flex flex-col text-black">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
