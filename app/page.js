import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ClientWrapper from "./components/client-wrapper";

export default function Home() {
  return (
    <ClientWrapper>
      <div suppressHydrationWarning >
        <HeroSection />
        <AboutSection />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Education />
        <ContactSection />
      </div>
    </ClientWrapper>
  )
};