import { Hero } from "@/components/main/Hero";
import { cn } from "@/lib/utils";
import Noise from "@/components/common/noise";
import { MarqueeDemo } from "@/components/main/LogoSlider";
import { FeaturesBento } from "@/components/main/FeaturesBento";
import { AboutusComp } from "@/components/main/AboutusComp";
import TeamComp from "@/components/main/TeamComp";


export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 z-0 opacity-75">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
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
        <FeaturesBento />
        <AboutusComp />
        <TeamComp />
      </div>
    </main>
  );
}
