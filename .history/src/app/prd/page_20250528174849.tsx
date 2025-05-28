import Link from 'next/link';

export default function PrdPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center">BitCDN Product Requirements Document (PRD)</h1>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">1. Introduction & Overview</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            BitCDN is a decentralized content delivery infrastructure designed to provide a foundational P2P layer for commercial CDNs, large-scale content distributors, and new content platforms. It aims to significantly reduce bandwidth costs, improve network resilience, and enable innovative, transparent monetization models for digital content. By combining a robust BitTorrent-based distribution network with a sophisticated two-layer economic system, BitCDN empowers businesses to build scalable and economically viable content services. User interaction with content and payments is envisioned primarily through integrated web3 wallets and existing or new content platform interfaces, not a dedicated BitCDN consumer client.
          </p>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">2. Goals & Objectives</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Provide a scalable, decentralized backend infrastructure that commercial CDNs can integrate and that content platforms/startups can leverage to build competitive solutions.</li>
            <li>Enable direct micropayment compensation (e.g., BSV, stablecoins) to node operators for providing bandwidth and storage, based on service provided.</li>
            <li>Facilitate transparent revenue sharing for content creators and rights holders through on-chain tokenization (e.g., Fungible Tokens for revenue shares, NFTs for access/collectibles).</li>
            <li>Develop robust node software for network participants (seeders) and comprehensive SDKs/APIs for platform integrators.</li>
            <li>Reduce overall content delivery costs and lower the barrier to entry for new content-rich services.</li>
          </ul>
        </section>
        
        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">3. Core Architectural Principles</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li><strong>Decentralized P2P Network:</strong> BitTorrent-based for resilience and scalability. Media files (.mp4, .mp3, etc.) are stored off-chain by seeders.</li>
            <li><strong>Two-Layer Economic Model:</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li><em>Layer 1 - Infrastructure Compensation:</em> Direct micropayments to seeders for bandwidth/storage. Independent of content ownership.</li>
                <li><em>Layer 2 - Content Monetization:</em> Tokenized representation of content rights (Master NFTs, Revenue Share FTs, Access NFTs) allowing creators/platforms to define economics and revenue flow.</li>
              </ul>
            </li>
            <li><strong>No BitCDN Consumer Client:</strong> Focus on providing backend infrastructure, node software, and SDKs/APIs for integration into third-party content platforms and applications.</li>
            <li><strong>Wallet Agnostic:</strong> End-users interact via their preferred web3 wallets integrated with content platforms.</li>
            <li><strong>Modular & Extensible:</strong> Designed for integration and future protocol enhancements, including leveraging existing standards for DRM and content verification.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">4. Target Audience & Users</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li><strong>Primary Adopters (Integrators):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li>Commercial Content Delivery Networks (CDNs)</li>
                <li>Large-Scale Content Distributors (streaming services, game publishers)</li>
                <li>Content Platforms & Startups building new media services</li>
              </ul>
            </li>
            <li><strong>Network Participants (Infrastructure Providers):</strong>
              <ul className="list-circle list-inside pl-4 mt-1 space-y-0.5">
                <li>Independent node operators (seeders)</li>
                <li>Businesses providing dedicated seeding infrastructure</li>
              </ul>
            </li>
            <li><strong>End-Users (Indirect):</strong> Consumers of content on platforms that have integrated BitCDN. They benefit from potentially lower costs, better access, and new ownership models but do not directly interact with a BitCDN-branded client.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">5. Proposed Features & Deliverables</h2>
          
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">5.1. BitCDN Node Software (Seeder Client)</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed mb-4">
            <li>Core P2P engine for file sharding, distribution, and retrieval of off-chain media files.</li>
            <li>Wallet integration for receiving direct micropayments (BSV, stablecoins).</li>
            <li>Content management and storage configuration, including verification of file integrity against manifests/hashes.</li>
            <li>Performance monitoring and earning analytics.</li>
            <li>(Future) Staking mechanisms involving a native platform token ($BITCDN) if implemented.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">5.2. SDKs & APIs for Platform Integrators</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed mb-4">
            <li>APIs for publishing content to the BitCDN network (including generation of manifests/hashes for genuine files).</li>
            <li>SDKs for client-side applications (web, mobile) to interact with the BitCDN P2P layer for content retrieval and hash verification.</li>
            <li>Smart contract templates/factories for creating Content Tokens (Master NFTs, Revenue Share FTs, Access NFTs).</li>
            <li>APIs for managing and verifying Content Tokens.</li>
            <li>Payment gateway integration tools to facilitate consumer payments and trigger seeder micropayments.</li>
            <li>Hooks and compatibility layers to support integration with platform-chosen DRM solutions.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">5.3. Native Platform Token ($BITCDN) - Potential Features</h3>
           <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed mb-4">
            <li>Governance participation (voting on protocol upgrades, parameters).</li>
            <li>Staking for node operators or platform integrators for enhanced service or network security.</li>
            <li>Mechanism for distributing platform service fees collected by BitCDN.</li>
            <li>(To be further defined based on network economic modeling)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">5.4. Proof-of-Concept Website/Dashboard</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Network statistics and analytics.</li>
            <li>Documentation for node operators and developers (integrators).</li>
            <li>Onboarding information for joining the network as a seeder or integrator.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">5.5. Content Integrity, Security & DRM Strategy</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li><strong>Off-Chain File Storage:</strong> Actual media files (.mp4, .mp3, etc.) are stored by seeders on their local infrastructure, not on the blockchain.</li>
            <li><strong>Cryptographic Verification:</strong> Content published by rights holders (via platform SDKs) will be cryptographically hashed. These hashes (or manifests of hashes for file chunks) will be associated with the content&apos;s Master NFT. Client applications retrieving data will verify received pieces against these official hashes to ensure integrity and authenticity, rejecting non-matching data.</li>
            <li><strong>Trusted Publisher Model:</strong> Emphasis on platforms integrating BitCDN to source content from trusted publishers (e.g., studios, official distributors) as a primary quality control measure.</li>
            <li><strong>DRM Compatibility:</strong> BitCDN is designed to be DRM-agnostic. It will transport DRM-encrypted content efficiently. Content platforms integrating BitCDN will be responsible for implementing their chosen DRM solutions (e.g., Google Widevine, Apple FairPlay). BitCDN SDKs/APIs will provide necessary hooks to facilitate this, allowing platforms to manage licenses and decryption keys as per their DRM provider&apos;s requirements.</li>
            <li><strong>Leveraging Standards:</strong> The strategy is to utilize existing, proven standards for P2P networking, cryptographic hashing, and to ensure compatibility with established DRM technologies, rather than reinventing these complex components.</li>
            <li><strong>(Future) Community & Reputational Systems:</strong> Explore mechanisms for community feedback or reputation systems for content and seeders to further enhance trust and quality over time.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">6. Success Metrics</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Adoption by commercial CDNs and content platforms (number of integrators, volume of traffic).</li>
            <li>Growth of the active seeder network (number of nodes, total capacity).</li>
            <li>Volume of micropayments processed for infrastructure services.</li>
            <li>Number and variety of Content Tokens (Master NFTs, Revenue Share FTs, Access NFTs) created and utilized on integrated platforms.</li>
            <li>Total value transacted for content via BitCDN-facilitated mechanisms.</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">7. Open Questions & Risks</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 leading-relaxed">
            <li>Defining the optimal tokenomics for a native $BITCDN platform token, ensuring it provides real utility without being a barrier.</li>
            <li>Standardization of Content Token metadata (Master NFTs, FTs, Access NFTs) and interaction patterns for cross-platform compatibility.</li>
            <li>Ensuring robust security mechanisms, including effective handling of data verification and strategies to mitigate malicious seeder activity.</li>
            <li>Developing effective anti-piracy support within a decentralized framework, primarily by enabling platforms to use their chosen DRM and by ensuring verified content delivery.</li>
            <li>Complexity of integrating with diverse existing CDN architectures and content platform backends, including their DRM and content management workflows.</li>
            <li>Achieving critical mass for network effects in both seeder participation and platform adoption.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}