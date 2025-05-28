import Link from 'next/link';

export default function WhyBitcdnPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/vision" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Our Vision Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">Why Choose BitCDN?</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            BitCDN offers compelling advantages for businesses and developers looking to build or enhance content delivery solutions. Our unique approach translates into tangible benefits:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Decentralized & Resilient</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Inherently resilient with no single point of failure, ensuring higher uptime and data availability, even during high-traffic events or localized outages.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Creator Focused & Empowering</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Empowers content creators and rights holders with direct monetization tools and transparent revenue streams through flexible tokenization models.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cost-Effective & Efficient</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Significantly lowers bandwidth and infrastructure costs by leveraging a global P2P distribution network, reducing reliance on expensive centralized servers.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparent & Auditable</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Utilizes blockchain technology for Content Tokens and (optionally) micropayments, providing verifiable and auditable records for revenue distribution and service provision where appropriate.
              </p>
            </div>
             <div className="md:col-span-2 bg-white p-4 rounded-md shadow mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Future-Proof & Innovative</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Designed to be modular and extensible, allowing integration with emerging web3 technologies and providing a foundation for innovative new content-based applications and services.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link href="/tech" className="text-blue-600 hover:underline font-semibold text-lg">
            Next Section: BitCDN Technology &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 