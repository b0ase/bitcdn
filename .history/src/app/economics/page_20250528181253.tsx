import Link from 'next/link';

export default function EconomicsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">BitCDN Economics & Tokenomics</h1>

        {/* Section 1: Two-Layer Economic Model Overview */}
        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">The Two-Layer Economic Model</h2>
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

        {/* Section 2: The $BITCDN Platform Token */}
        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">The $BITCDN Platform Token</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            The $BITCDN token is the native utility and governance token of the BitCDN platform. It is designed to facilitate the growth of the ecosystem, align incentives for various participants, and allow token holders to share in the platform&apos;s overall success. Its role is distinct from direct content monetization (handled by Content Tokens) and infrastructure payments for seeding.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The primary utilities and functions of the $BITCDN token include:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-3 leading-relaxed">
            <li>
              <strong>Capital Formation:</strong> Initial sale of $BITCDN tokens to fund protocol development, node software, SDKs, and ecosystem bootstrapping.
            </li>
            <li>
              <strong>Receiving Platform Service Fees:</strong> A portion of platform service fees (from content sales, token creation etc.) distributed to $BITCDN stakers, allowing them to benefit from overall network activity.
            </li>
            <li>
              <strong>Platform Governance:</strong> Enabling token holders to vote on protocol upgrades, network parameters, and treasury allocations.
            </li>
            <li>
              <strong>Staking for Network Participants:</strong> Nodes/platforms might stake for security, reputation, or enhanced service levels (e.g. higher priority/traffic for seeders, premium features for integrators).
            </li>
            <li>
              <strong>Incentivizing Early Adoption:</strong> Used to reward early node operators, platform integrators, or contributors.
            </li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            Detailed tokenomics (supply, allocation, distribution, fee mechanics, staking rewards) will be outlined in a future whitepaper, aiming for a self-sustaining economic model.
          </p>
        </section>

        {/* Section 3: Content Tokens (Master NFTs, Revenue FTs, Access NFTs) */}
        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-black">Content Tokens: Monetizing Digital Assets</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Content Tokens are central to BitCDN&apos;s Layer 2, focusing on IP monetization and access rights management. They work together to represent the content, its revenue shares, and unique access privileges.
          </p>
          
          <div className="space-y-6">
            <div className="p-3 bg-white rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">1. The Master Content NFT: Representing Core IP</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                A unique NFT representing a specific piece of content (e.g., an artist&apos;s master recording, a film). It serves as the definitive on-chain identifier for the IP.
              </p>
              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 pl-4 mb-2">
                <li><strong>Uniqueness:</strong> One Master Content NFT per unique creative work.</li>
                <li><strong>Link to Genuine Content:</strong> Stores/references metadata including the cryptographic hash of the authentic media file for verification.</li>
                <li><strong>Revenue Aggregation Point:</strong> Its address can be the initial collection point for content revenues.</li>
                <li><strong>Tradability of Master Rights:</strong> The NFT itself could be sold, transferring master rights.</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">2. Revenue Share Fungible Tokens (FTs): Distributing Earnings</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                Issued in association with a Master Content NFT, these FTs represent proportional shares of its revenue.
              </p>
              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 pl-4 mb-2">
                <li><strong>Example:</strong> An artist issues 1,000,000 &lsquo;ArtistX_SingleShare&rsquo; FTs for a new single.</li>
                <li><strong>Mechanism:</strong> Revenue at the Master NFT is programmatically distributed to FT holders by percentage.</li>
                <li><strong>Liquidity & Price Discovery:</strong> Tradable on DEXs for liquid markets in content revenue streams.</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded-md shadow-md">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">3. Access & Collectible NFTs: Unique Rights & Editions</h3>
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                Separate NFTs for specific access privileges or digital collectibles.
              </p>
              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 pl-4 mb-2">
                <li><strong>Access Passes/Tickets:</strong> For library access, one-time viewings, season passes. Utility-focused.</li>
                <li><strong>Digital Collectibles:</strong> Limited edition art, behind-the-scenes content, signed copies.</li>
                <li><strong>Verifiable Ownership:</strong> Provable ownership of unique digital assets or rights.</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mt-5">
            BitCDN aims to provide SDKs and smart contract templates to facilitate the creation and management of these content tokens.
          </p>
        </section>
        
        {/* Section 4: The Value Flow */}
        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-6">
          <h2 className="text-2xl font-semibold mb-5 text-black text-center">The Value Flow: From Consumer to Creator & Network</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 1: Consumer Initiates Payment</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                A user accesses content on a BitCDN-integrated platform and initiates a payment (e.g., $1.00) using their web3 wallet.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 2: BitCDN Platform Service Fee</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                A small percentage (e.g., 1-3%) is allocated as a service fee to BitCDN to support platform development and operations.
              </p>
              <p className="text-xs text-gray-600 mt-2"><em>Benefit: Primarily distributed to <strong>$BITCDN</strong> token stakers.</em></p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 3: Infrastructure Compensation (Seeders)</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                A portion is paid via micropayments (BSV, stablecoins) to seeders for data delivery, compensating their bandwidth/storage.
              </p>
              <p className="text-xs text-gray-600 mt-2"><em>Benefit: Ensures a robust P2P network.</em></p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 4: Content Revenue (Creators/Rights Holders)</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                The remainder is distributed to holders of the specific Content Tokens (e.g., $SONG1 FTs) for that content.
              </p>
              <p className="text-xs text-gray-600 mt-2"><em>Benefit: Empowers creators with direct, transparent monetization.</em></p>
            </div>
          </div>
        </section>

        {/* Navigation to Next Page - Placeholder, will be updated */}
        <div className="mt-10 text-center">
          <Link href="/prd" className="text-blue-600 hover:underline font-semibold">
            Next: Product Details &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}

</rewritten_file>