import Link from 'next/link';

export default function KeyGoalsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 bg-white text-black">
      <div className="w-full max-w-4xl">
        <Link href="/vision" className="text-blue-600 hover:underline mb-8 inline-block text-sm">
          &larr; Back to Our Vision Overview
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-black text-center">Key Goals & Objectives</h1>

        <section className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-xl mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Our overarching goals for BitCDN revolve around creating a more efficient, resilient, and equitable content delivery ecosystem. These high-level objectives guide our development and strategic decisions.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 leading-relaxed">
            <li>Provide a scalable, decentralized backend infrastructure that commercial CDNs can integrate and that content platforms/startups can leverage to build competitive solutions.</li>
            <li>Enable direct micropayment compensation (e.g., BSV, stablecoins) to node operators for providing bandwidth and storage, based on service provided, fostering a self-sustaining infrastructure layer.</li>
            <li>Facilitate transparent and flexible revenue sharing for content creators and rights holders through on-chain tokenization of content assets.</li>
            <li>Develop robust, enterprise-grade node software for network participants (seeders) and comprehensive, easy-to-use SDKs/APIs for platform integrators.</li>
            <li>Significantly reduce overall content delivery costs for businesses and lower the substantial barrier to entry for new content-rich services, promoting innovation.</li>
            <li>Enhance network resilience and data availability globally by decentralizing storage and distribution.</li>
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link href="/vision/why-bitcdn" className="text-blue-600 hover:underline font-semibold">
            Next: Why Choose BitCDN? &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
} 