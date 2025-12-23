import { BoxReveal } from "@/components/common/box-reveal";
import { cn } from "@/lib/utils";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Header, HeaderTitle } from "../../components/common/header";

export default function Contact() {
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
        <section className="pt-24 pb-5 px-10">
          <div className="container text-center">
            <div className="relative flex flex-col justify-center items-center">
              <div className="py-3">
                <Header>
                  <HeaderTitle>Contact</HeaderTitle>
                </Header>
              </div>
              <BoxReveal duration={0.5}>
                <h1 className="text-3xl text-center text-balance font-semibold lg:text-6xl uppercase">
                  Get in Touch
                </h1>
              </BoxReveal>
            </div>
          </div>
        </section>
        <BoxReveal duration={0.5}>
          <div className="max-w-(--breakpoint-xl) mx-auto py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10 px-6 md:px-0">
            <div className="text-center flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Email</h3>
              <Link
                className="mt-1 text-accent"
                href="mailto:mahanamasmedia@gmail.com"
              >
                mahanamasmedia@gmail.com
              </Link>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Location</h3>
              <Link
                className="mt-1 text-accent"
                href="https://maps.app.goo.gl/oN9hu5wVbu23Aznc8"
                target="_blank"
              >
                Open Maps
              </Link>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
                <PhoneIcon />
              </div>
              <h3 className="mt-6 font-semibold text-xl">Phone</h3>
              <Link
                className="mt-1 text-accent"
                href="tel:akashmoradiya3444@gmail.com"
              >
                (+94) 76 032 5065
              </Link>
            </div>
          </div>
        </BoxReveal>
      </div>
    </main>
  );
}
