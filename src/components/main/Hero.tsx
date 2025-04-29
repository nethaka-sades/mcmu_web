import Image from "next/image";
import LOGO from "@/../public/MCMU_GOLD_LOGO.png";
import { BlurFade } from "../common/blur-fade";
import { BackgroundBeams } from "../common/background-beams";
import { FadeText } from "../common/fade-texts";
import { cn } from "@/lib/utils";
import { NumberTicker } from "../common/number-ticker";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div
            className={cn(
              "absolute inset-0 opacity-5",
              "[background-size:10px_10px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#ff9700_1px,transparent_1px)]"
            )}
          />
          <div className="relative flex flex-col min-h-screen items-center justify-center">
            <BlurFade delay={0.25} inView>
              <Image src={LOGO} alt={"alt"} width={500} className="" />
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-semibold text-balance md:text-6xl">
                Mahanama College
              </h2>
            </BlurFade>
            <BlurFade delay={0.75} inView>
              <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-semibold text-balance md:text-6xl">
                Media Unit
              </h2>
            </BlurFade>
            <BlurFade delay={2.0} inView>
              <p className="pt-2 mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
                Inspiring creativity since{" "}
                <NumberTicker
                  value={1987}
                  className="text-amber-400"
                />
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
