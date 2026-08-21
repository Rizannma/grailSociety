"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function BrandFeature() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing! We'll send new arrivals to ${email}`);
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-360 px-4 sm:px-8 py-12 lg:py-16 font-helvetica">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Side: Brand Image */}
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 rounded-none">
          <Image
            src="/brand-image.jpg"
            alt="Grail Society Collection"
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Statement Text, Email Form, Socials & Location */}
        <div className="flex flex-col items-start justify-center max-w-md">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black tracking-tight mb-2">
            Grail Society
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 font-normal">
            grail items you don&apos;t have to hunt for
          </p>

          {/* Newsletter / Get First Dibs Form */}
          <div className="w-full mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-3">
              Get first dibs on new arrivals
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full py-3.5 pl-4 pr-12 text-sm text-neutral-900 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-3 p-2 text-neutral-900 hover:text-black transition-colors cursor-pointer"
              >
                <ArrowRight className="h-4 w-4 stroke-[2]" />
              </button>
            </form>
          </div>

          {/* Social Links & Store Location Row */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-neutral-100">
            
            {/* Social Icons (FB & IG using clean inline SVGs) */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/people/Grail-Society/100075987014852/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-neutral-100 text-neutral-900 hover:bg-black hover:text-white transition-all cursor-pointer flex items-center justify-center"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-neutral-100 text-neutral-900 hover:bg-black hover:text-white transition-all cursor-pointer flex items-center justify-center"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Store Location Button */}
            <a
              href="https://www.facebook.com/people/Grail-Society/100075987014852/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-medium rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Store Location</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}