import { HeroSection, SocialIcons, ContentSection } from "../components/index";

export default function Home() {
  return (
    <main className="container mx-auto w-2/4 overflow-hidden pt-7 space-y-10">
      <div className="space-y-6">
        <HeroSection />
        <SocialIcons />
      </div>
        <ContentSection />
    </main>
  );
}
