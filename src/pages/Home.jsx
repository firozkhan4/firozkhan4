import { HeroSection, SocialIcons } from "../components/index";

export default function Home() {
  return (
    <main className="container mx-auto w-2/4 overflow-hidden pt-7 space-y-6">
      <HeroSection />
      <SocialIcons />
    </main>
  );
}
