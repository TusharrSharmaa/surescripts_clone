import HeroBanner from "@/components/banners/HeroBanner";
import ContentWithCounter from "@/components/banners/ContentWithCounter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <HeroBanner
      title="Trusted intelligence. Simpler decision-making. Better healthcare."
      imageUrl="/surescripts_banner.webp" 
      imageAlt="test"
      videoPath=""
      />
      <ContentWithCounter title="Sharing billions of insights to increase patient safety, lower costs and ensure quality care"></ContentWithCounter>
    </div>
  );
}
