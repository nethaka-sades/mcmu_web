import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/common/bento-grid";

import MCMU_LOGO from "@/../public/LOGOS/MCMU_LOGO_WHITE.png";
import MCRC_LOGO from "@/../public/LOGOS/MCRC_LOGO_WHITE.png";
import MCPAS_LOGO from "@/../public/LOGOS/MCPAS_WHITE_LOGO_OFFICIAL.png";
import TVMAHANAMA_LOGO from "@/../public/LOGOS/TV_MAHANAMAOFFICIAL_LOGO.png";
import FMMAHANAMA_LOGO from "@/../public/LOGOS/FM_MAHANAMA_OFFICIAL_LOGO.png";
import MCODS_LOGO from "@/../public/LOGOS/MCODS_LOGO_WHITE.png";
import SPORTS_LOGO from "@/../public/LOGOS/MC_SPORTS_MEDIA_WHITE.png";

const features = [
  {
    Icon: MCMU_LOGO.src,
    name: "The Voice Within",
    description: "We are the heart of Mahanama’s expression — managing announcements, training leaders, and powering every media outlet in school.",
    href: "/",
    cta: "About Us",
    className: "col-span-3 lg:col-span-3",
    background: (<div className="bg-black"></div>),
  },
  {
    Icon: MCPAS_LOGO.src,
    name: "Framing Moments",
    description: "Our lens captures history. Covering school events with precision and artistry, we immortalize every highlight of Mahanama.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (<div className="bg-black"></div>),
  },
  {
    Icon: TVMAHANAMA_LOGO.src,
    name: "Beyond the Lens",
    description: "Mahanama’s digital stage. We produce videos, podcasts, and live updates — from interviews to Live Streaming.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (<div className="bg-black"></div>),
  },
  {
    Icon: FMMAHANAMA_LOGO.src,
    name: "Live On Air",
    description: "Your school radio, anywhere. A web FM station run by students, for students — covering school vibes in real time.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (<div className="bg-black"></div>),
  },
  {
    Icon: MCRC_LOGO.src,
    name: "Sound in Motion",
    description: "From managing event audio to engineering live setups, the Radio Club brings every Mahanama moment to life through sound.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (<div className="bg-black"></div>),
  },
  {
    Icon: MCODS_LOGO.src,
    name: "Words That Win",
    description: "Masters of expression. We train confident speakers and critical thinkers — leading debates, and speeches",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (<div className="bg-black"></div>),
  },
  {
    Icon: SPORTS_LOGO.src,
    name: "Driven by Sports",
    description: "Covering every whistle, win, and wicket — we capture the spirit of school sports through design, updates, and energetic media content.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (<div className="bg-black"></div>),
  },
];

export function FeaturesBento() {
  return (
    <section className="py-15 px-10">
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid></section>
  );
}
