import type { Metadata } from "next";
import "./globals.css";
import { Hubot_Sans } from "next/font/google";

const cabinSans = Hubot_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahanama College Media Unit",
  description: "Official Web Portal of Mahanama CollegeMedia Unit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/logos/MCMU_GOLD_LOGO.png"
          type="image/x-icon"
        />
      </head>
      <body className={`${cabinSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
