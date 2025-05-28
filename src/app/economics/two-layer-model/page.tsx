import Link from 'next/link';

export default function TwoLayerModelPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/economics" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Economics Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">The Two-Layer Economic Model</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            BitCDN&apos;s economic architecture is designed to ensure fair compensation for infrastructure providers, transparent revenue streams for content creators, and a sustainable model for platform growth. It operates on two distinct but interconnected layers:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li><strong>Layer 1 - Infrastructure Compensation:</strong> Node operators (seeders) who contribute bandwidth and storage are directly compensated with micropayments (e.g., BSV, stablecoins) for the data they serve. This payment is for the utility provided to the network and is independent of content ownership or the $BITCDN platform token.</li>
            <li><strong>Layer 2 - Content Monetization & Ownership:</strong> This layer focuses on the intellectual property itself. Content creators and rights holders can tokenize their work, enabling direct-to-consumer sales, revenue sharing, and unique access models using Master Content NFTs, Revenue Share Fungible Tokens (FTs), and Access/Collectible NFTs.</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            This dual approach separates the payment for delivering content from the payment for the content itself, creating a clear and robust economic framework.
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link href="/economics/platform-token" className="text-blue-600 hover:underline font-semibold">
            Next: The $BITCDN Platform Token &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 