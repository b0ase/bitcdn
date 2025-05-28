import Link from 'next/link';

export default function PrdSdkApisPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/tech/prd/features" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Features & Deliverables
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">SDKs & APIs for Platform Integrators</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            To facilitate seamless adoption by commercial CDNs, content platforms, and application developers, BitCDN will provide a comprehensive suite of Software Development Kits (SDKs) and Application Programming Interfaces (APIs).
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li><strong>Content Publishing APIs:</strong> Allow integrators to programmatically publish content to the BitCDN network. This includes tools for generating cryptographic hashes (or manifests of hashes for file chunks) for genuine media files, which are crucial for content verification.</li>
            <li><strong>Client-Side SDKs:</strong> For web and mobile applications, these SDKs will enable interaction with the BitCDN P2P layer for optimized content retrieval. They will include functionalities for hash-based verification of received content pieces against official manifests.</li>
            <li><strong>Smart Contract Templates & Factories:</strong> To simplify the creation and management of Content Tokens (Master NFTs, Revenue Share FTs, Access NFTs) on compatible blockchains, BitCDN will offer standardized and audited smart contract templates.</li>
            <li><strong>Content Token Management APIs:</strong> APIs for managing and verifying these Content Tokens, linking them to the underlying digital assets and their associated metadata (like content hashes).</li>
            <li><strong>Payment & Micropayment APIs:</strong> Tools to assist integrated platforms in facilitating consumer payments and then programmatically triggering the corresponding Layer 1 micropayments (e.g., BSV, stablecoins) to the seeders who delivered the content.</li>
            <li><strong>DRM Integration Hooks:</strong> Compatibility layers and API hooks designed to support robust integration with various platform-chosen Digital Rights Management (DRM) solutions (e.g., Google Widevine, Apple FairPlay), allowing platforms to manage licenses and decryption keys.</li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech/prd/features/platform-token-features" className="text-blue-600 hover:underline font-semibold">
            Next: Platform Token Features (PRD) &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 