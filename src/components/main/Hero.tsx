import Image from "next/image";
import LOGO from "@/../public/MCMU_GOLD_LOGO.png";
import { BlurFade } from "../common/blur-fade";
import { NumberTicker } from "../common/number-ticker";
import { BoxReveal } from "../common/box-reveal";

const Hero = () => {
  return (
    <section className="overflow-hidden px-5">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col min-h-screen justify-center items-center">
            <BlurFade delay={0} inView>
              <Image src={LOGO} alt={"alt"} width={200} className="" />
            </BlurFade>
            <BoxReveal duration={0.5}>
              <h2 className="mx-auto max-w-screen text-center text-5xl font-semibold text-balance md:text-8xl uppercase">
                Mahanama College
              </h2>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <h2 className="mx-auto max-w-screen-lg text-center text-3xl font-semibold text-balance md:text-8xl uppercase">
                Media Unit
              </h2>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <p className="pt-2 mx-auto max-w-screen px-5 text-center text-muted-foreground md:text-lg uppercase">
                Revolutionizing School Media since{" "}
                <span className="text-accent">1987</span>
              </p>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
