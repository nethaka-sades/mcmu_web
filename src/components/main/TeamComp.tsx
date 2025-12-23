import { Twitter, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Header, HeaderTitle } from "../common/header";
import { BoxReveal } from "../common/box-reveal";
import { InteractiveHoverButton } from "../common/interactivehoverbtn";
import Link from "next/link";

const team = [
  {
    name: "Chenura Pathirana",
    role: "Secretary",
    image:
      "/PFPS/chenura.jpg",
  },
  {
    name: "Nethaka De Saram",
    role: "President",
    image:
      "/PFPS/nethaka.jpg",
  },
  {
    name: "Pabasara Warnajith",
    role: "Treasurer",
    image:
      "/PFPS/pabasara.JPG",
  },
];

export default function TeamComp() {
  return (
    <section className="container px-10 text-center py-48 lg:py-32">
      <div className="flex flex-col items-center justify-center">
        <div className="py-3">
          <Header>
            <HeaderTitle>Committee</HeaderTitle>
          </Header>
        </div>
        <BoxReveal duration={0.5}>
        <div className="mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-5xl font-bold md:text-8xl md:leading-tight">
            EXCO
          </h2>
        </div>
        </BoxReveal>

        <BoxReveal duration={0.5} delay={0.75}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <Avatar className="size-20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div className="mt-4 text-center">
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-accent">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        </BoxReveal>
        <InteractiveHoverButton className="mt-10">
          <Link href={"/committee"}>MEET THE COMMITTEE</Link>
        </InteractiveHoverButton>
      </div>
    </section>
  );
}
