import Link from 'next/link';

export default function PrdNodeSoftwarePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech/prd/features" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Features & Deliverables
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">BitCDN Node Software (Seeder Client)</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">Core Functionality</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The BitCDN Node Software is the client application run by individuals or businesses who act as seeders on the network, providing storage and bandwidth for content distribution.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>Core P2P engine based on BitTorrent principles for efficient file sharding, distribution, and retrieval of off-chain media files.</li>
            <li>Integrated wallet functionality for receiving direct micropayments (e.g., BSV, stablecoins) for bandwidth and storage provided.</li>
            <li>Advanced content management features, allowing seeders to select content to host based on various criteria (e.g., popularity, publisher, potential earnings).</li>
            <li>Robust storage configuration options, enabling seeders to allocate specific amounts of disk space and manage stored content effectively.</li>
            <li>Mechanisms for verifying file integrity against official manifests/hashes provided by content publishers via the BitCDN network.</li>
            <li>Performance monitoring tools and earning analytics, giving node operators clear insights into their contributions and rewards.</li>
            <li>(Future Scope) Staking mechanisms potentially involving the native $BITCDN platform token for enhanced reputation, service tiers, or higher earning potential.</li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/features/sdk-apis" className="text-blue-600 hover:underline font-semibold">
            Next: SDKs & APIs &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 