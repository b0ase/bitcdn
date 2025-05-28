import Link from 'next/link';

export default function PrdArchitecturePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Technology Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">PRD: Core Architectural Principles</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-3 leading-relaxed">
            <li><strong>Decentralized P2P Network:</strong> BitTorrent-based for resilience and scalability. Media files (.mp4, .mp3, etc.) are stored off-chain by seeders.</li>
            <li><strong>Two-Layer Economic Model:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-1 leading-relaxed">
                <li><em>Layer 1 - Infrastructure Compensation:</em> Direct micropayments to seeders for bandwidth/storage. Independent of content ownership.</li>
                <li><em>Layer 2 - Content Monetization:</em> Tokenized representation of content rights (Master NFTs, Revenue Share FTs, Access NFTs) allowing creators/platforms to define economics and revenue flow.</li>
              </ul>
            </li>
            <li><strong>No BitCDN Consumer Client:</strong> Focus on providing backend infrastructure, node software, and SDKs/APIs for integration into third-party content platforms and applications.</li>
            <li><strong>Wallet Agnostic:</strong> End-users interact via their preferred web3 wallets integrated with content platforms.</li>
            <li><strong>Modular & Extensible:</strong> Designed for integration and future protocol enhancements, including leveraging existing standards for DRM and content verification.</li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/audience" className="text-blue-600 hover:underline font-semibold">
            Next: Target Audience & Users &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 