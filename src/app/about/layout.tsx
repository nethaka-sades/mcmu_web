import SmoothScrolling from "../../components/common/smooth-scrolling";
import { Footer } from "../../components/main/Footer";
import Navbar_Main from "../../components/main/NavBar";
import { ThemeProvider } from "../../components/ui/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayOut({ children }: LayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar_Main />
      <SmoothScrolling>
      {children}
      </SmoothScrolling>
      <Footer />
    </ThemeProvider>
  );
}
