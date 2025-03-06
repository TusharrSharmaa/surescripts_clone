"use client";
import Image from "next/image";

interface HeroBannerProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  videoPath: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="hero-banner relative flex items-center min-h-[720px]">
      <div className="w-full absolute top-0 left-0 h-full">
        <Image
          src={imageUrl}
          className="w-full h-full object-cover"
          alt={imageAlt}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="container relative">
        <div className="max-w-4xl">
          <h1 className="text-white">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
