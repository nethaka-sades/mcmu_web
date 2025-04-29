import type { Metadata } from "next";
import "./globals.css";
import Navbar_Main from "@/components/main/NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Cabin } from "next/font/google";

const cabinSans = Cabin({
  variable: "--font-cabin-sans",
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
      <body className={`${cabinSans.variable } antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar_Main />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
