"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface Product {
  id: string;
  title: string;
  price: string;
  primaryImage: string;
  secondaryImage: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Arc'teryx Grotto Toque Beanie in Carob/Canvas (One Size)",
    price: "₱3,900.00",
    primaryImage: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Vintage 90's Russell Athletic Full-zip Hoodie Jacket in Gray (Size Large)",
    price: "₱3,000.00",
    primaryImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Adidas Originals Utility 2-in-1 Nylon Cargo Pants",
    price: "₱1,200.00",
    primaryImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Brand New Time and Tru Women's Lina Shoulder Bag Mauve Pink featuring distinctive peek-a-boo front seams",
    price: "₱1,000.00",
    primaryImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Brand New Time and Tru Women's Leather Griffin Shoulder Bag in Dark Brown",
    price: "₱1,000.00",
    primaryImage: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
  },
];

export default function NewArrivals() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between font-helvetica">
      <div>
        <Header />

        {/* Top padding offset clears navigation header */}
        <section className="mx-auto max-w-360 px-4 sm:px-8 pt-12 sm:pt-8 pb-16">
          {/* Header Row matching Shop All typography */}
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">
              New Arrivals
            </h1>
            <Link 
              href="/new-arrivals" 
              className="text-xs sm:text-sm font-normal text-neutral-700 hover:text-black no-underline underline-offset-4 transition-colors"
            >
              View all
            </Link>
          </div>

          {/* Balanced 3-Column Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">
            {/* Column 1: Main Feature Product */}
            <div className="md:col-span-1 h-full">
              <ProductCard product={PRODUCTS[0]} isHero />
            </div>

            {/* Columns 2 & 3: 2x2 Secondary Products Grid */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
              {PRODUCTS.slice(1, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProductCard({ product, isHero = false }: { product: Product; isHero?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between group/card cursor-pointer">
      <div
        className={`relative w-full overflow-hidden bg-[#f6f6f6] rounded-none mb-2 ${
          isHero ? "h-[360px] sm:h-[420px] md:h-[calc(100%-3rem)] min-h-[380px]" : "aspect-square"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? product.secondaryImage : product.primaryImage}
          alt={product.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
        />
      </div>

      <div className="space-y-0.5">
        <h3 className={`font-normal text-neutral-800 line-clamp-2 leading-tight ${
          isHero ? "text-xs sm:text-sm font-bold text-neutral-900" : "text-xs sm:text-sm"
        }`}>
          {product.title}
        </h3>
        <p className={`font-medium text-neutral-900 ${
          isHero ? "text-xs sm:text-sm font-semibold" : "text-xs sm:text-sm"
        }`}>
          {product.price}
        </p>
      </div>
    </div>
  );
}