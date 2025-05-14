import LOGO from "@/../public/LOGOS/MCMU_LOGO_WHITE.png"
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }
  
  interface FooterProps {
    logo?: {
      url: string;
      src: string;
      alt: string;
      title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
      text: string;
      url: string;
    }[];
  }
  
  const Footer = ({
    logo = {
      src: LOGO.src,
      alt: "mcmu",
      title: "Mahanama College Media Unit",
      url: "/",
    },
    tagline = "Revolutionizing School Media Concept",
    menuItems = [
      {
        title: "MCMU",
        links: [
          { text: "ABOUT", url: "#" },
          { text: "COMMITTEE", url: "#" },
          { text: "PROJECTS", url: "#" },
          { text: "CONTACT", url: "#" },
        ],
      },
      {
        title: "MCPAS",
        links: [
          { text: "ABOUT", url: "#" },
          { text: "COMMITTEE", url: "#" },
          { text: "PROJECTS", url: "#" },
          { text: "CONTACT", url: "#" },
        ],
      },
      {
        title: "MCRC",
        links: [
          { text: "ABOUT", url: "#" },
          { text: "COMMITTEE", url: "#" },
          { text: "PROJECTS", url: "#" },
          { text: "CONTACT", url: "#" },
        ],
      },
      {
        title: "TV MAHANAMA",
        links: [
          { text: "ABOUT", url: "#" },
          { text: "COMMITTEE", url: "#" },
          { text: "PROJECTS", url: "#" },
          { text: "CONTACT", url: "#" },
        ],
      },
    ],
    copyright = "© 2024 MCMU. All rights reserved.",
    bottomLinks = [
      { text: "Developed by Nethaka De Saram", url: "#" },
    ],
  }: FooterProps) => {
    return (
      <section className="pt-28 px-12">
        <div className="container">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center gap-2 lg:justify-start">
                  <Link href="/">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={400}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <Link href={link.url}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t py-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>{copyright}</p>
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <Link href={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export { Footer };
  