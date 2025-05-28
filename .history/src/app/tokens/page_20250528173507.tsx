import Link from 'next/link';

export default function TokensPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-black text-center">BitCDN Token Ecosystem & Economic Model</h1>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Understanding how value flows through the BitCDN network is key. Here we outline the distinct layers of compensation and token functions.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-5 text-black text-center">The Value Flow: From Consumer to Creator & Network</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {/* Card 1: Consumer Payment */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 1: Consumer Initiates Payment</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                A user decides to access content (e.g., watch a movie, listen to a song) on a BitCDN-integrated platform and initiates a payment (e.g., $1.00) using their preferred web3 wallet.
              </p>
            </div>

            {/* Card 2: BitCDN Platform Service Fee */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 2: BitCDN Platform Service Fee</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                A small, transparent percentage of this payment (e.g., 1-3%) is allocated as a service fee to the BitCDN platform. This fee supports the ongoing development and operation of the core network.
              </p>
              <p className="text-xs text-gray-600 mt-2"><em>Benefit: Primarily distributed to <strong>$BITCDN</strong> token stakers.</em></p>
            </div>

            {/* Card 3: Infrastructure Compensation */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 3: Infrastructure Compensation (Seeders)</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                From the remaining amount, a portion is paid via direct micropayments (e.g., BSV, stablecoins) to the seeders who delivered the data packets. This compensates their bandwidth and storage.
              </p>
              <p className="text-xs text-gray-600 mt-2"><em>Benefit: Ensures a robust P2P network by rewarding infrastructure providers.</em></p>
            </div>

            {/* Card 4: Content Revenue */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Step 4: Content Revenue (Creators/Rights Holders)</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                The final remaining amount is distributed to the holders of the specific Content Tokens (e.g., $SONG1 FTs) associated with that piece of content, as per its defined revenue share rules.
              </p>
              <p className="text-xs text-gray-600 mt-2"><em>Benefit: Empowers creators with direct and transparent monetization.</em></p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black text-center">Dive Deeper into Token Specifics</h2>          
          <ul className="list-none text-sm space-y-3">
            <li className="bg-white p-3 rounded-md shadow hover:shadow-md transition-shadow">
              <Link href="/bitcdn-token" className="text-blue-600 hover:underline font-medium">
                The $BITCDN Platform Token &rarr;
              </Link>
              <p className="text-xs text-gray-600 mt-1">Explore its role in capital formation, platform fee distribution, governance, and staking.</p>
            </li>
            <li className="bg-white p-3 rounded-md shadow hover:shadow-md transition-shadow">
              <Link href="/content-tokens" className="text-blue-600 hover:underline font-medium">
                Content Tokens (FTs & NFTs) &rarr;
              </Link>
              <p className="text-xs text-gray-600 mt-1">Understand how FTs manage revenue shares and NFTs represent unique access or collectibles.</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
} 