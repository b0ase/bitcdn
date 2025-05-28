import Link from 'next/link';

export default function ValueFlowPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/economics" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Economics Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">The Value Flow: From Consumer to Creator & Network</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-6">
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

        <div className="mt-10 text-center">
          <Link href="/prd" className="text-blue-600 hover:underline font-semibold">
            Next: Product Details &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 