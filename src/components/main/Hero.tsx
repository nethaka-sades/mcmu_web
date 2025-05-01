import Image from "next/image";
import LOGO from "@/../public/MCMU_GOLD_LOGO.png";
import { BlurFade } from "../common/blur-fade";
import { NumberTicker } from "../common/number-ticker";

const Hero = () => {
  return (
    <section className="overflow-hidden px-5">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col min-h-screen justify-center items-center">
            <BlurFade delay={0.25} inView>
              <Image src={LOGO} alt={"alt"} width={200} className="" />
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <h2 className="mx-auto max-w-screen text-center text-5xl font-semibold text-balance md:text-8xl uppercase">
                Mahanama College
              </h2>
            </BlurFade>
            <BlurFade delay={0.75} inView>
              <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-semibold text-balance md:text-8xl uppercase">
                Media Unit
              </h2>
            </BlurFade>
            <BlurFade delay={2.0} inView>
              <p className="pt-2 mx-auto max-w-screen px-5 text-center text-muted-foreground md:text-lg uppercase">
                Revolutionizing School Media since{" "}
                <NumberTicker value={1987} className="text-amber-400" />
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
