import Header from "@/components/header";
import Hero from "@/components/hero";
import NewArrivals from "@/components/new-arrivals";
import Collections from "@/components/collections";
import BrandFeature from "@/components/brand-feature";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <Hero />
        <NewArrivals />
        <Collections />
        <BrandFeature />
      </div>
      <Footer />
    </main>
  );
}