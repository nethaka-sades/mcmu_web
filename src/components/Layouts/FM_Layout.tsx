import SmoothScrolling from "../common/smooth-scrolling";
import UnderDev from "../common/under_dev";
import { Footer } from "../main/Footer";
import Navbar_Main from "../main/NavBar";
import { ThemeProvider } from "../ui/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function FM_Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
