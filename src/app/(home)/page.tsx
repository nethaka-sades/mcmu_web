import { BlurFade } from "@/components/common/blur-fade";
import { DotPattern } from "@/components/common/dot-pattern";
import { Hero } from "@/components/main/Hero";
import { cn } from "@/lib/utils";

import LOGO from "@/../public/test.png";

import { Delete } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Hero />
      <Hero />
    </main>
  );
}
