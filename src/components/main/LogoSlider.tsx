import { Marquee } from "../common/marquee";
import Image from "next/image";

import MCRC_LOGO from "@/../public/LOGOS/MCRC_LOGO_WHITE.png";
import MCPAS_LOGO from "@/../public/LOGOS/MCPAS_WHITE_LOGO_OFFICIAL.png";
import TVMAHANAMA_LOGO from "@/../public/LOGOS/TV_MAHANAMAOFFICIAL_LOGO_WHITE.png";
import FMMAHANAMA_LOGO from "@/../public/LOGOS/FM_MAHANAMA_OFFICIAL_LOGO_WHITE.png";
import MCODS_LOGO from "@/../public/LOGOS/MCODS_LOGO_WHITE.png";
import SPORTS_LOGO from "@/../public/LOGOS/MC_SPORTS_MEDIA_WHITE_2.png";
import Link from "next/link";

export function MarqueeDemo() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-background border-y border-white/50">
        <div className="text-white/50 text-xl text-center pb-5">In Collaboration With</div>
      <Marquee pauseOnHover className="[--duration:20s] space-x-5 px-10">
        <Link href={"/mcpas"}><Image src={MCPAS_LOGO} alt="MCRC Logo" width={150} height={25} className="mx-5 opacity-50 hover:opacity-100" /></Link>
        <Link href={"/tvmahanama"}><Image src={TVMAHANAMA_LOGO} alt="MCRC Logo" width={150} height={25} className="mx-5 opacity-50 hover:opacity-100" /></Link>
        <Link href={"/mcrc"}><Image src={MCRC_LOGO} alt="MCRC Logo" width={150} height={25} className="mx-5 opacity-50 hover:opacity-100" /></Link>
        <Link href={"/fmmahanama"}><Image src={FMMAHANAMA_LOGO} alt="MCRC Logo" width={150} height={25} className="mx-5 opacity-50 hover:opacity-100" /></Link>
        <Link href={"/mcods"}><Image src={MCODS_LOGO} alt="MCRC Logo" width={150} height={25} className="mx-5 opacity-50 hover:opacity-100" /></Link>
        <Link href={"/sports"}><Image src={SPORTS_LOGO} alt="MCRC Logo" width={150} height={25} className="mx-5 opacity-50 hover:opacity-100" /></Link>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </section>
  );
}
