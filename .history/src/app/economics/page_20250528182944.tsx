import Link from 'next/link';

export default function EconomicsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-black text-center">
          BitCDN Economics & Tokens
        </h1>

        <p className="text-center text-gray-600 mb-10 text-sm">
          Explore the financial architecture of BitCDN, from how seeders are paid to how content creators monetize their work and the role of the native $BITCDN token.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <Link href="/economics/two-layer-model" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Two-Layer Economic Model</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Understand the foundational separation between infrastructure compensation and content monetization.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/economics/platform-token" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-blue-700">$BITCDN</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Discover the role of our native token in governance, staking, and platform fee distribution.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/economics/content-tokens" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Content Tokens (NFTs & FTs)</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Explore how Master NFTs, Revenue Share FTs, and Access NFTs empower creators.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/economics/value-flow" passHref>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">The Value Flow</h2>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Follow a transaction from consumer payment to distribution across the ecosystem.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link href="/tech/prd/introduction" className="text-blue-600 hover:underline font-semibold text-lg">
            Next: Product Details (PRD) &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}