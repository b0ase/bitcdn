import Link from 'next/link';

export default function PrdIntroductionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Technology Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Introduction & Overview</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            BitCDN is a decentralized content delivery infrastructure designed to provide a foundational P2P layer for commercial CDNs, large-scale content distributors, and new content platforms. It aims to significantly reduce bandwidth costs, improve network resilience, and enable innovative, transparent monetization models for digital content. By combining a robust BitTorrent-based distribution network with a sophisticated two-layer economic system, BitCDN empowers businesses to build scalable and economically viable content services. User interaction with content and payments is envisioned primarily through integrated web3 wallets and existing or new content platform interfaces, not a dedicated BitCDN consumer client.
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/goals" className="text-blue-600 hover:underline font-semibold">
            Next: Goals & Objectives &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 