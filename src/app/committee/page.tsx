import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

import { BoxReveal } from "../../components/common/box-reveal";
import { Header, HeaderTitle } from "../../components/common/header";

const president = [
  {
    id: "pres-1",
    name: "Nethaka De Saram",
    role: "President",
    avatar: "/PFPS/nethaka.webp",
  },
];

const TopBoard = [
  {
    id: "tb-1",
    name: "Deegayu Jayasinghe",
    role: "Vice-President",
    avatar: "/PFPS/deegayu.webp",
  },
  {
    id: "tb-2",
    name: "Chenura Pathirana",
    role: "Secretary",
    avatar: "/PFPS/chenura.webp",
  },
  {
    id: "tb-3",
    name: "Pabasara Warnajith",
    role: "Treasurer",
    avatar: "/PFPS/pabasara.webp",
  },
  {
    id: "tb-4",
    name: "Tharuja Dhayan",
    role: "Vice-Secretary",
    avatar: "/PFPS/tharuja.webp",
  },
];

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
        <section className="pt-48 pb-5 px-10">
          <div className="container text-center">
            <div className="relative flex flex-col justify-center items-center">
              <div className="py-3">
                <Header>
                  <HeaderTitle>Committee</HeaderTitle>
                </Header>
              </div>
              <BoxReveal duration={0.5}>
                <h1 className="text-3xl text-center text-balance font-semibold lg:text-6xl uppercase">
                  Introducing
                </h1>
              </BoxReveal>
              <BoxReveal duration={0.5}>
                <h1 className="text-3xl text-center text-balance font-semibold lg:text-6xl uppercase">
                  2025/26 Committee
                </h1>
              </BoxReveal>
            </div>
          </div>
        </section>
        <section className="px-10 flex flex-col items-center">
          <BoxReveal duration={0.5}>
            <div className="container w-full mt-16">
              {president.map((member) => (
                <div key={member.id} className="flex flex-col items-center">
                  <Avatar className="mb-4 size-20 border md:mb-5 lg:size-30">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name}</AvatarFallback>
                  </Avatar>
                  <p className="text-center font-medium">{member.name}</p>
                  <p className="text-accent text-center">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
              {TopBoard.map((member) => (
                <div key={member.id} className="flex flex-col items-center">
                  <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name}</AvatarFallback>
                  </Avatar>
                  <p className="text-center font-medium">{member.name}</p>
                  <p className="text-accent text-center">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </BoxReveal>
        </section>
      </div>
    </main>
  );
}
