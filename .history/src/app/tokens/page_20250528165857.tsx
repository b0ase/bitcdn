import Link from 'next/link';

export default function TokensPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center">BitCDN Token Ecosystem</h1>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">Overview</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Welcome to the BitCDN token ecosystem. Here we introduce the core $BITCDN token that powers the network and the innovative concept of Content Tokens, which can represent unique pieces of content, enabling new models for ownership, access, and monetization.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <Link href="/bitcdn-token" className="text-blue-600 hover:underline">
                <strong>$BITCDN Token:</strong> Learn about the primary utility and governance token of the BitCDN network.
              </Link>
            </li>
            <li>
              <Link href="/content-tokens" className="text-blue-600 hover:underline">
                <strong>Content Tokens:</strong> Explore how unique tokens can be associated with individual content pieces, facilitating granular control and value exchange.
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
} 