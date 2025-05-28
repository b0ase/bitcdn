import Link from 'next/link';

export default function PrdGoalsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Technology Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Goals & Objectives</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>Provide a scalable, decentralized backend infrastructure that commercial CDNs can integrate and that content platforms/startups can leverage to build competitive solutions.</li>
            <li>Enable direct micropayment compensation (e.g., BSV, stablecoins) to node operators for providing bandwidth and storage, based on service provided.</li>
            <li>Facilitate transparent revenue sharing for content creators and rights holders through on-chain tokenization (e.g., Fungible Tokens for revenue shares, NFTs for access/collectibles).</li>
            <li>Develop robust node software for network participants (seeders) and comprehensive SDKs/APIs for platform integrators.</li>
            <li>Reduce overall content delivery costs and lower the barrier to entry for new content-rich services.</li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/architecture" className="text-blue-600 hover:underline font-semibold">
            Next: Core Architectural Principles &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 