import { cn } from "@/lib/utils";

import React from "react";

import { BoxReveal } from "../../components/common/box-reveal";
import { InteractiveHoverButton } from "../../components/common/interactivehoverbtn";
import Link from "next/link";
import { Header, HeaderTitle } from "../../components/common/header";

export default function About() {
  return (
    <main className="px-10">
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
                  Mahanama College
                </h1>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <h1 className="text-3xl text-center text-balance font-semibold lg:text-6xl uppercase">
                  Media Unit
                </h1>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <p className="pt-7 text-balance text-muted-foreground lg:text-lg">
                  Mahanama College Media Unit is the official media department
                  of{" "}
                  <span className="text-accent">
                    Mahanama College, Colombo 03.
                  </span>
                  . Established on November 2, 1987 by alumnus Dimal Arandara ,
                  the unit has grown into a vibrant, student-led organization
                  dedicated to school broadcasting, journalism, and digital
                  media. Under the guidance of Principal Mr. Prabath Withanage
                  and the leadership of Media Unit president Nethaka De Saram,
                  MCMU lives its guiding slogan “Revolutionizing School Media
                  Concept.” This mission reflects the unit’s commitment to
                  innovation and excellence: MCMU serves as a creative platform
                  where students learn to communicate, capture, and share the
                  stories of Mahanama College with professionalism and pride.
                </p>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <p className="pt-7 text-balance text-muted-foreground lg:text-lg">
                  Over its 38 years history, MCMU has built a strong legacy in
                  Sri Lankan school media . It is one of the oldest and most
                  experienced student media units in the country, and it has
                  achieved several pioneering milestones. Notably, MCMU produced
                  the first-ever short-wave school radio transmission and staged
                  Sri Lanka’s first live-streamed school cricket match broadcast
                  on Facebook Live . In 2020 the unit was recognized for
                  creating the nation’s first award-winning school media
                  website, showcasing Mahanama students’ content online. These
                  pioneering accomplishments have inspired future generations of
                  student journalists and elevated the profile of Mahanama
                  College in the national media landscape.
                </p>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <p className="pt-7 text-balance text-muted-foreground lg:text-lg">
                  Each school day, the Media Unit underpins campus communication
                  and events. Student members write and broadcast the daily
                  announcements for assemblies, ensuring every important message
                  reaches the student body clearly. The unit also handles all
                  technical and audio-visual duties: they set up microphones and
                  speakers at ceremonies, operate cameras and projectors during
                  programs, and manage live recordings. During special events –
                  from prizegivings to sports meets – MCMU provides live
                  commentary, professional recording, and photography. In short,
                  every assembly announcement, show, and celebration is seen and
                  heard by all through the team’s smooth technical execution
                </p>
              </BoxReveal>
            </div>
          </div>
        </section>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={"https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"}
            alt={"placeholder"}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
              <div>
                <p className="mb-2 text-lg font-semibold">Meet the Team Behind MCMU 2026</p>
                <p className="text-muted-foreground">Get to know the passionate students and dedicated staff who drive the Mahanama College Media Unit forward.</p>
              </div>
              <InteractiveHoverButton className="mr-auto mt-10">
                <Link href={"/committee"}>MEET THE TEAM</Link>
              </InteractiveHoverButton>
            </div>
            <img
              src={"/images/about_secondary_image.jpg"}
              alt={"placeholder"}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
