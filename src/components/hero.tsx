import Link from "next/link";

interface HeroProps {
  backgroundImageUrl?: string;
  title?: string;
  buttonText?: string;
}

export default function Hero({
  backgroundImageUrl = "/hero-background.jpg",
  title = "STREETWEAR COLLECTION",
  buttonText = "Shop now"
}: HeroProps) {
  return (
    <section className="relative w-full h-[640px] sm:h-[720px] lg:h-[82vh] overflow-hidden bg-neutral-900 font-helvetica">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        {/* Subtle Contrast Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Hero Content Overlay (Aligned to match Image 2) */}
      <div className="relative h-full w-full mx-auto max-w-360 px-6 sm:px-12 flex flex-col justify-center items-start pt-16 sm:pt-20">
        <div className="max-w-xl">
          
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-neutral-200 mb-2 block drop-shadow-sm">
            CURATED DROPS
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tight text-white uppercase leading-[0.92] mb-5 drop-shadow-md">
            {title}
          </h1>

          <p className="text-xs sm:text-sm text-neutral-200 mb-8 max-w-md leading-relaxed font-normal drop-shadow-sm">
            Authenticated thrift grails, vintage statements, and streetwear essentials updated weekly.
          </p>

          <Link
            href="/shop"
            className="inline-block rounded-xl bg-white px-8 py-3.5 text-xs sm:text-sm text-black transition-all hover:bg-neutral-100 hover:scale-102 focus:outline-none shadow-lg cursor-pointer"
          >
            {buttonText}
          </Link>

        </div>
      </div>
    </section>
  );
}