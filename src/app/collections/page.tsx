import Header from "@/components/header";
import Collections from "@/components/collections";
import Footer from "@/components/footer";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-between font-helvetica">
      <div>
        <Header />
        {/* Top padding pt-24 sm:pt-32 ensures content sits below fixed/absolute header */}
        <div className="pt-24 sm:pt-32">
          <Collections />
        </div>
      </div>
      <Footer />
    </main>
  );
}