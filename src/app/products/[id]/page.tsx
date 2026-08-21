"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Product {
  id: string;
  title: string;
  priceFormatted: string;
  note: string;
  colorRate: string;
  size: string;
  images: string[];
}

const PRODUCTS_DATA: Record<string, Product> = {
  "1": {
    id: "1",
    title: "Arc'teryx Grotto Toque Beanie in Carob/Canvas (One Size)",
    priceFormatted: "₱3,900.00",
    note: "Brand-new/Dead-stock (Authentic)",
    colorRate: "10/10",
    size: "One Size",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  "2": {
    id: "2",
    title: "Vintage 90's Russell Athletic Full-zip Hoodie Jacket in Gray (Size Large)",
    priceFormatted: "₱3,000.00",
    note: "Good Vintage Condition",
    colorRate: "9/10",
    size: "Large",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
    ],
  },
};

const SUGGESTED_PRODUCTS = [
  {
    id: "2",
    title: "Vintage 90's Russell Athletic Full-zip Hoodie Jacket in Gray (Size Large)",
    priceFormatted: "₱3,000.00",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Adidas Originals Utility 2-in-1 Nylon Cargo Pants",
    priceFormatted: "₱1,200.00",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "BRAND-NEW Time & Tru Women Shoulder Bag in Snake pattern (One Size)",
    priceFormatted: "₱1,000.00",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Nike Elite Backpack Kobe Mamba Sports Academy in Black",
    priceFormatted: "₱3,000.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = PRODUCTS_DATA[resolvedParams.id] || PRODUCTS_DATA["1"];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between font-helvetica">
      <div>
        <Header />

        <div className="mx-auto max-w-360 px-4 sm:px-8 pt-24 sm:pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Section: Thumbnails + Main Image Viewer */}
            <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
              
              {/* Vertical Thumbnail List */}
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto max-h-[560px] shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-neutral-100 overflow-hidden rounded-none border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? "border-black" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>

              {/* Main Active Photo Viewer */}
              <div 
                className="relative flex-1 aspect-square sm:h-[560px] bg-neutral-100 overflow-hidden rounded-none cursor-zoom-in"
                onClick={() => setLightboxIndex(activeImageIndex)}
              >
                <Image
                  src={product.images[activeImageIndex]}
                  alt={product.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center transition-transform duration-500"
                />

                {/* Bottom Right Circular Navigation Arrows */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                      aria-label="Previous image"
                      className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-900 hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="h-5 w-5 stroke-[2]" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                      aria-label="Next image"
                      className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-900 hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="h-5 w-5 stroke-[2]" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sticky Product Info Sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 pt-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                  {product.title}
                </h1>
                <p className="text-base sm:text-lg font-medium text-neutral-900 mt-2">
                  {product.priceFormatted}
                </p>
              </div>

              {/* Highlighted How To Order Block (Placed directly after title/price) */}
              <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-lg space-y-3">
                <div className="font-bold text-xs tracking-wider uppercase text-black flex items-center gap-2">
                  <span>HOW TO ORDER</span>
                </div>

                <ol className="space-y-2 text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>Screenshot the item you want.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>
                      Send screenshot to our Facebook page:{" "}
                      <a 
                        href="https://www.facebook.com/people/Grail-Society/100075987014852/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold underline text-black hover:text-neutral-600"
                      >
                        Grail Society
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>Our team will assist you with checkout.</span>
                  </li>
                </ol>

              </div>

              {/* Product Specifications */}
              <div className="space-y-1.5 text-xs sm:text-sm text-neutral-700 font-normal pt-2">
                <p><span className="text-neutral-500">Note:</span> {product.note}</p>
                <p><span className="text-neutral-500">Color rate:</span> {product.colorRate}</p>
                <p><span className="text-neutral-500">Size:</span> {product.size}</p>
              </div>

            </div>

          </div>

          {/* You May Also Like Section (Pulled higher with reduced top margin) */}
          <div className="mt-12 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-8">
              You may also like
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {SUGGESTED_PRODUCTS.map((item) => (
                <Link key={item.id} href={`/products/${item.id}`} className="group cursor-pointer">
                  <div className="relative aspect-square w-full bg-neutral-100 overflow-hidden rounded-none mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-normal text-neutral-800 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-neutral-900 mt-1">
                    {item.priceFormatted}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-100 bg-white flex items-center justify-between font-helvetica">
          <div className="relative h-full flex-1 flex items-center justify-center p-6">
            <div className="relative h-full w-full max-w-5xl">
              <Image
                src={product.images[lightboxIndex]}
                alt="Fullscreen view"
                fill
                unoptimized
                className="object-contain object-center"
              />
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-neutral-800 hover:text-black transition-colors cursor-pointer"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="h-full w-24 border-l border-neutral-100 flex flex-col items-center py-6 overflow-y-auto space-y-3 shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`relative h-16 w-16 bg-neutral-100 overflow-hidden rounded-none border-2 transition-all cursor-pointer ${
                  lightboxIndex === idx ? "border-black" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="Thumb" fill unoptimized className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}