import { Hero } from "@/components/main/Hero";
import { cn } from "@/lib/utils";
import { MarqueeDemo } from "@/components/main/LogoSlider";
import { AboutusComp } from "@/components/main/AboutusComp";
import TeamComp from "@/components/main/TeamComp";
import NetworkComp from "@/components/main/NetworkComp";

export default function Home() {
  return (
    <main>
      <div
        className={cn(
          "fixed inset-0 opacity-15",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#ff9700_1px,transparent_1px)]",
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Hero />
        <MarqueeDemo />
        <NetworkComp />
        <AboutusComp />
        <TeamComp />
      </div>
    </main>
  );
}
