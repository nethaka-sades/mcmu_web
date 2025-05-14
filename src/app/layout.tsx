import type { Metadata } from "next";
import "./globals.css";
import Navbar_Main from "@/components/main/NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Hubot_Sans } from "next/font/google";
import Lenis from 'lenis';
import SmoothScrolling from "@/components/common/smooth-scrolling";
import { BoxReveal } from "@/components/common/box-reveal";
import { Footer } from "@/components/main/Footer";

const cabinSans = Hubot_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MCMU",
  description: "Media Unit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cabinSans.className } antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar_Main />
          <SmoothScrolling >
          {children}
          </SmoothScrolling>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
