import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BoxReveal } from "./box-reveal";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiWhatsappLine,
  RiYoutubeLine,
} from "@remixicon/react";
import Link from "next/link";
import { Header, HeaderTitle } from "./header";

function StackedCircularFooter() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-3 p-8 flex flex-col items-center justify-center">
            <Link href={"/"}>
              <Image
                src="/MCMU_GOLD_LOGO.png"
                alt="Logo"
                width={250}
                height={100}
              />
            </Link>
            <BoxReveal duration={0.5}>
              <h2 className="mx-auto max-w-screen text-center text-lg font-semibold text-balance uppercase">
                Mahanama College
              </h2>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <h2 className="mx-auto max-w-screen-lg text-center text-lg font-semibold text-balance uppercase">
                Media Unit
              </h2>
            </BoxReveal>
          </div>
          <div className="mb-8 md:flex flex-row gap-5 hidden ">
            <Link href={"/mcpas"}>
              <Image
                src="/LOGOS/MCPAS_WHITE_LOGO_OFFICIAL.png"
                alt="Logo"
                width={100}
                height={25}
                className="opacity-50 hover:opacity-100"
              />
            </Link>
            <Link href={"/mcrc"}>
              <Image
                src="/LOGOS/MCRC_LOGO_WHITE.png"
                alt="Logo"
                width={100}
                height={25}
                className="opacity-50 hover:opacity-100"
              />
            </Link>
            <Link href={"/mcods"}>
              <Image
                src="/LOGOS/MCODS_LOGO_WHITE.png"
                alt="Logo"
                width={100}
                height={25}
                className="opacity-50 hover:opacity-100"
              />
            </Link>
            <Link href={"/tvmahanama"}>
              <Image
                src="/LOGOS/TV_MAHANAMAOFFICIAL_LOGO_WHITE.png"
                alt="Logo"
                width={100}
                height={25}
                className="opacity-50 hover:opacity-100"
              />
            </Link>
            <Link href={"/fm"}>
              <Image
                src="/LOGOS/FM_MAHANAMA_OFFICIAL_LOGO_WHITE.png"
                alt="Logo"
                width={100}
                height={25}
                className="opacity-50 hover:opacity-100"
              />
            </Link>
            <Link href={"/sportsmedia"}>
              <Image
                src="/LOGOS/MC_SPORTS_MEDIA_WHITE_2.png"
                alt="Logo"
                width={100}
                height={25}
                className="opacity-50 hover:opacity-100"
              />
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              className="flex-1 rounded-full"
              variant="outline"
              size="icon"
            >
              <Link
                href={"https://whatsapp.com/channel/0029VaaHJNc2Jl84zJFwZj3Y"}
              >
                <RiWhatsappLine color="#075e54" size={16} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              className="flex-1 rounded-full"
              variant="outline"
              size="icon"
            >
              <Link href={"/fb_portal"}>
                <RiFacebookFill color="#1778F2" size={16} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              className="flex-1 rounded-full"
              variant="outline"
              size="icon"
            >
              <Link href={"/fb_portal"}>
                <RiInstagramLine color="#bc2a8d" size={16} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              className="flex-1 rounded-full"
              variant="outline"
              size="icon"
            >
              <Link href={"https://www.youtube.com/@tvmahanama"}>
                <RiYoutubeLine color="#CC181E" size={16} aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-4 mb-6 flex flex-col gap-1 md:flex-row items-center justify-center">
            <Header>
              <HeaderTitle>mahanamasmedia@gmail.com</HeaderTitle>
            </Header>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Mahanama College Media Unit.<br className="block md:hidden" /> All rights reserved.
            </p>
            <p className="pt-2 text-sm text-muted-foreground">
              Developed by{" "}<Link href={"/"} className="underline hover:text-amber-400">Nethaka De Saram</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { StackedCircularFooter };
