import React from "react";

import { BoxReveal } from "../common/box-reveal";
import { InteractiveHoverButton } from "../common/interactivehoverbtn";
import Link from "next/link";
import { Header, HeaderTitle } from "../common/header";

const AboutusComp = () => {
  return (
    <section className="py-48 px-10">
      <div className="container text-center">
        <div className="relative flex flex-col justify-center items-center">
          <div className="py-3">
            <Header>
              <HeaderTitle>About</HeaderTitle>
            </Header>
          </div>
          <BoxReveal duration={0.5}>
            <h1 className="text-3xl text-center text-balance font-semibold lg:text-6xl uppercase">
              Revolutionizing <span className="text-accent">School</span>
            </h1>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <h1 className="text-3xl text-center text-balance font-semibold lg:text-6xl uppercase">
              <span className="text-accent">Media</span> Concept
            </h1>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <p className="pt-7 text-balance text-muted-foreground lg:text-lg">
              From crisp announcements to live productions, we are the voice,
              the lens, and the sound behind every story at{" "}
              <span className="text-accent">Mahanama College.</span> Learn more
              about our journey, vision, and the people who make it all happen.
            </p>
          </BoxReveal>
        </div>
        <InteractiveHoverButton className="mt-10">
          <Link href={"/about"}>WHO ARE WE</Link>
        </InteractiveHoverButton>
      </div>
    </section>
  );
};

export { AboutusComp };
