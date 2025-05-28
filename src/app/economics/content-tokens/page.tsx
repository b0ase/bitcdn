import Link from 'next/link';

export default function ContentTokensPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/economics" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Economics Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">Content Tokens: Monetizing Digital Assets</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
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

        <div className="mt-10 text-center">
          <Link href="/economics/value-flow" className="text-blue-600 hover:underline font-semibold">
            Next: The Value Flow &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 