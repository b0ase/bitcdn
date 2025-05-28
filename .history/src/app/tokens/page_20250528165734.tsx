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
            The BitCDN ecosystem utilizes different token types to facilitate its operations, governance, and the representation of content value. Below are links to more detailed information about each token.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>
              <Link href="/bitcdn-token" className="text-blue-600 hover:underline">
                <strong>BitCDN Token:</strong> Learn about the core utility token of the BitCDN network.
              </Link>
            </li>
            <li>
              <Link href="/content-tokens" className="text-blue-600 hover:underline">
                <strong>Content Tokens:</strong> Understand how tokens can represent rights and access to specific content distributed via BitCDN.
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
} 