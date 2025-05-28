import Link from 'next/link';

export default function EconomicsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center">BitCDN Economics & Tokenomics</h1>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">Two-Layer Economic Model</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            [Content about Layer 1 (Infrastructure Compensation) and Layer 2 (Content Monetization - Master NFTs, Revenue FTs, Access NFTs), plus details on the $BITCDN Platform Token, and the overall value flow will go here...]
          </p>
        </section>
      </div>
    </main>
  );
} 