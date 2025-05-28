import Link from 'next/link';

export default function BitcdnTokenPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center">BitCDN Token</h1>

        <section className="bg-gray-100 p-4 sm:p-5 rounded-lg shadow-xl mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black">About the BitCDN Token</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            This page will detail the utility, tokenomics, and role of the native BitCDN token within the ecosystem.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            (Content under construction)
          </p>
        </section>
      </div>
    </main>
  );
} 