import Link from 'next/link';

export default function TechPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">BitCDN Technology Deep Dive</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Core Architectural Principles</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            BitCDN combines established P2P technology with a sophisticated economic model to deliver a robust and efficient content delivery network. We are building upon proven open-source BitTorrent implementations and focusing on enterprise-grade reliability and integration capabilities.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li><strong>Decentralized P2P Network:</strong> Leverages BitTorrent principles for massively scalable and resilient file distribution. This reduces reliance on centralized server farms, inherently lowering bandwidth costs and improving data propagation speeds, especially for popular content. Media files (.mp4, .mp3, etc.) are stored off-chain by seeders.</li>
            <li><strong>No BitCDN Consumer Client:</strong> Our focus is on providing backend infrastructure, powerful node software for seeders, and comprehensive SDKs/APIs for integration into third-party content platforms and applications.</li>
            <li><strong>Wallet Agnostic:</strong> End-users interact via their preferred web3 wallets already integrated with the content platforms they use.</li>
            <li><strong>Modular & Extensible:</strong> The architecture is designed for easy integration with existing systems and future protocol enhancements, including leveraging established standards for DRM and content verification.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">BitCDN Node Software (Seeder Client)</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The backbone of the BitCDN network is its robust node software, designed for individuals and businesses providing seeding infrastructure. Key features include:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>Core P2P engine for efficient file sharding, distribution, and retrieval of off-chain media files.</li>
            <li>Integrated wallet functionality for receiving direct micropayments (e.g., BSV, stablecoins) for bandwidth and storage provided.</li>
            <li>Advanced content management and storage configuration options.</li>
            <li>Mechanisms for verifying file integrity against official manifests/hashes.</li>
            <li>Performance monitoring tools and earning analytics for node operators.</li>
            <li>(Future Scope) Staking mechanisms potentially involving the native $BITCDN platform token for enhanced reputation or service tiers.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">SDKs & APIs for Platform Integrators</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            To facilitate seamless adoption, BitCDN provides comprehensive SDKs and APIs for commercial CDNs and content platforms:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>APIs for publishing content to the BitCDN network, including tools for generating cryptographic hashes and manifests for genuine media files.</li>
            <li>SDKs for client-side applications (web, mobile) to interact with the BitCDN P2P layer for optimized content retrieval and hash-based verification.</li>
            <li>Smart contract templates and factories to simplify the creation and management of Content Tokens (Master NFTs, Revenue Share FTs, Access NFTs) on compatible blockchains.</li>
            <li>APIs for managing and verifying these Content Tokens, linking them to the underlying digital assets.</li>
            <li>Payment gateway integration tools designed to facilitate consumer payments on integrated platforms and trigger the corresponding Layer 1 micropayments to seeders.</li>
            <li>Hooks and compatibility layers to support robust integration with various platform-chosen Digital Rights Management (DRM) solutions.</li>
          </ul>
        </section>
        
        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Content Integrity, Security & DRM</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Ensuring content authenticity and supporting rights management are critical components of the BitCDN architecture:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li><strong>Off-Chain File Storage:</strong> Actual media files (.mp4, .mp3, etc.) are stored by seeders on their local infrastructure, not directly on any blockchain, ensuring scalability and cost-efficiency.</li>
            <li><strong>Cryptographic Verification via Master Content NFT:</strong> Content published by rights holders (via platform SDKs) is cryptographically hashed. These hashes (or manifests of hashes for file chunks) are securely associated with the content&apos;s Master NFT. Client applications retrieving data will verify received pieces against these official hashes to ensure integrity and authenticity, rejecting any non-matching data. This means users can be confident they are receiving the genuine version of the content.</li>
            <li><strong>Trusted Publisher Model:</strong> While the network is open, we encourage platforms integrating BitCDN to source content from trusted and verified publishers (e.g., studios, official distributors) as a primary quality control measure.</li>
            <li><strong>DRM Agnostic & Compatible:</strong> BitCDN is designed to be DRM-agnostic. It efficiently transports DRM-encrypted content. Content platforms integrating BitCDN are responsible for implementing their chosen DRM solutions (e.g., Google Widevine, Apple FairPlay). BitCDN SDKs/APIs provide the necessary hooks and compatibility layers to facilitate this, allowing platforms to manage licenses and decryption keys as per their DRM provider&apos;s requirements.</li>
            <li><strong>Leveraging Standards:</strong> Our strategy is to utilize existing, proven standards for P2P networking (BitTorrent), cryptographic hashing, and to ensure compatibility with established DRM technologies, rather than reinventing these complex components.</li>
            <li><strong>(Future Scope) Community & Reputational Systems:</strong> We plan to explore mechanisms for community feedback or reputation systems for both content and seeders to further enhance trust and quality within the ecosystem over time.</li>
          </ul>
        </section>

      </div>
    </main>
  );
} 