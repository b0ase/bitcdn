import Link from 'next/link';

export default function RedefiningDeliveryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/vision" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Our Vision Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">Redefining Content Delivery</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            BitCDN is a next-generation content delivery infrastructure designed to significantly reduce costs and enhance resilience for existing commercial CDNs, while also providing a foundational layer for new businesses and content platforms to build competitive, large-scale content distribution services. 
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            It aims to significantly reduce bandwidth costs, improve network resilience, and enable innovative, transparent monetization models for digital content. By combining a robust BitTorrent-based distribution network with a sophisticated two-layer economic system, BitCDN empowers businesses to build scalable and economically viable content services.
          </p>
           <p className="text-sm text-gray-700 leading-relaxed">
            User interaction with content and payments is envisioned primarily through integrated web3 wallets and existing or new content platform interfaces, not a dedicated BitCDN consumer client.
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link href="/vision/problem-solution" className="text-blue-600 hover:underline font-semibold">
            Next: The Core Problem & Our Solution &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 