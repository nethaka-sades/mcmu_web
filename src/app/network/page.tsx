import { MenuVertical } from "@/components/ui/menu-vertical";
import { cn } from "@/lib/utils";

const NetworkPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div
        className={cn(
          "fixed inset-0 opacity-15",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#ff9700_1px,transparent_1px)]",
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />
      <MenuVertical
        menuItems={[
          {
            label: "MCMU",
            href: "/",
          },
          {
            label: "MCPAS",
            href: "/mcpas",
          },
          {
            label: "MCRC",
            href: "/mcrc",
          },
          {
            label: "TV MAHANAMA",
            href: "/tvmahanama",
          },
          {
            label: "FM MAHANAMA",
            href: "/fm",
          },
          {
            label: "MC SPORTS",
            href: "/mcsports",
          },
        ]}
      />
    </main>
  );
};

export default NetworkPage;
